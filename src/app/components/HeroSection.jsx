import React from "react";
import ImagesSliderContainer from "./UI/ImagesSliderContainer";

const HeroSection = () => {
  return (
    <section className="bg-white mt-[6rem] ">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[475px] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800  lg:text-5xl"
            data-aos="zoom-in-up"
            >
              GOOD NEWS!
            </h1>
            <div className="mt-8 space-y-5"
               data-aos="fade-up"
               data-aos-duration="3000"
            >
              <p className="flex items-center -mx-2 text-teal-800 text-xl font-extrabold text-justify"
           
              >
              Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.

               
              </p>
             <p className="text-red-600 text-xl font-bold text-right"><em>John 11:25</em></p> 
            </div>
          </div>
       
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          {/*Church photos slider*/}
          <ImagesSliderContainer/>
     
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
