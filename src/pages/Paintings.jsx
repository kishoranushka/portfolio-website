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
    <div className="  max-w-screen-xl      mt-10 md:mt-16 font ">
      <div className="">
        <h1 className="lg:text-5xl  md:text-4xl xl:text-left text-center text-3xl mb-10 font-bold text-gray-800 ">
          Paintings!
        </h1>
        <div className="md:flex   gap-10 justify-between">
          {paintingdatarow1.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <div className="md:flex gap-10 mb-10  justify-between">
          {paintingdatarow2.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>
        <h1 className="lg:text-5xl md:text-4xl text-center xl:text-left text-3xl mb-10 font-bold text-gray-800 ">
          Wall Paintings!
        </h1>

        <div className="md:flex gap-10  justify-between">
          {paintingdatarow3.map((ele, idx) => (
            <PaintingCard key={idx} data={ele} />
          ))}
        </div>

        <div className=" flex justify-center mt-20   ">
          <button className="btn  bg-gray-800 mb-20   p-3 md:px-32 px:10 rounded-md text-white hover:bg-[#392467] font-bold">
            <a href="https://www.instagram.com/art__insight__9">See More...</a>
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



