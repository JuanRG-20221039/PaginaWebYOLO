let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector(".carousel");
    const slideWidth = slides[0].clientWidth + 30; // Ajusta con los márgenes
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Función para cambiar la imagen automáticamente cada 3 segundos
function autoSlide() {
    currentSlide++;
    if (currentSlide == 7 ) { //cambiar si se añade una imagen mas
        currentSlide = 0;
    }
    updateCarousel();
}

// Iniciar el cambio automático de imágenes
setInterval(autoSlide, 2000); // Cambia la imagen cada 3 segundos

window.onload = function() {
    updateCarousel();
};
