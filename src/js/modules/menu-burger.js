export const MenuBugerExport = () => {  
 const menuBurgerButtonOpen = document.querySelector('.menu-burger-button-open');
  const menuBurgerButtonClose = document.querySelector('.menu-burger-button-close');
  const wrapper = document.querySelector('.wrapper');



  const menuWrapper = document.querySelector('.menu__wrapper');


  menuBurgerButtonOpen.addEventListener('click', function () {
    menuWrapper.classList.toggle('menu__wrapper_opened');
    wrapper.classList.add('menu-burgered');
  });


  menuBurgerButtonClose.addEventListener('click', function () {
    menuWrapper.classList.toggle('menu__wrapper_opened');
    wrapper.classList.remove('menu-burgered');
  });

  document.addEventListener('click', function (e) {

    if (e.target.classList.contains('menu__wrapper_opened') == true) {
      menuWrapper.classList.toggle('menu__wrapper_opened');
      wrapper.classList.remove('menu-burgered');
    }
    
  });
}