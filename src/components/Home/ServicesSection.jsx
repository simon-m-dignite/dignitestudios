import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants/services";
import { GlobalContext } from "../../context/GlobalContext";

const ServicesSection = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className={` my-5 ${styles.paddingHorizontal}`}>
      <h1
        className={`${palette.color} uppercase font-extrabold text-center lg:text-start text-4xl lg:text-6xl lg:font-bold mb-2 lg:mb-6`}
      >
        our services
      </h1>
      <div className="lg:py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        {services.map((s, key) => {
          return (
            <ServiceCard
              key={key}
              count={key}
              title={s.title}
              desc={s.description}
              icon={s.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
