// scroll.js - Funcionalidades relacionadas con scroll
export function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = document.querySelector("nav").offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

export function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

export function initParallax() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById("inicio");
    const heroContent = heroSection?.querySelector(".hero-content");

    if (heroContent && scrolled <= window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}
