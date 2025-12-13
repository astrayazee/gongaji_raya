document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("menuOverlay");

  function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
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

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("navbar-logo");

  if (!navbar || !logo) return;

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
  if (!particleContainer) return;

  const numParticles = 40;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = (20 + Math.random() * 60) + "vh";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.animationDuration = (5 + Math.random() * 5) + "s";

    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particleContainer.appendChild(particle);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".card-fitur");
  const dots = document.querySelectorAll(".fitur-pagination .dot");
  if (!slides.length) return;

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


document.querySelectorAll(".fitur-text .lihat-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const fiturText = link.closest(".fitur-text");
    fiturText.classList.toggle("is-open");

    link.textContent = fiturText.classList.contains("is-open")
      ? "Tutup"
      : "Lihat Selengkapnya";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const monthlyBtn = document.getElementById("monthlyBtn");
  const yearlyBtn = document.getElementById("yearlyBtn");
  const premiumPrice = document.getElementById("premiumPrice");
  const premiumLabel = document.querySelector(".label-premium");
  const premiumDesc = document.getElementById("premiumDesc");
  const toggleContainer = document.querySelector(".toggle-subscription");
  const introText = document.querySelector(".intro-text-subscription");

  if (!monthlyBtn || !yearlyBtn) return;

  const promoLabel = document.createElement("div");
  promoLabel.classList.add("promo-label");
  promoLabel.textContent = "Save Up To 15.5%";

  function setMonthly() {
    premiumPrice.textContent = "49.900";
    premiumLabel.textContent = "MONTHLY";
    premiumDesc.textContent = "Paket terpopuler dengan fitur lengkap untuk pembelajaran optimal";

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    if (introText?.contains(promoLabel)) {
      promoLabel.remove();
    }
  }

  function setYearly() {
    premiumPrice.textContent = "500.000";
    premiumLabel.textContent = "YEARLY";
    premiumDesc.textContent = "Paket terpopuler dengan fitur lengkap untuk pembelajaran optimal";

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    if (introText && !introText.contains(promoLabel)) {
      introText.insertBefore(promoLabel, toggleContainer);
    }
  }

  monthlyBtn.addEventListener("click", setMonthly);
  yearlyBtn.addEventListener("click", setYearly);

  setMonthly();
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const viewport = document.querySelector(".viewport");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");
  const dots = document.querySelectorAll(".pagination-test .dot");

  let cards = Array.from(document.querySelectorAll(".card-test"));
  const visible = 3;
  let index = 1;
  let autoplay;

  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);
  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  cards = Array.from(document.querySelectorAll(".card-test"));

  function cardStep() {
    return cards[0].offsetWidth + 19;
  }

  function setActive() {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    dots.forEach((d, i) =>
      d.classList.toggle("active", i === (index - 1 + dots.length) % dots.length)
    );
  }

  function move(animate = true) {
    track.style.transition = animate
      ? "transform 600ms cubic-bezier(.2,.9,.3,1)"
      : "none";

    track.style.transform = `translateX(-${(index - 1) * cardStep()}px)`;
    setActive();
  }

  function next() {
    index++;
    move();

    if (index === cards.length - 1) {
      setTimeout(() => {
        index = 1;
        move(false);
      }, 620);
    }
  }

  function prev() {
    index--;
    move();

    if (index === 0) {
      setTimeout(() => {
        index = cards.length - 2;
        move(false);
      }, 620);
    }
  }

  prevBtn.onclick = prev;
  nextBtn.onclick = next;

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = i + 1;
      move();
      restart();
    };
  });

  function start() {
    autoplay = setInterval(next, 5000);
  }

  function stop() {
    clearInterval(autoplay);
  }

  function restart() {
    stop();
    start();
  }

  viewport.addEventListener("mouseenter", stop);
  viewport.addEventListener("mouseleave", start);

  move(false);
  start();
});


document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const text = button.previousElementSibling;

    text.classList.toggle("expanded");

    button.textContent = text.classList.contains("expanded")
      ? "Tutup"
      : "Lihat Selengkapnya";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-pertanyaan");
    if (!btn) return;

    btn.addEventListener("click", () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});


