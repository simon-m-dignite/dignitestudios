import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";

const Home = () => {
  const { isOpen } = useContext(GlobalContext);
  return (
    <div>
      <ServicesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
