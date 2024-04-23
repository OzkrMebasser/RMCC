import React from "react";

const MisionVision = () => {
  return (
    <>
    {/*OUR MISSION*/}
      <div className="bg-gradient-to-r from-[#5B0B5F] via-purple-700 to-slate-100 h-24 uppercase">
        <div className="px-6 py-8 container mx-auto  lg:px-6">
          <h2
            className=" font-black text-slate-100 text-2xl "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            OUR MISSION
          </h2>
        </div>
      </div>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto space-y-6">
          <p
            className="lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
           Reaching out to the lost with the true gospel of our Lord Jesus Christ. Restoring hope to the hopeless and resurrecting all the dead to life.
          </p>
        </div>
      </section>
      {/*OUR VISION*/}
      <div className="bg-gradient-to-r from-[#5B0B5F] via-purple-700 to-slate-100 h-24 uppercase">
        <div className="px-6 py-8 container mx-auto  lg:px-6">
          <h2
            className=" font-black text-slate-100 text-2xl "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            OUR VISION
          </h2>
        </div>
      </div>
      <section className="bg-white ">
        <div className="px-6 py-10 mx-auto space-y-6">
          <p
            className="lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
           A christian ministry mean to preach the living gospel of our Lord Jesus Christ to all the lost, bringing hope to the hopeless and everything that was dead back to life.
          </p>
        </div>
      </section>
    </>
  );
};

export default MisionVision;
