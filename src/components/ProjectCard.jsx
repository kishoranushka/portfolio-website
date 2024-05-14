import React from 'react'
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
      <div>
          <div className="card p-6 lg:flex gap-10 mb-20  border-black rounded-xl lg:card-side bg-base-100 shadow-xl">
          <img src={data.image} alt="Album" className="w-1/2 rounded " />

          <div className="card-body ">
                  <p className="text-blue-800 font-semibold mb-2">{ data.category}</p>
            <h2 className="text-2xl font-bold mb-2">
              {data.title}
            </h2>
            <p className="mb-4">
              {data.desc}
            </p>
            <div className="card-actions justify-end ">
              <button className="btn btn-primary bg-[#7ca18f] p-3 px-6 rounded text-white hover:bg-gray-700 font-bold">
                          <Link to={data.link}> {data.btnText }</Link>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard