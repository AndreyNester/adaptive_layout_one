// core version + navigation, pagination modules:
import {Swiper} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const SwiperBrandsExport = () => {

  console.log('swiperBrandsWorks');
  const BrandSwiper = new Swiper('.brands__swiper', {            //инициализация слайдер
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


  let brandsItem = document.querySelectorAll('.brands__item');

  if (window.innerWidth > 1119) {                         //Скрываем ссылки с логотипами
    for (let i = 8; i < brandsItem.length; i++) {         //т.о., чтоб при типовом расширении
      brandsItem[i].classList.add('hidden');           //экрана были видны первые 2 строки
    }                                                     //сетки
  } else if(window.innerWidth > 767) {
    for (let i = 6; i < brandsItem.length; i++) {
      brandsItem[i].classList.add('hidden');
    }
  }

  let brandsButtonShow = document.querySelector('.brands__button-show');

  brandsButtonShow.addEventListener('click', function () {                 //по клику мышкой (или пальцем) запускаем цепь событий
    if (brandsButtonShow.classList.contains('brands__button_hiden') == true) {         // которые заключаются в проверке в каком состоянии сейчас сетка
    
      brandsButtonShow.classList.remove('brands__button_hiden');           //если сетка закрыта, тогда у кнопки удаляется класс
      brandsButtonShow.querySelector('span').textContent = 'Показать все'; //в стилях которых содержался display:none и меняется текст кнопки. 

      if (window.innerWidth > 1119) {
        for (let i = 8; i < brandsItem.length; i++) {                       //
          brandsItem[i].classList.add('hidden');
        }
      } else if(window.innerWidth > 767) {
        for (let i = 6; i < brandsItem.length; i++) {
          brandsItem[i].classList.add('hidden');
        }
      }

    }else {

      brandsButtonShow.classList.add('brands__button_hiden');            //иначе (сетка открыта) кнопке присваевается класс с dispplay:none
      brandsButtonShow.querySelector('span').textContent = 'Скрыть';     //и меняется текст на "скрыть".

      if (window.innerWidth > 1119) {
        for (let i = 8; i < brandsItem.length; i++) {
          brandsItem[i].classList.remove('hidden');
        }
      } else if(window.innerWidth > 767) {
        for (let i = 6; i < brandsItem.length; i++) {
          brandsItem[i].classList.remove('hidden');
        }
      }
    }

  });
}