// INFOrNGO Master Application - Advanced Humanitarian Engine & Bilingual System
(function () {
  'use strict';

  // --- Bilingual Translation Dictionary ---
  const translations = {
    bn: {
      badge_grid: 'লাইভ গ্রিড',
      tagline: 'দুর্যোগে প্রতিটি এলাকায় সুষম ত্রাণ বণ্টন ও সমন্বিত নিড-ট্র্যাকার',
      critical_zones_badge: 'টি চরম সংকট',
      secured_zones_badge: 'টি সম্পন্ন জোন',
      nav_booking: 'ত্রাণ বুকিং ড্যাশবোর্ড',
      nav_post: 'চাহিদা পোস্ট (গ্রাউন্ড এনজিও)',
      nav_gis: 'প্লাবন ম্যাপ ও এআই প্রেডিক্টর',
      nav_dispatch: 'কনভয় ট্র্যাকার ও ছাড়পত্র',
      nav_register: 'এনজিও রেজিস্ট্রেশন',
      nav_directory: 'পার্টনার এনজিও ডিরেক্টরি',
      stat_total_zones: 'মোট সংকট এলাকা',
      stat_critical_zones: 'জরুরি অগ্রাধিকার (০-৩০%)',
      stat_completed_zones: '১০০% বুকিং সম্পন্ন (সুরক্ষিত)',
      stat_food_progress: 'খাদ্য প্যাকেট অগ্রগতি',
      heading_needs: 'মাঠপর্যায়ের চাহিদা তালিকা ও নিডবার (Need Progression Bars)',
      desc_needs: 'ডোনার এনজিও হিসেবে খালি অংশগুলোতে ক্লিক করে আপনার ত্রাণ সামগ্রী বুক করুন।',
      btn_export: 'রিপোর্ট এক্সপোর্ট',
      filter_all: 'সকল এলাকা',
      filter_critical: 'চরম সংকট (০-৩০%)',
      filter_partial: 'আংশিক বুকড (৩০-৯৯%)',
      filter_completed: '১০০% বুকিং সম্পন্ন (সুরক্ষিত)',
      post_heading: 'মাঠপর্যায়ের নতুন দুর্যোগ ও চাহিদা পোস্ট ফরম',
      post_subheading: 'গ্রাউন্ড ভলান্টিয়ার বা লোকাল এনজিও হিসেবে আপনার এলাকার জরুরি চাহিদা পোস্ট করুন। পোস্ট করলেই বুকিং ড্যাশবোর্ডে ০% নিডবার তৈরি হবে।',
      sms_banner_title: 'লো-ব্যান্ডউইথ এসএমএস সিমুলেশন গেটওয়ে:',
      sms_banner_text: 'ইন্টারনেট না থাকলে মোবাইল থেকে নির্দিষ্ট কোড লিখে ১৬২৬৩ নম্বরে এসএমএস পাঠিয়েও স্বয়ংক্রিয় নিডবার তৈরি করা যায়।',
      sms_banner_btn: 'একটি নমুনা এসএমএস টেস্ট করুন ➔',
      form_area_name: 'এলাকা / ওয়ার্ড / গ্রামের সুনির্দিষ্ট নাম:',
      form_district: 'জেলা:',
      form_upazila: 'উপজেলা / থানা:',
      form_families: 'ক্ষতিগ্রস্ত পরিবারের সংখ্যা:',
      form_water_depth: 'পানির গভীরতা ও অবস্থা:',
      form_need_breakdown: 'কী কী জিনিস লাগবে এবং কত পরিমাণে লাগবে? (চাহিদা নিরূপণ):',
      item_food: 'শুকনো খাবার (প্যাকেট):',
      item_water: 'খাবার পানি (গ্যালন):',
      item_medical: 'ওষুধ ও স্যালাইন (কিট):',
      item_baby: 'শিশুখাদ্য ও দুধ (প্যাক):',
      form_scout_name: 'আপনার সংগঠন / যুব ক্লাবের নাম:',
      btn_submit_need: 'চাহিদা পোস্ট ও নিডবার প্রকাশ করুন',
      ai_radar_title: 'এআই প্লাবন ও ভবিষ্যৎ ঘাটতি প্রেডিক্টর (AI Flood & Need Radar)',
      ai_radar_sub: 'নদীর পানি প্রবাহ, বৃষ্টিপাতের রেকর্ড এবং জনসংখ্যার ঘনত্বের উপর ভিত্তি করে তৈরি লাইভ রিস্ক মডেল।',
      gis_map_title: 'বাংলাদেশ মানবিক ত্রাণ সমন্বয় প্লাবন মানচিত্র',
      map_critical: 'চরম সংকট জোন (০-৩০%)',
      map_partial: 'আংশিক সরবরাহ জোন',
      map_completed: '১০০% বুকড ও সুরক্ষিত',
      dispatch_heading: 'সক্রিয় কনভয় ও ত্রাণের চালান ট্র্যাকার',
      dispatch_subheading: 'কোন এনজিওর কতগুলো ত্রাণের গাড়ি বা বোট কোন এলাকার উদ্দেশ্যে রওনা হয়েছে এবং বিতরণ সম্পন্ন হয়েছে কি না তার লাইভ স্ট্যাটাস।',
      filter_by_ngo: 'ফিল্টার:',
      th_ngo: 'এনজিওর নাম',
      th_destination: 'গন্তব্য এলাকা',
      th_cargo: 'ত্রাণের ধরন ও পরিমাণ',
      th_vehicle: 'গাড়ির বিবরণ',
      th_status: 'স্ট্যাটাস',
      th_action: 'ছাড়পত্র',
      reg_heading: 'নতুন ডোনার এনজিও রেজিস্ট্রেশন ফরম',
      reg_subheading: 'আপনি কি কোনো এনজিও, ফাউন্ডেশন বা দাতব্য দলের হয়ে ত্রাণ বিতরণ করতে চান? রেজিস্ট্রেশন করলেই আপনার সংস্থা বুকিং লিস্টে যুক্ত হবে।',
      reg_org_name: 'সংস্থা / এনজিওর পূর্ণ নাম:',
      reg_short_name: 'সংক্ষিপ্ত নাম (Short Name):',
      reg_gov_no: 'নিবন্ধন / এনজিও ব্যুরো নম্বর (যদি থাকে):',
      reg_contact: 'দায়িত্বশীল প্রতিনিধির নাম ও ফোন:',
      reg_hq: 'প্রধান কার্যালয়ের জেলা:',
      reg_focus: 'কাজের প্রধান ক্ষেত্র (ফোকাস):',
      reg_logistics: 'লজিস্টিকস ও যানবাহন সক্ষমতা:',
      btn_reg_submit: 'এনজিও রেজিস্ট্রেশন সম্পন্ন করুন',
      dir_heading: 'সংযুক্ত মানবিক সংস্থা ও এনজিও ডিরেক্টরি',
      dir_subheading: 'INFOrNGO প্ল্যাটফর্মের সাথে ভেরিফাইড ও সক্রিয় ত্রাণ বিতরণকারী পার্টনার সংস্থাসমূহ।',
      btn_add_ngo: 'নতুন এনজিও যোগ করুন',
      modal_booking_title: 'ত্রাণ সামগ্রী বুকিং ফর্ম',
      modal_select_ngo: 'আপনার এনজিও / সংস্থার নাম:',
      modal_custom_org: 'সংস্থার নাম লিখুন:',
      modal_select_item: 'কোন আইটেমটি বুক করতে চান?',
      modal_qty: 'কত পরিমাণ বুক করবেন? (সংখ্যা লিখুন):',
      modal_convoy_note: 'কনভয় / গাড়ির বিবরণ ও ড্রাইভার ফোন (ঐচ্ছিক):',
      modal_btn_confirm: 'বুকিং কনফার্ম করুন (নিডবার আপডেট করুন)',
      footer_title: 'জাতীয় দুর্যোগকালীন সমন্বিত ত্রাণ ও নিড-ট্র্যাকিং প্ল্যাটফর্ম।',
      footer_sub: 'তৃণমূল তথ্যদাতা ও সাহায্যকারী সংস্থাগুলোর একটি উন্মুক্ত ডিজিটাল ব্রিজ'
    },
    en: {
      badge_grid: 'LIVE GRID',
      tagline: 'Equitable Relief Distribution & Unified Need Progression Mesh',
      critical_zones_badge: 'Critical Zones',
      secured_zones_badge: 'Secured Zones',
      nav_booking: 'Relief Booking Dashboard',
      nav_post: 'Post Need (Field NGOs)',
      nav_gis: 'Flood Map & AI Radar',
      nav_dispatch: 'Fleet Tracker & Transit Pass',
      nav_register: 'NGO Registration',
      nav_directory: 'Partner NGO Directory',
      stat_total_zones: 'Total Crisis Zones',
      stat_critical_zones: 'Critical Priority (0-30%)',
      stat_completed_zones: '100% Booked (Secured)',
      stat_food_progress: 'Food Aid Progress',
      heading_needs: 'Field Need Directory & Progression Bars',
      desc_needs: 'As a donor NGO, select unfulfilled segments to pledge and book aid.',
      btn_export: 'Export Report',
      filter_all: 'All Zones',
      filter_critical: 'Critical (0-30%)',
      filter_partial: 'Partial (30-99%)',
      filter_completed: '100% Booked (Secured)',
      post_heading: 'Field Crisis Intake & Need Assessment Form',
      post_subheading: 'Local scouts & grassroots teams submit verified ground demands. Progression bars generate instantly.',
      sms_banner_title: 'Low-Bandwidth SMS Ingestion Gateway:',
      sms_banner_text: 'When cell towers collapse, volunteers can transmit structured SMS to 16263 for automated need tracking.',
      sms_banner_btn: 'Test Sample SMS Ingestion ➔',
      form_area_name: 'Specific Area / Ward / Village Name:',
      form_district: 'District:',
      form_upazila: 'Upazila / Sub-district:',
      form_families: 'Affected Family Count:',
      form_water_depth: 'Water Depth & Situation:',
      form_need_breakdown: 'Itemized Need Assessment (Quantities Required):',
      item_food: 'Dry Food Packets:',
      item_water: 'Drinking Water (Gallons):',
      item_medical: 'Saline & Medicine (Kits):',
      item_baby: 'Baby Food & Milk (Packs):',
      form_scout_name: 'Your Organization / Youth Club Name:',
      btn_submit_need: 'Broadcast Crisis & Generate Needbars',
      ai_radar_title: 'AI Flood & Demand Forecast Radar',
      ai_radar_sub: 'Real-time hydrological river telemetry, precipitation logs, and demographic density predictive risk index.',
      gis_map_title: 'Bangladesh Humanitarian Flood Inundation Map',
      map_critical: 'Critical Deficit (0-30%)',
      map_partial: 'Partial Supply Zone',
      map_completed: '100% Booked & Secured',
      dispatch_heading: 'Active Relief Fleet & Dispatch Ledger',
      dispatch_subheading: 'Live tracking of relief trucks and rescue boats en route with distribution verification states.',
      filter_by_ngo: 'Filter by:',
      th_ngo: 'NGO Organization',
      th_destination: 'Destination Zone',
      th_cargo: 'Relief Item & Quantity',
      th_vehicle: 'Vehicle Details',
      th_status: 'Transit Status',
      th_action: 'Transit Pass',
      reg_heading: 'New Donor NGO Registration Portal',
      reg_subheading: 'Join the national relief grid as an accredited humanitarian donor or response team.',
      reg_org_name: 'Full Organization / NGO Name:',
      reg_short_name: 'Short Name / Acronym:',
      reg_gov_no: 'NGO Affairs Bureau / Govt Reg No:',
      reg_contact: 'Lead Officer Name & Phone:',
      reg_hq: 'Headquarters District:',
      reg_focus: 'Primary Focus Areas:',
      reg_logistics: 'Logistics Fleet & Vehicle Assets:',
      btn_reg_submit: 'Complete NGO Registration',
      dir_heading: 'Verified Humanitarian NGO Directory',
      dir_subheading: 'Accredited relief and disaster response partners connected to the INFOrNGO network.',
      btn_add_ngo: 'Add New NGO',
      modal_booking_title: 'Relief Commitment & Booking Form',
      modal_select_ngo: 'Select Your NGO / Agency:',
      modal_custom_org: 'Enter Organization Name:',
      modal_select_item: 'Which Item Will You Book?',
      modal_qty: 'Quantity to Book (Numeric):',
      modal_convoy_note: 'Vehicle No. & Driver Contact (Optional):',
      modal_btn_confirm: 'Confirm Commitment (Update Needbars)',
      footer_title: 'National Disaster Relief Coordination & Need Progression Network.',
      footer_sub: 'An open digital bridge connecting grassroots field scouts with accredited humanitarian organizations.'
    }
  };

  // Helper to refresh Lucide icons
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // --- App State ---
  const state = {
    lang: localStorage.getItem('inforngo_lang') || 'bn',
    zones: JSON.parse(localStorage.getItem('inforngo_v4_zones')) || window.INFODATA.zones,
    ngos: JSON.parse(localStorage.getItem('inforngo_v4_ngos')) || window.INFODATA.ngos,
    dispatches: JSON.parse(localStorage.getItem('inforngo_v4_dispatches')) || [
      { id: 'd-1', ngoName: 'ব্র্যাক হিউম্যানিটারিয়ান এইড (BRAC)', zoneName: 'খুলনা নিরালা', items: '৮০০ খাবার প্যাকেট + ৩০০ গ্যালন পানি', vehicle: 'ট্রাক-খুলনা-১২', status: 'Delivered', time: '১২:০০' },
      { id: 'd-2', ngoName: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', zoneName: 'খুলনা নিরালা', items: '১২০০ খাবার প্যাকেট + ৫০০ গ্যালন পানি', vehicle: 'ট্রাক-ঢাকা-৪৪', status: 'Delivered', time: '০১:১৫' },
      { id: 'd-3', ngoName: 'মাস্তুল ফাউন্ডেশন (Mastul)', zoneName: 'খুলনা ময়লাপোতা', items: '২৫০ খাবার প্যাকেট + ১০০ গ্যালন পানি', vehicle: 'বোট-০২ (মাস্তুল)', status: 'In Transit', time: '০২:৩০' },
      { id: 'd-4', ngoName: 'বিদ্যানন্দ ফাউন্ডেশন (Bidyanondo)', zoneName: 'নোয়াখালী বেগমগঞ্জ', items: '৫০০ খাবার প্যাকেট + ৪০০ গ্যালন পানি', vehicle: 'ট্রাক-নোয়া-০৫', status: 'Delivered', time: '১০:৪৫' },
      { id: 'd-5', ngoName: 'আল-খিদমত ডিজাস্টার সেল', zoneName: 'নোয়াখালী বেগমগঞ্জ', items: '২০০ খাবার প্যাকেট + ৫০ শিশুখাদ্য', vehicle: 'পিকআপ-০১', status: 'In Transit', time: '০১:৪৫' },
      { id: 'd-6', ngoName: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', zoneName: 'চট্টগ্রাম ফটিকছড়ি', items: '৬০০ খাবার প্যাকেট + ৩৫০ গ্যালন পানি', vehicle: 'ট্রাক-চট্টগ্রাম-০৮', status: 'Delivered', time: '১১:২০' }
    ],
    currentFilter: 'all',
    searchQuery: '',
    activeTab: 'booking',
    gisMap: null,
    gisMarkers: []
  };

  function saveState() {
    localStorage.setItem('inforngo_v4_zones', JSON.stringify(state.zones));
    localStorage.setItem('inforngo_v4_ngos', JSON.stringify(state.ngos));
    localStorage.setItem('inforngo_v4_dispatches', JSON.stringify(state.dispatches));
    localStorage.setItem('inforngo_lang', state.lang);
  }

  // --- Bilingual Language Switcher ---
  window.setLanguage = function (lang) {
    state.lang = lang;
    saveState();

    // Update UI language buttons
    const btnBn = document.getElementById('lang-btn-bn');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnBn && btnEn) {
      if (lang === 'bn') {
        btnBn.className = 'px-2.5 py-1 rounded-md transition bg-white text-slate-900 shadow-xs font-bold';
        btnEn.className = 'px-2.5 py-1 rounded-md transition text-slate-500 hover:text-slate-800 font-bold';
      } else {
        btnEn.className = 'px-2.5 py-1 rounded-md transition bg-white text-slate-900 shadow-xs font-bold';
        btnBn.className = 'px-2.5 py-1 rounded-md transition text-slate-500 hover:text-slate-800 font-bold';
      }
    }

    // Update all text nodes with data-i18n
    const dict = translations[lang] || translations.bn;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });

    renderZones();
    updateTopStats();
    if (state.activeTab === 'dispatch') renderDispatchList();
    if (state.activeTab === 'directory') renderNgoDirectory();
    refreshIcons();
  };

  // --- Tab Navigation Switcher ---
  window.switchTab = function (tabId) {
    state.activeTab = tabId;

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(p => p.classList.add('hidden'));

    // Show target view panel
    const targetPanel = document.getElementById(`view-${tabId}`);
    if (targetPanel) targetPanel.classList.remove('hidden');

    // Update Nav Tab Buttons
    const tabButtons = ['booking', 'post', 'gis', 'dispatch', 'register', 'directory'];
    tabButtons.forEach(id => {
      const btn = document.getElementById(`tab-nav-${id}`);
      if (!btn) return;
      if (id === tabId) {
        btn.className = 'nav-tab-btn px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 bg-sky-600 text-white shadow-xs shrink-0 font-bold';
      } else {
        btn.className = 'nav-tab-btn px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shrink-0 font-bold';
      }
    });

    // Special View Actions
    if (tabId === 'booking') {
      renderZones();
      updateTopStats();
    } else if (tabId === 'gis') {
      setTimeout(initGisMap, 100);
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

    const isBn = state.lang === 'bn';

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
              ? `<span class="inline-flex items-center gap-1 text-emerald-700 font-semibold"><i data-lucide="check" class="w-3 h-3"></i> ${isBn ? 'এই আইটেমটির বুকিং শতভাগ পূর্ণ' : 'Item 100% committed'}</span>` 
              : `<span class="inline-flex items-center gap-1 text-rose-600 font-semibold"><i data-lucide="alert-circle" class="w-3 h-3"></i> ${isBn ? 'বাকি প্রয়োজন:' : 'Deficit remaining:'} ${remaining.toLocaleString()} ${demand.unit}</span>`
          }</span>
          <span class="text-[10.5px] text-slate-500">${demand.bookings.length > 0 ? demand.bookings.map(b => b.ngoName.split(' ')[0]).join(', ') : (isBn ? 'কেউ এখনো বুক করেনি' : 'Uncommitted')}</span>
        </div>
      </div>
    `;
  }

  // --- Render Zone Cards in Booking View ---
  function renderZones() {
    const container = document.getElementById('zones-list-container');
    if (!container) return;

    const isBn = state.lang === 'bn';

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

    // Incomplete critical first, completed at the bottom
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
          <p class="text-sm font-medium text-slate-600">${isBn ? 'কোনো সংকট এলাকা পাওয়া যায়নি' : 'No crisis zones found'}</p>
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
                ${isBn ? 'মাঠের তথ্যদাতা:' : 'Reported By:'} <strong class="text-slate-700">${zone.reportedBy}</strong> (${zone.reportTime})
              </p>
            </div>

            <div>
              ${isComplete ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-700"></i>
                  <span>${isBn ? '১০০% বুকিং সম্পন্ন • সুরক্ষিত' : '100% Booked • Secured'}</span>
                </span>
              ` : pct < 30 ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-rose-700"></i>
                  <span>${isBn ? `জরুরি অগ্রাধিকার (মাত্র ${pct}% বুকড)` : `Critical Priority (${pct}% Booked)`}</span>
                </span>
              ` : `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-700"></i>
                  <span>${isBn ? `আংশিক বুকড (${pct}% সম্পন্ন)` : `Partial Fulfillment (${pct}%)`}</span>
                </span>
              `}
            </div>
          </div>

          <!-- Completed Banner or Situation Details -->
          ${isComplete ? `
            <div class="completed-banner rounded-xl p-3.5 mb-4 text-xs font-medium flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <i data-lucide="shield-check" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                <span>${isBn 
                  ? 'এই এলাকায় খাদ্য, পানি ও প্রয়োজনীয় ওষুধের শতভাগ বুকিং সম্পন্ন হয়েছে। <strong>আপাতত এখানে নতুন ত্রাণের গাড়ি না পাঠিয়ে অন্য সংকট এলাকায় অগ্রাধিকার দিন।</strong>' 
                  : 'All food, water, and emergency medical quotas for this zone are 100% fulfilled. <strong>Please prioritize unfulfilled zones.</strong>'
                }</span>
              </div>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div class="flex items-center gap-1.5">
                <i data-lucide="users" class="w-3.5 h-3.5 text-slate-400"></i>
                <span class="text-slate-500">${isBn ? 'ক্ষতিগ্রস্ত পরিবার:' : 'Affected Families:'}</span>
                <strong class="text-slate-800 font-num ml-1">${zone.families.toLocaleString()} ${isBn ? 'পরিবার' : 'families'} (${zone.people.toLocaleString()} ${isBn ? 'জন' : 'people'})</strong>
              </div>
              <div class="flex items-center gap-1.5">
                <i data-lucide="waves" class="w-3.5 h-3.5 text-sky-500"></i>
                <span class="text-slate-500">${isBn ? 'পানির পরিস্থিতি:' : 'Flood Water Level:'}</span>
                <strong class="text-slate-800 ml-1">${zone.waterLevel}</strong>
              </div>
            </div>
          `}

          <!-- Need Progression Bars -->
          <div class="mb-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              ${isBn ? 'চাহিদা ও বুকিং প্রগ্রেসবার (Need Progressions)' : 'Itemized Need Progression Bars'}
            </h4>
            ${renderNeedBar(zone.id, 'food', zone.demands.food)}
            ${renderNeedBar(zone.id, 'water', zone.demands.water)}
            ${renderNeedBar(zone.id, 'medical', zone.demands.medical)}
            ${renderNeedBar(zone.id, 'babyFood', zone.demands.babyFood)}
          </div>

          <!-- Action Footer -->
          <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div class="text-xs text-slate-500">
              ${isBn ? 'সামগ্রিক বুকিং সম্পন্ন:' : 'Overall Quota Booked:'} <strong class="text-slate-800 font-num font-bold">${pct}%</strong>
            </div>

            <div>
              ${isComplete ? `
                <button disabled class="py-2 px-4 bg-slate-100 text-slate-400 font-semibold rounded-lg text-xs cursor-not-allowed flex items-center gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i>
                  <span>${isBn ? 'বুকিং কোটা পূর্ণ' : 'Quota Filled'}</span>
                </button>
              ` : `
                <button onclick="window.openBookingModal('${zone.id}')" 
                        class="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-xs shadow-xs transition flex items-center gap-1.5">
                  <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                  <span>${isBn ? 'এই এলাকার জন্য ত্রাণ বুক করুন' : 'Book Relief Aid for This Area'}</span>
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

    const headCrit = document.getElementById('header-critical-count');
    const headDone = document.getElementById('header-completed-count');
    if (headCrit) headCrit.innerText = criticalZones;
    if (headDone) headDone.innerText = completedZones;
  }

  // --- Interactive Light GIS Map (Leaflet) ---
  function initGisMap() {
    const container = document.getElementById('gis-leaflet-map');
    if (!container) return;

    if (!state.gisMap) {
      state.gisMap = L.map('gis-leaflet-map', {
        center: [23.6850, 90.3563],
        zoom: 7,
        zoomControl: true
      });

      // Humanitarian OpenStreetMap Light Tiles (Crisp & High Contrast)
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors, Humanitarian OpenStreetMap Team',
        maxZoom: 18
      }).addTo(state.gisMap);
    } else {
      state.gisMap.invalidateSize();
    }

    // Render Markers for each Zone
    state.gisMarkers.forEach(m => state.gisMap.removeLayer(m));
    state.gisMarkers = [];

    const zoneCoords = {
      'খুলনা': [22.8456, 89.5403],
      'ফেনী': [23.0159, 91.3976],
      'চট্টগ্রাম': [22.4500, 91.8500],
      'নোয়াখালী': [22.9554, 91.0991],
      'সিলেট': [24.8949, 91.8687],
      'কুমিল্লা': [23.4607, 91.1809],
      'লক্ষ্মীপুর': [22.9425, 90.8412]
    };

    state.zones.forEach(z => {
      let coords = zoneCoords[z.district] || [23.5, 90.5];
      coords = [coords[0] + (Math.random() - 0.5) * 0.04, coords[1] + (Math.random() - 0.5) * 0.04];

      const pct = getZoneOverallPct(z);
      const isComplete = pct >= 100;
      const markerColor = isComplete ? '#059669' : pct < 30 ? '#DC2626' : '#D97706';

      const customIcon = L.divIcon({
        html: `
          <div style="background-color: ${markerColor}; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; font-weight: bold;">
            ${isComplete ? '✓' : '!'}
          </div>
        `,
        className: 'gis-pin',
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      const m = L.marker(coords, { icon: customIcon }).addTo(state.gisMap);
      m.bindPopup(`
        <div class="p-1 text-xs">
          <strong class="text-sm font-bold block mb-1 text-slate-900">${z.name}</strong>
          <div class="text-slate-500 mb-1">📍 ${z.district} • ${z.families} পরিবার</div>
          <div class="mb-2 font-semibold ${isComplete ? 'text-emerald-700' : 'text-rose-700'}">
            অগ্রগতি: ${pct}% বুকড ${isComplete ? '(সুরক্ষিত)' : '(ঘাটতি রয়েছে)'}
          </div>
          <button onclick="window.switchTab('booking'); window.openBookingModal('${z.id}');" class="py-1 px-3 bg-sky-600 text-white rounded text-xs font-bold">
            + ত্রাণ বুক করুন
          </button>
        </div>
      `);
      state.gisMarkers.push(m);
    });
  }

  // --- Export National Disaster Report (CSV) ---
  window.exportNationalReport = function () {
    let csv = "Zone Name,District,Families,People,Water Level,Food Needed,Food Booked,Food Deficit,Water Needed,Water Booked,Water Deficit,Overall Pct,Status\n";

    state.zones.forEach(z => {
      const food = z.demands.food;
      const water = z.demands.water;
      const pct = getZoneOverallPct(z);
      const status = pct >= 100 ? "Secured (100% Filled)" : pct < 30 ? "Critical Shortage" : "Partial";

      csv += `"${z.name}","${z.district}",${z.families},${z.people},"${z.waterLevel}",${food.total},${food.booked},${Math.max(0, food.total - food.booked)},${water.total},${water.booked},${Math.max(0, water.total - water.booked)},"${pct}%","${status}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `INFOrNGO_National_Disaster_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- Low-Bandwidth SMS Ingestion Simulation ---
  window.testSmsIntake = function () {
    const rawSms = prompt(
      "জরুরি এসএমএস ইনপুট টেস্ট:\n(যেমন: SOS CHATTOGRAM-HALDA 500FAMILIES 1000FOOD 400WATER)",
      "SOS FENI-CHHAGALNAIYA 600FAMILIES 1200FOOD 400WATER"
    );

    if (!rawSms) return;

    const parts = rawSms.split(' ');
    const loc = parts[1] ? parts[1].replace('-', ' ') : 'ফেনী ছাগলনাইয়া';
    const fam = 600;
    const food = 1200;
    const water = 400;

    const newZone = {
      id: 'zone-' + Date.now(),
      name: loc,
      district: 'ফেনী',
      upazila: 'ছাগলনাইয়া',
      reportedBy: 'এসএমএস গেটওয়ে (১৬২৬৩)',
      reportTime: 'এইমাত্র (SMS)',
      families: fam,
      people: fam * 4.5,
      waterLevel: 'বুক সমান পানি (এসএমএস সতর্কবার্তা)',
      demands: {
        food: { name: 'শুকনো খাদ্য (প্যাকেট)', total: food, booked: 0, unit: 'প্যাকেট', bookings: [] },
        water: { name: 'খাবার পানি (গ্যালন)', total: water, booked: 0, unit: 'গ্যালন', bookings: [] },
        medical: { name: 'স্যালাইন ও জরুরি ওষুধ (কিট)', total: 250, booked: 0, unit: 'কিট', bookings: [] },
        babyFood: { name: 'শিশু খাদ্য ও দুধ (প্যাক)', total: 150, booked: 0, unit: 'প্যাক', bookings: [] }
      }
    };

    state.zones.unshift(newZone);
    saveState();
    alert(`✅ এসএমএস প্রসেস সম্পন্ন!\n'${loc}' এলাকার জন্য রিয়েল-টাইম নিডবার ডাটাবেজে যুক্ত করা হয়েছে।`);
    window.switchTab('booking');
  };

  // --- Booking Modal (ত্রাণ বুকিং) ---
  window.openBookingModal = function (zoneId) {
    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    document.getElementById('book-zone-id').value = zone.id;
    document.getElementById('book-zone-name').innerText = zone.name;
    document.getElementById('book-zone-info').innerText = `${zone.district} • ${zone.families} টি পরিবার`;

    const ngoSelect = document.getElementById('book-ngo-select');
    ngoSelect.innerHTML = state.ngos.map(n => `
      <option value="${n.name}">${n.name}</option>
    `).join('') + `<option value="other">+ নতুন সংস্থা / স্বতন্ত্র ডোনার</option>`;

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

    alert(`📢 নতুন ক্রাইসিস এলাকা সফলভাবে যুক্ত হয়েছে! '${areaName}' এলাকার ০% নিডবার তৈরি হয়েছে।`);
    window.switchTab('booking');
  };

  // --- View 5: New NGO Registration ---
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

  // --- View 6: NGO Directory Grid ---
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
    // Restore preferred language
    if (state.lang) {
      window.setLanguage(state.lang);
    } else {
      renderZones();
      updateTopStats();
    }
    initControls();
    refreshIcons();
  });

})();
