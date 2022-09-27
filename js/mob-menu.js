(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const menuBtnOpen = document.querySelector('.js-btn-menu-open');
    const menuBtnClose = document.querySelector('.js-btn-menu-close');
  
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');
    };
  
    menuBtnOpen.addEventListener('click', toggleMenu);
    menuBtnClose.addEventListener('click', toggleMenu);
  })();