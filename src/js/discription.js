(() => {
    const refs = {
      openDiscriptionBtn: document.querySelector('[data-discription-open]'),
      closeDiscriptionBtn: document.querySelector('[data-discription-close]'),
      discription: document.querySelector('[data-discription]'),
    };
  
    refs. openDiscriptionBtn.addEventListener('click', toggleMenu);
    refs. closeDiscriptionBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.discription.classList.toggle('is-hidden');
    }
  })();