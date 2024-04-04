import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "../components/global/Navbar";
import FixedSocials from "../components/global/FixedSocials";
import Hero from "../components/Home/Hero";
import Technologies from "../components/Home/Technologies";
import Slider from "../components/Home/Slider";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import Faq from "../components/Home/Faq";

const Home = () => {
  const { isOpen } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-4">
      <Navbar />
      <Hero />
      <Slider />
      <Technologies />
      <ServicesSection />
      <Faq />
      <WhyChooseUsSection />
      <FixedSocials />
    </div>
  );
};

export default Home;
