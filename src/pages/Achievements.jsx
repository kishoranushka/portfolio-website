import React from "react";
import AcademicAchievements from "../components/AcademicAchievements";
import topperimg from "../assets/AAtopper.jpg";
import projectimg from "../assets/AAprojectedit.jpg";
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
import topperimg2 from "../assets/AAtopperimg2.jpg";
import awardimg2 from "../assets/AAtopperimg.jpg";
import rattrapimg from "../assets/rattrap.jpg"

const Achievements = () => {
  return (
    <>
      <div className="mt-10 md:mt-16    max-w-screen-xl  mx-3">
        <div className="photos   ">
          <h1 className="lg:text-5xl md:text-4xl text-center font xl:text-left text-3xl md:mb-10 mb-5  font-bold text-gray-800 ">
            Academic Achievements!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   mb-20 justify-center items-center  ">
            {AchievementDatarow1.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
          <h1 className="lg:text-5xl text-3xl md:text-4xl text-center xl:text-left mb-10 font font-bold text-gray-800 ">
            Non-Academic Achievements!
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20 justify-around ">
            {NonAcaAchievement.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
          <h1 className="lg:text-5xl text-center md:text-4xl xl:text-left text-3xl mb-10 font font-bold text-gray-800 ">
            Creative Achievements!
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20 justify-around ">
            {creativeAchievement.map((ele, idx) => (
              <AcademicAchievements key={idx} data={ele} />
            ))}
          </div>
          <h1 className="lg:text-5xl text-center md:text-4xl xl:text-left text-3xl mb-10 font font-bold text-gray-800 ">
            Professional Creative Achievements!
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20 justify-around ">
            {profCreativeAchievement.map((ele, idx) => (
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
    title: "Topper Award",
    image: awardimg2,
    alt: "Award image",
  },
  {
    title: "Branch Topper",
    image: topperimg2,
    alt: "project competition winner",
  },
  {
    title: "Topper Award",
    image: awardimg,
    alt: "Award image",
  },
  {
    title: "Branch Topper",
    image: topperimg,
    alt: "topper image",
  },

  {
    title: "Google Developer Student Clubs Lead",
    image: leadposter,
    alt: "GDSC lead image",
  },

  {
    title: "Project Competition ",
    image: projectimg,
    alt: "project competition winner",
  },
];

const NonAcaAchievement = [
  {
    title: "Google Cloud Career Practitioner Session",
    image: sessionimg1,
    alt: "GCCP session",
  },

  {
    title: "Competitive Programming Session",
    image: sessionimg2,
    alt: "CP session",
  },
  {
    title: "Hardware & Software Session",
    image: sessionimg3,
    alt: "H&S session",
  },
  {
    title: "Google Developer Student Clubs Info Session",
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

const profCreativeAchievement = [
  {
    title: "Rat Trap Car Race (Winner) - Argusoft",
    image: rattrapimg,
    alt : "Rat trap winning img",
  },
];