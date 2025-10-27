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
