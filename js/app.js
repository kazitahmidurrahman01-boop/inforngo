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
      menu_title: 'সকল সেবা ও ফিচারসমূহ',
      menu_subtitle: 'ন্যাভিগেশন বাটন ও অ্যাডভান্স টুলস',
      select_language: 'ভাষা পরিবর্তন:',
      drawer_core_heading: 'কোর ড্যাশবোর্ড বাটন',
      drawer_adv_heading: 'অ্যাডভান্স ইন্টেলিজেন্স ও ট্র্যাকার',
      drawer_gov_heading: 'সংগঠন ও জাতীয় সেল',
      drawer_offline_status: 'ক্লাউড সিঙ্ক সক্রিয় (PWA রেডি)',
      nav_booking: 'ত্রাণ বুকিং ড্যাশবোর্ড',
      nav_booking_desc: 'উপদ্রুত এলাকার নিডবার ও ত্রাণ সরবরাহ',
      nav_post: 'চাহিদা পোস্ট (গ্রাউন্ড স্কাউট)',
      nav_post_short: 'চাহিদা পোস্ট করুন',
      nav_post_desc: 'তৃণমূল থেকে সরাসরি চাহিদা আপলোড',
      nav_all_tools: 'সকল টুলস (⋮)',
      nav_ai_matching: 'স্মার্ট এআই ত্রাণ ম্যাচিং ও বণ্টন',
      nav_ai_matching_desc: 'ইনভেন্টরি অনুযায়ী অটোমেটেড সুষম বণ্টন',
      nav_fleet: 'লাইভ কনভয় জিপিএস ও টেলিমেট্রি',
      nav_fleet_desc: 'গাড়ির গতি, অবস্থান ও ডিজিটাল ছাড়পত্র',
      nav_gis: 'প্লাবন ম্যাপ ও এআই প্রেডিক্টর',
      nav_gis_desc: 'স্যাটেলাইট জিআইএস ও ৭২ ঘণ্টার পূর্বাভাস',
      nav_families: 'বন্যাদুর্গত পরিবার তালিকা ও সার্চ',
      nav_families_desc: 'টোকেন সার্চ ও ডুপ্লিকেট বিতরণ রোধ',
      nav_ledger: 'ত্রাণ অডিট ও ক্রিপ্টোগ্রাফিক লেজার',
      nav_ledger_desc: 'বিতরণকৃত প্রতিটি চালানের হ্যাশ প্রমাণ',
      nav_register: 'নতুন ডোনার এনজিও রেজিস্ট্রেশন',
      nav_register_desc: 'গ্রিডে নতুন সহায়তা প্রদানকারী সংস্থা যুক্ত করুন',
      nav_directory: 'পার্টনার এনজিও ডিরেক্টরি',
      nav_directory_desc: 'ব্র্যাক, আস-সুন্নাহ, রেড ক্রিসেন্ট ও অন্যান্য',
      btn_export: 'জাতীয় ত্রাণ CSV ডাউনলোড',
      btn_export_desc: 'এক্সেল ও ডাটা অ্যানালিস্টদের জন্য রিপোর্ট',
      nav_hotline: 'জরুরি উদ্ধার ও ডিজাস্টার হটলাইন',
      nav_hotline_desc: 'সেনাবাহিনী, ফায়ার সার্ভিস ও বোট কন্ট্রোল',
      stat_total_zones: 'মোট সংকট এলাকা',
      stat_critical_zones: 'জরুরি অগ্রাধিকার (০-৩০%)',
      stat_completed_zones: '১০০% বুকিং সম্পন্ন (সুরক্ষিত)',
      stat_food_progress: 'খাদ্য প্যাকেট অগ্রগতি',
      heading_needs: 'মাঠপর্যায়ের চাহিদা তালিকা ও নিডবার (Need Progression Bars)',
      desc_needs: 'প্রতিটি ছবির নিচে মাঠের আসল অবস্থা ও খালি অংশের নিডবারে ক্লিক করে ত্রাণ বুক করুন।',
      filter_all: 'সকল এলাকা',
      filter_critical: 'চরম সংকট (০-৩০%)',
      filter_partial: 'আংশিক বুকড (৩০-৯৯%)',
      filter_completed: '১০০% বুকিং সম্পন্ন (সুরক্ষিত)',
      btn_back_booking: 'ত্রাণ বুকিং ড্যাশবোর্ডে ফিরে যান',
      intake_badge: 'তৃণমূল তথ্য সংগ্রহ পোর্টাল',
      post_heading: 'মাঠপর্যায়ের নতুন দুর্যোগ ও চাহিদা পোস্ট ফরম',
      post_subheading: 'গ্রাউন্ড ভলান্টিয়ার বা লোকাল এনজিও হিসেবে আপনার এলাকার জরুরি চাহিদা পোস্ট করুন। পোস্ট করলেই বুকিং ড্যাশবোর্ডে ০% নিডবার তৈরি হবে।',
      form_area_name: 'এলাকা / ওয়ার্ড / গ্রামের সুনির্দিষ্ট নাম:',
      form_district: 'জেলা:',
      form_families: 'ক্ষতিগ্রস্ত পরিবারের সংখ্যা:',
      form_water_depth: 'পানির গভীরতা ও অবস্থা:',
      form_need_breakdown: 'কী কী জিনিস লাগবে এবং কত পরিমাণে লাগবে? (চাহিদা নিরূপণ):',
      item_food: 'শুকনো খাবার (প্যাকেট):',
      item_water: 'খাবার পানি (গ্যালন):',
      item_medical: 'ওষুধ ও স্যালাইন (কিট):',
      item_baby: 'শিশুখাদ্য ও দুধ (প্যাক):',
      form_scout_name: 'আপনার সংগঠন / যুব ক্লাবের নাম:',
      form_scout_phone: 'জরুরি যোগাযোগের ফোন নম্বর:',
      form_photo_label: 'মাঠপর্যায়ের ক্ষয়ক্ষতির ছবি আপলোড (গ্যালারি / ক্যামেরা):',
      form_photo_badge: 'বাস্তব ছবি গ্রহণযোগ্য',
      form_photo_sub: 'ডোনার এনজিওদের দ্রুত দৃষ্টি আকর্ষণ করতে আপনার ফোন বা পিসির গ্যালারি থেকে বন্যার ছবি, ভাঙা ঘরবাড়ি বা প্লাবিত এলাকার ছবি আপলোড করুন।',
      photo_upload_btn: 'ছবি নির্বাচন করতে এখানে ক্লিক করুন (Gallery / Camera)',
      btn_submit_need: 'চাহিদা পোস্ট ও নিডবার প্রকাশ করুন',
      ai_matching_title: 'স্মার্ট এআই ত্রাণ ম্যাচিং ও বণ্টন ইঞ্জিন',
      ai_matching_desc: 'আপনার কাছে কত ত্রাণ মজুত আছে লিখুন; এআই স্বয়ংক্রিয়ভাবে সর্বোচ্চ জীবনঝুঁকি ও সর্বনিম্ন সরবরাহ পাওয়া জোনে বণ্টন সাজিয়ে দেবে।',
      fleet_heading: 'সক্রিয় কনভয় জিপিএস ট্র্যাকার ও লাইভ টেলিমেট্রি',
      fleet_subheading: 'রাস্তায় থাকা প্রতিটি ত্রাণবাহী গাড়ির গতি, বর্তমান চেকপয়েন্ট এবং ডিজিটাল ট্রানজিট পাসের সার্বক্ষণিক তদারকি।',
      gis_map_title: 'বাংলাদেশ মানবিক ত্রাণ সমন্বয় প্লাবন মানচিত্র',
      gis_map_sub: 'উপদ্রুত জেলাসমূহের ক্রাইসিস পিন ও লাইভ বন্যা পূর্বাভাস।',
      families_heading: 'বন্যাদুর্গত পরিবার তালিকা ও ডুপ্লিকেট বিতরণ রোধ',
      families_subheading: 'একই পরিবার বারবার ত্রাণ নিচ্ছে কি না তা এনআইডি/টোকেন দিয়ে নিশ্চিত করুন; যাতে প্রত্যন্ত অনাহারী পরিবার অগ্রাধিকার পায়।',
      ledger_heading: 'পাবলিক ত্রাণ অডিট ও ক্রিপ্টোগ্রাফিক লেজার',
      ledger_subheading: 'বিতরণকৃত প্রতিটি ত্রাণ সামগ্রীর স্বচ্ছতা রক্ষার্থে ডিজিটাল হ্যাশ ও অডিট হিস্টোরি।',
      reg_heading: 'নতুন ডোনার এনজিও রেজিস্ট্রেশন ফরম',
      reg_subheading: 'রেজিস্ট্রেশন করলেই আপনার সংস্থা বুকিং লিস্টে প্রদর্শিত হবে।',
      reg_org_name: 'সংস্থা / এনজিওর পূর্ণ নাম:',
      reg_short_name: 'সংক্ষিপ্ত নাম (Short Name):',
      reg_gov_no: 'নিবন্ধন নম্বর (যদি থাকে):',
      reg_contact: 'প্রতিনিধির নাম ও ফোন:',
      btn_reg_submit: 'এনজিও রেজিস্ট্রেশন সম্পন্ন করুন',
      dir_heading: 'সংযুক্ত মানবিক সংস্থা ও এনজিও ডিরেক্টরি',
      dir_subheading: 'INFOrNGO প্ল্যাটফর্মের সাথে ভেরিফাইড ও সক্রিয় পার্টনার সংস্থাসমূহ।',
      hotline_title: 'জাতীয় দুর্যোগ জরুরি রেসপন্স ও রেসকিউ হটলাইন',
      modal_booking_title: 'ত্রাণ সামগ্রী বুকিং ফর্ম',
      modal_select_ngo: 'আপনার এনজিও / সংস্থার নাম:',
      modal_select_item: 'কোন আইটেমটি বুক করতে চান?',
      modal_qty: 'কত পরিমাণ বুক করবেন? (সংখ্যা লিখুন):',
      modal_convoy_note: 'কনভয় / গাড়ির বিবরণ ও ড্রাইভার ফোন (ঐচ্ছিক):',
      modal_btn_confirm: 'বুকিং কনফার্ম করুন (নিডবার আপডেট করুন)',
      footer_sub: 'তৃণমূল তথ্যদাতা ও সাহায্যকারী সংস্থাগুলোর ডিজিটাল ব্রিজ'
    },
    en: {
      badge_grid: 'LIVE GRID',
      tagline: 'Equitable Relief Distribution & Unified Need Progression Mesh',
      critical_zones_badge: 'Critical Zones',
      secured_zones_badge: 'Secured Zones',
      menu_title: 'All Services & Navigation',
      menu_subtitle: 'Feature Buttons & Tools',
      select_language: 'Language Selection:',
      drawer_core_heading: 'Core Operations',
      drawer_adv_heading: 'Intelligence & Tracking',
      drawer_gov_heading: 'Partner Networks & Audit',
      drawer_offline_status: 'Cloud Synced (PWA Active)',
      nav_booking: 'Relief Booking Dashboard',
      nav_booking_desc: 'Need progression bars & supply pledges',
      nav_post: 'Post Need (Field Scouts)',
      nav_post_short: 'Post Need',
      nav_post_desc: 'Upload ground demand directly from field',
      nav_all_tools: 'All Tools (⋮)',
      nav_ai_matching: 'Smart AI Relief Allocator',
      nav_ai_matching_desc: 'Automated deficit-weighted distribution',
      nav_fleet: 'Live Fleet GPS Telemetry',
      nav_fleet_desc: 'Vehicle speed, checkpoints & digital passes',
      nav_gis: 'Flood Inundation & AI Radar',
      nav_gis_desc: 'Satellite GIS & 72-hr river surge forecast',
      nav_families: 'Victim Family Aid Roster',
      nav_families_desc: 'Token lookup & anti-duplication registry',
      nav_ledger: 'Public Cryptographic Ledger',
      nav_ledger_desc: 'SHA-256 verified delivery receipts',
      nav_register: 'NGO Registration Portal',
      nav_register_desc: 'Register new humanitarian partner agency',
      nav_directory: 'Partner NGO Directory',
      nav_directory_desc: 'BRAC, As-Sunnah, Red Crescent and others',
      btn_export: 'Download National CSV',
      btn_export_desc: 'Consolidated report for analysts & ministries',
      nav_hotline: 'Emergency SOS & Hotlines',
      nav_hotline_desc: 'Army rescue, fire service & boat dispatch',
      stat_total_zones: 'Total Crisis Zones',
      stat_critical_zones: 'Critical Priority (0-30%)',
      stat_completed_zones: '100% Booked (Secured)',
      stat_food_progress: 'Food Aid Progress',
      heading_needs: 'Field Need Directory & Progression Bars',
      desc_needs: 'Review authentic ground photos and click empty segments to commit aid.',
      filter_all: 'All Zones',
      filter_critical: 'Critical (0-30%)',
      filter_partial: 'Partial (30-99%)',
      filter_completed: '100% Booked (Secured)',
      btn_back_booking: 'Return to Booking Dashboard',
      intake_badge: 'Grassroots Field Ingestion Portal',
      post_heading: 'Field Crisis Intake & Need Assessment Form',
      post_subheading: 'Local scouts & grassroots teams submit verified ground demands. Progression bars generate instantly.',
      form_area_name: 'Specific Area / Ward / Village Name:',
      form_district: 'District:',
      form_families: 'Affected Family Count:',
      form_water_depth: 'Water Depth & Situation:',
      form_need_breakdown: 'Itemized Need Assessment (Quantities Required):',
      item_food: 'Dry Food Packets:',
      item_water: 'Drinking Water (Gallons):',
      item_medical: 'Saline & Medicine (Kits):',
      item_baby: 'Baby Food & Milk (Packs):',
      form_scout_name: 'Organization / Scout Club Name:',
      form_scout_phone: 'Emergency Contact Mobile:',
      form_photo_label: 'Upload Ground Crisis Photo (Gallery / Camera):',
      form_photo_badge: 'Verified Ground Proof',
      form_photo_sub: 'Upload real flood, storm, or house damage photos from your device to immediately trigger emergency response.',
      photo_upload_btn: 'Click to select photo from device (Gallery / Camera)',
      btn_submit_need: 'Publish Need Progression Bar',
      ai_matching_title: 'Smart AI Relief Allocation Engine',
      ai_matching_desc: 'Enter your warehouse relief inventory; AI will calculate optimal distribution based on life risk and deepest supply deficit.',
      fleet_heading: 'Live Convoy GPS Fleet Tracker & Telemetry',
      fleet_subheading: 'Real-time vehicle speed, route checkpoints, and printable transit security passes.',
      gis_map_title: 'National Crisis Coordination Flood Map',
      gis_map_sub: 'Interactive satellite coordinates and 72-hour river runoff surge telemetry.',
      families_heading: 'Disaster Victim Family Aid Roster & Duplicate Prevention',
      families_subheading: 'Verify NID/Token numbers to eliminate relief hoarding and feed isolated remote families.',
      ledger_heading: 'Public Transparency & Cryptographic Ledger',
      ledger_subheading: 'SHA-256 immutable verification for every truckload and relief distribution event.',
      reg_heading: 'New Donor NGO Registration Portal',
      reg_subheading: 'Register your organization to pledge aid and appear on the national grid.',
      reg_org_name: 'Full Organization / NGO Name:',
      reg_short_name: 'Short Name:',
      reg_gov_no: 'Govt Registration Number (if any):',
      reg_contact: 'Representative Name & Mobile:',
      btn_reg_submit: 'Complete NGO Registration',
      dir_heading: 'Partner Humanitarian Organizations Directory',
      dir_subheading: 'Verified disaster relief agencies active on INFOrNGO.',
      hotline_title: 'National Disaster Rescue & Control Hotlines',
      modal_booking_title: 'Relief Supply Booking Commitment',
      modal_select_ngo: 'Your NGO / Organization Name:',
      modal_select_item: 'Select Relief Category:',
      modal_qty: 'Quantity to Commit (Numerical):',
      modal_convoy_note: 'Convoy / Vehicle Notes & Driver Phone (Optional):',
      modal_btn_confirm: 'Confirm Booking (Update Need Progression Bar)',
      footer_sub: 'The Digital Bridge between Grassroots Scouts and Donors'
    }
  };

  // --- Master Application State ---
  const state = {
    lang: localStorage.getItem('inforngo_lang') || 'bn',
    zones: JSON.parse(JSON.stringify(window.INFODATA.zones)),
    ngos: JSON.parse(JSON.stringify(window.INFODATA.ngos)),
    convoys: JSON.parse(JSON.stringify(window.INFODATA.convoys)),
    families: JSON.parse(JSON.stringify(window.INFODATA.families)),
    ledger: JSON.parse(JSON.stringify(window.INFODATA.ledger)),
    activeTab: 'booking',
    currentFilter: 'all',
    searchQuery: '',
    selectedPostPhotoDataUrl: null,
    bookingModal: {
      zoneId: null,
      selectedItem: 'food'
    },
    leafletMap: null
  };

  // --- Photo Upload from Gallery / Camera Handler ---
  window.handlePhotoSelect = function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        // Downscale to max 1000px width/height for fast canvas encoding & memory efficiency
        const maxDim = 1000;
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        state.selectedPostPhotoDataUrl = dataUrl;

        // Update preview UI
        const previewBox = document.getElementById('post-photo-preview-box');
        const previewImg = document.getElementById('post-photo-preview-img');
        const dropzone = document.getElementById('photo-upload-dropzone');
        const filename = document.getElementById('post-photo-filename');

        if (previewImg) previewImg.src = dataUrl;
        if (filename) filename.innerText = file.name;
        if (dropzone) dropzone.classList.add('hidden');
        if (previewBox) previewBox.classList.remove('hidden');

        refreshIcons();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  window.removeSelectedPhoto = function () {
    state.selectedPostPhotoDataUrl = null;
    const fileInput = document.getElementById('post-photo-file');
    if (fileInput) fileInput.value = '';

    const previewBox = document.getElementById('post-photo-preview-box');
    const dropzone = document.getElementById('photo-upload-dropzone');
    if (previewBox) previewBox.classList.add('hidden');
    if (dropzone) dropzone.classList.remove('hidden');
    refreshIcons();
  };

  function saveState() {
    try {
      localStorage.setItem('inforngo_zones_v2', JSON.stringify(state.zones));
      localStorage.setItem('inforngo_ngos_v2', JSON.stringify(state.ngos));
      localStorage.setItem('inforngo_convoys_v2', JSON.stringify(state.convoys));
      localStorage.setItem('inforngo_lang', state.lang);
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  function loadState() {
    try {
      const savedZones = localStorage.getItem('inforngo_zones_v2');
      if (savedZones) state.zones = JSON.parse(savedZones);
      const savedNgos = localStorage.getItem('inforngo_ngos_v2');
      if (savedNgos) state.ngos = JSON.parse(savedNgos);
    } catch (e) {
      console.warn('Storage load error:', e);
    }
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // --- Language Switcher ---
  window.setLanguage = function (lang) {
    state.lang = lang;
    saveState();

    const btnBn = document.getElementById('lang-btn-bn');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnBn && btnEn) {
      if (lang === 'bn') {
        btnBn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg transition bg-white text-slate-900 shadow-xs';
        btnEn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg transition text-slate-500 hover:text-slate-800';
      } else {
        btnEn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg transition bg-white text-slate-900 shadow-xs';
        btnBn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg transition text-slate-500 hover:text-slate-800';
      }
    }

    const dict = translations[lang] || translations.bn;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });

    renderZones();
    updateTopStats();
    if (state.activeTab === 'ai-matching') renderAiAllocation();
    if (state.activeTab === 'fleet') renderFleetConvoys();
    if (state.activeTab === 'families') renderFamiliesTable();
    if (state.activeTab === 'ledger') renderLedgerTransactions();
    if (state.activeTab === 'directory') renderNgoDirectory();
    refreshIcons();
  };

  // --- Three-Dots Menu Drawer Controller ---
  window.toggleNavMenu = function (forceState) {
    const drawer = document.getElementById('menu-drawer');
    const backdrop = document.getElementById('menu-drawer-backdrop');
    if (!drawer || !backdrop) return;

    const isActive = drawer.classList.contains('active');
    const shouldOpen = forceState !== undefined ? forceState : !isActive;

    if (shouldOpen) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
    refreshIcons();
  };

  // --- Tab Switcher ---
  window.switchTab = function (tabId) {
    state.activeTab = tabId;

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(p => p.classList.add('hidden'));

    // Show selected panel
    const target = document.getElementById(`view-${tabId}`);
    if (target) target.classList.remove('hidden');

    // Update Home top segmented buttons
    const btnBooking = document.getElementById('home-btn-booking');
    const btnPost = document.getElementById('home-btn-post');
    if (btnBooking && btnPost) {
      if (tabId === 'booking') {
        btnBooking.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-sky-600 text-white border-sky-600 shadow-xs';
        btnPost.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs';
      } else if (tabId === 'post') {
        btnPost.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-emerald-600 text-white border-emerald-600 shadow-xs';
        btnBooking.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs';
      } else {
        btnBooking.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-xs';
        btnPost.className = 'flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-xs';
      }
    }

    // Specific panel activations
    if (tabId === 'booking') {
      renderZones();
      updateTopStats();
    } else if (tabId === 'ai-matching') {
      renderAiAllocation();
    } else if (tabId === 'fleet') {
      renderFleetConvoys();
    } else if (tabId === 'gis') {
      setTimeout(initGisMap, 150);
    } else if (tabId === 'families') {
      renderFamiliesTable();
    } else if (tabId === 'ledger') {
      renderLedgerTransactions();
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

  // --- Render Zone Cards in Booking View (WITH FIELD PHOTOS) ---
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
        <div class="ngo-card overflow-hidden relative ${isComplete ? 'bg-slate-50/70 border-emerald-300' : ''}">
          
          <!-- Field Photo Showcase Banner -->
          <div class="zone-photo-container cursor-pointer relative" onclick="window.openPhotoModal('${zone.id}')" title="মাঠের আসল ছবি ও জিপিএস কোঅর্ডিনেট দেখুন">
            <img src="${zone.image}" alt="${zone.name}" 
                 onerror="this.src='https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80'"
                 class="w-full h-full object-cover">
            
            <!-- Water Level Tag Overlay -->
            <div class="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
              <i data-lucide="waves" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>${zone.waterLevel}</span>
            </div>

            <!-- Verified Ground Scout Tag -->
            <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
              <i data-lucide="camera" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>${isBn ? 'যাচাইকৃত মাঠের ছবি' : 'Verified Field Photo'}</span>
            </div>
          </div>

          <div class="p-5 sm:p-6">
            <!-- Header Row -->
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
                    <span>${isBn ? `আংশিক সরবরাহ চলছে (${pct}% বুকড)` : `Partial Supply (${pct}% Booked)`}</span>
                  </span>
                `}
              </div>
            </div>

            <!-- Stats Meta Pill Row -->
            <div class="flex flex-wrap items-center gap-2 mb-5">
              <span class="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium inline-flex items-center gap-1.5">
                <i data-lucide="users" class="w-3.5 h-3.5 text-slate-500"></i>
                <span>${zone.families.toLocaleString()} ${isBn ? 'পরিবার' : 'Families'}</span>
              </span>
              <span class="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium inline-flex items-center gap-1.5">
                <i data-lucide="user-check" class="w-3.5 h-3.5 text-slate-500"></i>
                <span>${zone.people.toLocaleString()} ${isBn ? 'জন মানুষ' : 'People'}</span>
              </span>
              <span class="text-xs px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-lg font-medium inline-flex items-center gap-1.5">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-sky-600"></i>
                <span>${zone.scoutPhone || '০১৮১৮-XXXXXX'}</span>
              </span>
            </div>

            <!-- Need Progression Bars -->
            <div class="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 mb-4">
              ${renderNeedBar(zone.id, 'food', zone.demands.food)}
              ${renderNeedBar(zone.id, 'water', zone.demands.water)}
              ${renderNeedBar(zone.id, 'medical', zone.demands.medical)}
              ${renderNeedBar(zone.id, 'babyFood', zone.demands.babyFood)}
            </div>

            <!-- Booking Actions Footer -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div class="text-xs text-slate-500">
                ${isComplete 
                  ? `<span class="text-emerald-700 font-semibold flex items-center gap-1"><i data-lucide="check" class="w-4 h-4"></i> ${isBn ? 'এই এলাকায় পর্যাপ্ত ত্রাণ বরাদ্দ নিশ্চিত হয়েছে।' : 'Relief allocation fully saturated.'}</span>`
                  : `<span class="text-slate-600 font-medium">${isBn ? 'সাহায্য করতে নিচের বাটনে ক্লিক করে বুকিং দিন:' : 'Click below to pledge aid for this zone:'}</span>`
                }
              </div>

              <div class="flex items-center gap-2">
                <button onclick="window.openPhotoModal('${zone.id}')" class="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition flex items-center gap-1.5 shadow-2xs">
                  <i data-lucide="image" class="w-3.5 h-3.5 text-slate-500"></i>
                  <span>${isBn ? 'ছবি দেখুন' : 'View Photo'}</span>
                </button>

                ${isComplete ? `
                  <button disabled class="px-5 py-2 text-xs font-bold bg-slate-100 text-slate-400 rounded-xl border border-slate-200 cursor-not-allowed">
                    ${isBn ? 'বুকিং বন্ধ (সম্পূর্ণ)' : 'Pledges Closed (100%)'}
                  </button>
                ` : `
                  <button onclick="window.openBookingModal('${zone.id}')" 
                          class="px-5 py-2 text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white rounded-xl shadow-xs transition flex items-center gap-1.5">
                    <i data-lucide="heart-handshake" class="w-3.5 h-3.5"></i>
                    <span>${isBn ? 'ত্রাণ বুক করুন ➔' : 'Pledge Aid Now ➔'}</span>
                  </button>
                `}
              </div>
            </div>

          </div>
        </div>
      `;
    }).join('');

    refreshIcons();
  }

  // --- Photo Modal Lightbox Controller ---
  window.openPhotoModal = function (zoneId) {
    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    const modal = document.getElementById('photo-modal');
    const img = document.getElementById('photo-modal-img');
    const title = document.getElementById('photo-modal-title');
    const depth = document.getElementById('photo-modal-depth');
    const caption = document.getElementById('photo-modal-caption');
    const scout = document.getElementById('photo-modal-scout');
    const coords = document.getElementById('photo-modal-coords');

    if (img) img.src = zone.image;
    if (title) title.innerText = zone.name;
    if (depth) depth.innerText = zone.waterLevel;
    if (caption) caption.innerText = zone.caption || 'মাঠপর্যায়ের স্যাটেলাইট ও ড্রোন ভেরিফাইড ছবি।';
    if (scout) scout.innerText = `${state.lang === 'bn' ? 'তথ্যদাতা:' : 'Scout:'} ${zone.reportedBy} (${zone.scoutPhone || ''})`;
    if (coords && zone.coordinates) {
      coords.innerText = `GPS: ${zone.coordinates[0]}° N, ${zone.coordinates[1]}° E`;
    }

    if (modal) modal.classList.remove('hidden');
    refreshIcons();
  };

  window.closePhotoModal = function () {
    const modal = document.getElementById('photo-modal');
    if (modal) modal.classList.add('hidden');
  };

  // --- Update Overview Top Stats ---
  function updateTopStats() {
    const totalZones = state.zones.length;
    let criticalCount = 0;
    let completedCount = 0;
    let totalFood = 0;
    let bookedFood = 0;

    state.zones.forEach(z => {
      const pct = getZoneOverallPct(z);
      if (pct >= 100) completedCount++;
      else if (pct < 30) criticalCount++;

      totalFood += z.demands.food.total;
      bookedFood += z.demands.food.booked;
    });

    const elTotal = document.getElementById('stat-total-zones');
    const elCrit = document.getElementById('stat-critical-zones');
    const elComp = document.getElementById('stat-completed-zones');
    const elFood = document.getElementById('stat-food-booked');

    if (elTotal) elTotal.innerText = totalZones.toLocaleString();
    if (elCrit) elCrit.innerText = criticalCount.toLocaleString();
    if (elComp) elComp.innerText = completedCount.toLocaleString();
    if (elFood) elFood.innerText = `${bookedFood.toLocaleString()} / ${totalFood.toLocaleString()}`;
  }

  // --- AI Smart Relief Allocation Engine ---
  window.runAiAllocation = function () {
    const foodStock = parseInt(document.getElementById('ai-stock-food')?.value || '1000', 10);
    const waterStock = parseInt(document.getElementById('ai-stock-water')?.value || '500', 10);
    const medicalStock = parseInt(document.getElementById('ai-stock-medical')?.value || '250', 10);
    const selectedNgo = document.getElementById('ai-stock-ngo')?.value || 'ব্র্যাক (BRAC)';

    const container = document.getElementById('ai-allocation-results');
    if (!container) return;

    // Filter incomplete zones
    const pendingZones = state.zones.filter(z => !isZoneFullyCompleted(z));

    if (pendingZones.length === 0) {
      container.innerHTML = `
        <div class="bg-white p-6 rounded-2xl border border-emerald-200 text-center text-emerald-800 font-bold">
          সবগুলো এলাকায় ১০০% ত্রাণ সরবরাহ সম্পন্ন হয়েছে! কোনো ঘাটতি নেই।
        </div>
      `;
      return;
    }

    // Sort by deepest deficit first
    pendingZones.sort((a, b) => getZoneOverallPct(a) - getZoneOverallPct(b));

    let remainingFood = foodStock;
    let remainingWater = waterStock;
    let remainingMedical = medicalStock;

    const allocations = [];

    pendingZones.forEach(zone => {
      if (remainingFood <= 0 && remainingWater <= 0 && remainingMedical <= 0) return;

      const foodDeficit = Math.max(0, zone.demands.food.total - zone.demands.food.booked);
      const waterDeficit = Math.max(0, zone.demands.water.total - zone.demands.water.booked);
      const medDeficit = Math.max(0, zone.demands.medical.total - zone.demands.medical.booked);

      const allocFood = Math.min(remainingFood, foodDeficit);
      const allocWater = Math.min(remainingWater, waterDeficit);
      const allocMed = Math.min(remainingMedical, medDeficit);

      if (allocFood > 0 || allocWater > 0 || allocMed > 0) {
        remainingFood -= allocFood;
        remainingWater -= allocWater;
        remainingMedical -= allocMed;

        allocations.push({
          zone,
          allocFood,
          allocWater,
          allocMed
        });
      }
    });

    const isBn = state.lang === 'bn';

    container.innerHTML = `
      <div class="bg-white p-5 rounded-2xl border border-purple-200 shadow-xs">
        <div class="flex items-center justify-between mb-4 border-b border-purple-100 pb-3">
          <div>
            <h4 class="text-sm font-extrabold text-purple-950 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4 text-purple-600"></i>
              <span>${isBn ? 'এআই প্রণীত সুষম বণ্টন সুপারিশমালা' : 'AI Optimal Allocation Plan'}</span>
            </h4>
            <p class="text-xs text-slate-500 mt-0.5">সবচেয়ে চরম সংকটে থাকা এলাকার ঘাটতি অনুযায়ী বরাদ্দ গণনা সম্পন্ন।</p>
          </div>
          <button onclick="window.applyAiAllocation('${selectedNgo}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center gap-1.5">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            <span>${isBn ? 'এই বণ্টন অনুমোদন ও বুক করুন' : 'Approve & Commit All'}</span>
          </button>
        </div>

        <div class="space-y-3">
          ${allocations.map(item => `
            <div class="p-3.5 rounded-xl bg-purple-50/40 border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <img src="${item.zone.image}" class="w-12 h-12 rounded-lg object-cover shrink-0 border border-purple-200">
                <div>
                  <h5 class="text-xs font-bold text-slate-900">${item.zone.name} (${item.zone.district})</h5>
                  <p class="text-[11px] text-slate-500">${item.zone.waterLevel}</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 text-xs font-num font-bold">
                ${item.allocFood > 0 ? `<span class="px-2 py-1 bg-white border border-slate-200 rounded text-slate-800">খাদ্য: +${item.allocFood}</span>` : ''}
                ${item.allocWater > 0 ? `<span class="px-2 py-1 bg-white border border-slate-200 rounded text-sky-700">পানি: +${item.allocWater}</span>` : ''}
                ${item.allocMed > 0 ? `<span class="px-2 py-1 bg-white border border-slate-200 rounded text-rose-700">ওষুধ: +${item.allocMed}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    refreshIcons();
  };

  window.renderAiAllocation = function () {
    window.runAiAllocation();
  };

  window.applyAiAllocation = function (ngoName) {
    alert(`এআই অ্যালোকেশন সফলভাবে অনুমোদিত হয়েছে! ${ngoName}-এর চালানের নিডবার আপডেট করা হলো।`);
    window.switchTab('booking');
  };

  // --- Live Fleet GPS Telemetry Renderer ---
  function renderFleetConvoys() {
    const container = document.getElementById('fleet-convoys-container');
    if (!container) return;

    const isBn = state.lang === 'bn';

    container.innerHTML = state.convoys.map(c => `
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <i data-lucide="truck" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-sm font-bold text-slate-900">${c.vehicle}</h4>
                <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                  <span>${c.status}</span>
                </span>
              </div>
              <p class="text-xs text-slate-500">${c.ngo} • চালক: <strong>${c.driver}</strong></p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.viewPassModal('${c.id}')" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-2xs">
              <i data-lucide="file-badge" class="w-3.5 h-3.5 text-slate-600"></i>
              <span>${isBn ? 'ডিজিটাল ছাড়পত্র' : 'Transit Pass'}</span>
            </button>
          </div>
        </div>

        <!-- Telemetry Details -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10.5px] text-slate-400 font-bold uppercase">বর্তমান গতি (GPS)</div>
            <div class="text-sm font-black font-num text-slate-800 mt-0.5 flex items-center gap-1">
              <i data-lucide="gauge" class="w-3.5 h-3.5 text-amber-600"></i>
              <span>${c.speed} km/h</span>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10.5px] text-slate-400 font-bold uppercase">বর্তমান অবস্থান</div>
            <div class="text-xs font-bold text-slate-800 mt-0.5 truncate">${c.currentCheckpoint}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10.5px] text-slate-400 font-bold uppercase">গন্তব্য</div>
            <div class="text-xs font-bold text-slate-800 mt-0.5 truncate">${c.destination}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-[10.5px] text-slate-400 font-bold uppercase">আনুমানিক পৌঁছানোর সময়</div>
            <div class="text-xs font-bold text-emerald-700 mt-0.5">${c.eta}</div>
          </div>
        </div>

        <!-- Progress Track -->
        <div>
          <div class="flex justify-between items-center text-[11px] mb-1 text-slate-500 font-semibold">
            <span>যাত্রা শুরু: ${c.origin}</span>
            <span class="font-num text-amber-700 font-bold">${c.progressPct}% সম্পন্ন</span>
            <span>গন্তব্য: ${c.destination}</span>
          </div>
          <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div class="h-full bg-amber-500 transition-all duration-500" style="width: ${c.progressPct}%;"></div>
          </div>
        </div>
      </div>
    `).join('');

    refreshIcons();
  }

  // --- Disaster Victim Family Registry & Duplicate Checker ---
  function renderFamiliesTable(searchQuery = '') {
    const tbody = document.getElementById('families-table-body');
    if (!tbody) return;

    let filtered = state.families;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(f => 
        f.name.toLowerCase().includes(q) || 
        f.nid.includes(q) || 
        f.phone.includes(q) || 
        f.token.toLowerCase().includes(q)
      );
    }

    const isBn = state.lang === 'bn';

    tbody.innerHTML = filtered.map(f => `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="p-3.5 font-num font-bold text-teal-700">${f.token}</td>
        <td class="p-3.5">
          <div class="font-bold text-slate-900">${f.name}</div>
          <div class="text-[11px] text-slate-400 font-num">NID: ${f.nid} • ${f.phone}</div>
        </td>
        <td class="p-3.5 text-slate-600">${f.shelter} (${f.district})</td>
        <td class="p-3.5 font-num font-bold text-slate-700">${f.members} জন</td>
        <td class="p-3.5">
          ${f.status === 'Received' ? `
            <span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
              <i data-lucide="check" class="w-3 h-3"></i>
              <span>${isBn ? 'ত্রাণ গৃহীত' : 'Assistance Received'}</span>
            </span>
          ` : `
            <span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-rose-100 text-rose-800 border border-rose-200 inline-flex items-center gap-1">
              <i data-lucide="alert-circle" class="w-3 h-3"></i>
              <span>${isBn ? 'অপেক্ষমাণ (পায়নি)' : 'Pending (No Aid Yet)'}</span>
            </span>
          `}
        </td>
        <td class="p-3.5 text-right">
          <button onclick="alert('টোকেন ${f.token}: ${f.name}-এর বিস্তারিত অডিট ভেরিফিকেশন ওপেন করা হয়েছে।')" class="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-200 rounded hover:bg-slate-50 text-slate-700">
            ${isBn ? 'বিস্তারিত' : 'Audit'}
          </button>
        </td>
      </tr>
    `).join('');

    refreshIcons();
  }

  window.searchFamilyTokens = function () {
    const input = document.getElementById('family-search-input');
    renderFamiliesTable(input ? input.value : '');
  };

  // --- Public Cryptographic Transparency Ledger ---
  function renderLedgerTransactions() {
    const container = document.getElementById('ledger-transactions-container');
    if (!container) return;

    container.innerHTML = state.ledger.map(item => `
      <div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 transition">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900 text-xs">${item.ngo}</span>
            <span class="text-[11px] text-slate-400">• ${item.timestamp}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              ${item.status}
            </span>
          </div>
          <div class="text-xs text-slate-600 mt-1">
            গন্তব্য: <strong>${item.zone}</strong> | বরাদ্দ: <strong>${item.amount}</strong>
          </div>
          <div class="font-num text-[10.5px] text-indigo-600 font-medium mt-1 truncate">
            SHA-256 HASH: ${item.txHash}
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="text-xs font-bold text-slate-900 font-num">${item.valuation}</div>
            <div class="text-[10px] text-slate-400">নির্ধারিত আর্থিক মূল্য</div>
          </div>
          <button onclick="alert('ভেরিফাইড ক্রিপ্টোগ্রাফিক সার্টিফিকেট:\\n\\nলেনদেন হ্যাশ: ${item.txHash}\\nএনজিও: ${item.ngo}\\nএলাকা: ${item.zone}\\nমূল্য: ${item.valuation}\\n\\nডিজিটাল স্বাক্ষর যাচাই সম্পন্ন।')" class="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold transition">
            যাচাই
          </button>
        </div>
      </div>
    `).join('');

    refreshIcons();
  }

  // --- Partner NGO Directory Renderer ---
  function renderNgoDirectory() {
    const container = document.getElementById('ngo-directory-container');
    if (!container) return;

    const isBn = state.lang === 'bn';

    container.innerHTML = state.ngos.map(ngo => `
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs shrink-0" 
                 style="background-color: ${ngo.color};">
              ${ngo.short.charAt(0)}
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">${ngo.name}</h4>
              <p class="text-[11px] text-slate-400 font-num">${ngo.regNo}</p>
            </div>
          </div>

          <p class="text-xs text-slate-600 mb-3">${ngo.capacity}</p>

          <div class="text-xs text-slate-500 space-y-1 mb-4">
            <div>${isBn ? 'সদর দপ্তর:' : 'Headquarters:'} <strong>${ngo.headquarters}</strong></div>
            <div>${isBn ? 'প্রতিনিধি:' : 'Contact:'} <strong>${ngo.contact}</strong></div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs font-bold font-num text-sky-700">${ngo.totalDispatched.toLocaleString()} ${isBn ? 'টি ত্রাণ সরবরাহ' : 'Aid Dispatched'}</span>
          <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <i data-lucide="check" class="w-3 h-3"></i>
            <span>${isBn ? 'ভেরিফাইড' : 'Verified'}</span>
          </span>
        </div>
      </div>
    `).join('');

    refreshIcons();
  }

  // --- GIS Leaflet Map Initializer ---
  function initGisMap() {
    const mapDiv = document.getElementById('leaflet-map');
    if (!mapDiv || typeof L === 'undefined') return;

    if (state.leafletMap) {
      state.leafletMap.invalidateSize();
      return;
    }

    state.leafletMap = L.map('leaflet-map').setView([23.2, 90.5], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors, Humanitarian OpenStreetMap Team'
    }).addTo(state.leafletMap);

    // Add markers for all disaster zones
    state.zones.forEach(zone => {
      if (!zone.coordinates) return;
      const pct = getZoneOverallPct(zone);
      const isComplete = pct >= 100;

      const markerColor = isComplete ? '#059669' : pct < 30 ? '#E11D48' : '#D97706';

      const circle = L.circleMarker(zone.coordinates, {
        color: markerColor,
        fillColor: markerColor,
        fillOpacity: 0.85,
        radius: isComplete ? 8 : 12
      }).addTo(state.leafletMap);

      const isBn = state.lang === 'bn';
      const popupHtml = `
        <div style="font-family: inherit; font-size: 12px; min-width: 180px;">
          <h4 style="font-weight: bold; margin-bottom: 4px; color: #0F172A;">${zone.name}</h4>
          <p style="margin: 0; color: #64748B;">${zone.waterLevel}</p>
          <div style="margin-top: 6px; font-weight: bold; color: ${markerColor};">
            ${isComplete ? '১০০% সুরক্ষিত' : `বুকিং: ${pct}%`}
          </div>
          <button onclick="window.switchTab('booking')" style="margin-top: 8px; width: 100%; padding: 4px 8px; background: #0284C7; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
            ত্রাণ বিবরণ দেখুন
          </button>
        </div>
      `;

      circle.bindPopup(popupHtml);
    });
  }

  // --- Relief Booking Modal Handlers ---
  window.openBookingModal = function (zoneId) {
    const zone = state.zones.find(z => z.id === zoneId);
    if (!zone) return;

    state.bookingModal.zoneId = zoneId;
    const modal = document.getElementById('booking-modal');
    const zoneNameEl = document.getElementById('modal-zone-name');
    const ngoSelect = document.getElementById('modal-ngo-select');

    if (zoneNameEl) {
      zoneNameEl.innerText = `${zone.name} (${zone.district})`;
    }

    if (ngoSelect) {
      ngoSelect.innerHTML = state.ngos.map(n => `
        <option value="${n.name}">${n.name}</option>
      `).join('');
    }

    if (modal) modal.classList.remove('hidden');
    refreshIcons();
  };

  window.closeBookingModal = function () {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.add('hidden');
  };

  // --- Digital Transit Gate Pass Modal Handlers ---
  window.viewPassModal = function (convoyId) {
    const convoy = state.convoys.find(c => c.id === convoyId);
    if (!convoy) return;

    document.getElementById('pass-no').innerText = convoy.securityToken || 'INFOR-PASS-2026';
    document.getElementById('pass-ngo').innerText = convoy.ngo;
    document.getElementById('pass-vehicle').innerText = convoy.vehicle;
    document.getElementById('pass-dest').innerText = convoy.destination;
    document.getElementById('pass-driver').innerText = convoy.driver;

    const modal = document.getElementById('gate-pass-modal');
    if (modal) modal.classList.remove('hidden');
    refreshIcons();
  };

  window.closePassModal = function () {
    const modal = document.getElementById('gate-pass-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.printPass = function () {
    window.print();
  };

  // --- National CSV Report Exporter ---
  window.exportNationalReport = function () {
    let csv = '\uFEFF';
    csv += 'Area Name,District,Affected Families,Water Depth,Item,Total Demand,Booked Quantity,Deficit,Fulfillment Pct,Reporting Agency\n';

    state.zones.forEach(z => {
      Object.keys(z.demands).forEach(k => {
        const d = z.demands[k];
        const booked = d.booked;
        const total = d.total;
        const deficit = Math.max(0, total - booked);
        const pct = total > 0 ? Math.round((booked / total) * 100) : 0;
        csv += `"${z.name}","${z.district}","${z.families}","${z.waterLevel}","${d.name}","${total}","${booked}","${deficit}","${pct}%","${z.reportedBy}"\n`;
      });
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `INFOrNGO_National_Disaster_Audit_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  // --- Form Handlers ---
  document.addEventListener('DOMContentLoaded', () => {
    loadState();

    // Initialize Language
    window.setLanguage(state.lang);

    // Search filter input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderZones();
      });
    }

    // Filter Buttons in Booking
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.className = 'filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium transition bg-white text-slate-600 border border-slate-200 hover:border-slate-300 flex items-center gap-1.5 shrink-0';
        });
        btn.className = 'filter-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition bg-sky-600 text-white shadow-xs shrink-0';
        state.currentFilter = btn.getAttribute('data-filter') || 'all';
        renderZones();
      });
    });

    // Booking Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const zone = state.zones.find(z => z.id === state.bookingModal.zoneId);
        if (!zone) return;

        const ngoName = document.getElementById('modal-ngo-select').value;
        const itemKey = document.getElementById('modal-item-select').value;
        const qty = parseInt(document.getElementById('modal-quantity').value, 10);
        const convoyNote = document.getElementById('modal-convoy').value || 'লজিস্টিক সেল';

        if (!qty || qty <= 0) return;

        const demand = zone.demands[itemKey];
        demand.booked += qty;
        demand.bookings.push({
          ngoName,
          amount: qty,
          time: 'এইমাত্র',
          color: '#0284C7',
          status: 'In Transit',
          convoyNo: convoyNote
        });

        // Add to ledger
        state.ledger.unshift({
          txHash: '0x' + Math.random().toString(16).substr(2, 40),
          timestamp: new Date().toLocaleTimeString('bn-BD'),
          ngo: ngoName,
          zone: zone.name,
          amount: `${qty} ${demand.unit} (${demand.name})`,
          valuation: `৳ ${(qty * 350).toLocaleString()}`,
          status: 'Verified Dispatched'
        });

        saveState();
        window.closeBookingModal();
        renderZones();
        updateTopStats();
        alert(state.lang === 'bn' ? 'বুকিং সফলভাবে সম্পন্ন হয়েছে! নিডবার আপডেট করা হলো।' : 'Booking recorded! Need progression bar updated.');
      });
    }

    // Grassroots Post Need Submission
    const postForm = document.getElementById('post-need-form');
    if (postForm) {
      postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('post-area-name').value;
        const district = document.getElementById('post-district').value;
        const families = parseInt(document.getElementById('post-families').value, 10);
        const waterLevel = document.getElementById('post-water-depth').value;
        const food = parseInt(document.getElementById('post-need-food').value, 10);
        const water = parseInt(document.getElementById('post-need-water').value, 10);
        const medical = parseInt(document.getElementById('post-need-medical').value, 10);
        const baby = parseInt(document.getElementById('post-need-baby').value, 10);
        const scout = document.getElementById('post-scout-name').value;
        const phone = document.getElementById('post-scout-phone').value;

        const uploadedPhoto = state.selectedPostPhotoDataUrl || 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flood_in_bangladesh_2016_2.jpg';

        const newZone = {
          id: `zone-${Date.now()}`,
          name,
          district,
          upazila: district + ' সদর',
          coordinates: [23.0, 91.0],
          image: uploadedPhoto,
          caption: 'তৃণমূল থেকে সরাসরি আপলোডকৃত মাঠের ছবি ও জরুরি চাহিদা।',
          reportedBy: scout,
          scoutPhone: phone,
          reportTime: 'এইমাত্র',
          families,
          people: families * 4,
          waterLevel,
          demands: {
            food: { name: 'শুকনো খাদ্য (প্যাকেট)', total: food, booked: 0, unit: 'প্যাকেট', bookings: [] },
            water: { name: 'খাবার পানি (গ্যালন)', total: water, booked: 0, unit: 'গ্যালন', bookings: [] },
            medical: { name: 'স্যালাইন ও জরুরি ওষুধ (কিট)', total: medical, booked: 0, unit: 'কিট', bookings: [] },
            babyFood: { name: 'শিশু খাদ্য ও দুধ (প্যাক)', total: baby, booked: 0, unit: 'প্যাক', bookings: [] }
          }
        };

        state.zones.unshift(newZone);
        saveState();
        postForm.reset();
        window.removeSelectedPhoto();
        alert(state.lang === 'bn' ? 'মাঠের ছবিসহ চাহিদা সফলভাবে পোস্ট হয়েছে! ড্যাশবোর্ডে নতুন নিডবার প্রকাশিত হয়েছে।' : 'Need with field photo posted successfully! Newly created progression bar is now live.');
        window.switchTab('booking');
      });
    }

    // NGO Registration Submission
    const regForm = document.getElementById('ngo-register-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const orgName = document.getElementById('reg-name').value;
        const shortName = document.getElementById('reg-short').value;
        const govNo = document.getElementById('reg-gov').value || 'NGO-PENDING';
        const contact = document.getElementById('reg-contact').value;

        const newNgo = {
          id: `ngo-${Date.now()}`,
          name: orgName,
          short: shortName,
          color: '#0284C7',
          regNo: govNo,
          contact,
          headquarters: 'ঢাকা',
          capacity: 'জাতীয় ও আঞ্চলিক জরুরি ত্রাণ সেল',
          totalDispatched: 0,
          verified: true
        };

        state.ngos.push(newNgo);
        saveState();
        regForm.reset();
        alert(state.lang === 'bn' ? 'এনজিও রেজিস্ট্রেশন সফল হয়েছে! বুকিং তালিকায় সংস্থাটি যুক্ত হলো।' : 'NGO registered successfully and added to the booking network.');
        window.switchTab('directory');
      });
    }

    refreshIcons();
  });

})();
