// core version + navigation, pagination modules:
import {Swiper} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const SwiperFixExport = () => {
  const fixSwiper = new Swiper('.fix__swiper', {            //инициализация слайдер
    modules: [Navigation, Pagination],
    slidesPerView: 2,                                       //и придание ему свойств
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      767 : {
        enabled: false,
      }
    }
  });


  let fixItem = document.querySelectorAll('.fix__item');

  if (window.innerWidth > 1119) {                         //Скрываем ссылки с логотипами
    for (let i = 4; i < fixItem.length; i++) {         //т.о., чтоб при типовом расширении
      fixItem[i].classList.add('hidden');           //экрана были видны первые 2 строки
    }                                                     //сетки
  } else if(window.innerWidth > 767) {
    for (let i = 3; i < fixItem.length; i++) {
      fixItem[i].classList.add('hidden');
    }
  }

  let fixButtonShow = document.querySelector('.fix__button-show');

  fixButtonShow.addEventListener('click', function () {                 //по клику мышкой (или пальцем) запускаем цепь событий
    if (fixButtonShow.classList.contains('fix__button_hiden') == true) {         // которые заключаются в проверке в каком состоянии сейчас сетка
    
      fixButtonShow.classList.remove('fix__button_hiden');           //если сетка закрыта, тогда у кнопки удаляется класс
      fixButtonShow.querySelector('span').textContent = 'Показать все'; //в стилях которых содержался display:none и меняется текст кнопки. 

      if (window.innerWidth > 1119) {
        for (let i = 4; i < fixItem.length; i++) {                       //
          fixItem[i].classList.add('hidden');
        }
      } else if(window.innerWidth > 767) {
        for (let i = 3; i < fixItem.length; i++) {
          fixItem[i].classList.add('hidden');
        }
      }

    }else {

      fixButtonShow.classList.add('fix__button_hiden');            //иначе (сетка открыта) кнопке присваевается класс с dispplay:none
      fixButtonShow.querySelector('span').textContent = 'Скрыть';     //и меняется текст на "скрыть".

      if (window.innerWidth > 1119) {
        for (let i = 4; i < fixItem.length; i++) {
          fixItem[i].classList.remove('hidden');
        }
      } else if(window.innerWidth > 767) {
        for (let i = 3; i < fixItem.length; i++) {
          fixItem[i].classList.remove('hidden');
        }
      }
    }
  });
}