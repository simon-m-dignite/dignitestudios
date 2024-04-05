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
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import Footer from "../components/Home/Footer";
import LandingContactUs from "../components/Home/LandingContactUs";
import IndustriesSection from "../components/Home/IndustriesSection";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  const { isOpen } = useContext(GlobalContext);
  return (
    <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
      <Navbar />
      <Hero />
      <Slider />
      <Technologies />
      <CaseStudiesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <Testimonials />
      <Faq />
      <LandingContactUs />
      <Footer />
      <FixedSocials />
    </div>
  );
};

export default Home;
