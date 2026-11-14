// INFOrNGO Humanitarian Disaster Dataset
window.INFODATA = {
  ngos: [
    { id: 'brac', name: 'ব্র্যাক (BRAC Humanitarian)', color: '#0284C7' },
    { id: 'assunnah', name: 'আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah)', color: '#059669' },
    { id: 'redcrescent', name: 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি', color: '#DC2626' },
    { id: 'mastul', name: 'মাস্তুল ফাউন্ডেশন (Mastul)', color: '#D97706' },
    { id: 'bidyanondo', name: 'বিদ্যানন্দ ফাউন্ডেশন (Bidyanondo)', color: '#7C3AED' },
    { id: 'alkhidmat', name: 'আল-খিদমত ডিজাস্টার সেল', color: '#0D9488' }
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
            { ngoName: 'ব্র্যাক (BRAC)', amount: 800, time: '২ ঘণ্টা আগে', color: '#0284C7' },
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 1200, time: '১ ঘণ্টা আগে', color: '#059669' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 800,
          booked: 800,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'ব্র্যাক (BRAC)', amount: 300, time: '২ ঘণ্টা আগে', color: '#0284C7' },
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 500, time: '১ ঘণ্টা আগে', color: '#059669' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 400,
          booked: 400,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 400, time: '৩ ঘণ্টা আগে', color: '#DC2626' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 300,
          booked: 300,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 300, time: '৪ ঘণ্টা আগে', color: '#D97706' }
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
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 250, time: '২ ঘণ্টা আগে', color: '#D97706' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 700,
          booked: 100,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 100, time: '২ ঘণ্টা আগে', color: '#D97706' }
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
            { ngoName: 'বিদ্যানন্দ ফাউন্ডেশন', amount: 500, time: '৩ ঘণ্টা আগে', color: '#7C3AED' },
            { ngoName: 'আল-খিদমত সেল', amount: 200, time: '১ ঘণ্টা আগে', color: '#0D9488' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 600,
          booked: 400,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'বিদ্যানন্দ ফাউন্ডেশন', amount: 400, time: '৩ ঘণ্টা আগে', color: '#7C3AED' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 300,
          booked: 150,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 150, time: '২ ঘণ্টা আগে', color: '#DC2626' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 200,
          booked: 50,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'আল-খিদমত সেল', amount: 50, time: '১ ঘণ্টা আগে', color: '#0D9488' }
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
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 600, time: '৩ ঘণ্টা আগে', color: '#059669' },
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 250, time: '১ ঘণ্টা আগে', color: '#D97706' }
          ]
        },
        water: {
          name: 'খাবার পানি (গ্যালন)',
          total: 500,
          booked: 350,
          unit: 'গ্যালন',
          bookings: [
            { ngoName: 'আস-সুন্নাহ ফাউন্ডেশন', amount: 350, time: '২ ঘণ্টা আগে', color: '#059669' }
          ]
        },
        medical: {
          name: 'স্যালাইন ও জরুরি ওষুধ (কিট)',
          total: 250,
          booked: 250,
          unit: 'কিট',
          bookings: [
            { ngoName: 'বাংলাদেশ রেড ক্রিসেন্ট', amount: 250, time: '৩ ঘণ্টা আগে', color: '#DC2626' }
          ]
        },
        babyFood: {
          name: 'শিশু খাদ্য ও দুধ (প্যাক)',
          total: 180,
          booked: 90,
          unit: 'প্যাক',
          bookings: [
            { ngoName: 'মাস্তুল ফাউন্ডেশন', amount: 90, time: '১ ঘণ্টা আগে', color: '#D97706' }
          ]
        }
      }
    }
  ]
};
