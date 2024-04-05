import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { styles } from "../../styles/styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-auto flex flex-col gap-3 py-6 justify-start items-start ${styles?.paddingHorizontal} `}
      style={{
        background: palette?.dark_contrast_background,
      }}
    >
      <h1
        className="text-[96px] font-bold capitalize"
        style={{ color: palette?.color }}
      >
        have an idea?
      </h1>
      <span
        className="text-[60px] font-light"
        style={{ color: palette?.color }}
      >
        +1 877 714 1770
      </span>

      <button
        style={{
          background: `${palette?.brandRed}`,
          color: "white",
        }}
        className="w-[150px] lg:w-[206px] h-14 lg:h-20 rounded-full  transition-all duration-100 hover:scale-105 text-md lg:text-lg font-medium  flex items-center justify-center gap-2 animate-pulse"
      >
        <BsFillTelephoneFill />
        <span>Call Now</span>
      </button>

      <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className=" uppercase text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link to="/">Home</Link>
          <Link to="/">Services</Link>
          <Link to="/">Case Study</Link>
        </div>
        <div className=" uppercase text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link to="/">Testimonials</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className=" h-auto  text-lg font-normal flex flex-col uppercase gap-3 py-6 px-2 justify-start col-start-4 items-start col-span-2">
          <span>Subscribe</span>
          <div className="w-full relative">
            <input
              type="text"
              className="w-full  outline-none h-10 bg-transparent px-2"
              placeholder="E-mail"
              style={{ borderBottom: `2px solid ${palette?.brandOrange}` }}
            />
            <GoArrowRight
              className="absolute top-2 right-2  text-2xl"
              style={{ color: palette?.brandOrange }}
            />
          </div>
        </div>
      </div>

      <span
        className="text-sm"
        style={{ color: palette?.light_contrast_color }}
      >
        © 2022 dignite studios
      </span>
    </div>
  );
};

export default Footer;
