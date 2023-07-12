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
      className="flex flex-col md:flex-row items-center justify-center border border-transparent rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center">
        <div className="w-3/4 h-3/4 md:w-full md:h-full overflow-hidden flex-shrink-0 relative">
          <img
            src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689179963/in7t3jare7m7jkeycnjh.png"
            alt="Imagen de portada"
            className={`w-full h-full object-cover transition-all ${
              isHovered ? "brightness-50" : "brightness-100"
            } max-w-full`}
          />
          {isHovered && (
            <div className="text-left absolute top-0 left-0 h-full w-full p-4 text-white">
              <h1 className="text-lg font-bold">Portfolio Personal</h1>
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

