// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  }, 100); // Debounce for scroll
});


// Generate Particles
const particleContainer = document.getElementById('particles');

// Function to create particles dynamically
function createParticles() {
  
const particleCount = window.innerWidth < 768 ? 20 : 50; // Adjust particles for smaller screens
 // Number of particles
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
// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");


let isScrolling;
window.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {

  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

  }, 100); // Debounce for scroll
});


backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" 
  }, 100); // Debounce for scroll
});


  }, 100); // Debounce for scroll
});


// Save Dark Mode Preference
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Load Dark Mode Preference
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.opacity = 1;
        }
    });
});
