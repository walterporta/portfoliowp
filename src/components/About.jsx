import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-screen bg-neutral-800" id="about">
      <div className="w-full md:w-2/3 md:mx-4 mt-4 text-white">
        <h1 className="text-lg font-bold text-center mb-4 ">SOBRE MÍ:</h1>
        <p className=" text-sm md:text-lg text-left md:text-left mx-2">
          ¡Hola! Te quiero contar que soy Desarrollador Web Full Stack,
          graduado del Bootcamp de Henry, con más de nueve años de experiencia en
          el mundo de la tecnología. 
        </p>
        <br />
        <p className=" text-sm md:text-lg text-left md:text-left mx-2">
          Como profesional, me destaco por mi actitud proactiva, 
          resolutiva y por mi capacidad para trabajar en equipo. Me enfoco
          principalmente en comprender las necesidades de los clientes para brindar
          respuestas personalizadas.
        </p>
        <br />
        <p className="text-sm md:text-lg text-left md:text-left mx-2">
          Tengo amplio conocimiento en el uso de lenguajes y frameworks tanto
          del lado del cliente como del servidor, lo que me permite abordar cada
          proyecto de manera innovadora y efectiva. Además, siempre estoy
          dispuesto a aprender nuevas tecnologías, mejorar mis habilidades para
          seguir creciendo en mi carrera profesional y ofrecer soluciones
          de alta calidad.
        </p>
        <p>
          
        </p>
        <br />
        <p className="text-sm md:text-lg text-left md:text-left mx-2">
          Si estás buscando un profesional apasionado, altamente capacitado y
          comprometido, no dudes en contactarme.
          Estoy deseando contribuir al éxito de tu proyecto.
        </p>
      </div>
      <br />
      <div className="mt-6 flex justify-center space-x-2 px-3 md:px-0">
  <a
    href="https://drive.google.com/file/d/17pGeiRA535DKCVIcvlv7xxVXKihNo_jq/view?usp=share_link"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:text-cyan-500 text-neutral-800 py-2 px-4 rounded-lg text-sm md:text-lg mx-2"
  >
    Descargar mi CV (Inglés)
  </a>

  <a
    href="https://drive.google.com/file/d/1D9Vv69mRuarWmYV3gjxYX4p8PvuvlqBD/view?usp=share_link"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:text-cyan-500 text-neutral-800 py-2 px-4 rounded-lg text-sm md:text-lg mx-2"
  >
    Descargar mi CV (Español)
  </a>
</div>
    </div>
  );
};

export default About;
