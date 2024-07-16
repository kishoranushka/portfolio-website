import { Link } from "react-router-dom";
// import homeimg from "../assets/pinkBg.png";
import girl from "../assets/myimgHome.png";

const Home = () => {
  return (
    <>
      <div className=" font ">
        <div className="h-full w-full animate-pulse  my-20 font-bold text-gray-100 text-7xl md:text-[1000%] lg:text-[1300%] ">
          <p>SOFTWARE </p>
          <p>ENGINEER</p>
        </div>
        <div className="font-bold animate-bounce  text-gray-800 text-6xl md:text-8xl lg:text-9xl absolute top-40 left-[20%]  md:top-72 md:left-[35%] ${state?'top-72':'top-0'}">
          <p>
            He<span className="text-[#f8d203]">ll</span>o
          </p>
          <p>I am </p>
          <p>
            <span className="text-[#f8d203]">
              <span className="k">A</span>nu
            </span>
            sh
            <span className="k">k</span>a
          </p>
        </div>
      </div>
      <div className="design1 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-full hidden md:block absolute   bottom-56 right-0"></div>
      <div className="design2 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full hidden md:block absolute md:top-32 md:right-0 xl:top-72 xl:right-0 overflow-hidden"></div>
      <div className="design3 md:w-36 md:h-36 xl:w-48 xl:h-48 rounded-full hidden md:block absolute md:bottom-20 lg:bottom-10 right-20"></div>
    </>
  );
};

export default Home;
