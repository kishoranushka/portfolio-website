import React from 'react'
import RolehuntImage from "../assets/rolehunt.jpg";
import ProjectCard from "../components/ProjectCard";

const Achievements = () => {
  return (
    <>
      <div className="  mb-10 p-20 px-80">
        <h1 className="text-6xl mb-10 font-bold text-[#1f2937]">My Achievements!</h1>
        {AchievementsData.map((ele) => (
            <ProjectCard data={ele} />
        ))}
      </div>
    </>
  )
}

export default Achievements;


const AchievementsData=[
  {
    title: "Pehla Achievemtn ",
    desc: "This is conetn",
    link: "",
    btnCheckout: "See Images",
     category: "Web Development",
    image:RolehuntImage,

  }
]