if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 100 },
      "color": { "value": "#ffdd00" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.6, "random": true },
      "size": { "value": 2, "random": true },
      "move": { "speed": 1, "direction": "top", "out_mode": "out" }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      }
    }
  });
} else {
  console.error("particles.js library is not loaded.");
}
