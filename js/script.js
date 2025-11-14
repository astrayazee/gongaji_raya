document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("navbar-logo");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.src = "https://gongaji.id/assets/images/gongaji-coloured.svg";
  } else {
    navbar.classList.remove("scrolled");
    logo.src = "assets/icons/gongaji-white.svg";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const particleContainer = document.getElementById("particles");
  const numParticles = 40; 

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";

    const y = 20 + Math.random() * 60;
    particle.style.top = y + "vh";

    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.animationDuration = 5 + Math.random() * 5 + "s";

    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particleContainer.appendChild(particle);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".card-fitur");
  const dots = document.querySelectorAll(".fitur-pagination .dot");
  let index = 0;
  const slideInterval = 10000;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.style.opacity = idx === i ? "1" : "0";
      slide.style.pointerEvents = idx === i ? "auto" : "none";
      slide.style.position = idx === i ? "relative" : "absolute";
      slide.style.zIndex = idx === i ? "1" : "0";
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  setInterval(nextSlide, slideInterval);
  showSlide(index);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("lihat-link")) {
    e.preventDefault();
    const parent = e.target.closest(".fitur-text");
    const deskLengkap = parent.querySelector(".desk-lengkap");
    const btn = e.target;

    deskLengkap.style.display = "inline";
    btn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const monthlyBtn = document.getElementById("monthlyBtn");
  const yearlyBtn = document.getElementById("yearlyBtn");

  const premiumPrice = document.getElementById("premiumPrice");
  const premiumLabel = document.querySelector(".label-premium");
  const premiumDesc = document.getElementById("premiumDesc");

  const promoLabel = document.createElement("div");
  promoLabel.classList.add("promo-label");
  promoLabel.textContent = "Save Up To 15.5%";

  const toggleContainer = document.querySelector(".toggle-subscription");
  const introText = document.querySelector(".intro-text-subscription");

  function setMonthly() {
    premiumPrice.textContent = "49.900";
    premiumLabel.textContent = "MONTHLY";
    premiumDesc.textContent = "Paket terpopuler dengan fitur lengkap untuk pembelajaran optimal";
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    if (introText.contains(promoLabel)) {
      promoLabel.remove();
    }
  }

  function setYearly() {
    premiumPrice.textContent = "500.000";
    premiumLabel.textContent = "YEARLY";
    premiumDesc.textContent = "Paket terpopuler dengan fitur lengkap untuk pembelajaran optimal";
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    if (!introText.contains(promoLabel)) {
      introText.insertBefore(promoLabel, toggleContainer);
    }
  }

  monthlyBtn.addEventListener("click", setMonthly);
  yearlyBtn.addEventListener("click", setYearly);

  setMonthly();
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-test");
  const dots = document.querySelectorAll(".pagination-test .dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;
  const visibleCards = 3;

  function updateSlider(index) {
    const track = document.querySelector(".slider-track");
    const offset = -index * (100 / visibleCards);
    track.style.transform = `translateX(${offset}%)`;

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index + 1);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateSlider(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateSlider(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      current = i;
      updateSlider(current);
    });
  });

  setInterval(() => {
    current = (current + 1) % cards.length;
    updateSlider(current);
  }, 6000);

  updateSlider(current);
});



