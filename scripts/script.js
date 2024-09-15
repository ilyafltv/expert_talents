// Header Menu

let btn_burger = document.getElementById("btn-burger");

btn_burger.onclick = function () {
    document.querySelector(".header__navbar").classList.toggle("active");
}

// Reviews Slider

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = document.querySelector('.slides');
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < 1) ? currentSlide + 1 : 0;
    updateSlider();
});

function updateSlider() {
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}