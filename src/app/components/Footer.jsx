import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { FaHandHoldingHeart, FaLocationDot } from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-1 bg-red-600 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 ">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 ">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              Ministries
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="/ministries#children-ministry"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Children Ministry
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/ministries#youth-ministry"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Youth Ministry
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/ministries#women-ministry"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Women Ministry
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              About us
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="/about-us#our-pastors"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Our Pastors
                </Link>
              </li>
              <li className="mb-2">
                <Link
                    href="/about-us#our-history"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Our History
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6 text-teal-500 uppercase text-shadow">
              Contact Us
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link 
                  href="/contact-us#contact-form"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Write us a message!
                </Link>
              </li>
              <li className="mb-2">
              <Link
                  href="/contact-us#location"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Do you want to visit us?, Here we are!
                </Link>
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

          <div className="px-2 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left uppercase text-teal-500">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start mx-auto">
              <a href="https://www.facebook.com/profile.php?id=61560591941252">
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
              <a
                href="https://maps.app.goo.gl/kTMw7ky6RohY9b5cA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Mawugulu Road, Entebee, Uganda{" "}
                <FaLocationDot className="inline" />
              </a>
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
