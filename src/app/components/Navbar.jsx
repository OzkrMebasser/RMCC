import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoSmall, setIsLogoSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsLogoSmall(true);
      } else {
        setIsLogoSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#fff] shadow-md mx-auto sticky top-0 z-20 transition-all duration-300 ${
        isLogoSmall ? "h-16 bg-[#fff]"  : "h-32 bg-red-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between h-30">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center transition-all duration-300">
              <a href="/">
                <img
                  className={`block lg:hidden ${isLogoSmall ? "h-16" : "h-32"}`}
                  src={
                    isLogoSmall
                      ? "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/logoRMCCbgTrasnp.png?alt=media&token=982864e9-48c8-4713-801a-f97ff0ccb8b4"
                      : "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/RMCClogoBGtransp.png?alt=media&token=de9cccbe-76c6-4781-9b87-1c821597a164"
                  }
                  alt="Mobile Logo"
                />
                <img
                  className={`hidden lg:block ${isLogoSmall ? "h-16" : "h-32"}`}
                  src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/logoRMCCbgTrasnp.png?alt=media&token=982864e9-48c8-4713-801a-f97ff0ccb8b4"
                  alt="Desktop Logo"
                />
              </a>
            </div>
            <span
              className={`hidden  lg:flex items-center ml-3 text-red-600 text-[.8rem] font-black transition-all duration-300 ${
                isLogoSmall ? "sm:text-[1.5rem] text-red-600" : "sm:text-[1.8rem] text-white"
              } `}
            >
              RESURRECTION MIRACLE CENTER <span className="text-teal-400 ml-2">CHURCH</span>
            </span>
          </div>
          <div className="hidden lg:flex lg:items-center lg:ml-6">
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoClose className="block h-10 w-10 text-red-600" aria-hidden="true" />
              ) : (
                <IoMenuSharp
                  className="block h-10 w-10 text-red-600"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-4 pt-12 pb-3 space-y-8 sm:px-3 bg-red-600 h-[100vh]">
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
