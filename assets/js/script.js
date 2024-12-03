document.addEventListener("DOMContentLoaded", function () {
  // Validação de Formulário
  const form = document.getElementById("contact-form");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const mensagemInput = document.getElementById("mensagem");

  const nomeError = document.getElementById("nome-error");
  const emailError = document.getElementById("email-error");
  const mensagemError = document.getElementById("mensagem-error");

  function showError(input, errorElement, message) {
    input.classList.add("error");
    errorElement.textContent = message;
  }

  function clearError(input, errorElement) {
    input.classList.remove("error");
    errorElement.textContent = "";
  }

  function validateNome() {
    if (nomeInput.value.trim().length < 3) {
      showError(nomeInput, nomeError, "Nome deve ter pelo menos 3 caracteres");
      return false;
    }
    clearError(nomeInput, nomeError);
    return true;
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      showError(emailInput, emailError, "E-mail inválido");
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  function validateMensagem() {
    if (mensagemInput.value.trim().length < 10) {
      showError(
        mensagemInput,
        mensagemError,
        "Mensagem deve ter pelo menos 10 caracteres"
      );
      return false;
    }
    clearError(mensagemInput, mensagemError);
    return true;
  }

  nomeInput.addEventListener("input", validateNome);
  emailInput.addEventListener("input", validateEmail);
  mensagemInput.addEventListener("input", validateMensagem);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNomeValid = validateNome();
    const isEmailValid = validateEmail();
    const isMensagemValid = validateMensagem();

    if (isNomeValid && isEmailValid && isMensagemValid) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });

  // Botão Scroll Top
  const scrollTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add("show");
    } else {
      scrollTop.classList.remove("show");
    }
  });

  scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Animações de Scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animated-card").forEach((card) => {
    observer.observe(card);
  });
});
