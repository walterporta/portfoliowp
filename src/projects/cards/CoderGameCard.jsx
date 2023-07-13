import React, { useState } from "react";

const CoderGameCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRepoClick = (event) => {
    event.preventDefault();
    window.open("https://github.com/walterporta/CoderGame_Back", "_blank");
    window.open("https://github.com/Rancho91/CoderGame_Front", "_blank");
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center border border-transparent  rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center">
        <div className="w-3/4 h-3/4 md:w-full md:h-full overflow-hidden flex-shrink-0 relative">
          <img
            src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435151/s7olsv0dpjjz5bbrco1q.png"
            alt="Imagen de portada"
            className={`w-full h-full object-cover transition-all ${
              isHovered ? "brightness-50" : "brightness-100"
            }`}
          />
          {isHovered && (
            <div className="flex flex-col justify-between h-full absolute top-0 left-0 w-full p-2 sm:p-4 text-white">
              <div className="text-left">
                <h1 className="text-lg font-bold">PF CoderGame 2.0</h1>
                <br />
                <p>Proyecto final, client rediseñado</p>
                <p>Curso: Full Stack Developer en Henry</p>
                <br />
                <div className="flex flex-row">
                  <p className="font-bold mr-2">Fecha de realización:</p>
                  <p>Jun 2023</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="/"
                  onClick={handleRepoClick}
                  className="mr-4 text-white bg-neutral-800 hover:text-cyan-500 border rounded-lg px-2 py-1"
                >
                  Repositorios
                </a>
                <a
                  href="https://coder-game-front.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-white bg-neutral-800 hover:text-cyan-500 border rounded-lg px-2 py-1"
                >
                  Deploy
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoderGameCard;
