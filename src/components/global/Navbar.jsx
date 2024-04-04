import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { Hamburger, HamburgerDark, Logo, LogoDark } from "../../assets/export";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { CiBrightnessDown } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={`${styles.paddingHorizontal} h-20  flex items-center justify-between w-full`}
    >
      <Link to="/">
        <img src={theme == "light" ? Logo : LogoDark} />
      </Link>
      <div className="w-auto flex gap-3 justify-start items-center">
        <button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className={`${
            theme == "light" ? "bg-blue-500/[0.2]" : "bg-[#A9A1D7]/[0.18]"
          } rounded-full transition-all duration-300 w-[70px] h-[37.5px] p-[4px] flex justify-start items-center`}
        >
          <span
            className={`h-8 w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
              theme == "light"
                ? "translate-x-0 bg-blue-500"
                : "translate-x-[calc(100%-3%)] bg-[#342A6D]"
            } `}
          >
            {theme == "light" ? <CiBrightnessDown /> : <IoMoon />}
          </span>
        </button>

        <button>
          <img src={theme == "light" ? Hamburger : HamburgerDark} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
