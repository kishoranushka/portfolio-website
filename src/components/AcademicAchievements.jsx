import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className='  flex justify-center  '>
    <div className="thumbnails w-[280px] h-[300px] sm:w-[350px] sm:h-[350px]  md:w-[170px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[290px] xl:h-[290px] rounded-lg  ">
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