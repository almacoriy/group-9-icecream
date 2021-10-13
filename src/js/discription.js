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
(() => {
    const mod = {
      openDiscriptionBtn: document.querySelector('[data-discription-open-2]'),
      closeDiscriptionBtn: document.querySelector('[data-discription-close-2]'),
      discription: document.querySelector('[data-discription-2]'),
  };
    mod. openDiscriptionBtn.addEventListener('click', toggleMenu);
    mod. closeDiscriptionBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      mod.discription.classList.toggle('is-hidden');
    }
  })();
(() => {
    const prod = {
      openDiscriptionBtn: document.querySelector('[data-discription-open-3]'),
      closeDiscriptionBtn: document.querySelector('[data-discription-close-3]'),
      discription: document.querySelector('[data-discription-3]'),
  };
    prod. openDiscriptionBtn.addEventListener('click', toggleMenu);
    prod. closeDiscriptionBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      prod.discription.classList.toggle('is-hidden');
    }
  })();
