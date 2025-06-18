// background.js

document.addEventListener('DOMContentLoaded', function () {
  // Configuración básica de Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Crear una geometría y un material para las partículas
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    vertices.push(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Configurar la cámara
  camera.position.z = 5;

  // Función de animación
  function animate() {
    requestAnimationFrame(animate);

    // Rotar las partículas
    particles.rotation.x += 0.01;
    particles.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  // Manejar eventos de mouse y touch
  document.addEventListener('mousemove', onMouseMove, false);
  document.addEventListener('touchmove', onTouchMove, false);

  function onMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    particles.rotation.x = mouseY * 0.5;
    particles.rotation.y = mouseX * 0.5;
  }

  function onTouchMove(event) {
    const touch = event.touches[0];
    const touchX = (touch.clientX / window.innerWidth) * 2 - 1;
    const touchY = -(touch.clientY / window.innerHeight) * 2 + 1;
    particles.rotation.x = touchY * 0.5;
    particles.rotation.y = touchX * 0.5;
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