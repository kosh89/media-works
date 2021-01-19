const modal = () => {
  const ESC_CODE = 27;
  const ACTIVE_CLASS = 'active';
  const SCROLL_LOCK_CLASS = 'scroll-lock';

  const bodyElement = document.querySelector('body');
  const loginButtonElement = document.querySelector('.js-login');
  const modalElement = document.querySelector('.js-modal');
  const modalCloseElement = document.querySelector('.js-modal-close');
  const modalFadeElement = document.querySelector('.modal__fade');

  const onModalEscPress = (event) => {
    if (event.keyCode === ESC_CODE) {
      closeModal();
    }
  };

  const onModalFadeClick = (event) => {
    if (event.target === modalFadeElement) {
      closeModal();
    }
  };

  const openModal = () => {
    modalElement.classList.add(ACTIVE_CLASS);
    bodyElement.classList.add(SCROLL_LOCK_CLASS);
    window.addEventListener('keydown', onModalEscPress);
  };

  const closeModal = () => {
    modalElement.classList.remove(ACTIVE_CLASS);
    bodyElement.classList.remove(SCROLL_LOCK_CLASS);
    window.removeEventListener('keydown', onModalEscPress);
  };

  loginButtonElement.addEventListener('click', openModal);
  modalCloseElement.addEventListener('click', closeModal);
  modalFadeElement.addEventListener('mousedown', onModalFadeClick);
};

export {modal};
