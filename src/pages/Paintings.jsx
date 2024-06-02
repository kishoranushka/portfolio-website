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
    <div className="  max-w-screen-xl md:mx-auto mx-3 mt-16 dark:bg-gray-900 ">
      <div className="">
        <h1 className="md:text-6xl text-4xl mb-10 font-bold text-[#1f2937] dark:text-white">
          Paintings!
        </h1>
        <div className="md:flex  gap-10 justify-between">
          {paintingdatarow1.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <div className="md:flex gap-10 mb-10  justify-between">
          {paintingdatarow2.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <h1 className="md:text-6xl text-4xl mb-10 font-bold text-[#1f2937] dark:text-white">
          Wall Paintings!
        </h1>

        <div className="md:flex gap-10  justify-between">
          {paintingdatarow3.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>

        <div className=" flex justify-center mt-20  ">
          <button className="btn  bg-[#b8878b] p-3 md:px-32 px:10 rounded text-white hover:bg-gray-700 font-bold">
            <Link to="https://www.instagram.com/art__insight__9">
              See More...
            </Link>
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



