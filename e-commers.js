const slider = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderLength = sliderItems.length;
let currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderLength) {
        currentSlide =0;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000);