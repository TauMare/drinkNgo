const modalBtn = document.querySelector('.header__burger-btn');
const navNode = document.querySelector('.header__navigation');
const state = {
  modalOpened: false,
}

const render = () => {
  navNode.classList.remove('header__navigation_active');
  modalBtn.children[0].children[0].setAttribute('href', 'images/icons/stack.svg#menu');
  modalBtn.children[0].classList.remove('header__burger-icon_active')
  if(state.modalOpened) {
    navNode.classList.add('header__navigation_active');
    modalBtn.children[0].children[0].setAttribute('href', 'images/icons/stack.svg#close');
    modalBtn.children[0].classList.add('header__burger-icon_active')
  }
}

const init = () => {
  render();

  modalBtn.addEventListener('click', () => {
    if (state.modalOpened) {
      state.modalOpened = false;
    } else {
      state.modalOpened = true;
    }
    render();
  })
}

init();