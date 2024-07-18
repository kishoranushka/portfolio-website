import React from "react";

const SkillsCard = ({ data }) => {
  return (
    <div className="">
      <div className="md:p-6 p-3 md:w-28 md:h-28 w-20 h-20 object-contain lg:flex  gap-10 mb-10 border-black rounded-xl lg:card-side bg-base-100 shadow-xl">
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
