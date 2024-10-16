"use client";
import Link from "next/link";
import React, { useState, lazy, Suspense  } from "react";
import Statements from "../components/Statements";
// import LocationMap from "../components/UI/LocationMap";

const id = "location"

const LocationMap = lazy(() => import('../components/UI/LocationMap'))

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState("Send me your newsletter!");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/KaFDXd5FzT5", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, message, newsletter }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert(
            "We received your message, we will get back to you soon, God bless you!"
          );
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <>
      {/* Header section ABOUT US*/}
      <section id="contact-form" className=" mt-[8.5rem] lg:mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center"
          >
            Contact us
          </h2>

          <p
            className="text-center md:text-body-md mb-6 font-semibold text-lg "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Are you near Entebee or Kampala and want to join us?
            <span className="block mt-4"> send us an email !</span>
            <span className="block mt-4">
              {" "}
              our phone number is +1 (250) 466-6179
            </span >
          </p>
        </header>
        <div className="max-w-screen-md mx-auto p-5">
          <form className="w-full" onSubmit={(e) => onSubmit(e)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  placeholder="Your first name"
                />

                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@doe.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="newsletter"
                      value={newsletter}
                      onChange={(e) => setNewsletter(e.target.value)}
                    />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        
        {/* <div className=" inset-0 h-[450px] mt-4 mb-8 px-4 lg:px-12 bg-white ">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scroll="yes"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Resurrection Miracle Center Church, Mawugulu Road&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div> */}
 
      
      </section >
      <Statements
        title="OUR LOCATION"
        id="location"
        // statement="A christian ministry meant to preach the living gospel of our Lord Jesus Christ to all the lost, bringing hope to the hopeless and everything that was dead back to life."
      />
 
   <Suspense fallback={<div className="text-black text-xl">Loading map ...</div>}>
        <LocationMap/>
      </Suspense>


    </>
  );
};

export default ContactUs;
