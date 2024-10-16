"use client";

import emailjs from '@emailjs/browser';
import React, { useState, lazy, Suspense, useRef } from "react";
import Statements from "../components/Statements";

const LocationMap = lazy(() => import('../components/UI/LocationMap'));

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const form = useRef();

  // Enviar el formulario a través de EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      from_name: `${firstName} ${lastName}`,  // Nombre completo
      email: email,                          // Dirección de email
      message: message,                      // Mensaje
      newsletter: newsletter ? "They have subscribed to the newsletter." : "No newsletter subscription.", // Newsletter
    };

    emailjs
      .send('service_0001lfs', 'template_02ypadr', formData, 'rZ6_7d53He4pfv50b')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          // Mostrar un alert de éxito
          alert("We received your message, we will get back to you soon, God bless you!");

          // Limpiar el formulario
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setNewsletter(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <section id="contact-form" className="mt-[8.5rem] lg:mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2 data-aos="fade-down" data-aos-delay="100" className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center">
            Contact us
          </h2>

          <p className="text-center md:text-body-md mb-6 font-semibold text-lg" data-aos="fade-up" data-aos-delay="200">
            Are you near Entebee or Kampala and want to join us?
            <span className="block mt-4">Send us an email!</span>
            <span className="block mt-4">Our phone number is +1 (250) 466-6179</span>
          </p>
        </header>

        <div className="max-w-screen-md mx-auto p-5">
          <form ref={form} className="w-full" onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
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
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="10"
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between w-full px-3">
              <label className="block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  name="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
              
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 lg:px-6 rounded"
                type="submit"
              >
                Send <span className='hidden lg:inline'>Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <Statements title="OUR LOCATION" id="location" />

      <Suspense fallback={<div className="text-black text-xl">Loading map...</div>}>
        <LocationMap />
      </Suspense>
    </>
  );
};

export default ContactUs;
