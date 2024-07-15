import { Link } from "react-router-dom";
// import homeimg from "../assets/pinkBg.png";
import girl from "../assets/myimgHome.png";


const Home = () => {
  return (
    <>
      <div className=" font">
        <div className="h-full w-full animate-pulse duration-1 my-20 font-bold text-gray-100 text-[1300%] ">
          <p>SOFTWARE </p>
          <p>ENGINEER</p>
        </div>
        <div className="font-bold animate-bounce  text-gray-800 text-9xl absolute   top-72 left-[35%]">
          <p>
            He<span className="text-[#f8d203]">ll</span>o
          </p>
          <p>I am </p>
          <p>
            <span className="text-[#f8d203]">Anu</span>sh<span className="k">k</span>a
          </p>
        </div>
      </div>
      <div className="design1 w-28 h-28 rounded-full absolute bottom-56 right-0"></div>
      <div className="design2 w-56 h-56 rounded-full  absolute top-72 right-[-4%]"></div>
      <div className="design3 w-48 h-48 rounded-full  absolute bottom-10 right-20"></div>
    </>
  );
};

export default Home;
