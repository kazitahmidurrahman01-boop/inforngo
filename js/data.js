// INFOrNGO Humanitarian Disaster Dataset
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
      reportedBy: 'নিরালা তরুণ ভলান্টিয়ার কোয়ালিশন',
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
      reportedBy: 'ময়লাপোতা যুব দুর্যোগ সেল',
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
      reportedBy: 'ফেনী ভলান্টিয়ার অ্যালায়েন্স',
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
      reportedBy: 'বেগমগঞ্জ ব্লাড ডোনার্স ও স্কাউট',
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
      reportedBy: 'ফটিকছড়ি যুব রেড ক্রিসেন্ট',
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
  ]
};
