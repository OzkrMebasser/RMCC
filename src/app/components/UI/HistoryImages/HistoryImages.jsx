import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const HistoryImages = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  wave-patterns object-fill"
        
      >
        <SwiperSlide
        
        
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages1.jpeg?alt=media&token=0bde4e69-c8fc-45e7-bfd5-ca1412fa471e" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages2.jpeg?alt=media&token=c6eb3d38-4611-4027-ab8b-71abee6f00a8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages3.jpeg?alt=media&token=999033e6-42a6-4a82-9eb3-781926dc39f8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages4.jpeg?alt=media&token=5e7022ee-b5d3-4db2-8643-01f59a7ff431" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages5.jpeg?alt=media&token=e1ab9b30-be69-4de7-929e-a9eb1ca5204c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages6.jpeg?alt=media&token=63b7a356-f43d-4409-958f-62ec1715a649" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages7.jpeg?alt=media&token=754778de-ed9e-4b2e-9a7f-361fc0307784" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/historyImages%2FhistoryImages8.png?alt=media&token=60516275-c566-4e9c-9765-e1d1e0cb9719" />
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}

export default HistoryImages;