// core version + navigation, pagination modules:
import {Swiper} from 'swiper';

export const SwiperMenuExport = () => {
  const swiperMenu = new Swiper('.service__nav', {            //инициализация слайдер 
    slidesPerView: 1,                               //и придание ему свойств

    breakpoints: {
      1024 : {
        enabled: false,
      }
    }
  });
}