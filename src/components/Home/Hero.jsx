import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BrandUnderline } from "../../assets/export";

const Hero = () => {
  return (
    <div className="w-full  flex flex-col gap-4 justify-start items-center">
      <span className="capitalize text-[18px] font-medium text-[#8F8F8F]">
        mobile & Web app development agency
      </span>
      <h1 className="text-7xl font-bold text-center capitalize">
        Elevate your brand in the <br />
        digital cosmos
      </h1>
      <span className="text-[#5C5C5C] text-center mt-6 text-[19px] font-normal">
        Whether it's crafting a visually stunning brand identity, designing
        immersive <br /> digital experiences, or developing strategic marketing
      </span>
      <div className="w-auto flex gap-4 justify-center items-center">
        <button className="w-[206px] h-16 rounded-full transition-all duration-150 hover:opacity-90 bg-[#F15C20] shadow-xl text-white text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center">
          Schedule a meeting
        </button>
        <button className="w-[206px] h-16 rounded-full border-2 transition-all duration-100 hover:scale-105 border-[#F15C20]  text-[#F15C20] text-md font-medium  flex items-center justify-center gap-2">
          <BsFillTelephoneFill />
          <span>+1 877 714 1770</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
