import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div>
      <div className="card p-6 lg:flex gap-10 mb-20  border-black rounded-xl lg:card-side bg-base-100 shadow-xl">
        <img src={data.image} alt="Album" className="w-full rounded " />
      </div>
    </div>
  );
};

export default ProjectCard;
