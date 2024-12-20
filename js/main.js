document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu')
  const navMenu = document.getElementById('navMenu')
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const btnNext = document.getElementById('button__next')
  const btnPrev = document.getElementById('button__prev')
  const slides = document.querySelectorAll('.slider__item')

  if (btnNext && btnPrev && slides.length > 0) {
    let index = 0

    const activeSlide = (n) => {
      slides.forEach((slide) => slide.classList.remove('active'))
      slides[n].classList.add('active')
    }

    const prepareCurrentSlide = () => {
      activeSlide(index)
    }

    const nextSlide = () => {
      index = index === slides.length - 1 ? 0 : index + 1
      prepareCurrentSlide()
    }

    const prevSlide = () => {
      index = index === 0 ? slides.length - 1 : index - 1
      prepareCurrentSlide()
    }

    btnNext.addEventListener('click', nextSlide)
    btnPrev.addEventListener('click', prevSlide)

    btnNext.addEventListener('click', () => {
      nextSlide()
    })

    btnPrev.addEventListener('click', () => {
      prevSlide()
    })
  } else {
    console.log('Slider elements not found on this page.')
  }
})
