import React from "react";
import myImg from "../assets/aboutimg.png";
import SkillsCard from "../components/SkillsCard";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.jpg";
import jslogo from "../assets/jslogo.png";
import vitelogo from "../assets/vitelogo.jpg";
import clogo from "../assets/c.png";
import cpluslogo from "../assets/cpluslogo.png";
import pythonlogo from "../assets/Pythonlogo.png";

const About = () => {
  return (
    <div className="lg:p-20 p-8  dark:bg-gray-900  lg:px-60 xl:px-80 px-10 md:px-16 mt-10 lg:mt-0">
      <p className=" dark:text-white  lg:text-6xl text-4xl font-bold text-[#1f2937] mb-10 ">
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
            <span className="text-[#b8878b] font-bold text-2xl">
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
          <p className=" dark:text-white w-full lg:text-6xl text-4xl font-bold text-[#1f2937] mb-10 ">
            Web Dev Skills!
          </p>
          <div className="md:flex mt-20  gap-10 justify-between">
            {webskilldata.map((ele, idx) => (
              <SkillsCard key={idx} data={ele} />
            ))}
          </div>
        </div>
        {/* <div className="mt-10">
          <p className=" dark:text-white w-full lg:text-6xl text-4xl font-bold text-[#1f2937] mb-10 ">
            Programming Skills!
          </p>
          <div className="md:flex mt-20  gap-10 justify-between">
            {progskilldata.map((ele, idx) => (
              <SkillsCard key={idx} data={ele} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

const webskilldata = [
  {
    txt: "hii",
    image: htmllogo,
  },
  {
    image: csslogo,
  },
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
  {
    image: pythonlogo,
  },
];

export default About;
