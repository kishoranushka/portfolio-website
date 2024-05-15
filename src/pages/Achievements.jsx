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
      <div className="content  px-80 py-20">
        <div className="photos   ">
          <h1 className="text-6xl mb-10 px-3 font-bold text-[#1f2937]">
            Academic Achievements!
          </h1>

          <div className="flex mb-20 justify-around  w-full">
            {AchievementDatarow1.map((ele) => (
              <AcademicAchievements data={ele} />
            ))}
          </div>
          <h1 className="text-6xl mb-10 px-3 font-bold text-[#1f2937]">
            Non-Academic Achievements!
          </h1>
          <div className="flex mb-20 justify-around ">
            {NonAcaAchievement.map((ele) => (
              <AcademicAchievements data={ele} />
            ))}
          </div>
          <h1 className="text-6xl mb-10 px-3 font-bold text-[#1f2937]">
            Creative Achievements!
          </h1>
          <div className="flex  justify-around ">
            {creativeAchievement.map((ele) => (
              <AcademicAchievements data={ele} />
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
  },

  {
    title: "GDSC Lead",
    image: leadposter,
  },
  {
    title: "Topper Award",
    image: awardimg,
  },
  {
    title: "Project Competition ",
    image: projectimg,
  },
];

const NonAcaAchievement = [
  {
    title: "GCCP Session",
    image: sessionimg1,
  },

  {
    title: "CP Session",
    image: sessionimg2,
  },
  {
    title: "H&S Session",
    image: sessionimg3,
  },
  {
    title: "GDSC Info Session",
    image: sessionimg4,
  },
];
const creativeAchievement = [
  {
    title: "Poster Making",
    image: Posterimg,
  },
  {
    title: "Face Painting",
    image: facepaintingimg,
  },

  {
    title: "Face Painting",
    image: facepaintingimg2,
  },
  {
    title: "Painting Exhibition",
    image: exhibitionimg,
  },
];
