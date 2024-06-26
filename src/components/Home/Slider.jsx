import React from "react";
import { Design1, Design2, Design3 } from "../../assets/export";

const Slider = () => {
  return (
    <div className="slide-left  w-screen my-8 flex items-center gap-4 justify-start h-[250px] lg:h-[354px] ">
      <img
        src={Design1}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
      <img
        src={Design2}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
      <img
        src={Design3}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
    </div>
  );
};

export default Slider;
