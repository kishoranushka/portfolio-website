import React from 'react'
import { Link } from 'react-router-dom'

const CloneCard = ({data}) => {
  return (
    <div className="card  lg:w-96 lg:mb-16 mt-16  glass  sm:flex rounded-xl overflow-hidden p-6  shadow-xl">
      <figure>
        <img
          src={data.image}
          alt="zomato homepage image"
          className="rounded md:mb-4 shadow"
        />
      </figure>
      <div className="card-body  ">
        <p className="text-blue-800 font-semibold mb-2">{data.category}</p>
        <h2 className="card-title text-xl font-bold mb-2">{data.title}</h2>
        <p className="mb-4">{data.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn  bg-[#b8878b] p-3 px-6 rounded text-white hover:bg-gray-700 font-bold">
            <Link to={data.link}>{data.btnText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloneCard