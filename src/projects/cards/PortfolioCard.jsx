import React, { useState } from "react";

const PortfolioCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
    return(
        <div
      className="flex flex-col md:flex-row items-center justify-center border border-transparent hover:border-gray-800 hover:bg-white hover:text-black hover:bg-opacity-50 hover:text-opacity-50 rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex ">
        <div className="w-78 h-64 overflow-hidden flex-shrink-0 relative">
          <img
            src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689179252/vhz6f0uvzzclhnvden0p.png"
            alt="Imagen de portada"
            className={`w-full h-full object-cover transition-all ${
              isHovered ? "brightness-50" : "brightness-100"
            }`}
          />
          {isHovered && (
            <div className="text-left absolute top-0 left-0 h-full w-full p-4 text-white">
              <h1 className="text-lg font-bold">Portfolio</h1>
              <br />
              <p>Portfolio Personal</p>
              {/* <p>Curso: Full Stack Developer en Henry</p> */}
              <br />
              <div className="flex flex-row">
                <p className="font-bold mr-2">Fecha de realización:</p>
                <p>Junio 2023</p>
              </div>
              <br />
              <p className="font-bold">Tecnologías utilizadas:</p>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}

export default PortfolioCard;