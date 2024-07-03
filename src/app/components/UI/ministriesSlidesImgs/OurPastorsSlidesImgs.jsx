
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import './MinistriesSlidesImgs.css'


import { Navigation } from 'swiper/modules';



export default function OurPastorsSlidesImgs({ images = [] }) {
 
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images available</p>; 
  }
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className=""
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              // className="object-cover w-full mx-auto rounded-md lg:max-w-2xl  filter saturate-100"
          
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }