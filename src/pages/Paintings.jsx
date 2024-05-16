import React from 'react'
import PaintingCard from '../components/PaintingCard';
import childpainting from "../assets/Child.jpg"
import MaaDurgapainting from "../assets/Maadurga.jpg";
import krishnapainting from "../assets/Krishna.jpg";
import krishnapainting2 from "../assets/Balaji.jpg";
import Ganesha from "../assets/ganesha.jpg";
import om from "../assets/OM.jpg";
import wallpainting1 from "../assets/WP1.jpg"
import wallpainting2 from "../assets/WP2.jpg"
import wallpainting3 from "../assets/WP3.jpg";
import { Link } from 'react-router-dom';

const Paintings = () => {
  // customjs()
  return (
    <div className="  mb-10 p-20 px-80 ">
      <div>
        <h1 className="text-6xl mb-10 font-bold text-[#1f2937]">Paintings!</h1>
        <div className="flex gap-10 justify-between">
          {paintingdatarow1.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <div className="flex gap-10 mb-10  justify-between">
          {paintingdatarow2.map((ele,idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <h1 className="text-6xl mb-10 font-bold text-[#1f2937]">
          Wall Paintings!
        </h1>

        <div className="flex gap-10  justify-between">
          {paintingdatarow3.map((ele,idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>

        <div className=" flex justify-center mt-20  ">
          <button className="btn  bg-[#7ca18f] p-3 lg:px-32 rounded text-white hover:bg-gray-700 font-bold">
           
              See More...
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default Paintings

const paintingdatarow1 = [
  {
    image: childpainting,
  },
  {
    image: Ganesha,
  },
  {
    image: MaaDurgapainting,
  },
  
];

const paintingdatarow2 = [
  
  {
    image: krishnapainting,
  },
  {
    image: om,
  },
  {
    image: krishnapainting2,
  },
];
const paintingdatarow3 = [
  {
    image: wallpainting3,
  },
  {
    image: wallpainting1,
  },
  
  {
    image: wallpainting2,
  },
];



