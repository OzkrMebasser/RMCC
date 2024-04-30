import React from "react";

const Statements = ({ title, statement, parag1, parag2, parag3 }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#5B0B5F] via-purple-700 to-slate-100 h-24 uppercase">
        <div className="px-6 py-8 container mx-auto  lg:px-6">
          <h2
            className=" font-black text-slate-100 text-2xl "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* eg. OUR MISSION */}
            {title}
          </h2>
        </div>
      </div>
      <section className="bg-white ">
      {statement ? 
      (  <div className="px-6 py-10 mx-auto space-y-6">
      <p
        className="lg:px-6 md:text-body-md font-semibold text-lg text-justify text-red-600"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {statement}
      </p>
      {parag1 ? (
        <p
          className="lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {parag1}
        </p>
      ) : (<></>)}

{parag2 ? (
        <p
          className="lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {parag2}
        </p>
      ) : (<></>)}
 {parag3 ? (
        <p
          className="lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {parag3}
        </p>
      ): (<></>)}
    </div>):null 
    }
      
      </section>
    </>
  );
};

export default Statements;
