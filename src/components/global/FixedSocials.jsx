import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";

const FixedSocials = () => {
  return (
    <div className="fixed top-[35%] right-6 w-16 h-auto p-4 flex flex-col gap-3 justify-start items-center rounded-full bg-[#E7E7E7]/[0.4]        ">
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
