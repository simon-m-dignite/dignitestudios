import React from "react";

const WhyChooseUsCard = ({ title, description, icon }) => {
  return (
    <div className="text-black flex flex-col items-center gap-y-4 px-2 py-3 md:p-6">
      <img src={icon} alt="" className="" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-xs text-[#8F8F8F]">{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
