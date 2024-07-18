import React from 'react'
import { Link } from 'react-router-dom'

const CloneCard = ({data}) => {
  return (
    <div className="card  lg:w-96  mb-20  glass   rounded-xl overflow-hidden p-6  shadow-xl">
      <figure>
        <img
          src={data.image}
          alt="zomato homepage image"
          className="rounded md:mb-4 shadow"
        />
      </figure>
      <div className="card-body  ">
        <p className=" font-semibold mb-2">{data.category}</p>
        <h2 className="card-title text-xl font-bold mb-2">{data.title}</h2>
        <p className="mb-4">{data.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn  bg-[#5894bb]  p-3 px-8 rounded text-white hover:bg-[#528aaf] font-bold">
            <Link to={data.link}>{data.btnText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloneCard