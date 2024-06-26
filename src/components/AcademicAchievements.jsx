import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className="thumbnails lg:w-[300px] md:h-[300px] rounded-lg  h-[350px]">
      <img
        src={data.image}
        alt={data.alt}
        className='w-full'
      />
      <div className="blackbox "></div>
      <div className="title font-bold lg:font-semibold text-xl text-center">{data.title}</div>
    </div>
  );
}

export default AcademicAchievements