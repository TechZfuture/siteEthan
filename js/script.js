const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Número de slides visíveis ao mesmo tempo
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  scrollbar: {
    el: ".swiper-slide",
  },
  mousewheel: true,
  keyboard: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  }
});

const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav")

toggle.addEventListener("click", () => nav.classList.toggle("show"));

document.addEventListener("DOMContentLoaded", function () {
  // Função para animar os números
  function animateCounters() {
    var counters = document.querySelectorAll(".count");

    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute("data-target"));
      var step = Math.ceil(target / 100); // Ajuste o número de etapas conforme necessário

      function updateCounter() {
        var currentValue = parseInt(counter.textContent);
        if (currentValue < target) {
          counter.textContent = currentValue + step;
          setTimeout(updateCounter, 25); // Ajuste o intervalo conforme necessário
        } else {
          counter.classList.remove("counting");
        }
      }

      updateCounter();
    });
  }

  // Verifica se os elementos estão visíveis na tela
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Adiciona a classe "counting" quando os elementos estão visíveis
  function handleScroll() {
    var counters = document.querySelectorAll(".count");

    counters.forEach(function (counter) {
      if (isElementInViewport(counter) && !counter.classList.contains("counting")) {
        counter.classList.add("counting");
      }
    });
  }

  // Adiciona um ouvinte de evento de rolagem para verificar a animação dos números
  window.addEventListener("scroll", handleScroll);

  // Inicia a animação dos números quando a página é carregada
  animateCounters();
});

document.addEventListener("DOMContentLoaded", function () {
  var fraseIndex = 0;
  var frases = ["BPO T.I", "BPO FINANCEIRO", "ASSESSORIA EMPRESARIAL", "CONTROLADORIA E GESTÃO", "BPO CONTÁBIL"];
  var pTag = document.getElementById("fraseContainer");

  function changeFrase() {
      pTag.textContent = frases[fraseIndex];
      pTag.classList.remove("slideOut");
      pTag.classList.add("slideIn");

      setTimeout(function () {
          pTag.classList.remove("slideIn");
          pTag.classList.add("slideOut");
      }, 7000); // Duração da transição de saída

      setTimeout(function () {
          pTag.textContent = ""; // Limpa a frase após a transição de saída
      }, 8000); // Tempo total antes de iniciar a próxima transição

      fraseIndex = (fraseIndex + 1) % frases.length;
  }

  // Inicia com a primeira frase
  changeFrase();

  setInterval(changeFrase, 9000); // Muda a cada 9 segundos
});