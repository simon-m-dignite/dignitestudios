import React from "react";
import {
  AiColor,
  AiGray,
  FigmaColor,
  FigmaGray,
  FlutterColor,
  FlutterGray,
  PsColor,
  PsGray,
  ReactColor,
  ReactGray,
  SwiftColor,
  SwiftGray,
  TailwindColor,
  TailwindGray,
  VueColor,
  VueGray,
} from "../../assets/export";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  const technologies = [
    {
      color: FlutterColor,
      gray: FlutterGray,
    },
    {
      color: SwiftColor,
      gray: SwiftGray,
    },
    {
      color: VueColor,
      gray: VueGray,
    },
    {
      color: ReactColor,
      gray: ReactGray,
    },
    {
      color: TailwindColor,
      gray: TailwindGray,
    },
    {
      color: FigmaColor,
      gray: FigmaGray,
    },
    {
      color: AiColor,
      gray: AiGray,
    },
    {
      color: PsColor,
      gray: PsGray,
    },
  ];
  return (
    <div className="w-full h-auto my-5 flex flex-col gap-3 justify-start items-center">
      <h1 className="text-3xl font-bold text-black">
        Technologies we’re using
      </h1>
      <div className="w-full h-auto flex justify-center gap-4 items-center ">
        {technologies?.map((technology, key) => {
          return <TechnologyCard technology={technology} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
