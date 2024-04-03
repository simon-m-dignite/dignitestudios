import React, { useState } from "react";

const ServiceCard = ({ title, desc, icon, count }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`group flex flex-col border-gray-200 justify-center items-start gap-3 p-6 hover:bg-[#F15C20]  transition-all duration-150 ${
        count == 0
          ? "border-b "
          : count == 1
          ? "border-b border-r border-l "
          : count == 2
          ? "border-b"
          : count == 4 && "border-r border-l"
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img src={icon} alt="UIUX" className="text-white" />
      {/* {hover && <span>fjef</span>} */}
      <h1 className="font-bold text-[26px] group-hover:text-white">{title}</h1>
      <p className="text-xs text-[#8F8F8F] leading-[18.83px] group-hover:text-white">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
