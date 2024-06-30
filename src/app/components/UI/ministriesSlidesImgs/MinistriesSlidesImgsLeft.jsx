import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './MinistriesSlidesImgs.css'

// Import required modules
import { Navigation } from 'swiper/modules';

// const fakeImages = [
// "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16",
//     "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages2.jpeg?alt=media&token=6d903ac4-255b-4123-9c5a-1452b970d82e",
//     "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages3.jpeg?alt=media&token=1178c857-2caf-4a46-8f9f-eca1557dde72",
// ];

export default function MinistriesSlidesImgsLeft({ images = [] }) {
 
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images available</p>; 
  }
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full rounded-md mySwiper"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"

            
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }