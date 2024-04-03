import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { isOpen } = useContext(GlobalContext);
  return <div>Home</div>;
};

export default Home;
