import React from "react";
import PiCountryCard from "../projects/cards/PiCountryCard";
import CoderGameCard from "../projects/cards/CoderGameCard";

const ProjectsSections = () => {
  return (
    <div className="bg-emerald-500 items-center justify-center h-screen" id="projectsSections">
      <h1 className="text-lg font-bold text-white ">PROYECTOS:</h1>
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <div className="w-full md:max-w-sm mx-auto mb-4">
            <PiCountryCard />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full md:max-w-sm mx-auto">
            <CoderGameCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSections;
