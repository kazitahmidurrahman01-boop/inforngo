// INFOrNGO Master Application - Multi-View Humanitarian Engine
(function () {
  'use strict';

  // Helper to refresh Lucide icons
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // --- App State ---
  const state = {
    zones: JSON.parse(localStorage.getItem('inforngo_v3_zones')) || window.INFODATA.zones,
    ngos: JSON.parse(localStorage.getItem('inforngo_v3_ngos')) || window.INFODATA.ngos,
    dispatches: JSON.parse(localStorage.getItem('inforngo_v3_dispatches')) || [
      { id: 'd-1', ngoName: 'ব্র্যাক হিউম্যানিটারিয়ান এইড (BRAC)', zoneName: 'খুলনা নিরালা', items: '৮০০ খাবার প্যাকেট + ৩০০ গ্যালন পানি', vehicle: 'ট্রাক-খুলনা-১২', status: 'Delivered', time: 'আজ দুপুর ১২:০০' },
      { id: 'd-2', ngoName: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', zoneName: 'খুলনা নিরালা', items: '১২০০ খাবার প্যাকেট + ৫০০ গ্যালন পানি', vehicle: 'ট্রাক-ঢাকা-৪৪', status: 'Delivered', time: 'আজ দুপুর ০১:১৫' },
      { id: 'd-3', ngoName: 'মাস্তুল ফাউন্ডেশন (Mastul)', zoneName: 'খুলনা ময়লাপোতা', items: '২৫০ খাবার প্যাকেট + ১০০ গ্যালন পানি', vehicle: 'বোট-০২ (মাস্তুল)', status: 'In Transit', time: 'আজ দুপুর ০২:৩০' },
      { id: 'd-4', ngoName: 'বিদ্যানন্দ ফাউন্ডেশন (Bidyanondo)', zoneName: 'নোয়াখালী বেগমগঞ্জ', items: '৫০০ খাবার প্যাকেট + ৪০০ গ্যালন পানি', vehicle: 'ট্রাক-নোয়া-০৫', status: 'Delivered', time: 'আজ সকাল ১০:৪৫' },
      { id: 'd-5', ngoName: 'আল-খিদমত ডিজাস্টার সেল', zoneName: 'নোয়াখালী বেগমগঞ্জ', items: '২০০ খাবার প্যাকেট + ৫০ শিশুখাদ্য', vehicle: 'পিকআপ-০১', status: 'In Transit', time: 'আজ দুপুর ০১:৪৫' },
      { id: 'd-6', ngoName: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', zoneName: 'চট্টগ্রাম ফটিকছড়ি', items: '৬০০ খাবার প্যাকেট + ৩৫০ গ্যালন পানি', vehicle: 'ট্রাক-চট্টগ্রাম-০৮', status: 'Delivered', time: 'আজ সকাল ১১:২০' }
    ],
    currentFilter: 'all',
    searchQuery: '',
    activeTab: 'booking'
  };

  function saveState() {
    localStorage.setItem('inforngo_v3_zones', JSON.stringify(state.zones));
    localStorage.setItem('inforngo_v3_ngos', JSON.stringify(state.ngos));
    localStorage.setItem('inforngo_v3_dispatches', JSON.stringify(state.dispatches));
  }

  // --- Tab Navigation Switcher ---
  window.switchTab = function (tabId) {
    state.activeTab = tabId;

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(p => p.classList.add('hidden'));

    // Show target view panel
    const targetPanel = document.getElementById(`view-${tabId}`);
    if (targetPanel) targetPanel.classList.remove('hidden');

    // Update Nav Tab Buttons
    const navButtons = {
      booking: document.getElementById('tab-nav-booking'),
      post: document.getElementById('tab-nav-post'),
      register: document.getElementById('tab-nav-register'),
      dispatch: document.getElementById('tab-nav-dispatch'),
      directory: document.getElementById('tab-nav-directory')
    };

    Object.keys(navButtons).forEach(k => {
      const btn = navButtons[k];
      if (!btn) return;
      if (k === tabId) {
        btn.className = 'nav-tab-btn px-4 py-2 rounded-lg transition flex items-center gap-1.5 bg-sky-600 text-white shadow-xs font-bold';
      } else {
        btn.className = 'nav-tab-btn px-4 py-2 rounded-lg transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-bold';
      }
    });

    // Special View Refreshes
    if (tabId === 'booking') {
      renderZones();
      updateTopStats();
    } else if (tabId === 'dispatch') {
      renderDispatchList();
    } else if (tabId === 'directory') {
      renderNgoDirectory();
    }

    refreshIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Calculation Helpers ---
  function getZoneOverallPct(zone) {
    let total = 0;
    let booked = 0;
    Object.keys(zone.demands).forEach(k => {
      const d = zone.demands[k];
      total += d.total;
      booked += Math.min(d.booked, d.total);
    });
    return total > 0 ? Math.round((booked / total) * 100) : 0;
  }

  function isZoneFullyCompleted(zone) {
    return getZoneOverallPct(zone) >= 100;
  }

  // --- Multi-Segment Need Progression Bar Renderer ---
  function renderNeedBar(zoneId, key, demand) {
    const total = demand.total;
    const booked = Math.min(demand.booked, total);
    const pct = total > 0 ? Math.round((booked / total) * 100) : 0;
    const remaining = Math.max(0, total - booked);

    // Pick icon by demand type
    let iconName = 'package';
    if (key === 'water') iconName = 'droplet';
    else if (key === 'medical') iconName = 'pill';
    else if (key === 'babyFood') iconName = 'baby';

    let segmentsHtml = '';
    demand.bookings.forEach(b => {
      const segWidth = ((b.amount / total) * 100).toFixed(1);
      segmentsHtml += `
        <div class="need-bar-fill group relative" 
             style="width: ${segWidth}%; background-color: ${b.color || '#0284C7'};"
             title="${b.ngoName}: ${b.amount.toLocaleString()} ${demand.unit} (${segWidth}%)">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10.5px] font-medium px-2 py-0.5 rounded shadow-sm pointer-events-none whitespace-nowrap z-20">
            ${b.ngoName}: ${b.amount.toLocaleString()} ${demand.unit}
          </div>
        </div>
      `;
    });

    if (remaining > 0) {
      const remWidth = ((remaining / total) * 100).toFixed(1);
      segmentsHtml += `<div class="h-full bg-slate-100" style="width: ${remWidth}%;"></div>`;
    }

    return `
      <div class="mb-3.5 last:mb-0">
        <div class="flex justify-between items-center text-xs mb-1.5">
          <span class="font-semibold text-slate-700 flex items-center gap-1.5">
            <i data-lucide="${iconName}" class="w-3.5 h-3.5 text-slate-500"></i>
            <span>${demand.name}</span>
          </span>
          <span class="font-num font-bold ${pct >= 100 ? 'text-emerald-700' : pct < 30 ? 'text-rose-700' : 'text-amber-700'}">
            ${booked.toLocaleString()} / ${total.toLocaleString()} ${demand.unit} (${pct}%)
          </span>
        </div>
        
        <div class="need-bar-bg">
          ${segmentsHtml}
        </div>

        <div class="flex justify-between items-center text-[11px] mt-1 text-slate-500">
          <span>${
            pct >= 100 
              ? `<span class="inline-flex items-center gap-1 text-emerald-700 font-semibold"><i data-lucide="check" class="w-3 h-3"></i> এই আইটেমটির বুকিং শতভাগ পূর্ণ</span>` 
              : `<span class="inline-flex items-center gap-1 text-rose-600 font-semibold"><i data-lucide="alert-circle" class="w-3 h-3"></i> বাকি প্রয়োজন: ${remaining.toLocaleString()} ${demand.unit}</span>`
          }</span>
          <span class="text-[10.5px] text-slate-500">${demand.bookings.length > 0 ? demand.bookings.map(b => b.ngoName.split(' ')[0]).join(', ') : 'কেউ এখনো বুক করেনি'}</span>
        </div>
      </div>
    `;
  }

  // --- Render Zone Cards in Booking View ---
  function renderZones() {
    const container = document.getElementById('zones-list-container');
    if (!container) return;

    let filtered = state.zones.filter(z => {
      const pct = getZoneOverallPct(z);
      const isComplete = pct >= 100;

      if (state.currentFilter === 'critical' && (pct >= 30 || isComplete)) return false;
      if (state.currentFilter === 'partial' && (pct < 30 || isComplete)) return false;
      if (state.currentFilter === 'completed' && !isComplete) return false;

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        return z.name.toLowerCase().includes(q) || z.district.toLowerCase().includes(q);
      }
      return true;
    });

    // Sort: Incomplete critical first, completed last!
    filtered.sort((a, b) => {
      const aDone = isZoneFullyCompleted(a) ? 1 : 0;
      const bDone = isZoneFullyCompleted(b) ? 1 : 0;
      if (aDone !== bDone) return aDone - bDone;
      return getZoneOverallPct(a) - getZoneOverallPct(b);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8 mx-auto text-slate-300 mb-2"></i>
          <p class="text-sm font-medium text-slate-600">কোনো সংকট এলাকা পাওয়া যায়নি</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    container.innerHTML = filtered.map(zone => {
      const pct = getZoneOverallPct(zone);
      const isComplete = pct >= 100;

      return `
        <div class="ngo-card p-5 sm:p-6 relative ${isComplete ? 'bg-slate-50/70 border-emerald-300' : ''}">
          
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">${zone.name}</h3>
                <span class="text-xs px-2 py-0.5 rounded-md font-semibold bg-slate-100 text-slate-700 border border-slate-200 inline-flex items-center gap-1">
                  <i data-lucide="map-pin" class="w-3 h-3 text-slate-500"></i>
                  <span>${zone.district}</span>
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-1">
                মাঠের তথ্যদাতা: <strong class="text-slate-700">${zone.reportedBy}</strong> (${zone.reportTime})
              </p>
            </div>

            <div>
              ${isComplete ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-700"></i>
                  <span>১০০% বুকিং সম্পন্ন • সুরক্ষিত</span>
                </span>
              ` : pct < 30 ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-rose-700"></i>
                  <span>জরুরি অগ্রাধিকার (মাত্র ${pct}% বুকড)</span>
                </span>
              ` : `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-700"></i>
                  <span>আংশিক বুকড (${pct}% সম্পন্ন)</span>
                </span>
              `}
            </div>
          </div>

          <!-- Completed Banner or Situation Details -->
          ${isComplete ? `
            <div class="completed-banner rounded-xl p-3.5 mb-4 text-xs font-medium flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <i data-lucide="shield-check" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                <span>এই এলাকায় খাদ্য, পানি ও প্রয়োজনীয় ওষুধের শতভাগ বুকিং সম্পন্ন হয়েছে। <strong>আপাতত এখানে নতুন ত্রাণের গাড়ি না পাঠিয়ে অন্য সংকট এলাকায় অগ্রাধিকার দিন।</strong></span>
              </div>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div class="flex items-center gap-1.5">
                <i data-lucide="users" class="w-3.5 h-3.5 text-slate-400"></i>
                <span class="text-slate-500">ক্ষতিগ্রস্ত পরিবার:</span>
                <strong class="text-slate-800 font-num ml-1">${zone.families.toLocaleString()} পরিবার (${zone.people.toLocaleString()} জন)</strong>
              </div>
              <div class="flex items-center gap-1.5">
                <i data-lucide="waves" class="w-3.5 h-3.5 text-sky-500"></i>
                <span class="text-slate-500">পানির পরিস্থিতি:</span>
                <strong class="text-slate-800 ml-1">${zone.waterLevel}</strong>
              </div>
            </div>
          `}

          <!-- Need Progression Bars -->
          <div class="mb-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              চাহিদা ও বুকিং প্রগ্রেসবার (Need Progressions)
            </h4>
            ${renderNeedBar(zone.id, 'food', zone.demands.food)}
            ${renderNeedBar(zone.id, 'water', zone.demands.water)}
            ${renderNeedBar(zone.id, 'medical', zone.demands.medical)}
            ${renderNeedBar(zone.id, 'babyFood', zone.demands.babyFood)}
          </div>

          <!-- Action Footer -->
          <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div class="text-xs text-slate-500">
              সামগ্রিক বুকিং সম্পন্ন: <strong class="text-slate-800 font-num font-bold">${pct}%</strong>
            </div>

            <div>
              ${isComplete ? `
                <button disabled class="py-2 px-4 bg-slate-100 text-slate-400 font-semibold rounded-lg text-xs cursor-not-allowed flex items-center gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i>
                  <span>বুকিং কোটা পূর্ণ</span>
                </button>
              ` : `
                <button onclick="window.openBookingModal('${zone.id}')" 
                        class="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-xs shadow-xs transition flex items-center gap-1.5">
                  <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                  <span>এই এলাকার জন্য ত্রাণ বুক করুন</span>
                </button>
              `}
            </div>
          </div>

        </div>
      `;
    }).join('');

    refreshIcons();
  }

  // --- Top Summary Stats ---
  function updateTopStats() {
    const totalZones = state.zones.length;
    let completedZones = 0;
    let criticalZones = 0;
    let totalFoodNeeded = 0;
    let totalFoodBooked = 0;

    state.zones.forEach(z => {
      if (isZoneFullyCompleted(z)) completedZones++;
      else if (getZoneOverallPct(z) < 30) criticalZones++;

      totalFoodNeeded += z.demands.food.total;
      totalFoodBooked += z.demands.food.booked;
    });

    const elTotal = document.getElementById('stat-total-zones');
    const elCrit = document.getElementById('stat-critical-zones');
    const elDone = document.getElementById('stat-completed-zones');
    const elFood = document.getElementById('stat-food-booked');

    if (elTotal) elTotal.innerText = totalZones;
    if (elCrit) elCrit.innerText = criticalZones;
    if (elDone) elDone.innerText = completedZones;
    if (elFood) elFood.innerText = totalFoodBooked.toLocaleString() + ' / ' + totalFoodNeeded.toLocaleString();

    // Mini badges in header
    const headCrit = document.getElementById('header-critical-count');
    const headDone = document.getElementById('header-completed-count');
    if (headCrit) headCrit.innerText = criticalZones;
    if (headDone) headDone.innerText = completedZones;
  }

  // --- Booking Modal (ত্রাণ বুকিং) ---
  window.openBookingModal = function (zoneId) {
    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    document.getElementById('book-zone-id').value = zone.id;
    document.getElementById('book-zone-name').innerText = zone.name;
    document.getElementById('book-zone-info').innerText = `${zone.district} • ${zone.families} টি পরিবার`;

    // Populate NGO select from state.ngos
    const ngoSelect = document.getElementById('book-ngo-select');
    ngoSelect.innerHTML = state.ngos.map(n => `
      <option value="${n.name}">${n.name}</option>
    `).join('') + `<option value="other">+ নতুন সংস্থা / স্বতন্ত্র ডোনার</option>`;

    // Categories
    const catSelect = document.getElementById('book-category-select');
    catSelect.innerHTML = Object.keys(zone.demands).map(k => {
      const d = zone.demands[k];
      const remaining = Math.max(0, d.total - d.booked);
      return `<option value="${k}">${d.name} (বাকি প্রয়োজন: ${remaining.toLocaleString()} ${d.unit})</option>`;
    }).join('');

    const modal = document.getElementById('booking-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    refreshIcons();
  };

  window.closeBookingModal = function () {
    const modal = document.getElementById('booking-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.submitBooking = function (e) {
    e.preventDefault();
    const zoneId = document.getElementById('book-zone-id').value;
    let ngoName = document.getElementById('book-ngo-select').value;
    if (ngoName === 'other') {
      ngoName = document.getElementById('book-custom-ngo').value.trim() || 'স্বতন্ত্র ডোনার টিম';
    }
    const category = document.getElementById('book-category-select').value;
    const amount = parseInt(document.getElementById('book-amount-input').value, 10);
    const convoyNote = document.getElementById('book-convoy-input').value.trim() || 'ত্রাণবাহী পিকআপ-০১';

    if (!amount || amount <= 0) {
      alert('অনুগ্রহ করে সঠিক পরিমাণ লিখুন!');
      return;
    }

    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    const demand = zone.demands[category];
    demand.booked = Math.min(demand.total, demand.booked + amount);
    
    // Add booking entry
    const colors = ['#0284C7', '#059669', '#DC2626', '#D97706', '#7C3AED', '#0D9488'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    demand.bookings.push({
      ngoName: ngoName,
      amount: amount,
      time: 'এইমাত্র',
      color: randomColor,
      status: 'In Transit',
      convoyNo: convoyNote
    });

    // Also add to global dispatches ledger!
    state.dispatches.unshift({
      id: 'd-' + Date.now(),
      ngoName: ngoName,
      zoneName: zone.name,
      items: `${amount.toLocaleString()} ${demand.unit} (${demand.name.split('(')[0]})`,
      vehicle: convoyNote,
      status: 'In Transit',
      time: 'এইমাত্র'
    });

    saveState();
    renderZones();
    updateTopStats();
    closeBookingModal();

    const isNowComplete = isZoneFullyCompleted(zone);
    if (isNowComplete) {
      alert(`🎉 চমৎকার! '${zone.name}' এলাকায় সকল চাহিদা শতভাগ বুকিং সম্পন্ন হয়েছে! এলাকাটি এখন সম্পূর্ণ সুরক্ষিত।`);
    } else {
      alert(`✅ সফলভাবে বুক করা হয়েছে! ${ngoName} এই এলাকার জন্য ${amount.toLocaleString()} ${demand.unit} বুক করেছে।`);
    }
  };

  // --- View 2: Post Needs Form (Scout) ---
  window.submitScoutPost = function (e) {
    e.preventDefault();
    const areaName = document.getElementById('scout-area-name').value.trim();
    const district = document.getElementById('scout-district').value;
    const upazila = document.getElementById('scout-upazila').value.trim() || 'সদর';
    const families = parseInt(document.getElementById('scout-families').value, 10) || 500;
    const waterDepth = document.getElementById('scout-water-depth').value.trim();
    const scoutOrg = document.getElementById('scout-org-name').value.trim() || 'স্থানীয় ভলান্টিয়ার টিম';

    const foodQty = parseInt(document.getElementById('scout-food-qty').value, 10) || 1000;
    const waterQty = parseInt(document.getElementById('scout-water-qty').value, 10) || 500;
    const medicalQty = parseInt(document.getElementById('scout-medical-qty').value, 10) || 200;
    const babyQty = parseInt(document.getElementById('scout-baby-qty').value, 10) || 150;

    const newZone = {
      id: 'zone-' + Date.now(),
      name: areaName,
      district: district,
      upazila: upazila,
      reportedBy: scoutOrg,
      reportTime: 'এইমাত্র',
      families: families,
      people: Math.round(families * 4.5),
      waterLevel: waterDepth,
      demands: {
        food: { name: 'শুকনো খাদ্য (প্যাকেট)', total: foodQty, booked: 0, unit: 'প্যাকেট', bookings: [] },
        water: { name: 'খাবার পানি (গ্যালন)', total: waterQty, booked: 0, unit: 'গ্যালন', bookings: [] },
        medical: { name: 'স্যালাইন ও জরুরি ওষুধ (কিট)', total: medicalQty, booked: 0, unit: 'কিট', bookings: [] },
        babyFood: { name: 'শিশু খাদ্য ও দুধ (প্যাক)', total: babyQty, booked: 0, unit: 'প্যাক', bookings: [] }
      }
    };

    state.zones.unshift(newZone);
    saveState();
    e.target.reset();

    alert(`📢 নতুন ক্রাইসিস এলাকা সফলভাবে যুক্ত হয়েছে! '${areaName}' এলাকার ০% নিডবার তৈরি হয়েছে। আপনাকে বুকিং ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে।`);
    window.switchTab('booking');
  };

  // --- View 3: New NGO Registration ---
  window.submitNgoRegistration = function (e) {
    e.preventDefault();
    const name = document.getElementById('reg-ngo-name').value.trim();
    const short = document.getElementById('reg-ngo-short').value.trim();
    const regNo = document.getElementById('reg-ngo-num').value.trim() || 'VERIF-PENDING';
    const contact = document.getElementById('reg-ngo-contact').value.trim();
    const hq = document.getElementById('reg-ngo-hq').value.trim();
    const focus = document.getElementById('reg-ngo-focus').value.trim() || 'খাদ্য ও পানি সরবরাহ';
    const capacity = document.getElementById('reg-ngo-capacity').value.trim() || '১টি ত্রাণ কনভয়';

    const colors = ['#0284C7', '#059669', '#DC2626', '#D97706', '#7C3AED', '#0D9488', '#2563EB'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newNgo = {
      id: 'ngo-' + Date.now(),
      name: name,
      short: short,
      color: randomColor,
      regNo: regNo,
      contact: contact,
      headquarters: hq,
      capacity: capacity,
      focus: focus,
      totalDispatched: 0,
      verified: true
    };

    state.ngos.unshift(newNgo);
    saveState();
    e.target.reset();

    alert(`🎉 স্বাগতম! '${name}' সফলভাবে ডোনার এনজিও হিসেবে নিবন্ধিত হয়েছে। এখন আপনি সরাসরি বুকিং তালিকায় এই এনজিওর নামে ত্রাণ বরাদ্দ করতে পারবেন।`);
    window.switchTab('booking');
  };

  // --- View 4: Dispatch Management & Pass ---
  function renderDispatchList() {
    const tbody = document.getElementById('dispatch-table-body');
    const filterSelect = document.getElementById('dispatch-ngo-filter');
    if (!tbody) return;

    if (filterSelect && filterSelect.options.length <= 1) {
      filterSelect.innerHTML = `<option value="all">সকল এনজিওর চালান</option>` + state.ngos.map(n => `
        <option value="${n.name}">${n.name}</option>
      `).join('');
    }

    const currentFilter = filterSelect ? filterSelect.value : 'all';
    let list = state.dispatches;
    if (currentFilter !== 'all') {
      list = list.filter(d => d.ngoName === currentFilter);
    }

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-slate-400">কোনো চালান পাওয়া যায়নি</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(d => `
      <tr class="hover:bg-slate-50 transition">
        <td class="py-3 px-3 font-bold text-slate-900">${d.ngoName}</td>
        <td class="py-3 px-3 text-sky-700 font-semibold">${d.zoneName}</td>
        <td class="py-3 px-3 text-slate-700 font-medium">${d.items}</td>
        <td class="py-3 px-3 text-slate-500">${d.vehicle}</td>
        <td class="py-3 px-3">
          <select onchange="window.updateDispatchStatus('${d.id}', this.value)" class="text-[11px] font-bold py-1 px-2 rounded-md border ${
            d.status === 'Delivered' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-300'
          }">
            <option value="In Transit" ${d.status === 'In Transit' ? 'selected' : ''}>রাস্তায় আছে (In Transit)</option>
            <option value="Delivered" ${d.status === 'Delivered' ? 'selected' : ''}>বিতরণ সম্পন্ন (Delivered)</option>
          </select>
        </td>
        <td class="py-3 px-3 text-right">
          <button onclick="window.openPassModal('${d.id}')" class="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded text-[11px] border border-slate-300 transition inline-flex items-center gap-1">
            <i data-lucide="file-text" class="w-3 h-3 text-slate-600"></i>
            <span>ছাড়পত্র স্লিপ</span>
          </button>
        </td>
      </tr>
    `).join('');

    refreshIcons();
  }

  window.filterDispatchList = function () {
    renderDispatchList();
  };

  window.updateDispatchStatus = function (id, newStatus) {
    const item = state.dispatches.find(d => d.id === id);
    if (item) {
      item.status = newStatus;
      saveState();
      renderDispatchList();
    }
  };

  // --- Digital Relief Pass Modal ---
  window.openPassModal = function (dispatchId) {
    const item = state.dispatches.find(d => d.id === dispatchId);
    if (!item) return;

    const content = document.getElementById('pass-modal-content');
    content.innerHTML = `
      <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <div class="flex justify-between border-b border-slate-200 pb-2">
          <span class="text-slate-500">অনুমোদিত সংস্থা / এনজিও:</span>
          <strong class="text-slate-900">${item.ngoName}</strong>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-2">
          <span class="text-slate-500">গন্তব্য ক্রাইসিস জোন:</span>
          <strong class="text-sky-700">${item.zoneName}</strong>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-2">
          <span class="text-slate-500">অনুমোদিত ত্রাণ সামগ্রী:</span>
          <strong class="text-slate-900 font-num">${item.items}</strong>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-2">
          <span class="text-slate-500">কনভয় / গাড়ির নম্বর:</span>
          <strong class="text-slate-800">${item.vehicle}</strong>
        </div>
        <div class="flex justify-between pt-1">
          <span class="text-slate-500">চালানের বর্তমান স্ট্যাটাস:</span>
          <strong class="${item.status === 'Delivered' ? 'text-emerald-700' : 'text-amber-700'} font-bold flex items-center gap-1">
            <i data-lucide="${item.status === 'Delivered' ? 'check-circle-2' : 'truck'}" class="w-3.5 h-3.5"></i>
            <span>${item.status === 'Delivered' ? 'বিতরণ সফলভাবে সম্পন্ন' : 'রাস্তায় চলমান (জরুরি কনভয়)'}</span>
          </strong>
        </div>
      </div>
      <p class="text-[11px] text-slate-400 italic text-center">হাইওয়ে চেকপোস্ট, পুলিশ বা নৌবাহিনীর সদস্যদের এই গাড়ির গমনাগমনে পূর্ণ মানবিক সহযোগিতা প্রদানের অনুরোধ করা যাচ্ছে।</p>
    `;

    const m = document.getElementById('pass-modal');
    m.classList.remove('hidden');
    m.classList.add('flex');
    refreshIcons();
  };

  window.closePassModal = function () {
    const m = document.getElementById('pass-modal');
    if (m) {
      m.classList.add('hidden');
      m.classList.remove('flex');
    }
  };

  // --- View 5: NGO Directory Grid ---
  function renderNgoDirectory() {
    const grid = document.getElementById('ngo-directory-grid');
    if (!grid) return;

    grid.innerHTML = state.ngos.map(n => `
      <div class="ngo-card p-4 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-sm text-slate-900">${n.name}</h4>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold bg-sky-50 text-sky-700 border border-sky-200 inline-flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3 h-3 text-sky-600"></i>
              <span>ভেরিফাইড</span>
            </span>
          </div>
          <p class="text-xs text-slate-500 mb-2">নিবন্ধন নম্বর: <span class="font-num font-semibold text-slate-700">${n.regNo || 'N/A'}</span></p>
          <div class="text-xs text-slate-600 mb-1">
            <strong>হেডকোয়ার্টার:</strong> ${n.headquarters || 'ঢাকা'}
          </div>
          <div class="text-xs text-slate-600 mb-2">
            <strong>লজিস্টিকস:</strong> ${n.capacity || 'জরুরি ত্রাণ বহর'}
          </div>
          <div class="text-xs text-slate-500">
            <strong>যোগাযোগ:</strong> ${n.contact || 'হটলাইন উপলব্ধ'}
          </div>
        </div>

        <div class="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500">মোট বিতরণকৃত ত্রাণ:</span>
          <span class="font-num font-bold text-sky-700">${n.totalDispatched ? n.totalDispatched.toLocaleString() + ' প্যাকেট' : 'সক্রিয় পার্টনার'}</span>
        </div>
      </div>
    `).join('');

    refreshIcons();
  }

  // --- Filter and Search Controls ---
  function initControls() {
    const tabs = document.querySelectorAll('.filter-btn');
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => {
          b.classList.remove('bg-sky-600', 'text-white', 'font-bold');
          b.classList.add('bg-white', 'text-slate-600');
        });
        btn.classList.add('bg-sky-600', 'text-white', 'font-bold');
        btn.classList.remove('bg-white', 'text-slate-600');

        state.currentFilter = btn.dataset.filter;
        renderZones();
      });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderZones();
      });
    }

    const ngoSelect = document.getElementById('book-ngo-select');
    if (ngoSelect) {
      ngoSelect.addEventListener('change', e => {
        const customInput = document.getElementById('book-custom-ngo-container');
        if (customInput) {
          if (e.target.value === 'other') customInput.classList.remove('hidden');
          else customInput.classList.add('hidden');
        }
      });
    }
  }

  // --- Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    renderZones();
    updateTopStats();
    initControls();
    refreshIcons();
  });

})();
