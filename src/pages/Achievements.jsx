import React from "react";
import AcademicAchievements from "../components/AcademicAchievements";
import topperimg from "../assets/AAtopper.jpg";
import projectimg from "../assets/AAproject.jpg";
import leadposter from "../assets/AAleadposter.jpg";
import awardimg from "../assets/AAaward.jpg";
import sessionimg1 from "../assets/NAgdsc.jpg";
import sessionimg2 from "../assets/NAcompProg.png";
import sessionimg3 from "../assets/NAikshana.jpg";
import sessionimg4 from "../assets/NAintrosession2.jpg";
import facepaintingimg from "../assets/CAfacepainting.jpg";
import facepaintingimg2 from "../assets/CAfacepainting2.jpg";
import Posterimg from "../assets/CApostermaking.jpg";
import exhibitionimg from "../assets/CAexhibition.jpg";

const Achievements = () => {
  return (
    <>
      <div className="content dark:bg-gray-900 lg:px-60 xl:px-80 p-8  md:p-16 md:py-20">
        <div className="photos   ">
          <h1 className="lg:text-6xl text-center dark:text-white md:text-left text-4xl md:mb-10 mb-5 px-3 font-bold text-[#1f2937]">
            Academic Achievements!
          </h1>

          <div className="md:flex  mb-20 justify-around  w-full">
            {AchievementDatarow1.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
          <h1 className="lg:text-6xl text-4xl text-center md:text-left mb-10 px-3 font-bold text-[#1f2937] dark:text-white">
            Non-Academic Achievements!
          </h1>
          <div className="md:flex mb-20 justify-around ">
            {NonAcaAchievement.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
          <h1 className="lg:text-6xl text-center md:text-left text-4xl mb-10 px-3 font-bold text-[#1f2937] dark:text-white">
            Creative Achievements!
          </h1>
          <div className="md:flex  justify-around ">
            {creativeAchievement.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;

const AchievementDatarow1 = [
  {
    title: "Branch Topper",
    image: topperimg,
    alt: "topper image",
  },

  {
    title: "GDSC Lead",
    image: leadposter,
    alt: "GDSC lead image",
  },
  {
    title: "Topper Award",
    image: awardimg,
    alt: "Award image",
  },
  {
    title: "Project Competition ",
    image: projectimg,
    alt: "project competition winner",
  },
];

const NonAcaAchievement = [
  {
    title: "GCCP Session",
    image: sessionimg1,
    alt: "GCCP session",
  },

  {
    title: "CP Session",
    image: sessionimg2,
    alt: "CP session",
  },
  {
    title: "H&S Session",
    image: sessionimg3,
    alt: "H&S session",
  },
  {
    title: "GDSC Info Session",
    image: sessionimg4,
    alt: "Info session",
  },
];
const creativeAchievement = [
  {
    title: "Poster Making",
    image: Posterimg,
    alt: "poster making runner-up",
  },
  {
    title: "Face Painting",
    image: facepaintingimg,
    alt: "face painting winner",
  },

  {
    title: "Face Painting",
    image: facepaintingimg2,
    alt: "face painting runner-up",
  },
  {
    title: "Painting Exhibition",
    image: exhibitionimg,
    alt: "painitng exhibition img",
  },
];
