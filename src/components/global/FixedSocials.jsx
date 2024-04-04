import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { GlobalContext } from "../../context/GlobalContext";

const FixedSocials = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={`fixed top-[35%] right-6 w-16 h-auto p-4 flex flex-col gap-3 justify-start items-center rounded-full  ${
        theme == "light" ? "bg-[#E7E7E7]/[0.4]" : "bg-[#393939]/[0.6]"
      }        `}
    >
      <Link
        to="/"
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#5C5C5C] transition-all duration-150 hover:opacity-80"
      >
        <FaFacebookF className="text-md text-white" />
      </Link>
      <Link
        to="/"
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#5C5C5C] transition-all duration-150 hover:opacity-80"
      >
        <BsFillTelephoneFill className="text-md text-white" />
      </Link>
      <Link
        to="/"
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#5C5C5C] transition-all duration-150 hover:opacity-80"
      >
        <ImLinkedin2 className="text-md text-white" />
      </Link>
      <Link
        to="/"
        className="w-9 h-9 rounded-full flex items-center justify-center bg-[#5C5C5C] transition-all duration-150 hover:opacity-80"
      >
        <AiOutlineInstagram className="text-lg text-white" />
      </Link>
    </div>
  );
};

export default FixedSocials;
