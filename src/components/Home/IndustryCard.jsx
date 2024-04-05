import React, { useContext } from "react";
import { Telemedicine } from "../../assets/export";
import { GlobalContext } from "../../context/GlobalContext";

const IndustryCard = ({ industry }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      //   style={{ background: palette?.dark_contrast_background }}
      className={`group flex flex-col justify-center items-start gap-3 ${industry?.bgColor} rounded-xl p-5`}
    >
      <img src={industry?.image} alt="" className="" />
      <h5 className="text-xl font-semibold" style={{ color: palette?.color }}>
        {industry?.title}
      </h5>
      <p
        className="font-normal text-sm "
        style={{ color: palette?.dark_contrast_color }}
      >
        {industry?.description}
      </p>
    </div>
  );
};

export default IndustryCard;
