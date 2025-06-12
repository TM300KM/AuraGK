document.addEventListener('DOMContentLoaded', () => {
  console.log('Tienda cargada correctamente.');

  // Ejemplo de inicialización de componentes
  initializeComponents();

  // Ejemplo de configuración de eventos
  setupEventListeners();

  // Ejemplo de manipulación del DOM
  manipulateDOM();
});

function initializeComponents() {
  // Lógica para inicializar componentes de la tienda
  console.log('Componentes inicializados.');
}

function setupEventListeners() {
  // Configurar eventos, por ejemplo, un evento de clic en un botón
  const buttons = document.querySelectorAll('.product-card a');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const h3 = button.querySelector('h3');
      if (h3) {
        console.log('Producto seleccionado:', h3.textContent);
      } else {
        console.log('Producto seleccionado: título no encontrado');
      }
    });
  });
}

function manipulateDOM() {
  // Manipular el DOM, por ejemplo, cambiar el texto de un elemento
  const header = document.querySelector('header h1');
  if (header) {
    header.textContent = 'Nuestra Colección';
  }
}