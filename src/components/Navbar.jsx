

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <div className="  ">
        <header className=" shadow-md h-24 hidden md:flex justify-between">
          <Link
            to="/"
            className=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
          >
            <p className="p-3 xl:p-6  font-bold text-xl text-[#1f2937]">
              Anushka Kishor
            </p>
          </Link>
          <nav className="header-links flex  w-full    font-semibold text-base lg:text-lg">
            <ul className="flex items-center gap-10 pr-40 pl-16  w-full text-base text-[#1f2937]  mr-auto">
              <li className="p-3  active">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>

              <li className="p-3 xl:p-6">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>

              <li className="p-3 xl:p-6">
                <Link to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
              <li className="p-3 xl:p-6">
                <Link to="/achievements">
                  <span>Achievements</span>
                </Link>
              </li>
              <li className="p-3 xl:p-6">
                <Link to="/paintings">
                  <span>Paintings</span>
                </Link>
              </li>
              <li className="p-3 xl:p-6">
                <Link to="/resume" className="flex items-center">
                  <span>Resume</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className=" flex w-72 justify-center items-center px-4 lg:px-6 xl:px-8">
            <button className="bg-[#7ca18f] hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
              Contact Me
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar