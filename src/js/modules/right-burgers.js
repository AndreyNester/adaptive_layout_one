export const RightBurgersExports = () => { 
 const burgerRightWrapper = document.querySelector('.burger-right-wrapper');
 const wrapper = document.querySelector('.wrapper');

  //-----------burger-right-message------------

  const burgerRightMessageButtonOpen = document.querySelectorAll('.burger-right-message__button-open');
  const burgerRightMessageButtonClose = document.querySelector('.burger-right-message__button-close');

  for (let i=0 ; i<burgerRightMessageButtonOpen.length ; i++) {
    burgerRightMessageButtonOpen[i].addEventListener('click', function () {
      burgerRightWrapper.classList.toggle('burger-right-wrapper_mes-opened');
      wrapper.classList.add('right-burgered');
    });
  }

  burgerRightMessageButtonClose.addEventListener('click', function () {
    burgerRightWrapper.classList.toggle('burger-right-wrapper_mes-opened');
    wrapper.classList.remove('right-burgered');
  });

  document.addEventListener('click', function (e) {

    if (e.target.classList.contains('burger-right-wrapper') == true) {
      burgerRightWrapper.classList.remove('burger-right-wrapper_mes-opened');
      wrapper.classList.remove('right-burgered');
    }
    
  });

  //------------------burger-right-phone------------

  const burgerRightPhoneButtonOpen = document.querySelectorAll('.burger-right-phone__button-open');
  const burgerRightPhoneButtonClose = document.querySelector('.burger-right-phone__button-close');

  for (let i=0 ; i<burgerRightPhoneButtonOpen.length ; i++) {
    burgerRightPhoneButtonOpen[i].addEventListener('click', function () {
      burgerRightWrapper.classList.toggle('burger-right-wrapper_phone-opened');
      wrapper.classList.add('right-burgered');
    });
  }

  burgerRightPhoneButtonClose.addEventListener('click', function () {
    burgerRightWrapper.classList.toggle('burger-right-wrapper_phone-opened');
    wrapper.classList.remove('right-burgered');
  });

  document.addEventListener('click', function (e) {

    if (e.target.classList.contains('burger-right-wrapper') == true) {
      burgerRightWrapper.classList.remove('burger-right-wrapper_phone-opened');
      wrapper.classList.remove('right-burgered');
    }
  });
}