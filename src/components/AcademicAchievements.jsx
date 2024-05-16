import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className="thumbnails lg:w-[300px] md:h-[300px] w-[350px] h-[350px]">
      <img
        src={data.image}
        alt="digital portrait of woman holding her face with a red background"
        className='w-full'
      />
      <div className="blackbox"></div>
      <div className="title font-bold lg:font-semibold text-2xl">{data.title}</div>
    </div>
  );
}

export default AcademicAchievements