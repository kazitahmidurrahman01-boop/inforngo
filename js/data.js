// INFOrNGO Humanitarian Disaster Dataset - Comprehensive Master Grid
window.INFODATA = {
  ngos: [
    { 
      id: 'brac', 
      name: 'ব্র্যাক হিউম্যানিটারিয়ান এইড (BRAC)', 
      short: 'ব্র্যাক (BRAC)', 
      color: '#0284C7',
      regNo: 'NGO-BUR-0012',
      contact: 'কামরুল হাসান (০১৭XXXXXXXX)',
      headquarters: 'ঢাকা',
      capacity: 'জাতীয় পর্যায়ের লজিস্টিকস ও ত্রাণ কনভয়',
      totalDispatched: 5800,
      verified: true
    },
    { 
      id: 'assunnah', 
      name: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', 
      short: 'আস-সুন্নাহ ফাউন্ডেশন', 
      color: '#059669',
      regNo: 'NGO-BUR-0489',
      contact: 'আব্দুর রহিম (০১৮XXXXXXXX)',
      headquarters: 'ঢাকা',
      capacity: 'বড় আকারের খাদ্য ও সুপেয় পানি বিতরণ সেল',
      totalDispatched: 7200,
      verified: true
    },
    { 
      id: 'redcrescent', 
      name: 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি', 
      short: 'বাংলাদেশ রেড ক্রিসেন্ট', 
      color: '#DC2626',
      regNo: 'GOVT-RECOG-001',
      contact: 'ডা. শফিকুল ইসলাম (০১৯XXXXXXXX)',
      headquarters: 'ঢাকা',
      capacity: 'জরুরি মেডিকেল রেসপন্স ও মোবাইল ক্লিনিক',
      totalDispatched: 4100,
      verified: true
    },
    { 
      id: 'mastul', 
      name: 'মাস্তুল ফাউন্ডেশন (Mastul)', 
      short: 'মাস্তুল ফাউন্ডেশন', 
      color: '#D97706',
      regNo: 'NGO-SOC-1102',
      contact: 'কাজী রিয়াজ (০১৬XXXXXXXX)',
      headquarters: 'ঢাকা / চট্টগ্রাম',
      capacity: 'বোট রেসকিউ ও শিশুখাদ্য সরবরাহ',
      totalDispatched: 2600,
      verified: true
    },
    { 
      id: 'bidyanondo', 
      name: 'বিদ্যানন্দ ফাউন্ডেশন (Bidyanondo)', 
      short: 'বিদ্যানন্দ ফাউন্ডেশন', 
      color: '#7C3AED',
      regNo: 'NGO-BUR-0891',
      contact: 'ফারুক আহমেদ (০১৫XXXXXXXX)',
      headquarters: 'চট্টগ্রাম',
      capacity: 'কমিউনিটি রান্নাঘর ও শুকনো খাবার',
      totalDispatched: 3400,
      verified: true
    },
    { 
      id: 'alkhidmat', 
      name: 'আল-খিদমত ডিজাস্টার সেল', 
      short: 'আল-খিদমত সেল', 
      color: '#0D9488',
      regNo: 'NGO-SOC-2041',
      contact: 'মাহমুদুল হক (০১৭XXXXXXXX)',
      headquarters: 'সিলেট / কুমিল্লা',
      capacity: 'পানি বিশুদ্ধকরণ ও প্রাথমিক কিট',
      totalDispatched: 1950,
      verified: true
    }
  ],

  zones: [
    {
      id: 'zone-1',
      name: 'খুলনা নিরালা (৩ ও ৪ নং ওয়ার্ড)',
      district: 'খুলনা',
      upazila: 'খুলনা সদর',
      coordinates: [22.8016, 89.5539],
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
      caption: 'নিরালা আবাসিক এলাকার প্রধান সড়ক কোমর পানিতে নিমজ্জিত, উদ্ধার তৎপরতা চলছে।',
      reportedBy: 'নিরালা তরুণ ভলান্টিয়ার কোয়ালিশন',
      scoutPhone: '০১৭২১-৪৫৮৯২০',
      reportTime: '৩ ঘণ্টা আগে',
      families: 1200,
      people: 5400,
      waterLevel: 'কোমর সমান পানি (৪.২ ফুট) - বোট প্রয়োজন',
      demands: {
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: 2000,
          booked: 2000,
          unit: 'প্যাকেট',
          bookings: [
            { ngoName: 'ব্র্যাক (BRAC)', amount: 800, time: '২ ঘণ্টা আগে', color: '#0284C7', status: 'Delivered', convoyNo: 'ট্রাক-খুলনা-১২' },
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 1200, time: '১ ঘণ্টা আগে', color: '#059669', status: 'Delivered', convoyNo: 'ট্রাক-ঢাকা-৪৪' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 800,
          booked: 800,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'ব্র্যাক (BRAC)', amount: 300, time: '২ ঘণ্টা আগে', color: '#0284C7', status: 'Delivered', convoyNo: 'পিকআপ-০২' },
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 500, time: '১ ঘণ্টা আগে', color: '#059669', status: 'Delivered', convoyNo: 'পিকআপ-০৮' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 400,
          booked: 400,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 400, time: '৩ ঘণ্টা আগে', color: '#DC2626', status: 'Delivered', convoyNo: 'মেডিকেল ভ্যান-০১' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 300,
          booked: 300,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 300, time: '৪ ঘণ্টা আগে', color: '#D97706', status: 'Delivered', convoyNo: 'বোট-মাস্তুল-৩' }
          ]
        }
      }
    },
    {
      id: 'zone-2',
      name: 'খুলনা ময়লাপোতা ও শান্তিধাম মোড়',
      district: 'খুলনা',
      upazila: 'খুলনা সদর',
      coordinates: [22.8122, 89.5604],
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      caption: 'ময়লাপোতা মোড়ে তীব্র স্রোত ও প্রায় সাড়ে পাঁচ ফুট গভীর জলমগ্নতা।',
      reportedBy: 'ময়লাপোতা যুব দুর্যোগ সেল',
      scoutPhone: '০১৯১১-৮৮৩৯২০',
      reportTime: '১ ঘণ্টা আগে',
      families: 950,
      people: 4100,
      waterLevel: 'বুক সমান পানি (৫.৪ ফুট) - তীব্র স্রোত, বোট আবশ্যক',
      demands: {
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: 1800,
          booked: 250,
          unit: 'প্যাকেট',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 250, time: '২ ঘণ্টা আগে', color: '#D97706', status: 'In Transit', convoyNo: 'বোট-০২ (মাস্তুল)' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 700,
          booked: 100,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 100, time: '২ ঘণ্টা আগে', color: '#D97706', status: 'In Transit', convoyNo: 'বোট-০২ (মাস্তুল)' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 350,
          booked: 0,
          unit: 'কিট',
          bookings: []
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 250,
          booked: 0,
          unit: 'প্যাক',
          bookings: []
        }
      }
    },
    {
      id: 'zone-3',
      name: 'ফেনী সদর (মাস্টার পাড়া ও ৩নং ওয়ার্ড)',
      district: 'ফেনী',
      upazila: 'ফেনী সদর',
      coordinates: [23.0159, 91.3976],
      image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&w=800&q=80',
      caption: 'মুহুরী নদীর বাঁধে ভাঙনের কারণে ফেনী সদরের ঘরবাড়ির ছাদ স্পর্শকারী প্লাবন।',
      reportedBy: 'ফেনী ভলান্টিয়ার অ্যালায়েন্স',
      scoutPhone: '০১৮১৮-৩৩৪২৯০',
      reportTime: '২৫ মিনিট আগে',
      families: 1500,
      people: 6800,
      waterLevel: 'ছাদ স্পর্শকারী পানি (৬.৮ ফুট) - সম্পূর্ণ বিদ্যুৎ ও যোগাযোগ বিচ্ছিন্ন',
      demands: {
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: 2500,
          booked: 0,
          unit: 'প্যাকেট',
          bookings: []
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 1200,
          booked: 0,
          unit: 'গ্যালন',
          bookings: []
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 600,
          booked: 0,
          unit: 'কিট',
          bookings: []
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 500,
          booked: 0,
          unit: 'প্যাক',
          bookings: []
        }
      }
    },
    {
      id: 'zone-4',
      name: 'নোয়াখালী বেগমগঞ্জ (৪ ও ৫ নং ইউনিয়ন)',
      district: 'নোয়াখালী',
      upazila: 'বেগমগঞ্জ',
      coordinates: [22.9553, 91.1000],
      image: 'https://images.unsplash.com/photo-1618090584176-7132b9911657?auto=format&fit=crop&w=800&q=80',
      caption: 'গ্রামীণ সড়ক ও কৃষিজমি প্লাবিত, পরিবারগুলো স্থানীয় উচ্চ বিদ্যালয়ের আশ্রয়কেন্দ্রে।',
      reportedBy: 'বেগমগঞ্জ ব্লাড ডোনার্স ও স্কাউট',
      scoutPhone: '০১৭৫২-৯৯১১২০',
      reportTime: '৪৫ মিনিট আগে',
      families: 1100,
      people: 5200,
      waterLevel: 'কোমর পানি (৩.৮ ফুট) - গ্রামীণ সড়ক তলিয়ে গেছে',
      demands: {
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: 1600,
          booked: 700,
          unit: 'প্যাকেট',
          bookings: [
            { ngoName: 'বিদ্যানন্দ ফাউন্ডেশন', amount: 500, time: '৩ ঘণ্টা আগে', color: '#7C3AED', status: 'Delivered', convoyNo: 'ট্রাক-নোয়া-০৫' },
            { ngoName: 'আল-খিদমত সেল', amount: 200, time: '১ ঘণ্টা আগে', color: '#0D9488', status: 'In Transit', convoyNo: 'পিকআপ-০১' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 600,
          booked: 400,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'বিদ্যানন্দ ফাউন্ডেশন', amount: 400, time: '৩ ঘণ্টা আগে', color: '#7C3AED', status: 'Delivered', convoyNo: 'ট্রাক-নোয়া-০৫' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 300,
          booked: 150,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 150, time: '২ ঘণ্টা আগে', color: '#DC2626', status: 'Delivered', convoyNo: 'মেডিকেল ভ্যান' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 200,
          booked: 50,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'আল-খিদমত সেল', amount: 50, time: '১ ঘণ্টা আগে', color: '#0D9488', status: 'In Transit', convoyNo: 'পিকআপ-০১' }
          ]
        }
      }
    },
    {
      id: 'zone-5',
      name: 'চট্টগ্রাম ফটিকছড়ি (হালদা নদী সংলগ্ন গ্রামসমূহ)',
      district: 'চট্টগ্রাম',
      upazila: 'ফটিকছড়ি',
      coordinates: [22.6920, 91.7915],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
      caption: 'পাহাড়ি ঢলে হালদা নদীর পানির উচ্চতা বিপৎসীমার ৭৫ সেমি উপরে প্রবাহিত হচ্ছে।',
      reportedBy: 'ফটিকছড়ি যুব রেড ক্রিসেন্ট',
      scoutPhone: '০১৮১২-৭৭৬৬১০',
      reportTime: '২ ঘণ্টা আগে',
      families: 850,
      people: 3900,
      waterLevel: 'বুক সমান পানি (৫.১ ফুট) - বেড়িবাঁধ ভেঙে পানি ঢুকছে',
      demands: {
        food: {
          name: 'শুকনো খাদ্য (প্যাকেট)',
          total: 1400,
          booked: 850,
          unit: 'প্যাকেট',
          bookings: [
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 600, time: '৩ ঘণ্টা আগে', color: '#059669', status: 'Delivered', convoyNo: 'ট্রাক-চট্টগ্রাম-০৮' },
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 250, time: '১ ঘণ্টা আগে', color: '#D97706', status: 'Delivered', convoyNo: 'পিকআপ-০৩' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 500,
          booked: 350,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 350, time: '২ ঘণ্টা আগে', color: '#059669', status: 'Delivered', convoyNo: 'পিকআপ-০৯' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 250,
          booked: 250,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 250, time: '৩ ঘণ্টা আগে', color: '#DC2626', status: 'Delivered', convoyNo: 'মেডিকেল টিম-৪' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 180,
          booked: 90,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 90, time: '১ ঘণ্টা আগে', color: '#D97706', status: 'Delivered', convoyNo: 'পিকআপ-০৩' }
          ]
        }
      }
    }
  ],

  // Live GPS Telemetry Convoys
  convoys: [
    {
      id: 'CNV-2026-081',
      vehicle: 'ট্রাক-ঢাকা-৪৪ (১০ টন কভার্ডভ্যান)',
      ngo: 'আস-সুন্নাহ ফাউন্ডেশন',
      driver: 'মো. রফিকুল ইসলাম (০১৭৮৯-৪২৩১০০)',
      origin: 'উত্তরা সেন্ট্রাল ডিপো, ঢাকা',
      destination: 'ফেনী সদর (মাস্টার পাড়া সেল)',
      cargo: '১২০০ প্যাকেট শুকনো খাবার, ৪০০ গ্যালন পানি',
      speed: 46, // km/h
      currentCheckpoint: 'কুমিল্লা পদুয়ার বাজার বিশ্বরোড বাইপাস',
      eta: '১ ঘণ্টা ৩৫ মিনিট',
      progressPct: 68,
      status: 'In Transit',
      securityToken: 'PASS-FENI-8849'
    },
    {
      id: 'CNV-2026-082',
      vehicle: 'স্পিডবোট রেসকিউ-০২ (মাস্তুল)',
      ngo: 'মাস্তুল ফাউন্ডেশন',
      driver: 'ক্যাপ্টেন তানভীর (০১৮২২-৩০০৪০০)',
      origin: 'রূপসা ঘাট, খুলনা',
      destination: 'খুলনা ময়লাপোতা ও শান্তিধাম মোড়',
      cargo: '২৫০ ফুড প্যাক, ১০০ পানি, বেবি ফুড',
      speed: 18,
      currentCheckpoint: 'রয়েল মোড় ইনবাউন্ড ক্যানেল',
      eta: '১৮ মিনিট',
      progressPct: 82,
      status: 'In Transit',
      securityToken: 'PASS-KHU-3011'
    },
    {
      id: 'CNV-2026-083',
      vehicle: 'পিকআপ-০১ (আল-খিদমত)',
      ngo: 'আল-খিদমত ডিজাস্টার সেল',
      driver: 'আবুল কালাম (০১৬১১-৭৭৮৮৯৯)',
      origin: 'চৌমুহনী গুদাম',
      destination: 'নোয়াখালী বেগমগঞ্জ ৪নং ইউনিয়ন',
      cargo: '২০০ প্যাকেট ফুড, ৫০ প্যাক শিশুখাদ্য',
      speed: 34,
      currentCheckpoint: 'মাইজদী কোর্ট মোড়',
      eta: '২৮ মিনিট',
      progressPct: 75,
      status: 'In Transit',
      securityToken: 'PASS-NOA-1109'
    }
  ],

  // Flood Victim Family Registry (Duplicate claim prevention)
  families: [
    {
      token: 'TK-FENI-401',
      name: 'আলী হোসেন মজুমদার',
      nid: '1982301928374',
      phone: '০১৮১৮-১২৩৪৫৬',
      members: 6,
      district: 'ফেনী',
      shelter: 'ফেনী সরকারি কলেজ আশ্রয়কেন্দ্র',
      status: 'Pending', // Pending, Received
      aidHistory: []
    },
    {
      token: 'TK-FENI-402',
      name: 'আমেনা খাতুন',
      nid: '1990301928112',
      phone: '০১৮৭৭-৫৫৪৪৩৩',
      members: 4,
      district: 'ফেনী',
      shelter: 'মাস্টার পাড়া প্রাথমিক বিদ্যালয়',
      status: 'Pending',
      aidHistory: []
    },
    {
      token: 'TK-KHU-108',
      name: 'আব্দুস সালাম শেখ',
      nid: '1975471928001',
      phone: '০১৭২১-৩৩৪৪০৯',
      members: 5,
      district: 'খুলনা',
      shelter: 'নিরালা উচ্চ বিদ্যালয় ভবন',
      status: 'Received',
      aidHistory: [
        { date: '১৪ নভেম্বর, দুপুর ১২:৩০', ngo: 'ব্র্যাক (BRAC)', items: '১টি খাদ্য প্যাকেট, ১ গ্যালন সুপেয় পানি' }
      ]
    },
    {
      token: 'TK-NOA-205',
      name: 'বেলাল উদ্দিন',
      nid: '1988751928990',
      phone: '০১৯১১-২২৩৩৪৪',
      members: 7,
      district: 'নোয়াখালী',
      shelter: 'বেগমগঞ্জ মডেল স্কুল',
      status: 'Received',
      aidHistory: [
        { date: '১৪ নভেম্বর, সকাল ১০:১৫', ngo: 'বিদ্যানন্দ ফাউন্ডেশন', items: '১টি শুকনো খাদ্য প্যাকেট' }
      ]
    }
  ],

  // Public Cryptographic Transparency Ledger
  ledger: [
    {
      txHash: '0x8f7a9c1e2b4d6f8a0c2e4b6d8f0a2c4e6b8d0a2c',
      timestamp: '১৪ নভেম্বর ২০২৬, দুপুর ২:১৫',
      ngo: 'আস-সুন্নাহ ফাউন্ডেশন',
      zone: 'ফেনী সদর',
      amount: '১২০০ প্যাকেট খাদ্য',
      valuation: '৳ ৭,২০,০০০',
      status: 'Verified Dispatched'
    },
    {
      txHash: '0x3b1c4e7f9a2d0b8c6e4a2f0d8b6c4e2a0f8d6b4c',
      timestamp: '১৪ নভেম্বর ২০২৬, দুপুর ১:৪০',
      ngo: 'মাস্তুল ফাউন্ডেশন',
      zone: 'খুলনা ময়লাপোতা',
      amount: '২৫০ প্যাকেট খাদ্য + ১০০ গ্যালন পানি',
      valuation: '৳ ১,৯৫,০০০',
      status: 'Verified In-Transit'
    },
    {
      txHash: '0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b',
      timestamp: '১৪ নভেম্বর ২০২৬, দুপুর ১২:০৫',
      ngo: 'ব্র্যাক (BRAC)',
      zone: 'খুলনা নিরালা',
      amount: '৮০০ প্যাকেট খাদ্য + ৩০০ গ্যালন পানি',
      valuation: '৳ ৫,১০,০০০',
      status: 'Verified Delivered'
    }
  ]
};
