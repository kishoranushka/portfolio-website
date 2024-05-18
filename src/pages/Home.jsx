import { useEffect, useState } from "react";
import DesignerImage from "../assets/myimg.png";
import blobImg from "../assets/blob.svg";
import { Link } from "react-router-dom";
import homeimg from "../assets/homepage.png"

const Home=() => {

  return (
    <div className="relative md:w-full   lg:p-20 p-8 lg:py-10  lg:px-80 pb-0 md:px-16 mt-10 lg:mt-0 ">
      <div className="relative w-full   ">
        <section className="w-full   ">
          <div className="    ">
            {/* Replace with your image */}

            <img src={homeimg} alt="Designer" className="" />
          </div>
          <div className="max-w-screen-xl mx-auto  py-12  gap-12 text-gray-600 overflow-hidden  justify-between w-full  md:flex ">
            <div className="flex-none space-y-5 max-w-xl">
              <div className="flex items-center gap-x-3 sm:text-lg">
                <Link
                  to="https://drive.google.com/file/d/1uq8TmZ69uCkrbYfkN6GrNDlU5wxlDqf5/view?usp=sharing"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 lg:px-10 text-white font-medium bg-[#b8878b] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-[4px] md:inline-flex"
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home
