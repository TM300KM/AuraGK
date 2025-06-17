// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // fondo transparente para overlay
document.body.appendChild(renderer.domElement);
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '-1';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';

// Luzes doradas para efecto lujo
const light1 = new THREE.PointLight(0xffd700, 1.5, 200);
light1.position.set(50, 50, 50);
scene.add(light1);

const light2 = new THREE.AmbientLight(0x404040, 1.2);
scene.add(light2);

// Crear material metálico dorado para objetos
const goldMaterial = new THREE.MeshStandardMaterial({
  color: 0xffd700,
  metalness: 1,
  roughness: 0.2,
  emissive: 0x442a00,
  emissiveIntensity: 0.3
});

// Crear varios cubos 3D metálicos (ejemplo de "armamento" abstracto)
const cubes = [];
const cubeCount = 15;

for (let i = 0; i < cubeCount; i++) {
  const size = Math.random() * 1.5 + 0.5;
  const geometry = new THREE.BoxGeometry(size, size, size);
  const cube = new THREE.Mesh(geometry, goldMaterial);
  cube.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 20
  );
  cubes.push(cube);
  scene.add(cube);
}

// Posición cámara inicial
camera.position.z = 20;

// Animación de rotación y movimiento sutil de cubos
// (La función animate se define más abajo con interacción de mouse)

// Adaptar al redimensionar ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//Interacción con el mouse
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
  requestAnimationFrame(animate);

  cubes.forEach((cube, idx) => {
    cube.rotation.x += 0.005 + idx * 0.001;
    cube.rotation.y += 0.01 + idx * 0.002;
    cube.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.001;

    // Movimiento de cámara ligero con el mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
  });

  renderer.render(scene, camera);
}

// Iniciar la animación
animate();
