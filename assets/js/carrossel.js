const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100; // Move o carrossel
  slides.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length; // Volta ao início se passar do último
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Inicia o carrossel automaticamente
setInterval(nextSlide, 3000); // Troca a cada 3 segundos

// Mostra o slide inicial
showSlide(currentIndex);
