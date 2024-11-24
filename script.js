// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Generate Particles
const particleContainer = document.getElementById('particles');

// Function to create particles dynamically
function createParticles() {
  const particleCount = 50; // Number of particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize position and animation duration
    const x = Math.random() * 100; // Random x position
    const y = Math.random() * 100; // Random y position
    const delay = Math.random() * 5; // Animation delay
    const duration = 6 + Math.random() * 4; // Animation duration

    particle.style.left = `${x}vw`;
    particle.style.top = `${y}vh`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();