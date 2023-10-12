const imageNodes = document.querySelectorAll('.slider__image-container');
const stepNodes = document.querySelectorAll('.slider__control');
const controlBtns = document.querySelectorAll('.slider__button');

const nameNode = document.querySelector('.slider__title');
const subtextNode = document.querySelector('.slider__subtitle');

const state = {
  currentSlide: 0,
  buttons: {
    next: {
      active: true,
    },
    previous: {
      active: false,
    }
  },
  slides: [ {name: 'Декаф Флэт Уайт',
  text: 'Свежесваренный кофе без кофеина из Эфиопии <br>с натуральным фермерским молоком — то, что нужно<br> для расслабления после тяжёлого рабочего дня'},  {
    name: 'Лавандовый Латте',
    text: 'Невероятное сочетание перуанской высокогорной <br> арабики с молоком ламы и лавандовым сиропом унесёт<br> вас прямо на вершину Радужных гор',
  }, {
    name: 'Тройной Эспрессо',
    text: 'Мощнее укола адреналина, чернее самой тёмной ночи,<br> этот тройной эспрессо из Колумбии покажет вам, что такое<br> настоящая бодрость',
  }]
}

const render = () => {
  imageNodes.forEach((element) => {
    element.classList.remove('slider__image-container_active');
    element.querySelector('.slider__image').classList.remove('slider__image_active');
  })

  stepNodes.forEach((element) => {
    element.classList.remove('slider__control_active');
  })

  imageNodes.forEach((element, iterator) => {
    if (iterator === state.currentSlide) {
      element.classList.add('slider__image-container_active');
      element.querySelector('.slider__image').classList.add('slider__image_active');
      stepNodes[iterator].classList.add('slider__control_active');
      nameNode.textContent = state.slides[iterator].name;
      subtextNode.innerHTML = state.slides[iterator].text;
    }
  })

  if (state.currentSlide === 1) {
    controlBtns[0].disabled = false;
    controlBtns[1].disabled = false;
  }
  if (state.currentSlide === 0) {
    controlBtns[0].disabled = true;
    controlBtns[1].disabled = false;
  }
  if (state.currentSlide === 2) {
    controlBtns[1].disabled = true;
    controlBtns[0].disabled = false;
  }
}

const init = () => {
  render();
  controlBtns[1].addEventListener('click', () => {
    state.currentSlide = state.currentSlide + 1;
    render();
  });
  controlBtns[0].addEventListener('click', () => {
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

