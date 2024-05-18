import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className="thumbnails lg:w-[300px] md:h-[300px]  h-[350px]">
      <img
        src={data.image}
        alt={data.alt}
        className='w-full'
      />
      <div className="blackbox "></div>
      <div className="title font-bold lg:font-semibold text-2xl">{data.title}</div>
    </div>
  );
}

export default AcademicAchievements