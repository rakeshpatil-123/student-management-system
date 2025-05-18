// Select elements
const carouselImages = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dot');

// Set variables
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const delay = 1500; // 1.5 seconds delay

// Function to update the carousel position and active dot
function updateCarousel() {
    // Update the transform property for smooth scrolling
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    // Update index for next iteration
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to first image
}

// Auto-scroll the carousel
setInterval(updateCarousel, delay);

// Add event listeners to dots for manual navigation (optional)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.style.display = "block";
            setTimeout(() => {
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }, 50); // Delay to trigger animation
        });

        dropdown.addEventListener("mouseleave", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menu.style.display = "none";
            }, 300); // Matches the CSS transition duration
        });
    });
});

