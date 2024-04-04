import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BrandUnderline } from "../../assets/export";
import { GlobalContext } from "../../context/GlobalContext";

const Hero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="w-full  flex flex-col gap-4 justify-start items-center">
      <span
        className="capitalize text-[18px] font-medium "
        style={{
          color: palette?.light_contrast_color,
        }}
      >
        mobile & Web app development agency
      </span>
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-7xl font-bold text-center capitalize"
      >
        Elevate your brand in the <br />
        digital cosmos
      </h1>
      <span
        style={{
          color: palette?.light_contrast_color,
        }}
        className=" text-center my-6 text-[19px] font-normal"
      >
        Whether it's crafting a visually stunning brand identity, designing
        immersive <br /> digital experiences, or developing strategic marketing
      </span>
      <div className="w-auto flex gap-4 justify-center items-center">
        <button
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="w-[206px] h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
        >
          Schedule a meeting
        </button>
        <button
          style={{
            background: palette?.brandRed,
            color: "white",
          }}
          className="w-[206px] h-16 rounded-full  transition-all duration-100 hover:scale-105 text-md font-medium  flex items-center justify-center gap-2"
        >
          <BsFillTelephoneFill />
          <span>+1 877 714 1770</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
