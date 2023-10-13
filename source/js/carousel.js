const sliderNode = document.querySelector('.slider')

const sliderNodes = document.querySelectorAll('.slider__slide-wrapper')
const stepNodes = document.querySelectorAll('.slider__control');
const controlNodes = document.querySelectorAll('.slider__button');

const state = {
  currentSlide: 0,
}

const render = () => {
  console.log(state.currentSlide)
  sliderNodes.forEach((element) => {
    element.classList.remove('slider__slide-wrapper--active')
  })

  stepNodes.forEach((element) => {
    element.classList.remove('slider__control--active');
  })

  sliderNode.classList.remove('slider--lavender');
  sliderNode.classList.remove('slider--espresso');

  sliderNodes.forEach((element, iterator) => {
    if (iterator === state.currentSlide) {
      element.classList.add('slider__slide-wrapper--active')
      stepNodes[iterator].classList.add('slider__control--active')
    }
  })

  if (state.currentSlide === 1) {
    controlNodes[0].disabled = false;
    controlNodes[1].disabled = false;
    sliderNode.classList.add('slider--lavender');
  }
  if (state.currentSlide === 0) {
    controlNodes[0].disabled = true;
    controlNodes[1].disabled = false;
  }
  if (state.currentSlide === 2) {
    controlNodes[1].disabled = true;
    controlNodes[0].disabled = false;
    sliderNode.classList.add('slider--espresso');
  }
}

const init = () => {
  render();
  controlNodes[1].addEventListener('click', () => {
    state.currentSlide = state.currentSlide + 1;
    render();
  });
  controlNodes[0].addEventListener('click', () => {
    state.currentSlide = state.currentSlide - 1
    render();
  })

  stepNodes.forEach((element, iterator) => {
    element.addEventListener('click', (e) => {
      e.target.blur();
      state.currentSlide = iterator;
      render();
    })
  })
}

init();
