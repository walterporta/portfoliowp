import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed w-full top-0 z-50 flex justify-between items-center h-16 shadow-md px-10 transition-colors duration-500 bg-gray-900 text-white">
    <a href="/" title="Walter Porta">
        <p className="text-lg font-bold text-blue-50 hover:text-cyan-500">
          Walter Porta
        </p>
      </a>
      <div className="hidden md:flex space-x-4">
        <Link
          to="landing"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Home
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          About
        </Link>

        <Link
          to="projectsSections"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Projects
        </Link>

        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Skills
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <button className="focus:outline-none bg-gray-900" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="w-6 h-6 bg-slate-600 text-white"
          />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            to="landing"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-2"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="projectsSections"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-2"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-2"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
