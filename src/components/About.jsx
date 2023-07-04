import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full md:w-2/3 md:mx-4 mt-4 text-white">
        <h1 className="text-lg font-bold text-center mb-4">SOBRE MÍ:</h1>
        <p className=" text-sm md:text-lg text-left md:text-left mx-2">
          ¡Hola! Mi nombre es Walter Porta y soy un Desarrollador Web Full Stack
          graduado del Bootcamp de Henry con más de nueve años de experiencia en
          el mundo de la tecnología. Como profesional, me destaco por mi actitud
          proactiva, resolutiva y capacidad para trabajar en equipo, lo que me
          ha permitido llevar a cabo proyectos exitosos en conjunto. Mi enfoque
          principal es comprender las necesidades de los clientes y brindar
          soluciones personalizadas, utilizando herramientas y tecnologías de
          última generación para garantizar la calidad del producto final.
        </p>
        <br />
        <p className="text-sm md:text-lg text-left md:text-left mx-2">
          Tengo amplio conocimiento en el uso de lenguajes y frameworks tanto
          del lado del cliente como del servidor, lo que me permite abordar cada
          proyecto de manera innovadora y efectiva. Además, siempre estoy
          dispuesto a aprender nuevas tecnologías y mejorar mis habilidades para
          poder seguir creciendo en mi carrera profesional y ofrecer soluciones
          de alta calidad a mis clientes.
        </p>
        <br />
        <p className="text-sm md:text-lg text-left md:text-left mx-2">
          Si estás buscando un profesional apasionado, altamente capacitado y
          comprometido con el éxito de tu empresa, no dudes en contactarme.
          Estoy deseando contribuir al éxito de tu proyecto.
        </p>
      </div>
      <br />
      <div className="mt-6 flex space-x-2 md: px-3">
        <a
          href="https://drive.google.com/file/d/17pGeiRA535DKCVIcvlv7xxVXKihNo_jq/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:text-cyan-500 text-white py-2 px-4 rounded-lg text-sm md:text-lg mx-5"
        >
          Descargar mi CV (Inglés)
        </a>

        <a
          href="https://drive.google.com/file/d/1D9Vv69mRuarWmYV3gjxYX4p8PvuvlqBD/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:text-cyan-500 text-white py-2  px-4 rounded-lg text-sm md:text-lg mx-5"
        >
          Descargar mi CV (Español)
        </a>
      </div>
    </div>
  );
};

export default About;
