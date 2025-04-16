const html = document.documentElement;
const botaoTema = document.getElementById('botaoTema');

// tema
botaoTema.addEventListener('click', () => {
  if (html.getAttribute('data-tema') === 'escuro') {
    html.removeAttribute('data-tema');
    botaoTema.innerText = '🌙 Modo Escuro';
    localStorage.setItem('tema', 'claro');
  } else {
    html.setAttribute('data-tema', 'escuro');
    botaoTema.innerText = '☀️ Modo Claro';
    localStorage.setItem('tema', 'escuro');
  }
});

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
    html.setAttribute('data-tema', 'escuro');
    botaoTema.innerText = '☀️ Modo Claro';
  } else {
    botaoTema.innerText = '🌙 Modo Escuro';
  }
}

aplicarTemaSalvo();

// animação contador
function estaVisivel(elemento) {
    const rect = elemento.getBoundingClientRect();
    // Verifica se a parte superior do elemento está visível na tela
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

let animado = false;
function checarScroll() {
  const statsSection = document.getElementById('estatisticas');
  if (!animado && estaVisivel(statsSection)) {
    animarContador('Titulos', 4, 1000);
    animarContador('MVP', 2, 1000);
    animarContador('AllStar', 9, 1000);
    animarContador('Recorde', 3390, 1500);
    animado = true;
  }
}
window.addEventListener('scroll', checarScroll);

function animarContador(id, valorFinal, duracao) {
  const elemento = document.getElementById(id);
  let valorAtual = 0;
  const incremento = Math.ceil(valorFinal / (duracao / 50));

  const intervalo = setInterval(() => {
    valorAtual += incremento;
    if (valorAtual >= valorFinal) {
      elemento.textContent = valorFinal;
      clearInterval(intervalo);
    } else {
      elemento.textContent = valorAtual;
    }
  }, 50);
}