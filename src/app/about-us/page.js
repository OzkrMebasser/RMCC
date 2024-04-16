"use client";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      {/* Header section ABOUT US*/}
      <section className=" wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center"
          >
            About us
          </h2>

          <p
            className="md:text-body-md mb-6 font-semibold text-lg text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are a vibrant and expanding church community that steadfastly
            believes in the ongoing manifestation of divine miracles and wonders
            in the lives of those who earnestly seek the divine presence. Our
            congregation is dedicated to fostering an environment of faith and
            hope, where individuals are encouraged to cultivate a deeper
            relationship with God. We invite you to join us and experience the
            transformative power of faith and spiritual enrichment.
          </p>
        </header>
      </section>
      {/* Our pastors section*/}
      <section className="bg-white ">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-red-600 sm:text-4xl text-center"
          >
            Our Pastors
          </h2>
            <div className="mt-8 space-y-5">
              <p className="flex items-center text-teal-800 md:text-body-md mb-6 font-semibold text-lg text-justify">
              

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
            src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%20Pastors.jpeg?alt=media&token=d0c9ee69-1c67-43d2-a2b9-469156bd2dbc"
            alt="pastors photo"
          />
        </div>
      </div>
    </section>

      
      {/* <section className="bg-white ">
      <div className="bg-red-300 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-2/3 ">
       
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-red-600 sm:text-4xl text-center"
          >
            Our Pastors
          </h2>

            <div className="mt-8 space-y-5">
              <p className="  text-teal-800 md:text-body-md mb-6 font-semibold text-lg center  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               
              </p>
             
            </div>
          </div>
       
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/3">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
            src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pastors.jpg?alt=media&token=6e8eb841-619c-4773-8e48-468a0b60b97b"
            alt="pastors photo"
          />
        </div>
      
    </section> */}
    </>
  );
};

export default AboutUs;
