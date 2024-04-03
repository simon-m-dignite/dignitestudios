import React from "react";
import { styles } from "../../styles/styles";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { chooseus } from "../../constants/whychooseus";

const WhyChooseUsSection = () => {
  return (
    <div className={`text-black my-5 ${styles.paddingHorizontal} text-center`}>
      <h1 className={`uppercase text-5xl font-bold mb-8`}>why choose us</h1>
      <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-6">
        {chooseus.map((c) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
