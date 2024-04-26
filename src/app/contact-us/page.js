"use client";
import Link from "next/link";

const ContactUs = () => {
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
            Contact us
          </h2>

          <p
            className="md:text-body-md mb-6 font-semibold text-lg text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Are you near Entebee and want to join us, send us an email, or contact users at
          </p>
        </header>
      </section>
      </>
      )};

    export default ContactUs;