import React from "react";
import PiCountryCard from "../projects/cards/PiCountryCard";
import CoderGameCard from "../projects/cards/CoderGameCard";
import PortfolioCard from "../projects/cards/PortfolioCard";

const ProjectsSections = () => {
  return (
    <div className="bg-neutral-800 items-center justify-center h-screen " id="projectsSections">
      <div className="w-full py-2">
      <h1 className="text-3xl font-bold text-white">PROYECTOS:</h1>
      </div>
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <div className="w-full md:max-w-sm mx-auto mb-4">
            <PiCountryCard />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full md:max-w-sm mx-auto mb-4">
            <PortfolioCard />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full md:max-w-sm mx-auto mb-4">
            <CoderGameCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSections;
