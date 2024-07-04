import React from "react";

const OurValues = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#5B0B5F] via-purple-700 to-slate-100 h-24 uppercase">
        <div className="px-6 py-8 container mx-auto  lg:px-6">
          <h2
            className=" font-black text-slate-100 text-2xl "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/*OUR VALUES*/}
            OUR VALUES
          </h2>
        </div>
      </div>
      <section className="bg-white">
        <div className="container lg:h-[32rem] px-5 flex flex-col  mx-auto lg:py-16 lg:flex-row lg:items-center">
          {/* Text on the left side */}
          <div className="h-full lg:w-2/3 order-1 lg:order-2 lg:mr-[60px] mb-6 lg:mb-0">
            <h4 className="font-semibold italic text-red-700 text-xl mt-4" data-aos="fade-up"
              data-aos-delay="300">
              <strong> Galatians 5:22-23</strong>
            </h4>
            <p className="md:text-body-md font-semibold text-lg text-justify text-red-600"
            data-aos="fade-up"
              data-aos-delay="300"
            >
              But the fruit of the Spirit is love, joy, peace, forbearance,
              kindness, goodness, faithfulness, gentleness and self-control.
              Against such things there is no law.
            </p>
            <p className="md:text-body-md font-semibold pt-6 text-lg text-justify text-red-600"
            data-aos="fade-up"
              data-aos-delay="300"
            >
              At <strong>Resurrection Miracle Center Church</strong>, we are a
              welcoming community inspired by Galatians 5:22-23, embodying love,
              righteousness, generosity, courage, hope, peace, teamwork,
              integrity, and evangelism. We believe in the transformative power
              of love, embracing everyone and sharing God’s grace. Guided by
              righteousness and integrity, we reflect Christ’s light in our
              lives. Passionate about generosity and hope, we create a peaceful
              sanctuary for all. Unity drives our mission, and evangelism is at
              the heart of our ministry, spreading the Good News and
              transforming lives. Join us and experience how our faith and
              values make a profound impact on our community.
            </p>
          </div>
          <div className=" lg:mb-0 mb-8 flex items-center justify-center w-full h-full lg:w-1/3 order-1 lg:order-2 " data-aos="zoom-in-up">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FourValues.png?alt=media&token=d63c87fe-fb3d-412e-8425-aa0a84d1e466"
              alt="our values"
              className="object-cover w-full h-full lg:[16rem] mx-auto rounded-md filter saturate-100 hover:scale-105 transition-300 hover:animate-spin"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
