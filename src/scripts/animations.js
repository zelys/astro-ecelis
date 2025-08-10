// animations.js - Manejo de animaciones
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos para animaciones
  const animatedElements = document.querySelectorAll(
    ".card, .tech-category, .project-card"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Animar elementos que ya están visibles al cargar
  setTimeout(() => {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        el.classList.add("animate-in");
      }
    });
  }, 100);
}

export function initTypingEffect() {
  const subtitle = document.querySelector(".hero-text .subtitle");
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";
    subtitle.style.borderRight = "2px solid var(--primary-blue)";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          subtitle.style.borderRight = "none";
        }, 1000);
      }
    };

    setTimeout(typeWriter, 1000);
  }
}
