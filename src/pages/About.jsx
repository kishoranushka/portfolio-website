import React from "react";
import myImg from "../assets/aboutimg.png";
import SkillsCard from "../components/SkillsCard";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.jpg";
import jslogo from "../assets/jslogo.png";
import vitelogo from "../assets/vitelogo.jpg";
import {clogo} from "../utils/Icon";
import {cpluslogo} from "../utils/Icon";
// import pythonlogo from "../assets/Pythonlogo.png";

const About = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto mx-3    mt-16 ">
      <p className="  lg:text-6xl text-4xl font-bold  mb-10 text-[#183D3D] ">
        About Me!
      </p>
      {/* <div className="flex flex-col md:flex-row bg-blue-400 gap-x-14 flex-col-on-small">
        <img src={myImg} alt="" className="w-full h-auto md:w-1/2" />
        <p className="text-xl text-justify mt-6 md:mt-0 md:w-1/2">
          <span className="text-[#1f2937] text-2xl">Greetings,</span> <br />
          I'm Anushka Kishor, hailing from the culturally rich state renowned for its culinary delights in "Litti Chokha." Currently, I am fervently pursuing my Bachelor's degree at Sagar Institute of Science and Technology, Bhopal. Proficient in programming languages like HTML, CSS, JavaScript, React.js, and Tailwind CSS, along with C and C++, I also excel in Data Structures and Algorithms. I am honored to serve as the Lead for Google Developer Student Clubs, where I orchestrate initiatives aimed at fostering innovation and collaboration within our academic ecosystem. Beyond the realm of technology, I find solace and self-expression in the realms of art and sport. Acrylic painting serves as my canvas for creative exploration, while the exhilarating game of badminton keeps me grounded and energized. Committed to continuous learning, I'm passionate about leadership and self-improvement. Join me on this journey where every challenge is an opportunity for growth.
        </p>
      </div> */}

      <div className="flex flex-col  md:flex-row w-full items-center justify-between gap-10">
        <div className="w-full md:w-1/2">
          <img src={myImg} alt="" className="" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-justify dark:text-white">
            <span className="text-[#5C8374] font-bold text-2xl">
              Greetings,
            </span>{" "}
            <br />
            I'm Anushka Kishor, hailing from the culturally rich state renowned
            for its culinary delights in "Litti Chokha." Currently, I am
            fervently pursuing my Bachelor's degree at Sagar Institute of
            Science and Technology, Bhopal. Proficient in programming languages
            like HTML, CSS, JavaScript, React.js, and Tailwind CSS, along with C
            and C++, I also excel in Data Structures and Algorithms. I am
            honored to serve as the Lead for Google Developer Student Clubs,
            where I orchestrate initiatives aimed at fostering innovation and
            collaboration within our academic ecosystem. Beyond the realm of
            technology, I find solace and self-expression in the realms of art
            and sport. Acrylic painting serves as my canvas for creative
            exploration, while the exhilarating game of badminton keeps me
            grounded and energized. Committed to continuous learning, I'm
            passionate about leadership and self-improvement. Join me on this
            journey where every challenge is an opportunity for growth.
          </p>
        </div>
      </div>

      <div className="w-full h-full  rounded-lg mt-20">
        <div>
          <p className="  w-full lg:text-6xl text-4xl font-bold  mb-10 text-[#183D3D] ">
            Web Dev Skills!
          </p>
          <div className="lg:flex gap-10">
            <div className="flex lg:mt-12  gap-10 justify-between">
              {webskilldatarow1.map((ele, idx) => (
                <SkillsCard key={idx} data={ele} />
              ))}
            </div>
            <div className="flex lg:mt-12  gap-10 justify-between">
              {webskilldatarow2.map((ele, idx) => (
                <SkillsCard key={idx} data={ele} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* <p className="  w-full lg:text-6xl text-4xl font-bold  mb-10 ">
            Programming Skills!
          </p> */}

          {/* <div className="flex lg:mt-12  gap-10 ">
              {progskilldata.map((ele, idx) => (
                <SkillsCard key={idx} data={ele} />
              ))}
            </div> */}
        </div>
      </div>
    </div>
  );
};

const webskilldatarow1 = [
  {
   
    image: htmllogo,
  },
  {
    image: csslogo,
  },
  
];
const webskilldatarow2 = [
  
  {
    image: jslogo,
  },
  {
    image: vitelogo,
  },
];

const progskilldata = [
  {
    image: clogo,
  },
  {
    image: cpluslogo,
  },
  // {
  //   image: pythonlogo,
  // },
];

export default About;
