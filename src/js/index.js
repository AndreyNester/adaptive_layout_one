import '../styles/index.scss'


//------swipers-------

import {SwiperMenuExport} from  './modules/service__menu-swiper'
import {SwiperBrandsExport} from  './modules/brands-swiper'
import {SwiperFixExport} from  './modules/fix-swiper'
import {SwiperPriceExport} from  './modules/price-swiper'

SwiperMenuExport();
SwiperBrandsExport();
SwiperFixExport();
SwiperPriceExport();

//--------burgers----------
import {ServiceReadMoreExport} from  './modules/service__read-more'
import {MenuBugerExport} from  './modules/menu-burger'
import {RightBurgersExports} from  './modules/right-burgers'

ServiceReadMoreExport();
MenuBugerExport();
RightBurgersExports();

