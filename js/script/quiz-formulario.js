const quiz = document.getElementById("quiz");

if (quiz) {
  const enviar = document.getElementById("enviar");
  const tentar = document.getElementById("tentar");
  const perguntas = quiz.querySelectorAll("fieldset");
  const mensagem = document.getElementById("resultado");

  quiz.onchange = () => {
    enviar.disabled = !tentar.disabled ||
      quiz.querySelectorAll("input:checked").length !== perguntas.length;
  };

  quiz.onsubmit = (evento) => {
    evento.preventDefault();
    if (enviar.disabled) return;

    let acertos = 0;

    perguntas.forEach((pergunta) => {
      pergunta.querySelectorAll("input").forEach((opcao) => {
        if (opcao.value === pergunta.dataset.correta) {
          opcao.nextElementSibling.classList.add("text-success");
          if (opcao.checked) acertos++;
        } else if (opcao.checked) {
          opcao.nextElementSibling.classList.add("text-danger");
        }
      });
      pergunta.disabled = true;
    });

    enviar.disabled = true;
    tentar.disabled = false;
    mensagem.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    mensagem.classList.toggle("text-success", acertos >= 3);
    mensagem.classList.toggle("text-danger", acertos < 3);
    tentar.focus();
  };

  quiz.onreset = () => {
    perguntas.forEach((pergunta) => pergunta.disabled = false);
    quiz.querySelectorAll("label").forEach((label) => {
      label.classList.remove("text-success", "text-danger");
    });
    enviar.disabled = true;
    tentar.disabled = true;
    mensagem.textContent = "";
    quiz.querySelector("input").focus();
  };
}
