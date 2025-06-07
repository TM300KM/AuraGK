document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1.animated-title');
  const toggleBtn = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  if (title) {
    const fullText = "AuraGK";
    title.textContent = '';
    let index = 0;
    const speed = 120;

    const typeWriter = () => {
      if (index < fullText.length) {
        title.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        title.style.borderRight = 'none';
      }
    };
    typeWriter();
  }

  if (toggleBtn && menuList) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      menuList.classList.toggle('active');
    });
  }
});
