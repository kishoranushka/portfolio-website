import { Link } from "react-router-dom";
import homeimg from "../assets/pinkBg.png";
import girl from "../assets/girlAI.png";

const Home = () => {
  return (
    <div className="relative md:w-full dark:bg-gray-900  pb-0 lg:mt-0 lg:px-60 xl:px-80 p-8  md:px-16 md:pb-20 ">
      <div className="relative w-full   ">
        <section className="w-full   ">
          <div >
            <div className=" relative   ">
              <img src={homeimg} alt="Designer" className="" />
            </div>
            <div className="homeGlass flex justify-between absolute top-10 left-10 xl:top-28 xl:left-28 xl:p-10 xl:py-20 text-2xl w-60 h-28    xl:w-[1050px] xl:h-[500px] text-[#b8878b]">
              <div>
                <p className="text-4xl w-full ">Hello there,</p>
                <br />{" "}
                <span className="xl:text-9xl text-3xl font-bold text-[#b8878b]">
                  Anushka <br /> Kishor
                </span>
              </div>
            </div>
            <div className="  absolute top-28 right-28">
              <img src={girl} alt="" className="w-[500px] h-[500px]" />
            </div>
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
                  className="flex items-center justify-center dark:text-white gap-x-1 py-2 px-4 text-gray-700 hover:text-blue-900 dark:hover:text-yellow-200 font-medium duration-150 md:inline-flex"
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

export default Home;
