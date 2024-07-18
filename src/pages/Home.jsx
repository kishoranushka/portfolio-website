import { Link } from "react-router-dom";
// import homeimg from "../assets/pinkBg.png";
import girl from "../assets/myimgHome.png";
import HomeCard from "../components/HomeCard";
import v1 from "../assets/v1.jpg"
import v2 from "../assets/v2.jpg"
import v3 from "../assets/v3.jpg"
import v4 from "../assets/v4.jpg"

const Home = () => {
  return (
    <>
      <div className=" font relative my-10 md:my-40 h-full  ">
        <div className="relative  ">
          <div className="h-full w-full text-5xl  md:text-12xl   font-bold text-gray-100   ">
            <p>SOFTWARE </p>
            <p>ENGINEER</p>
          </div>
          <div className="font-bold text-4xl md:text-10xl text-gray-800  top-0  absolute  left-[20%]  md:top-[10%] md:left-[30%] ${state?'top-72':'top-0'}">
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
      </div>
      <div className="design1 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-full hidden md:block absolute   bottom-56 right-0"></div>
      <div className="design2 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full hidden md:block absolute md:top-32 md:right-0 xl:top-72 xl:right-0 overflow-hidden"></div>
      <div className="design3 md:w-36 md:h-36 xl:w-48 xl:h-48 rounded-full hidden md:block absolute md:bottom-20 lg:bottom-10 right-20"></div>

      <div className="mb-10 mt-20 relative  md:flex">
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
        <div className="design1 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-full hidden md:block absolute   bottom-0 left-[-23%]"></div>
        <div className="design2 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full hidden md:block absolute md:bottom-32 md:left-[-30%] xl:top-72  overflow-hidden"></div>
        <div className="design3 md:w-36 md:h-36 xl:w-48 xl:h-48 rounded-full hidden md:block absolute md:bottom-20 lg:bottom-24 left-[-18%]"></div>
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
  
]
const HomecardRight = [
  
  {
    text: "I create seamless user experience!",
    img: v2,
    link: "/projects",
  },
  
  {
    text: "Get yourself immerse into my creativity!",
    img: v4,
    link: "/paintings",
  },
]