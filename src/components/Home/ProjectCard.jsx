import React from "react";
import { CaseStudyArrow } from "../../assets/export";

const ProjectCard = ({ title, description, image, projectLink }) => {
  return (
    <div className="group h-[390px] flex flex-col items-start gap-2 mb-12 relative">
      <img
        src={image}
        alt=""
        className="w-full h-[360px] group-hover:cursor-pointer hover:brightness-90 transition-all duration-700"
      />
      <a
        href={projectLink}
        className="text-white font-medium underline absolute z-20 top-[37%] left-[40%] hidden group-hover:block transition-all duration-700"
      >
        View project
      </a>
      <div className="w-full flex justify-between items-center pr-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <button className="">
          <img src={CaseStudyArrow} alt="" className="w-5" />
        </button>
      </div>
      <p className="text-sm font-normal text-[#5C5C5C]">{description}</p>
    </div>
  );
};

export default ProjectCard;
