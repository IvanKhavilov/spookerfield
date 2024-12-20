const btnNext = document.querySelector('.button__next')
const btnPrev = document.querySelector('.button__prev')
const slides = document.querySelectorAll('.slider__item')

let index = 0

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}
const prepareCurrentSlide = (ind) => {
  activeSlide(index)
}
const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0
    prepareCurrentSlide()
  } else {
    index++
    prepareCurrentSlide()
  }
}
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    prepareCurrentSlide()
  } else {
    index--
    prepareCurrentSlide()
  }
}
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
