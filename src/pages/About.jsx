import React from "react";
import myImg from "../assets/About-myimg.png";
import SkillsCard from "../components/SkillsCard";
import {
  CssLogo,
  HtmlLogo,
  JavascriptLogo,
  ReactLogo,
  CplusLogo,
  PythonLogo,
  GitLogo,
  GithubIcon,
  PostmanLogo,
  DjangoLogo,
  FastApiLogo
  // CLogo,
} from "../utils/Icon";

const About = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto mx-3  font  mt-10 md:mt-16 ">
      <h1 className=" text-center xl:text-left lg:text-5xl md:text-4xl text-3xl font-bold  mb-10 text-gray-800  ">
        About Me!
      </h1>
      {/* <div className="flex flex-col md:flex-row bg-blue-400 gap-x-14 flex-col-on-small">
        <img src={myImg} alt="" className="w-full h-auto md:w-1/2" />
        <p className="text-xl text-justify mt-6 md:mt-0 md:w-1/2">
          <span className="text-[#1f2937] text-2xl">Greetings,</span> <br />
          I'm Anushka Kishor, hailing from the culturally rich state renowned for its culinary delights in "Litti Chokha." Currently, I am fervently pursuing my Bachelor's degree at Sagar Institute of Science and Technology, Bhopal. Proficient in programming languages like HTML, CSS, JavaScript, React.js, and Tailwind CSS, along with C and C++, I also excel in Data Structures and Algorithms. I am honored to serve as the Lead for Google Developer Student Clubs, where I orchestrate initiatives aimed at fostering innovation and collaboration within our academic ecosystem. Beyond the realm of technology, I find solace and self-expression in the realms of art and sport. Acrylic painting serves as my canvas for creative exploration, while the exhilarating game of badminton keeps me grounded and energized. Committed to continuous learning, I'm passionate about leadership and self-improvement. Join me on this journey where every challenge is an opportunity for growth.
        </p>
      </div> */}

      <div className="flex flex-col  md:flex-row w-full items-center justify-between gap-16">
        <div className="w-full md:w-1/2">
          <img src={myImg} alt="" className="" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-justify  ">
            <span className="text-[#5D3587]  font-bold text-2xl">
              Greetings,
            </span>{" "}
            <br />
            <p className="text-xl">
              I'm{" "}
              <span className="font-medium text-yellow-500 text-xl">
                Anushka Kishor
              </span>
              , a tech enthusiast from the culturally rich state of Bihar. I’m
              currently in the final year of my Bachelor's degree at Sagar
              Institute of Science and Technology, Bhopal. With hands-on
              experience in HTML, CSS, JavaScript, React.js, Tailwind CSS, C,
              and C++.
            </p>{" "}
            <br />{" "}
            <p className="text-xl">
              I specialize in building dynamic, user-centric web and mobile
              applications. My passion for development is reflected in projects
              like{" "}
              <span className="text-gray-600 font-medium">Bihar Sangam</span> ,
              a React Native app created for a state-level business fair, and a
              Next.js-based placement management system, among others.{" "}
            </p>
            <br />{" "}
            <p>
              {" "}
              I recently completed my internship as an{" "}
              <span className="font-medium text-gray-600">
                Assistant Software Developer
              </span>{" "}
              at The Stack Mentalist, where I contributed to real-world product
              development and honed my skills in building scalable digital
              solutions. Previously, I had the honor of serving as the Lead for
              Google Developer Student Clubs, where I led impactful initiatives
              to nurture tech talent and foster a culture of collaboration on
              campus.
            </p>{" "}
            <br />{" "}
            <p className="text-xl">
              {" "}
              Outside of tech, I'm deeply passionate about{" "}
              <span className="font-medium text-gray-600">
                acrylic painting
              </span>{" "}
              and find balance through{" "}
              <span className="font-medium text-gray-600">badminton</span>.
              Whether it's through leadership, creativity, or coding, I'm driven
              by a commitment to growth and purpose in everything I do.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full  rounded-lg mt-20 ">
        <h1 className=" text-center xl:text-left  lg:text-5xl md:text-4xl text-3xl font-bold   text-gray-800  ">
          Skills!
        </h1>
        <div className="mt-10">
          <p className="  w-full md:text-3xl  text-2xl  font-bold  text-gray-800  ">
            Web Dev Skills!
          </p>
          <div className="sm:flex gap-10">
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
          <p className="  w-full md:text-3xl  text-2xl  font-bold   text-gray-800 ">
            Programming Skills!
          </p>

          <div className="flex lg:mt-12  gap-10 ">
            {progskilldata.map((ele, idx) => (
              <SkillsCard key={idx} data={ele} />
            ))}
          </div>
        </div>
        <div className="my-20 ">
          <p className="  w-full md:text-3xl  text-2xl  font-bold   text-gray-800 ">
            Other Skills!
          </p>

          <div className="flex lg:mt-12  gap-10 ">
            {otherskilldata.map((ele, idx) => (
              <SkillsCard key={idx} data={ele} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const webskilldatarow1 = [
  {
    image: <HtmlLogo />,
  },
  {
    image: <CssLogo />,
  },
  {
    image: <JavascriptLogo />,
  },
];
const webskilldatarow2 = [
  {
    image: <ReactLogo />,
  },
  {
    image: <DjangoLogo />
  },
  {
    image: <FastApiLogo />
  },
];

const progskilldata = [
  // {
  //   image:  <CLogo/>
  // },
  {
    image: <CplusLogo />,
  },
  {
    image: <PythonLogo />,
  },
];

const otherskilldata = [
  {
    image: <GitLogo />,
  },
  {
    image: <GithubIcon />,
  },
  {
    image: <PostmanLogo />,
  },
];

export default About;
