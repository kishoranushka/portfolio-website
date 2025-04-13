import React from "react";

const AcademicAchievements = ({ data }) => {
  return (
    <div className="flex justify-center items-center transition-transform duration-300 hover:scale-105">
      <div className="w-72 h-72 rounded-lg relative overflow-hidden group">
        {/* Image with individual hover effect */}
        <img
          src={data.image}
          alt={data.alt}
          className="w-full h-full object-cover bg-top rounded-lg  "
        />
        {/* Overlay that disappears only on hovered div */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-100 hover:opacity-0">
          <p className="font-bold lg:font-semibold text-xl text-center text-white">
            {data.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicAchievements;
