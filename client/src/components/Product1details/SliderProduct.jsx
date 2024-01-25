import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';
import {Pagination, Navigation } from 'swiper/modules';


export default function SliderProduct({ mainImg }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='laptop-slider-product-page'>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}

        className="mySwiper2"
      >
        {mainImg?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='mainImg'>
              <img src={item?.url} alt='product' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
      onSwiper={setThumbsSwiper}
      slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        navigation={true}
        loop={true}
        watchSlidesProgress={true}
        FreeMode={true}
        modules={[ Pagination, Navigation,FreeMode,Thumbs]}
        className="mySwiper"
      >
        {mainImg?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='mainImg1'>
              <img src={item?.url} alt='product' />
              
            </div>
            

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
