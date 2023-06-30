import React from "react";
import PiCountryCard from "../projects/cards/PiCountryCard";
import CoderGameCard from "../projects/cards/CoderGameCard";

const ProjectsSections = () => {
  return (
    <div className="bg-emerald-500 items-center justify-center h-screen">
      <h1 className="text-lg font-bold ">PROYECTOS:</h1>
      <br />
      <div className="flex flex-wrap justify-center ">
        <div className="grid grid-cols-2">
          <PiCountryCard />
          <PiCountryCard />
          <CoderGameCard />
          <CoderGameCard />
        </div>
        
        
      </div>
    </div>
  );
};

export default ProjectsSections;
