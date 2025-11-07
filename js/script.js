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


