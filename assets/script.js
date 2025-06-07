document.addEventListener('DOMContentLoaded', function () {
  // Función que se ejecuta cuando la ventana carga
  const menu = document.getElementById('menu');
  menu.style.opacity = '1';
  menu.style.transform = 'translateY(0)';

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

  // Funcionalidad del botón de menú
  const toggleBtn = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
    menuList.classList.toggle('active');
    menu.style.transform = `translateY(${expanded ? '-100%' : '0'})`;
  });
});