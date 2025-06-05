window.addEventListener('load', function () {
  // Mostrar menú con transición
  const menu = document.getElementById('menu');
  menu.style.opacity = '1';
  menu.style.transform = 'translateY(0)';

  // Expandir fondo animado
  const bg = document.getElementById('animated-bg');
  bg.style.width = '100%';

  // Generar estrellas dinámicamente
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    bg.appendChild(star);
  }

  // Detener la animación del título después de 15 segundos (rendimiento)
  const title = document.querySelector('h1');
  setTimeout(() => {
    title.style.animation = 'none';
  }, 15000);
});
