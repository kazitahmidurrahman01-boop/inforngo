// INFOrNGO Core Engine - Clean Humanitarian Platform
(function () {
  'use strict';

  // --- App State ---
  const state = {
    zones: JSON.parse(localStorage.getItem('inforngo_clean_zones')) || window.INFODATA.zones,
    ngos: window.INFODATA.ngos,
    currentFilter: 'all',
    searchQuery: '',
    activeTab: 'donor' // 'donor' or 'scout'
  };

  function saveState() {
    localStorage.setItem('inforngo_clean_zones', JSON.stringify(state.zones));
  }

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

    // Build segments
    let segmentsHtml = '';
    demand.bookings.forEach(b => {
      const segWidth = ((b.amount / total) * 100).toFixed(1);
      segmentsHtml += `
        <div class="need-bar-fill group relative" 
             style="width: ${segWidth}%; background-color: ${b.color || '#0284C7'};"
             title="${b.ngoName}: ${b.amount.toLocaleString()} ${demand.unit} (${segWidth}%)">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10.5px] font-medium px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
            ${b.ngoName}: ${b.amount.toLocaleString()} ${demand.unit}
          </div>
        </div>
      `;
    });

    // Shortage segment
    if (remaining > 0) {
      const remWidth = ((remaining / total) * 100).toFixed(1);
      segmentsHtml += `<div class="h-full bg-slate-100" style="width: ${remWidth}%;"></div>`;
    }

    return `
      <div class="mb-3.5 last:mb-0">
        <div class="flex justify-between items-center text-xs mb-1.5">
          <span class="font-semibold text-slate-700">${demand.name}</span>
          <span class="font-num font-bold ${pct >= 100 ? 'text-emerald-700' : pct < 30 ? 'text-rose-700' : 'text-amber-700'}">
            ${booked.toLocaleString()} / ${total.toLocaleString()} ${demand.unit} (${pct}%)
          </span>
        </div>
        
        <div class="need-bar-bg">
          ${segmentsHtml}
        </div>

        <div class="flex justify-between items-center text-[11px] mt-1 text-slate-500">
          <span>${pct >= 100 ? '✅ এই আইটেমটির বুকিং শতভাগ পূর্ণ' : `<strong class="text-rose-600 font-medium">⚠️ বাকি ঘাটতি: ${remaining.toLocaleString()} ${demand.unit}</strong>`}</span>
          <span class="text-[10.5px]">${demand.bookings.length > 0 ? demand.bookings.map(b => b.ngoName.split(' ')[0]).join(', ') : 'কেউ এখনো বুক করেনি'}</span>
        </div>
      </div>
    `;
  }

  // --- Render Zone Cards in Segment 2 ---
  function renderZones() {
    const container = document.getElementById('zones-list-container');
    if (!container) return;

    // Filter zones
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
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm font-medium text-slate-600">কোনো ক্রাইসিস এলাকা পাওয়া যায়নি</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(zone => {
      const pct = getZoneOverallPct(zone);
      const isComplete = pct >= 100;

      return `
        <div class="ngo-card p-5 sm:p-6 mb-5 relative ${isComplete ? 'bg-slate-50/60 border-emerald-300' : ''}">
          
          <!-- Card Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">${zone.name}</h3>
                <span class="text-xs px-2 py-0.5 rounded-md font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  📍 ${zone.district}
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-1">
                রিপোর্টকারী: <strong class="text-slate-700">${zone.reportedBy}</strong> (${zone.reportTime})
              </p>
            </div>

            <!-- Status Badge -->
            <div>
              ${isComplete ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  ✅ ১০০% বুকিং সম্পন্ন • সুরক্ষিত
                </span>
              ` : pct < 30 ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                  🚨 জরুরি অগ্রাধিকার (মাত্র ${pct}% বুকড)
                </span>
              ` : `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  🟡 আংশিক বুকড (${pct}% সম্পন্ন)
                </span>
              `}
            </div>
          </div>

          <!-- Situation Banner if completed -->
          ${isComplete ? `
            <div class="completed-banner rounded-xl p-3.5 mb-4 text-xs font-medium flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-lg">🎉</span>
                <span>এই এলাকায় খাদ্য, পানি ও প্রয়োজনীয় ওষুধের শতভাগ বুকিং সম্পন্ন হয়েছে। <strong>আপাতত এখানে নতুন ত্রাণের গাড়ি না পাঠিয়ে অন্য সংকট এলাকায় অগ্রাধিকার দিন।</strong></span>
              </div>
            </div>
          ` : `
            <!-- Ground Details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div>
                <span class="text-slate-500">ক্ষতিগ্রস্ত পরিবার:</span>
                <strong class="text-slate-800 font-num ml-1">${zone.families.toLocaleString()} পরিবার (${zone.people.toLocaleString()} জন)</strong>
              </div>
              <div>
                <span class="text-slate-500">পানির পরিস্থিতি:</span>
                <strong class="text-slate-800 ml-1">${zone.waterLevel}</strong>
              </div>
            </div>
          `}

          <!-- Need Progression Bars Section -->
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
                <button disabled class="py-2 px-4 bg-slate-100 text-slate-400 font-semibold rounded-lg text-xs cursor-not-allowed">
                  ✓ বুকিং কোটা পূর্ণ
                </button>
              ` : `
                <button onclick="window.openBookingModal('${zone.id}')" 
                        class="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-xs shadow-sm transition flex items-center gap-1.5">
                  <span>+</span>
                  <span>এই এলাকার জন্য ত্রাণ বুক করুন</span>
                </button>
              `}
            </div>
          </div>

        </div>
      `;
    }).join('');
  }

  // --- Top Summary Stats ---
  function updateStats() {
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

    document.getElementById('stat-total-zones').innerText = totalZones;
    document.getElementById('stat-critical-zones').innerText = criticalZones;
    document.getElementById('stat-completed-zones').innerText = completedZones;
    document.getElementById('stat-food-booked').innerText = totalFoodBooked.toLocaleString() + ' / ' + totalFoodNeeded.toLocaleString();
  }

  // --- Booking Modal (ত্রাণ বুকিং) ---
  window.openBookingModal = function (zoneId) {
    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    document.getElementById('book-zone-id').value = zone.id;
    document.getElementById('book-zone-name').innerText = zone.name;
    document.getElementById('book-zone-info').innerText = `${zone.district} • ${zone.families} টি পরিবার`;

    // Populate NGO select
    const ngoSelect = document.getElementById('book-ngo-select');
    ngoSelect.innerHTML = state.ngos.map(n => `
      <option value="${n.name}">${n.name}</option>
    `).join('') + `<option value="other">+ অন্য কোনো এনজিও / ব্যক্তিগত সংস্থা</option>`;

    // Category options with remaining amounts
    updateBookingCategoryHints(zone);

    const modal = document.getElementById('booking-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  function updateBookingCategoryHints(zone) {
    const catSelect = document.getElementById('book-category-select');
    catSelect.innerHTML = Object.keys(zone.demands).map(k => {
      const d = zone.demands[k];
      const remaining = Math.max(0, d.total - d.booked);
      return `<option value="${k}">${d.name} (বাকি প্রয়োজন: ${remaining.toLocaleString()} ${d.unit})</option>`;
    }).join('');
  }

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

    if (!amount || amount <= 0) {
      alert('অনুগ্রহ করে সঠিক পরিমাণ লিখুন!');
      return;
    }

    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    const demand = zone.demands[category];
    const prevBooked = demand.booked;
    demand.booked = Math.min(demand.total, demand.booked + amount);
    
    // Add booking entry
    const colors = ['#0284C7', '#059669', '#DC2626', '#D97706', '#7C3AED', '#0D9488'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    demand.bookings.push({
      ngoName: ngoName,
      amount: amount,
      time: 'এইমাত্র',
      color: randomColor
    });

    saveState();
    renderZones();
    updateStats();
    closeBookingModal();

    const isNowComplete = isZoneFullyCompleted(zone);
    if (isNowComplete) {
      alert(`🎉 চমৎকার! '${zone.name}' এলাকায় সকল চাহিদা শতভাগ বুকিং সম্পন্ন হয়েছে! এলাকাটি এখন সম্পূর্ণ সুরক্ষিত।`);
    } else {
      alert(`✅ সফলভাবে বুক করা হয়েছে! ${ngoName} এই এলাকার জন্য ${amount.toLocaleString()} ${demand.unit} বুক করেছে।`);
    }
  };

  // --- Segment 1: Grassroots Scout Post Form ---
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
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: foodQty,
          booked: 0,
          unit: 'প্যাকেট',
          bookings: []
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: waterQty,
          booked: 0,
          unit: 'গ্যালন',
          bookings: []
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: medicalQty,
          booked: 0,
          unit: 'কিট',
          bookings: []
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: babyQty,
          booked: 0,
          unit: 'প্যাক',
          bookings: []
        }
      }
    };

    state.zones.unshift(newZone);
    saveState();
    renderZones();
    updateStats();

    // Reset Form
    e.target.reset();

    // Show feedback & switch to donor view
    alert(`📢 নতুন ক্রাইসিস রিপোর্ট যোগ হয়েছে! '${areaName}' এলাকার জন্য ০% নিডবার তৈরি করা হয়েছে। ডোনার এনজিওরা এখন এটি সরাসরি বুক করতে পারবে।`);
    
    // Scroll to zones
    document.getElementById('zones-section').scrollIntoView({ behavior: 'smooth' });
  };

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
    updateStats();
    initControls();
  });

})();
