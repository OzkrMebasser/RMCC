import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white ">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800  lg:text-5xl">
              GOOD NEWS!
            </h1>
            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-teal-800 text-xl font-extrabold">
                For God so loved the world, that he gave his only
                begotten Son, that whosoever believeth in him should not perish,
                but have everlasting life.
              </p>
            </div>
          </div>
       
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
            src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pastors.jpg?alt=media&token=6e8eb841-619c-4773-8e48-468a0b60b97b"
            alt="pastors photo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
