import React from "react";
import myImg from "../assets/myimg2.png";
const About = () => {
  return (
    <div className="lg:p-20 lg:px-44 px-10 mt-10 lg:mt-0">
      <p className="text-center text-6xl font-bold text-[#1f2937] mb-20 underline">
        About Me!
      </p>
      <div className="lg:flex gap-x-14 ">
        <div className="lg:w-1/2 ">
          <img src={myImg} alt="" />
        </div>
        <p className="lg:w-1/2 text-xl text-justify mt-14 lg:mt-0 ">
          <span className="text-[#1f2937] text-2xl  ">Greetings,</span> <br />I
          am Anushka Kishor, hailing from the culturally rich state renowned for
          its culinary delights in "Litti Chokha." Currently, I am fervently
          pursuing my Bachelor's degree at Sagar Institute of Science and
          Technology, Bhopal, where I am honing my skills in various domains of
          technology. My proficiency spans across a dynamic spectrum of
          programming languages and frameworks, including HTML, CSS, JavaScript,
          React.js, and Tailwind CSS. Additionally, I possess a strong command
          over C and C++, coupled with expertise in Data Structures and
          Algorithms. In recognition of my passion for technology and community
          engagement, I am honored to serve as the Lead for Google Developer
          Student Clubs, where I orchestrate initiatives aimed at fostering
          innovation and collaboration within our academic ecosystem. Through
          numerous curated events and lectures, I strive to inspire and empower
          budding technologists. Beyond the realm of technology, I find solace
          and self-expression in the realms of art and sport. Acrylic painting
          serves as my canvas for creative exploration, while the exhilarating
          game of badminton keeps me grounded and energized. Fueling my growth
          mindset, I indulge in consuming enriching content focused on
          leadership and self-improvement. Embracing the philosophy that "hard
          work can never be outdated," I remain committed to perpetual learning
          and relentless pursuit of excellence. Welcome to my digital abode,
          where innovation meets creativity, and aspirations take flight. Join
          me on this journey of exploration and transformation, where every
          challenge is an opportunity, and every endeavor, a testament to
          resilience.
        </p>
      </div>
    </div>
  );
};

export default About;
