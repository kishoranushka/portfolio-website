import { Link } from "react-router-dom";
// import homeimg from "../assets/pinkBg.png";
import girl from "../assets/myimgHome.png";
import HomeCard from "../components/HomeCard";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import v4 from "../assets/v4.png";

const Home = () => {
  return (
    <>
      <div className=" font relative my-10 md:my-40 h-full  ">
        <div className="relative  ">
          <div className="h-full w-full text-5xl sm:text-7xl md:text-9xl lg:text-11xl xl:text-12xl   px-3 md:px-0 font-bold text-gray-100   ">
            <p>SOFTWARE </p>
            <p>ENGINEER</p>
          </div>
          <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-9xl xl:text-10xl text-gray-800  top-0  absolute  left-[25%] sm:left-[30%] md:top-[-10%] lg:top-5 xl:top-12 lg:left-[30%] ">
            <p>
              He<span className="text-[#f8d203]">ll</span>o
              <span className="text-[#f8d203]">,</span>
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
      </div>
      <div className="design1 md:w-20 md:h-20   xl:w-28 xl:h-28  rounded-full hidden md:block absolute  md:bottom-96 lg:bottom-56 xl:bottom-40 2xl:bottom-72 right-0"></div>
      <div className="design2 md:w-32 md:h-40 xl:h-44 xl:w-44 2xl:w-52 2xl:h-52 rounded-full hidden md:block absolute md:top-24 md:right-0 xl:top-32 xl:right-0 "></div>
      <div className="design3 md:w-36 md:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44 rounded-full hidden md:block absolute md:bottom-20 md:left-[-8%] lg:bottom-0 2xl:right-0 "></div>

      <div className="mb-10 mt-20 relative  sm:flex">
        <div className="md:flex w-full md:w-1/2  text-center flex flex-col rounded-md  gap-10 justify-between   text-xl  p-4">
          {HomecardLeft.map((ele, idx) => (
            <HomeCard key={idx} data={ele} />
          ))}
        </div>
        <div className="md:flex w-full md:w-1/2  text-center flex flex-col rounded-md  gap-10 justify-between   text-xl  p-4">
          {HomecardRight.map((ele, idx) => (
            <HomeCard key={idx} data={ele} />
          ))}
        </div>
        <div className="design1 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-full hidden md:block absolute   bottom-0 left-[-27%]"></div>
        <div className="design2 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full hidden md:block absolute md:bottom-32 md:left-[-30%] xl:top-72  overflow-hidden"></div>
        <div className="design3 md:w-36 md:h-36 xl:w-48 xl:h-48 rounded-full hidden md:block absolute md:bottom-20 lg:bottom-24 left-[-20%]"></div>
      </div>
    </>
  );
};

export default Home;

const HomecardLeft = [
  {
    text: "Get to know about me!",
    img: v1,
    link: "/about",
  },

  {
    text: "Visionary Leadership!",
    img: v3,
    link: "/achievements",
  },
];
const HomecardRight = [
  {
    text: "I create seamless user experience!",
    img: v2,
    link: "/projects",
  },

  {
    text: "Explore my creativity!",
    img: v4,
    link: "/paintings",
  },
];
