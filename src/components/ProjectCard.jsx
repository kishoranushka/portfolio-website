import React from 'react'
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div >
      <div className="card p-6 md:flex gap-10 mb-20 glass  border-black rounded-xl lg:card-side bg-base-100 shadow-xl">
        <img src={data.image} alt="Album" className="md:w-1/2 rounded " />

        <div className="card-body ">
          <p className=" font-semibold mb-2">{data.category}</p>
          <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
          <p className="mb-4">{data.desc}</p>
          <div className="card-actions justify-end ">
            <button className="btn  bg-[#5894bb]  p-3 px-8 rounded text-white hover:bg-[#528aaf] font-bold">
              <Link to={data.link}> {data.btnText}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard