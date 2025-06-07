// Función que se ejecuta cuando la ventana carga
window.addEventListener('load', function () {
  // Mostrar menú con transición
  const menu = document.getElementById('menu');
  menu.style.opacity = '1';
  menu.style.transform = 'translateY(0)';

  // Expandir fondo animado
  const bg = document.getElementById('animated-bg');
  bg.style.width = '100%';

  // Generar estrellas dinámicamente
  const createStar = () => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    document.getElementById('animated-bg').appendChild(star);
  };

  for (let i = 0; i < 100; i++) {
    createStar();
  }

  // Efecto máquina de escribir para el título h1
  const title = document.querySelector('h1');
  if (title) {
    const fullText = title.textContent;
    title.textContent = ''; // Vaciar para la animación
    title.style.borderRight = '2px solid rgba(59, 14, 219, 0.66)'; // barra cursor

    let index = 0;
    const speed = 70; // ms entre letras

    const typeWriter = () => {
      if (index < fullText.length) {
        title.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        // Quitar barra de cursor cuando termina
        title.style.borderRight = 'none';
      }
    };

    typeWriter();
  }

  // Detener la animación del título después de 15 segundos
  setTimeout(() => {
    if (title) title.style.animation = 'none';
  }, 15000);
});
