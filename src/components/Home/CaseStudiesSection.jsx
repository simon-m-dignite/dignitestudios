import React from "react";
import { styles } from "../../styles/styles";
import { ArrowUp } from "../../assets/export";
import ProjectCard from "./ProjectCard";
import { casestudies } from "../../constants/casestudies";

const CaseStudiesSection = () => {
  return (
    <div className={`bg-[#E7E7E733] w-full py-5`}>
      <div className={`${styles.paddingHorizontal}`}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase my-3`}>
          recent
        </p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1 className={`font-bold uppercase text-6xl`}>case studies</h1>
          <button className="w-[206px] h-16 rounded-full transition-all duration-150 hover:opacity-90 bg-[#F15C20] shadow-xl text-white text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center gap-4">
            All Cases <img src={ArrowUp} alt="arrow" className="w-3" />
          </button>
        </div>
      </div>

      <div
        className={`w-full grid grid-cols-1 border-t-2 md:grid-cols-2 lg:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 pt-6 gap-4 md:gap-x-14 mt-12 ${styles.paddingHorizontal}`}
      >
        {casestudies.map((c, index) => {
          return (
            <ProjectCard
              key={index}
              title={c.title}
              description={c.description}
              image={c.image}
              projectLink={c.projectLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
