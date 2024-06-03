import React from "react";
import waves from "../assets/wave.svg";
import { Link } from "react-router-dom";
import footerimg from "../assets/myimg.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#b8878b] relative   mt-20 lg:mt-80">
        <div className="bg-white  z-10  ">
          <img
            src={waves}
            alt=""
            className=" absolute   bottom-[390px] md:bottom-80"
          />
        </div>
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-16 xl:max-w-7xl">
          <div className="relative ">
            <div className="absolute right-0 top-0 -mt-5 font-serif text-9xl text-gray-200 opacity-75 ">
              “
            </div>
            <div className="relative text-center ">
              <blockquote className="mx-auto lg:w-2/3 xl:w-1/2">
                <p className="mb-5 text-xl text-white  font-semibold leading-8">
                  Embrace the journey, celebrate the process, and let your
                  passion be the spark that ignites your unique path to
                  greatness.
                </p>
                <footer className="space-y-4">
                  <Link
                    to="sjfk:void(0)"
                    className="mx-auto block size-20 overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-125 hover:border-white hover:shadow-md active:scale-110 active:border-gray-50 active:shadow-sm dark:border-gray-900 dark:shadow-gray-950"
                  >
                    <img src={footerimg} alt="My Photo" />
                  </Link>
                  <div>
                    <Link
                      to="/"
                      className="text-lg font-semibold text-black-600 hover:text-white  text-black"
                    >
                      Anushka Kishor
                    </Link>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
