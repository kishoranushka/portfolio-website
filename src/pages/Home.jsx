import { useEffect, useState } from "react";
import DesignerImage from "../assets/myimg.png";
import blobImg from "../assets/blob.svg";
import { Link } from "react-router-dom";

const Home=() => {

  return (
    <div className="relative md:w-full ">
      <div
        className="absolute inset-0 blur-xl h-[580px] "
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative w-full ">
        <section className="w-full ">
          <div className="max-w-screen-xl mx-auto px-4 py-12 gap-12 text-gray-600 overflow-hidden md:px-8 justify-between w-full  md:flex ">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl md:text-7xl">
                <span className="text-[#7ca18f]">Hye,</span> I am Anushka{" "}
                <span className="text-[#7ca18f]">Kishor</span>
              </h1>
              <p className="md:text-xl">
                A motivated individual creating space for herself in this
                competitive field.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  to="/resume"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-[#7ca18f] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-[4px] md:inline-flex"
                >
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                >
                  Know more about me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1  hidden md:block w-full h-auto">
              {/* Replace with your image */}
              <img
                src={blobImg}
                alt="backgrond svg"
                className="md:min-w-full md:min-h-full "
              />
              <img
                src={DesignerImage}
                alt="Designer"
                className="max-w-xl absolute top-2 w-[1200px]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home
