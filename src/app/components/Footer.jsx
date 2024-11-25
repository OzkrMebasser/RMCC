import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaHandHoldingHeart, FaLocationDot } from "react-icons/fa6";
import { BsMailbox2Flag } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ContactLinkeEmail = () => {
    const email = "ndiwadiva@gmail.com";
    const subject = "Inquiry about Resurrection Miracle Center Church";
    const body =
      "Dear Resurrection Miracle Center Church, \n\nI would like to inquire about...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return (

        <a href={mailtoLink}
        className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        target="_blank"
        rel="noopener noreferrer"
        >
          Email Us <FaEnvelope className="inline mr-2 mb-[.23rem]" />
        </a>
     
    );
  };

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
            <h5 className="text-xl font-bold mb-6 mt-6 text-teal-500 uppercase text-shadow">
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
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
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
                  Our location
                  <FaLocationDot className="inline ml-1" />
                </Link>
              </li>
       
              <li className="mb-2">
                <a
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+17785352979"
                >
                  +1 (778) 535-2979
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+12504666179"
                >
                  +1 (250) 466-6179
                </a>
              </li>

              <li className="mb-2">
             
                  <ContactLinkeEmail />
             
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left uppercase text-teal-500">
              Head office
            </h5>
            <p className=" ">
              <span className="mb-[.4rem] italic relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Mailing Address:{" "}
              </span>{" "}
              <span className="mt-4">RESURRECTION MIRACLE CENTER CHURCH, </span>
              {/* <br /> */}
              <strong>P.0. BOX 1818</strong>
              <BsMailbox2Flag className="inline ml-1 mb-[.23rem] text-[1.1rem]" />
            </p>
            <br />
            <a
              className=""
              href="https://maps.app.goo.gl/kTMw7ky6RohY9b5cA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mb-[.4rem] italic relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Address:
              </span>{" "}
              Magulu Road
              <FaLocationDot className="inline ml-1  mb-[.23rem]" />
            </a>
          </div>

          <div className="px-2 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left uppercase text-teal-500">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start mx-auto">
              <a
                href="https://www.facebook.com/profile.php?id=61560591941252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-8 h-8 " />
              </a>
              <a href="https://youtube.com/@resurrectionmiracleministriesi?si=JqLFzM8eJ9qVCUXi" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaYoutube className="w-8 h-8 ml-6" />
              </a>
              <a href="https://chat.whatsapp.com/GlglUcLCvrm4F2s6DlP7cT" target="_blank" rel="noopener noreferrer">

                {" "}
                <FaWhatsapp className="w-8 h-8 ml-6" />
              </a>
            </div>

            <div className="mt-12 mb-8 justify-center ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+12504666179"
                className="px-4 py-2 bg-teal-400 hover:bg-teal-600 rounded text-teal-900 font-bold"
              >
                Donate
                <FaHandHoldingHeart className="text-2xl inline ml-2 align-middle" />
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-6 pt-6  border-t">
          <div className="text-center pt-[5px]">
            <p className="">
              &copy; {currentYear}, All Rights Reserved.
              <br />
              <span className="font-bold text-lg">Resurrection Miracle Center Church</span>
            </p>
            <p>
              <a
                href="https://oscarmorenodev.vercel.app/"
                className="font-thin text-[.8rem]"
              >
                Made with &#x1F9E1; by Ozkr Mebasser
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
