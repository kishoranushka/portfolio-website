import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className='w-full  flex justify-center  '>
    <div className="thumbnails w-[350px] h-[350px] sm:w-[350px] sm:h-[350px]  md:w-[170px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[300px] xl:h-[300px] rounded-lg  ">
      <img
        src={data.image}
        alt={data.alt}
        className='w-full'
      />
      <div className="blackbox "></div>
      <div className="title font-bold lg:font-semibold text-xl text-center">{data.title}</div>
    </div>
    </div>
  );
}

export default AcademicAchievements