import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkedinlogo from "../assets/linkedin.png";
import youtubelogo from "../assets/youtube.png";
import twitterlogo from "../assets/x.png";
import githublogo from "../assets/github.png"

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
    <nav
      className={`bg-white pb-5   md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl w-full mt-6  mx-auto px-4 md:flex md:px-0">
        <div className="flex items-center  justify-between py-5 md:block">
          <Link to="/">
            <p className="text-2xl font-bold text-[#1f2937]">Anushka Kishor</p>
          </Link>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
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
          className={`flex-1 items-center justify-between   mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center  items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 text-lg  hover:text-gray-900"
                >
                  <Link to={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className=" md:flex  gap-5  w-full h-full hidden justify-end items-center   ">
            <div className="lg:w-7 lg:h-7 w-5 h-5 ">
              <div className="w-full  h-full">
                <Link to="https://www.linkedin.com/in/kishoranushka/">
                  {" "}
                  <img src={linkedinlogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="lg:w-7 lg:h-7 w-5 h-5 ">
              <div className="w-full  h-full">
                <Link to="https://github.com/kishoranushka/">
                  {" "}
                  <img src={githublogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="lg:w-7 lg:h-7 w-5 h-5   ">
              <div className="w-full  h-full">
                <Link to="https://x.com/Anushka30131">
                  {" "}
                  <img src={twitterlogo} alt="" />
                </Link>
              </div>
            </div>
            <div className="lg:w-7 lg:h-7 w-5 h-5  ">
              <div className="w-full  h-full">
                <Link to="https://www.youtube.com/channel/UCQcfLPyMRijJ56SJZS2CBGw">
                  {" "}
                  <img src={youtubelogo} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
