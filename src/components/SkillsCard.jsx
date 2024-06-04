import React from "react";

const SkillsCard = ({ data }) => {
  return (
    <div className="">
      <div className="p-6 lg:w-40 lg:h-40 w-36 h-36 object-contain lg:flex gap-10 mb-20 border-black rounded-xl lg:card-side bg-base-100 shadow-xl">
        {typeof data.image === "string" ? (
          <img src={data.image} alt="Skill" className="w-full rounded" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {data.image}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
