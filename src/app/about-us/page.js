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
      <section className="bg-white">
        {/* Our lead pastors */}
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
                  Geoffrey and Babrah are passionate about serving the body of
                  Christ and carrying on the great commission. They realized
                  that serving others is the best way to express God&apos;s love for
                  mankind. All the reasons he came on earth, died on the cross
                  and resurrected was to serve mankind through redemption. They
                  are committed to bring a story of hope to the church and
                  wherever God would lead them. They believe that John 11:25 is
                  the ultimate cause for their faith.
                </p>
                <p className="text-teal-700">
                  Babrah Ndiwalana Wanzama (Lead pastor) Geoffrey Ndiwalana
                  (Associate pastor)
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

      <section className="bg-teal-900">
        {/* Youth pastor */}
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center sm:flex-row-reverse">
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
              src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%20Pastors.jpeg?alt=media&token=d0c9ee69-1c67-43d2-a2b9-469156bd2dbc"
              alt="youth pastor photo"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:ml-[120px]">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-200 sm:text-4xl text-center"
              >
                Youth Pastor
              </h2>
              <div className="mt-8 space-y-5">
                <p className="text-white md:text-body-md mb-6 font-semibold text-lg text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-teal-200">Wangubo paddy (Youth Pastor)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        {/* Our resident pastor */}
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className="uppercase text-2xl mb-4 font-bold leading-tight text-red-600 sm:text-4xl text-center"
              >
                Resident Pastor
              </h2>
              <div className="mt-8 space-y-5">
                <p className="flex items-center text-teal-300 md:text-body-md mb-6 font-semibold text-lg text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-teal-100">
                  Gorret Mirembe (Resident Pastor).
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
    </>
  );
};

export default AboutUs;
