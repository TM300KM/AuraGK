document.addEventListener('DOMContentLoaded', function () {
  // Configuración básica de Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Hacer el renderizador transparente
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Crear una geometría y un material para las partículas
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const particleCount = 500; // Reducir la cantidad de partículas para mejorar el rendimiento
  for (let i = 0; i < particleCount; i++) {
    vertices.push(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 }); // Aumentar el tamaño de las partículas
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Configurar la cámara
  camera.position.z = 5;

  // Función de animación
  let rotationSpeed = 0.01;
  function animate() {
    requestAnimationFrame(animate);

    // Rotar las partículas suavemente
    particles.rotation.x += rotationSpeed;
    particles.rotation.y += rotationSpeed;

    renderer.render(scene, camera);
  }

  // Manejar eventos de mouse y touch
  let isMouseDown = false;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousedown', () => { isMouseDown = true; });
  document.addEventListener('mouseup', () => { isMouseDown = false; });
  document.addEventListener('mousemove', onMouseMove, false);
  document.addEventListener('touchstart', () => { isMouseDown = true; });
  document.addEventListener('touchend', () => { isMouseDown = false; });
  document.addEventListener('touchmove', onTouchMove, false);

  function onMouseMove(event) {
    if (isMouseDown) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      particles.rotation.x = mouseY * 0.5;
      particles.rotation.y = mouseX * 0.5;
    }
  }

  function onTouchMove(event) {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
      particles.rotation.x = mouseY * 0.5;
      particles.rotation.y = mouseX * 0.5;
    }
  }

  // Iniciar la animación
  animate();

  // Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});