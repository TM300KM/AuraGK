// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Productos de ejemplo (pueden cargarse desde data/products.json con fetch)
  const products = [
    {
      id: 1,
      name: 'Camiseta AuraGK',
      description: 'Camiseta 100% algodón, edición limitada.',
      price: 19.99,
      image: 'assets/images/camiseta.jpg',
    },
    {
      id: 2,
      name: 'Sudadera AuraGK',
      description: 'Sudadera cómoda con capucha.',
      price: 39.99,
      image: 'assets/images/sudadera.jpg',
    },
    {
      id: 3,
      name: 'Taza AuraGK',
      description: 'Taza de cerámica para café o té.',
      price: 9.99,
      image: 'assets/images/taza.jpg',
    },
    {
      id: 4,
      name: 'Gorra AuraGK',
      description: 'Gorra ajustable para cualquier ocasión.',
      price: 14.99,
      image: 'assets/images/gorra.jpg',
    },
  ];

  // Mostrar productos destacados en #product-list (primeros 2 productos)
  const productList = document.getElementById('product-list');
  products.slice(0, 2).forEach(product => {
    productList.appendChild(createProductCard(product));
  });

  // Mostrar catálogo completo en #catalog-list
  const catalogList = document.getElementById('catalog-list');
  products.forEach(product => {
    catalogList.appendChild(createProductCard(product));
  });

  // Carrito de compras (estado)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartUI();

  // Función para crear tarjetas de producto
  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
      <button data-id="${product.id}">Agregar al carrito</button>
    `;

    // Botón agregar al carrito
    card.querySelector('button').addEventListener('click', () => {
      addToCart(product.id);
    });

    return card;
  }

  // Añadir producto al carrito
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
  }

  // Actualizar UI carrito
  function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
      cartCount.textContent = '0';
      return;
    }

    cart.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="remove-btn" data-id="${item.id}">&times;</button>
      `;
      cartItems.appendChild(div);

      div.querySelector('.remove-btn').addEventListener('click', () => {
        removeFromCart(item.id);
      });
    });

    // Actualizar contador
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
  }

  // Eliminar producto del carrito
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
  }

  // Guardar carrito en localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Manejar formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    alert(`Gracias por contactarnos, ${name}. Te responderemos pronto.`);
    contactForm.reset();
  });

  // Animación fondo
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

});
