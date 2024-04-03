import React from "react";
import { styles } from "../../styles/styles";
import { Hamburger, Logo } from "../../assets/export";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} h-20  flex items-center justify-between w-full`}
    >
      <Link to="/">
        <img src={Logo} />
      </Link>
      <button>
        <img src={Hamburger} />
      </button>
    </div>
  );
};

export default Navbar;
