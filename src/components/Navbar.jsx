import React, { useState } from "react";
import Landing from "./Landing";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center h-16  shadow-md px-10 transition-colors duration-500 bg-gray-900 text-white">
      <a href="/" title="Walter Porta">
        <p className="text-lg font-bold text-blue-50 hover:text-cyan-500 ">Walter Porta</p>
      </a>
      <div className="hidden md:flex space-x-4 ">
        
        <p className="cursor-pointer  text-blue-50 hover:text-cyan-500" >Home</p>
        <p className="cursor-pointer  text-blue-50 hover:text-cyan-500">About</p>
        <p className="cursor-pointer  text-blue-50 hover:text-cyan-500">Projects</p>
        <p className="cursor-pointer  text-blue-50 hover:text-cyan-500">Skills</p>
        <p className="cursor-pointer  text-blue-50 hover:text-cyan-500">Contact</p>
      </div>
      
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>
    
      {isOpen && (
        <div className="md:hidden">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Projects</p>
          <p className="cursor-pointer">Skills</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
