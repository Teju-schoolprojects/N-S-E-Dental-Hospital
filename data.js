const clinicData = {
  basic: {
    clinicName: "N S E Dental Hospital",
    tagline: "25+ Years of Excellence in Advanced, Pain-Free & Affordable Dental Care",
    rating: "4.9",
    ratingCount: "597",
    claimed: true,
    yearsInBusiness: "2001",
    establishedYear: 2001,
    yearsExperience: new Date().getFullYear() - 2001, // 25 years
    highlights: [
      "RCT (Root Canal Treatment)",
      "Wisdom Tooth Extraction",
      "Bleeding Gums Treatment",
      "Wheelchair Accessible Facility"
    ]
  },
  contact: {
    phone: "9865521717",
    displayPhone: "+91 98655 21717",
    whatsapp: "919865521717",
    email: "contact@nsedentalhospital.com",
    fullAddress: "Nanna Sahib Street, Near Opposite to Angalamman Kovil, Palladam, Tamil Nadu 641664",
    area: "Nanna Sahib Street",
    landmark: "Opposite to Angalamman Kovil",
    city: "Palladam",
    state: "Tamil Nadu",
    pincode: "641664",
    geo: {
      lat: 10.9949429,
      lng: 77.2814034,
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.9949429,77.2814034"
    }
  },
  about: {
    summary: "When it comes to oral health, finding the right dental care provider is crucial. N S E Dental Hospital stands as a beacon of excellence in Palladam, offering a wide array of treatments to cater to all your dental needs with compassion and cutting-edge technology.",
    description: "Since 2001, N S E Dental Hospital has been dedicated to providing world-class dental care at prices accessible to everyone. Led by experienced dental specialists including Dr. Sathyamurthy and Dr. S. Rajeshwari, our clinic combines painless treatment techniques, modern equipment, and a warm patient-first atmosphere.",
    keyPoints: [
      "Welcoming New Patients Daily",
      "Expert Wisdom Tooth Extraction",
      "Painless Single-Sitting Root Canal (RCT)",
      "Comprehensive Gum & Periodontal Care",
      "Wheelchair Accessible Washrooms & Clinic",
      "Affordable Pricing (Up to 50% lower than Metro Clinics)"
    ]
  },
  doctors: [
    {
      id: "dr-sathyamurthy",
      name: "Dr. Sathyamurthy",
      designation: "Senior Lead Dentist & Specialist",
      qualification: "BDS, MDS (Endodontics & Implantology)",
      experience: "20+ Years Experience",
      specialties: ["Root Canal Specialist", "Dental Implants", "Complex Oral Surgery"],
      bio: "Highly praised by hundreds of families across Palladam and Coimbatore for extremely gentle, honest, and high-precision dental treatments.",
      rating: "5.0",
      image: null
    },
    {
      id: "dr-rajeshwari",
      name: "Dr. S. Rajeshwari",
      designation: "Dental Surgeon & Cosmetic Dentist",
      qualification: "BDS (Dental Surgery)",
      experience: "15+ Years Experience",
      specialties: ["Cosmetic Dentistry", "Preventive Care", "Bleeding Gums Treatment", "Pediatric Dentistry"],
      bio: "Dedicated dental surgeon focused on patient education, comfortable tooth extractions, preventive care, and smile restoration.",
      rating: "4.9",
      image: "dr_rajeshwari.jpg"
    }
  ],
  services: [
    {
      id: "rct",
      title: "Root Canal Treatment (RCT)",
      category: "Treatment",
      icon: "fa-tooth",
      image: "service_rct.jpg",
      shortDesc: "Painless single-visit or multi-visit root canal treatments to save infected or damaged natural teeth.",
      details: "Our specialists use micro-endodontic techniques and rotary systems for fast, painless root canals with long-lasting prosthetic crowns.",
      popular: false,
      estimatedCost: "₹2,500 - ₹4,500",
      metroCost: "₹6,000 - ₹12,000"
    },
    {
      id: "extraction",
      title: "Wisdom Tooth Extraction",
      category: "Treatment",
      icon: "fa-scissors",
      image: "service_extraction.jpg",
      shortDesc: "Gentle surgical extractions for impacted or painful wisdom teeth with minimal downtime.",
      details: "Advanced local anesthesia and traumatic extraction methods ensure smooth recovery and immediate relief from tooth impaction.",
      popular: false,
      estimatedCost: "₹1,800 - ₹3,500",
      metroCost: "₹4,500 - ₹9,000"
    },
    {
      id: "bleeding-gums",
      title: "Bleeding Gums & Gum Care",
      category: "Treatment",
      icon: "fa-heart-pulse",
      image: "service_gum_care.jpg",
      shortDesc: "Comprehensive therapy for gingivitis, bleeding gums, periodontitis, and bad breath.",
      details: "Thorough ultrasonic scaling, root planing, and personalized oral hygiene guidance to restore firm, healthy pink gums.",
      popular: false,
      estimatedCost: "₹800 - ₹1,800",
      metroCost: "₹2,500 - ₹5,000"
    },
    {
      id: "teeth-cleaning",
      title: "Ultrasonic Teeth Cleaning & Whitening",
      category: "Cosmetic",
      icon: "fa-sparkles",
      image: "service_cleaning.jpg",
      shortDesc: "Professional stain removal and enamel brightening for a radiant, confident smile.",
      details: "Removes stubborn tobacco, tea/coffee stains, and tartar buildup without enamel sensitivity.",
      popular: false,
      estimatedCost: "₹600 - ₹1,500",
      metroCost: "₹1,800 - ₹4,000"
    },
    {
      id: "crowns-bridges",
      title: "Dental Crowns & Bridges",
      category: "Prosthetics",
      icon: "fa-gem",
      image: "service_crowns.jpg",
      shortDesc: "Custom Zirconia and Ceramic crowns for structural restoration and natural aesthetics.",
      details: "Durable, color-matched prosthetics to replace missing teeth and reinforce weak teeth.",
      popular: false,
      estimatedCost: "₹3,000 - ₹7,000",
      metroCost: "₹7,500 - ₹18,000"
    },
    {
      id: "wheelchair-access",
      title: "Wheelchair Accessible Washroom & Facility",
      category: "Facilities",
      icon: "fa-wheelchair",
      image: null,
      shortDesc: "Barrier-free access for elderly patients and individuals with mobility requirements.",
      details: "Wide doorways, ramp access, and specialized accessible washrooms designed for maximum patient comfort.",
      popular: false,
      estimatedCost: "Free Complementary Facility",
      metroCost: "N/A"
    }
  ],
  photos: [
    {
      url: "slide1.jpg",
      thumb: "slide1.jpg",
      category: "Exterior",
      title: "Illuminated Hospital Signboard & Logo",
      alt: "N.S.E illuminated sign with Tamil text and red logo glowing against dark background",
      tags: ["others"],
      dimensions: "1200 x 801"
    },
    {
      url: "slide2.jpg",
      thumb: "slide2.jpg",
      category: "Interior",
      title: "Panoramic Interior View",
      alt: "Wide interior view of dental operatory",
      tags: ["interior", "With Review"],
      dimensions: "2000 x 934"
    },
    {
      url: "slide3.jpg",
      thumb: "slide3.jpg",
      category: "Interior",
      title: "Banner View - Clinic Operatory",
      alt: "Interior banner photo by owner",
      tags: ["interior", "By Owner"],
      dimensions: "1200 x 450"
    },
    {
      url: "slide4.jpg",
      thumb: "slide4.jpg",
      category: "Exterior",
      title: "Hospital Building View",
      alt: "NSE Dental Hospital exterior catalogue photo",
      tags: ["others"],
      dimensions: "1024 x 768"
    },
    {
      url: "slide5.jpg",
      thumb: "slide5.jpg",
      category: "Exterior",
      title: "Owner Uploaded Hospital Photo",
      alt: "NSE Dental Hospital owner photo",
      tags: ["others", "By Owner"],
      dimensions: "1200 x 900"
    },
    {
      url: "slide6.jpg",
      thumb: "slide6.jpg",
      category: "Interior",
      title: "Treatment Chair Close-up",
      alt: "Interior dental chair setup",
      tags: ["interior", "By User"],
      dimensions: "1200 x 801"
    },
    {
      url: "dr_rajeshwari.jpg",
      thumb: "dr_rajeshwari.jpg",
      category: "Facility",
      title: "Dr. S. Rajeshwari - Dental Surgeon",
      alt: "Dr. S. Rajeshwari Dental Surgeon in clinic office",
      tags: ["Doctor", "By Owner"],
      dimensions: "Authentic Photo"
    }
  ],
  reviews: [
    {
      author: "Pavi",
      date: "18th July, 2021",
      rating: 5,
      tag: "Worth Traveling",
      text: "I have visited many dentists in Coimbatore... one of my friends referred me to NSE dental clinic Palladam. First I was hesitant to come here all the way from Coimbatore. But once I came here I felt it was really worth coming here. They have done the best Root canals and bridges at nearly half the price in Coimbatore. The ambience, care, painless treatment and what not? I would strongly recommend to all who seek the best dental treatment!"
    },
    {
      author: "Vinodurga",
      date: "27th November, 2024",
      rating: 5,
      tag: "Knowledgeable Doctors",
      text: "I recently visited N S E Dental Hospital and had a fantastic experience. The doctor was very knowledgeable and provided excellent care. The hospital was clean and hygienic, which made me feel comfortable. The customer service was great, and the staff were very friendly and helpful. I highly recommend this hospital for dental care."
    },
    {
      author: "Kiruthika",
      date: "5th April, 2021",
      rating: 5,
      tag: "Affordable Excellence",
      text: "Can't imagine such a great treatment at such affordable cost. I don't think any dentist can do such good treatment at such low cost. Soft spoken doctors explaining each and every procedure to the patient. Hats off to this team! I full heartedly recommend this clinic."
    },
    {
      author: "Nivetha",
      date: "7th February, 2025",
      rating: 5,
      tag: "Clean & Gentle Care",
      text: "I had an excellent experience at N S E Dental Hospital opposite to Angalamman Kovil in Palladam, Tirupur. The customer service was great, and the staff provided gentle care. The prices were reasonable, and the facility was clean and hygienic. The team was extremely supportive throughout my visit."
    },
    {
      author: "Oviya",
      date: "16th September, 2025",
      rating: 5,
      tag: "High Quality",
      text: "My experience at N S E Dental Hospital was excellent! The staff provided outstanding customer service, making me feel comfortable throughout my visit. The prices were very reasonable, which is a huge plus for quality dental care. The doctors were professional and attentive, ensuring I received the best treatment."
    },
    {
      author: "Lalitha",
      date: "2nd July, 2021",
      rating: 5,
      tag: "Family Doctor",
      text: "Excellent! We have an excellent Dr. Sathyamurthy for my family. He is taking care of us all. You are the best... Cheers Dr!"
    },
    {
      author: "Abinaya",
      date: "14th April, 2026",
      rating: 5,
      tag: "Honest & Genuine",
      text: "Superb clinic... very honest and genuine doctors! Thank you so much for the painless experience."
    },
    {
      author: "Vasanthi",
      date: "14th April, 2026",
      rating: 5,
      tag: "Very Honest",
      text: "Very Honest dentist... had excellent experience thank you so much."
    },
    {
      author: "Mani",
      date: "22nd February, 2026",
      rating: 5,
      tag: "Genuine Doctors",
      text: "Very genuine doctors, Excellent dental care."
    },
    {
      author: "Jose",
      date: "14th April, 2026",
      rating: 5,
      tag: "100% Satisfied",
      text: "I am very much satisfied with my treatment."
    }
  ],
  workingHours: {
    monday: "8:45 AM - 7:00 PM",
    tuesday: "8:45 AM - 7:00 PM",
    wednesday: "8:45 AM - 7:00 PM",
    thursday: "8:45 AM - 7:00 PM",
    friday: "8:45 AM - 7:00 PM",
    saturday: "8:45 AM - 7:00 PM",
    sunday: "Closed"
  },
  payments: [
    { name: "Visa / MasterCard / RuPay", icon: "fa-credit-card" },
    { name: "UPI / GPay / PhonePe", icon: "fa-mobile-screen-button" },
    { name: "Cash", icon: "fa-money-bill-wave" },
    { name: "Cheque / Demand Draft", icon: "fa-money-check" }
  ],
  faqs: [
    {
      question: "Where is N S E Dental Hospital located in Palladam?",
      answer: "We are located at Nanna Sahib Street, near opposite to Angalamman Kovil, Palladam, Tamil Nadu 641664."
    },
    {
      question: "What are the clinic timings?",
      answer: "We are open Monday through Saturday from 8:45 AM to 7:00 PM. We are closed on Sundays, but emergency contact is available."
    },
    {
      question: "Are treatments painful at N S E Dental Hospital?",
      answer: "No. Our experienced doctors, Dr. Sathyamurthy and Dr. S. Rajeshwari, specialize in gentle, painless techniques using advanced local anesthetics so patients remain comfortable throughout their procedures."
    },
    {
      question: "Is the clinic wheelchair accessible?",
      answer: "Yes, N S E Dental Hospital features ground-level accessible entry, wide corridors, and wheelchair-accessible washrooms for patients with mobility requirements."
    },
    {
      question: "How do your treatment prices compare to Coimbatore or big city hospitals?",
      answer: "As noted in many patient reviews, our treatments (including Root Canal and Crowns) are priced up to 50% lower than metro clinics in Coimbatore without compromising on material quality or sterile standards."
    },
    {
      question: "Do I need an appointment before visiting?",
      answer: "Walk-ins are welcomed, but we recommend booking an appointment online or over phone (+91 98655 21717) to minimize wait times."
    }
  ]
};
