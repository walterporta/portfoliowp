import React from "react";

const Landing = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0">
        <div className="  ">
        <img
          src="/src/assets/img/WalterPorta.jpg"
          alt="Imagen de portada"
          className="w-full h-full object-cover -mt-8"
        />
      </div>
      </div>
      <div className="ml-8">
      <div className="mt-4 text-center text-white ">
        <p className="text-lg">Bienvenido a mi Portfolio</p>
        <h1 className="text-3xl font-bold">Me llamo Walter Porta</h1>
        <p className="text-lg">Soy Desarrollador Web Full Stack</p>
      </div>
      <div className="mt-6 space-x-4">
        <a
          href="https://www.linkedin.com/in/walter-porta-589a52254/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"        >
          LinkedIn
        </a>
        <a
          href="https://github.com/walterporta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg  border-cyan-500 "
        >
          GitHub
        </a>
      </div>
      </div>
    </div>
  );
};

export default Landing;
