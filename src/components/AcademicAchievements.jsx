import React from 'react'


const AcademicAchievements = ({data}) => {
  return (
    <div className="thumbnails w-full ">
      <img
        src={data.image}
        alt="digital portrait of woman holding her face with a red background"
      />
      <div className="blackbox"></div>
      <div className="title">{data.title}</div>
    </div>
  );
}

export default AcademicAchievements