import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkedinlogo from "../assets/linkedin.png";
import youtubelogo from "../assets/youtube.png";
import twitterlogo from "../assets/x.png";
import githublogo from "../assets/github.png";
import Toggle from "./Toggle";
import { GithubIcon } from "../utils/Icon";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Achievements", path: "/achievements" },
    { title: "Paintings", path: "/paintings" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      // e.preventDefault();
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className="max-w-screen-xl md:mx-auto mx-3 flex-col  justify-between mt-3">
      <div className="gap-x-14 items-center   w-full h-full  md:flex ">
        <div className="flex items-center   justify-between  md:block">
          <Link to="/">
            <p className="lg:text-3xl xs: font-bold dark:text-white text-[#1f2937]">
              Anushka Kishor
            </p>
          </Link>
          <div className="md:hidden  ">
            <button
              className="menu-btn text-gray-500  hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center justify-between h-full  shadow-lg md:shadow-none p-2 md:p-0  mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-end   pr-4 lg:pr-0 items-center space-y-6 md:flex md:space-x-6 sm:space-x-2 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 xl:text-lg  dark:text-white text-sm "
                >
                  <Link to={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className=" flex  md:pl-8 gap-5  mt-10 md:mt-0   items-center   ">
            <div className="xl:w-7 xl:h-7  w-5 h-5 ">
              <div className="w-full  h-full">
                <Link to="https://www.linkedin.com/in/kishoranushka/">
                  {" "}
                  <img src={linkedinlogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="xl:w-7 bg xl:h-7 w-5 h-5 ">
              <div className="w-full  h-full dark:bg-white">
                <Link to="https://github.com/kishoranushka/">
                  <GithubIcon />
                </Link>
              </div>
            </div>
            <div className="xl:w-7 xl:h-7 w-5 h-5  ">
              <div className="w-full  h-full">
                <Link to="https://x.com/Anushka30131">
                  {" "}
                  <img src={twitterlogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="xl:w-7 xl:h-7 w-5 h-5  ">
              <div className="w-full  h-full  ">
                <Link to="https://www.youtube.com/channel/UCQcfLPyMRijJ56SJZS2CBGw">
                  {" "}
                  <img src={youtubelogo} alt="" />
                </Link>
              </div>
            </div>

            {/* <Toggle /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
