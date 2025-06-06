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

const canvas = document.getElementById('tech-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let points = [];

const resize = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  points = [];
  const spacing = 100;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      points.push({ x: x + (Math.random() * 50 - 25), y: y + (Math.random() * 50 - 25) });
    }
  }
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);

  // Dibuja líneas entre puntos cercanos
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        ctx.strokeStyle = `rgba(0, 255, 153, ${1 - dist / 150})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
};

window.addEventListener('resize', resize);

resize();
draw();

const toggleBtn = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleBtn.setAttribute('aria-expanded', !expanded);
  menuList.classList.toggle('active');
  menu.style.transform = `translateY(${expanded ? '0' : '-100%'})`;
});