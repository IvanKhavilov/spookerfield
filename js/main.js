$(document).ready(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: `<button type="button" class="slick-next button__next"><img class="button__icon" src="images/slider-btn.webp" width="65" height="65" loading="lazy" alt="button next" /></button>`,
    prevArrow: `<button type="button" class="slick-prev button__prev"><img class="button__icon" src="images/slider-btn.webp" width="65" height="65" loading="lazy" alt="button prev" /></button>`,
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu')
  const navMenu = document.getElementById('navMenu')
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
  })
})
