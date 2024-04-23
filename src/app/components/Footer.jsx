import React from "react";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { FaHandHoldingHeart, FaLocationDot } from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-1 bg-red-600 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              Features
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Cool stuff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Random feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Team feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Stuff for Christians
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Another one
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              Resources
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Resource name
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Another resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              About
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Locations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              Help
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-teal-600 hover:text-teal-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-2 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left uppercase text-teal-500">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start mx-auto">
              <a href="">
                <FaFacebook className="w-8 h-8 " />
              </a>
              <a href="">
                {" "}
                <FaTwitter className="w-8 h-8 ml-6" />
              </a>
              <a href="">
                {" "}
                <IoLogoYoutube className="w-8 h-8 ml-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          {/* <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div> */}
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address </h6>
            <address className="not-italic mb-4 text-sm">
              <a href="https://maps.app.goo.gl/kTMw7ky6RohY9b5cA" target="_blank" rel="noopener noreferrer"> Mawugulu Road, Entebee, Uganda <FaLocationDot className="inline"/></a>
             
            </address>
          </div>

          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-teal-400 hover:bg-teal-600 rounded text-teal-900 font-bold">
              Donate
              <FaHandHoldingHeart className="text-2xl inline ml-2 align-middle" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
