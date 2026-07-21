// N S E Dental Hospital - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroBgSlider();
  initMarqueeSlider();
  renderServices();
  initCalculator();
  renderDoctors();
  renderGallery();
  renderReviews();
  renderFAQs();
  initBookingForm();
  setMinBookingDate();
});

/* Navigation & Mobile Drawer */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (navLinks.classList.contains('mobile-open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        toggleBtn.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  // Active Link Highlight on Scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

/* Hero Background Photo/Video Slideshow Loop */
function initHeroBgSlider() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  if (!slides || slides.length === 0) return;

  let currentSlide = 0;
  setInterval(() => {
    // Phase out current slide
    slides[currentSlide].classList.remove('active');
    
    // Increment to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Phase in next slide with Ken Burns effect
    slides[currentSlide].classList.add('active');
  }, 5000);
}

/* Automated Continuous Infinite Side-by-Side Marquee Slider */
function initMarqueeSlider() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  const target6Images = [
    {
      url: "slide1.jpg",
      title: "Illuminated Hospital Signboard & Logo"
    },
    {
      url: "slide2.jpg",
      title: "Panoramic Interior View"
    },
    {
      url: "slide3.jpg",
      title: "Banner View - Clinic Operatory"
    },
    {
      url: "slide4.jpg",
      title: "Hospital Building View"
    },
    {
      url: "slide5.jpg",
      title: "Owner Uploaded Hospital Photo"
    },
    {
      url: "slide6.jpg",
      title: "Treatment Chair Close-up"
    }
  ];

  const doubleList = [...target6Images, ...target6Images];

  track.innerHTML = doubleList.map(img => `
    <div class="marquee-card" onclick="openLightbox('${img.url}', '${img.title}')">
      <img src="${img.url}" alt="${img.title}" loading="lazy">
    </div>
  `).join('');
}

/* Render Services Grid with 3D Medical Treatment Images */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container || !clinicData.services) return;

  container.innerHTML = clinicData.services.map(service => `
    <div class="service-card ${service.popular ? 'popular' : ''}">
      ${service.image ? `
        <div class="service-img-wrapper">
          <img src="${service.image}" alt="${service.title}" loading="lazy">
        </div>
      ` : ''}
      <div class="service-header">
        <div class="service-icon">
          <i class="fa-solid ${service.icon}"></i>
        </div>
        <div class="service-title-box">
          <span class="service-category">${service.category}</span>
          <h3>${service.title}</h3>
        </div>
      </div>
      <div class="service-body">
        <p>${service.shortDesc}</p>
        <p style="font-size:0.85rem; color:var(--text-muted);">${service.details}</p>
      </div>
      <div class="service-pricing">
        <span>NSE Estimated Cost:</span>
        <strong>${service.estimatedCost}</strong>
      </div>
      <div class="service-footer">
        <button class="btn btn-outline btn-sm" style="width:100%;" onclick="openBookingForService('${service.title}')">
          <i class="fa-regular fa-calendar-check"></i> Book ${service.title.split(' ')[0]}
        </button>
      </div>
    </div>
  `).join('');
}

/* Treatment Savings Calculator */
function initCalculator() {
  const select = document.getElementById('calcServiceSelect');
  const nseCostEl = document.getElementById('calcNseCost');
  const metroCostEl = document.getElementById('calcMetroCost');
  const savingsEl = document.getElementById('calcSavings');

  if (!select || !clinicData.services) return;

  // Populate Select Options
  const eligibleServices = clinicData.services.filter(s => s.category !== 'Facilities');
  select.innerHTML = eligibleServices.map(s => `
    <option value="${s.id}">${s.title}</option>
  `).join('');

  function updateSavings() {
    const selectedId = select.value;
    const item = clinicData.services.find(s => s.id === selectedId);
    if (item) {
      nseCostEl.textContent = item.estimatedCost;
      metroCostEl.textContent = item.metroCost;

      // Extract numeric average for savings estimate
      const nseAvg = parseAvgPrice(item.estimatedCost);
      const metroAvg = parseAvgPrice(item.metroCost);
      const diff = Math.max(0, metroAvg - nseAvg);
      
      if (diff > 0) {
        savingsEl.textContent = `₹${diff.toLocaleString('en-IN')}`;
      } else {
        savingsEl.textContent = "Great Value!";
      }
    }
  }

  select.addEventListener('change', updateSavings);
  updateSavings(); // Initial trigger
}

