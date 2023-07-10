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
    <div className={`fixed w-full top-0 z-50 flex  justify-between items-center px-10 transition-colors duration-500 bg-gray-900 text-white ${isOpen ? 'h-auto' : 'h-16'} shadow-md`}>
     <a href="/" title="Walter Porta">
        <p className="text-lg font-bold text-blue-50 hover:text-cyan-500">
          Walter Porta
        </p>
      </a>
      <div className="hidden md:flex space-x-4">
        <Link
          activeClass="text-cyan-500"
          to="landing"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Inicio
        </Link>

        <Link
          activeClass="text-cyan-500"
          to="about"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Sobre Mí
        </Link>

        <Link
          activeClass="text-cyan-500"
          to="skills"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Habilidades
        </Link>

        <Link
          activeClass="text-cyan-500"
          to="projectsSections"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Proyectos
        </Link>

        <Link
          activeClass="text-cyan-500"
          to="contact"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="cursor-pointer text-blue-50 hover:text-cyan-500"
        >
          Contacto
        </Link>
      </div>

      <div className="md:hidden">
        <button className={`focus:outline-none bg-gray-900 ${isOpen ? 'ms-20' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className={`bg-gray-900 text-white ${isOpen ? 'w-2 h-4' : 'w-6 h-6'}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden my-2 text-xs ">
          <Link
            activeClass="text-cyan-500"
            to="landing"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-0.3"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            activeClass="text-cyan-500"
            to="about"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 my-0.3"
            onClick={toggleMenu}
          >
            Sobre Mí
          </Link>
          <Link
            activeClass="text-cyan-500"
            to="projectsSections"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-0.3"
            onClick={toggleMenu}
          >
            Proyectos
          </Link>
          <Link
            activeClass="text-cyan-500"
            to="skills"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-0.3"
            onClick={toggleMenu}
          >
            Habilidades
          </Link>
          <Link
            activeClass="text-cyan-500"
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer block text-blue-50 hover:text-cyan-500 mb-0.3"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
