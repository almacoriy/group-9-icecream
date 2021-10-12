// Modal
(() => {
   const bodyClose = document.querySelector('body');
  const refs = {
    openModalBtn: document.querySelector('[data-modal-hero-open]'),
    openModalBtnTwo: document.querySelector('[data-modal-hero-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-hero-close]'),
    modal: document.querySelector('[data-modal-hero]'),
    
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnTwo.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    bodyClose.classList.toggle('overflowed');
  }
})();
// Modal-about
(() => {
   const bodyClose = document.querySelector('body');
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
    
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    bodyClose.classList.toggle('overflowed');
  }
})();

// Contacts-map
(() => {
   const bodyClose = document.querySelector('body');
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-close]'),
    modal: document.querySelector('[data-modal-map]'),
    
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    bodyClose.classList.toggle('overflowed');
  }
})();
