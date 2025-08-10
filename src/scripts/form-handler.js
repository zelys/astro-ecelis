// form-handler.js - Manejo del formulario de contacto
export function initFormHandler() {
  const contactForm = document.querySelector('form[action*="formspree"]');

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;

      // Restaurar el botón después de unos segundos (Formspree maneja la redirección)
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }
}
