const quiz = document.getElementById("quiz-celular");
const botao = document.querySelector('[data-bs-target="#quiz-celular"]');
const flutuante = document.querySelector(".quiz-flutuante");
const rodape = document.querySelector("footer");
const desktop = window.matchMedia("(min-width: 768px)").matches;

quiz.classList.toggle("show", desktop);
botao.setAttribute("aria-expanded", String(desktop));

const limitarAoRodape = () => {
  const limite = Math.max(0, window.innerHeight - rodape.getBoundingClientRect().top);
  flutuante.style.setProperty("--limite-rodape", `${limite}px`);
};

window.addEventListener("scroll", limitarAoRodape, { passive: true });
window.addEventListener("resize", limitarAoRodape);
new ResizeObserver(limitarAoRodape).observe(document.body);
limitarAoRodape();