import React from 'react'
import { Link } from 'react-router-dom';

const HomeCard = ({data}) => {
  return (
    <div className=" border border-black p-3 rounded-md ">
      <Link to={data.link}>
        <div className=" flex justify-center">
          <img src={data.img} className="md:w-80 md:h-80 w-60 h-60" alt="" />
        </div>
        <div>
          <p>{data.text}</p>
        </div>
        <div>
          <Link to={data.link}>
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard