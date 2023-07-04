// const CoderGameCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center border border-transparent hover:border-gray-800 hover:bg-white hover:text-black hover:bg-opacity-50 hover:text-opacity-50 rounded-md">        
//       <div className="flex m-4">
//         <div className="w-78 h-64 overflow-hidden flex-shrink-0">
//           <img
//             src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435151/s7olsv0dpjjz5bbrco1q.png"
//             alt="Imagen de portada"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="text-left md:ml-8 mt-4 md:mt-0 flex flex-col items-center md:items-start">
//           <h1 className="text-lg font-bold">PF CoderGame 2.0</h1>
//           <br />
//           <p className="max-w-xs overflow-hidden whitespace-nowrap">Proyecto final, client rediseñado</p>
//           <p className="max-w-xs overflow-hidden whitespace-nowrap">Curso: Full Stack Developer en Henry</p>
//           <br />
//           <div className="flex flex-row">
//             <p className="font-bold mr-2">Fecha de realización:</p>
//             <p>Jun 2023</p>
//           </div>
//           <br />
//           <p className="font-bold">Tecnologías utilizadas:</p>
//         </div>
//       </div>       
//     </div>
//   );
// };

// export default CoderGameCard;


import React, { useState } from "react";

const CoderGameCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center border border-transparent hover:border-gray-800 hover:bg-white hover:text-black hover:bg-opacity-50 hover:text-opacity-50 rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex m-4">
        <div className="w-78 h-64 overflow-hidden flex-shrink-0 relative">
          <img
            src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435151/s7olsv0dpjjz5bbrco1q.png"
            alt="Imagen de portada"
            className={`w-full h-full object-cover transition-all ${
              isHovered ? "brightness-50" : "brightness-100"
            }`}
          />
          {isHovered && (
            <div className="text-left absolute top-0 left-0 h-full w-full p-4 text-white">
              <h1 className="text-lg font-bold">PF CoderGame 2.0</h1>
              <br />
              <p>Proyecto final, client rediseñado</p>
              <p>Curso: Full Stack Developer en Henry</p>
              <br />
              <div className="flex flex-row">
                <p className="font-bold mr-2">Fecha de realización:</p>
                <p>Jun 2023</p>
              </div>
              <br />
              <p className="font-bold">Tecnologías utilizadas:</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoderGameCard;
