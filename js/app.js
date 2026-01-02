// Seleciona todos os botões com a classe .drum
const drumButtons = document.querySelectorAll('.drum');

// Adiciona evento de clique para cada botão
drumButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const key = this.textContent;
    playSound(key);
    animateButton(key);
  });
});

// Adiciona evento de teclado
document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  animateButton(key);
});

// Função principal para tocar os sons
function playSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      console.warn(`Tecla "${key}" não possui som associado.`);
  }
}

// Animação visual ao pressionar
function animateButton(key) {
  const activeButton = document.querySelector(`.${key}`);

  if (!activeButton) return;

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 150);
}

// Atualiza automaticamente o ano do footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