function parseAvgPrice(priceStr) {
  if (!priceStr || priceStr.includes('Free') || priceStr.includes('N/A')) return 0;
  const numbers = priceStr.match(/\d+/g);
  if (!numbers) return 0;
  const cleanedNums = numbers.map(n => parseInt(n, 10));
  const sum = cleanedNums.reduce((acc, curr) => acc + curr, 0);
  return Math.round(sum / cleanedNums.length);
}

/* Render Doctors Section */
function renderDoctors() {
  const container = document.getElementById('doctorsGrid');
  if (!container || !clinicData.doctors) return;

  container.innerHTML = clinicData.doctors.map(doc => {
    const imageHeaderHtml = doc.image ? `
      <div class="doctor-img-box">
        <img src="${doc.image}" alt="${doc.name}">
        <div class="doctor-badge">
          <i class="fa-solid fa-star"></i> ${doc.rating} Rating
        </div>
      </div>
    ` : `
      <div class="doctor-header-box">
        <div class="doctor-avatar-circle">
          <i class="fa-solid fa-user-doctor"></i>
        </div>
        <div class="doctor-badge">
          <i class="fa-solid fa-star"></i> ${doc.rating} Rating
        </div>
      </div>
    `;

    return `
      <div class="doctor-card">
        ${imageHeaderHtml}
        <div class="doctor-info">
          <h3>${doc.name}</h3>
          <div class="doctor-title">${doc.designation}</div>
          <div class="doctor-qual">${doc.qualification} • ${doc.experience}</div>
          
          <div class="doctor-specialties">
            ${doc.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join('')}
          </div>
          
          <p class="doctor-bio">${doc.bio}</p>
          
          <button class="btn btn-primary" style="width:100%;" onclick="openBookingForDoctor('${doc.name}')">
            <i class="fa-regular fa-calendar-check"></i> Book Consultation
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* Render Automated Side-by-Side Photo Gallery Slider */
function renderGallery() {
  const track = document.getElementById('gallerySliderTrack');
  const dotsContainer = document.getElementById('gallerySliderDots');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const wrapper = document.getElementById('gallerySliderWrapper');
  const filtersContainer = document.getElementById('galleryFilters');

  if (!track || !clinicData.photos) return;

  let currentCategory = 'All';
  let currentIndex = 0;
  let autoTimer = null;

  function getFilteredPhotos() {
    if (currentCategory === 'All') return clinicData.photos;
    return clinicData.photos.filter(p => p.category === currentCategory);
  }

  function getVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function maxIndex() {
    const photos = getFilteredPhotos();
    return Math.max(0, photos.length - getVisibleCount());
  }

  function updateDots() {
    if (!dotsContainer) return;
    const totalDots = maxIndex() + 1;
    dotsContainer.innerHTML = Array.from({ length: totalDots }).map((_, i) => `
      <div class="slider-dot ${i === currentIndex ? 'active' : ''}" onclick="goToGallerySlide(${i})"></div>
    `).join('');
  }

  function goToGallerySlide(index) {
    currentIndex = Math.min(Math.max(0, index), maxIndex());
    const card = track.querySelector('.slide-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // Card width + gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateDots();
  }

  window.goToGallerySlide = goToGallerySlide;

  function buildSlides() {
    const photos = getFilteredPhotos();
    currentIndex = 0;
    track.style.transform = 'translateX(0px)';

    // Clean image cards with ZERO text overlays or marker badges on the images
    track.innerHTML = photos.map(photo => `
      <div class="slide-card" onclick="openLightbox('${photo.url}', '${photo.title || photo.category}')">
        <div class="slide-img-wrapper">
          <img src="${photo.url}" alt="${photo.title || 'Clinic Photo'}" loading="lazy">
        </div>
      </div>
    `).join('');

    updateDots();
    restartTimer();
  }

  function restartTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goToGallerySlide(currentIndex >= maxIndex() ? 0 : currentIndex + 1);
    }, 3000);
  }

  // Filter Buttons
  if (filtersContainer) {
    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter');
        buildSlides();
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToGallerySlide(currentIndex - 1 < 0 ? maxIndex() : currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToGallerySlide(currentIndex + 1 > maxIndex() ? 0 : currentIndex + 1);
    });
  }

  // Pause on hover
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      if (autoTimer) clearInterval(autoTimer);
    });
    wrapper.addEventListener('mouseleave', () => {
      restartTimer();
    });
  }

  window.addEventListener('resize', () => {
    goToGallerySlide(currentIndex);
  });

  buildSlides();
}

/* Render Reviews */
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container || !clinicData.reviews) return;

  container.innerHTML = clinicData.reviews.map(rev => `
    <div class="review-card">
      <div>
        <div class="review-header">
          <div class="review-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(rev.rating)}
          </div>
          <span class="review-tag">${rev.tag}</span>
        </div>
        <p class="review-text">"${rev.text}"</p>
      </div>
      <div class="review-author">
        <div class="author-avatar">${rev.author.charAt(0).toUpperCase()}</div>
        <div class="author-info">
          <strong>${rev.author}</strong>
          <span>Verified Patient • ${rev.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render FAQs Accordion */
function renderFAQs() {
  const container = document.getElementById('faqContainer');
  if (!container || !clinicData.faqs) return;

  container.innerHTML = clinicData.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${faq.question}</span>
        <div class="faq-icon"><i class="fa-solid fa-chevron-down"></i></div>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const faqItem = btn.parentElement;
  const isActive = faqItem.classList.contains('active');
  
  // Close all FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Toggle clicked item
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

/* Modal Controls */
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('active');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('active');
}

function openBookingForService(serviceTitle) {
  openBookingModal();
  const select = document.getElementById('treatmentSelect');
  if (select) {
    for (let opt of select.options) {
      if (opt.value.toLowerCase().includes(serviceTitle.toLowerCase()) || serviceTitle.toLowerCase().includes(opt.value.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }
}

function openBookingForDoctor(doctorName) {
  openBookingModal();
  const select = document.getElementById('doctorSelect');
  if (select) {
    for (let opt of select.options) {
      if (opt.value.includes(doctorName)) {
        opt.selected = true;
        break;
      }
    }
  }
}

/* Lightbox Modal */
function openLightbox(imgUrl, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (modal && img) {
    img.src = imgUrl;
    cap.textContent = caption;
    modal.classList.add('active');
  }
}

function closeLightboxModal() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

/* Booking Form Handling & WhatsApp Integration */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patientName').value;
    const phone = document.getElementById('patientPhone').value;
    const treatment = document.getElementById('treatmentSelect').value;
    const doctor = document.getElementById('doctorSelect').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const notes = document.getElementById('patientNotes').value;

    closeBookingModal();
    showToast(`Appointment Request Sent for ${name}! Opening WhatsApp confirmation...`);

    // Prepare WhatsApp Message
    const waText = encodeURIComponent(
      `*New Appointment Request - N S E Dental Hospital*\n\n` +
      `*Patient Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Treatment:* ${treatment}\n` +
      `*Preferred Doctor:* ${doctor}\n` +
      `*Requested Date:* ${date}\n` +
      `*Time Slot:* ${time}\n` +
      (notes ? `*Notes:* ${notes}` : '')
    );

    setTimeout(() => {
      window.open(`https://wa.me/919865521717?text=${waText}`, '_blank');
    }, 1200);

    form.reset();
  });
}

function setMinBookingDate() {
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

/* Toast Notification Utility */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color:#2dd4bf; font-size:1.2rem;"></i>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
