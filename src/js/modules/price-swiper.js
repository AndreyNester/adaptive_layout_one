  // core version + navigation, pagination modules:
import {Swiper} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
  
export const SwiperPriceExport = () => {
  const priceSwiper = new Swiper('.price__swiper', {            //инициализация слайдер
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
}