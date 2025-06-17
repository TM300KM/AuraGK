document.addEventListener("DOMContentLoaded", function() {
  if (typeof particlesJS === "function") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: { enable: true, speed: 1.5 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      retina_detect: true
    });
  } else {
    console.error("particlesJS is not defined. Make sure particles.js is loaded.");
  }
});
