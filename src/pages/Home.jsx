import { Link } from "react-router-dom";
// import homeimg from "../assets/pinkBg.png";
import girl from "../assets/girl.png";

const Home = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto flex-col  justify-between">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className="w-full md:w-1/2 md:px-0 px-2  flex flex-col justify-center items-center order-3 md:order-1 ">
          <h1 className=" text-4xl text-[#392467] md:text-9xl mt-5 md:mt-0 font-bold dark:text-[#FFD1E3]">
            Hello, I'm <span className="">Anushka</span>{" "}
          </h1>
          <div className=" w-full md:flex">
            <div className=" w-full  md:w-56 flex  my-2 justify-start md:mt-20 mt-5">
              <a
                href="https://drive.google.com/file/d/1uq8TmZ69uCkrbYfkN6GrNDlU5wxlDqf5/view?usp=sharing"
                className=" p-2 rounded-md font-semibold bg-[#5D3587] dark:bg-[#FFD1E3] dark:text-[#5D3587] dark:hover:bg-white hover:bg-[#392467]  w-full text-center text-white "
              >
                Resume{" "}
              </a>
            </div>
            <div className=" w-full  md:w-56 flex  my-2 justify-start md:mt-20 ">
              <Link
                to="/about"
                className=" p-2 rounded-md font-semibold hover:text-blue-800 text-blue-500  w-full text-center "
              >
                Know more about me...{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-2">
          <img src={girl} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
