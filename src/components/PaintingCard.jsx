import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div className=" flex justify-center ">
      <div className="card p-6 lg:flex gap-10 mb-20 w-[350px] h-[350px] sm:w-[350px] sm:h-[350px]  md:w-[220px] md:h-[220px] lg:w-[310px] lg:h-[310px] xl:w-[350px] xl:h-[350px]  rounded-xl lg:card-side bg-base-100 shadow-xl">
        <img src={data.image} alt="Album" className="w-full rounded " />
      </div>
    </div>
  );
};

export default ProjectCard;
