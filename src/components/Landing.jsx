// const Landing = () => {
//   return (
//     <div className=" bg-gradient-to-r from-emerald-400 to-blue-400 flex flex-col md:flex-row items-center justify-center h-screen " id="landing">
//       <div className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0">
//         <div>
//           <img
//             src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435134/vnw6gimpqsvalkkv1gza.jpg"
//             alt="Imagen de portada"
//             className="w-full h-full object-cover -mt-6"
//           />
//         </div>
//       </div>
//       <div className="md:ml-8 mt-4 md:mt-0 flex flex-col items-center md:items-start">
//         <div className="text-center md:text-left text-white">
//           <p className="text-lg">Bienvenido a mi Portfolio</p>
//           <h1 className="text-3xl font-bold">Me llamo  Walter Porta</h1>
//           <p className="text-lg">Desarrollador Web Full Stack</p>
//         </div>
//         <div className="mt-2 md:mt-3 space-x-4 flex justify-center md:justify-start">
//           <a
//             href="https://www.linkedin.com/in/walter-porta-589a52254/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
//           >
//             Linkedin
//           </a>
//           <a
//             href="https://github.com/walterporta"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

// const Landing = () => {
//   return (
//     <div className=" bg-gradient-to-r from-emerald-400 to-blue-400 flex flex-col md:flex-row items-center justify-center h-screen " id="landing">
//       <div className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0">
//         <div>
//           <img
//             src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435134/vnw6gimpqsvalkkv1gza.jpg"
//             alt="Imagen de portada"
//             className="w-full h-full object-cover -mt-6"
//           />
//         </div>
//       </div>
//       <div className="md:ml-8 mt-4 md:mt-0 flex flex-col items-center md:items-start">
//         <div className="text-center md:text-left text-white">
//           <p className="text-lg">Bienvenido a mi Portfolio</p>
//           <h1 className="text-3xl">
//             Me llamo <span className="font-bold">Walter Porta</span>
//           </h1>
//           <p className="text-lg">Desarrollador Web Full Stack</p>
//         </div>
//         <div className="mt-2 md:mt-3 space-x-4 flex justify-center md:justify-start">
//           <a
//             href="https://www.linkedin.com/in/walter-porta-589a52254/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
//           >
//             Linkedin
//           </a>
//           <a
//             href="https://github.com/walterporta"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;


const Landing = () => {
  return (
    <div className=" bg-gradient-to-r from-emerald-400 to-blue-400 flex flex-col md:flex-row items-center justify-center h-screen " id="landing">
      <div className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0">
        <div>
          <img
            src="https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688435134/vnw6gimpqsvalkkv1gza.jpg"
            alt="Imagen de portada"
            className="w-full h-full object-cover -mt-6"
          />
        </div>
      </div>
      <div className="md:ml-8 mt-4 md:mt-0 flex flex-col items-center md:items-start">
        <div className="text-center md:text-left text-white">
          <p className="text-lg">Bienvenido a mi Portfolio</p>
          <p className="text-lg">
            Me llamo <span className="font-bold text-2xl">Walter Porta</span>
          </p>
          <p className="text-lg">Desarrollador Web Full Stack</p>
        </div>
        <div className="mt-2 md:mt-3 space-x-4 flex justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/walter-porta-589a52254/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/walterporta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
