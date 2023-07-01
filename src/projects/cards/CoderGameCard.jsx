const CoderGameCard = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="border border-transparent hover:border-gray-800 hover:bg-white hover:text-black hover:bg-opacity-50 hover:text-opacity-50 rounded-md">
          <div className="flex m-4">
            <div className="w-78 h-64 overflow-hidden flex-shrink-0">
              <img
                src="/src/assets/img/otro.png"
                alt="Imagen de portada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left ml-8">
              <h1 className="text-lg font-bold">PF CoderGame 2.0</h1>
              <br />
              <p>Proyecto final, client rediseñado </p>
              <p>Curso: Full Stack Developer en Henry</p>
              <br />
              <div className="flex flex-row">
                <p className="font-bold mr-2">Fecha de realización:</p>
                <p>Jun 2023</p>
              </div>
              <br />
              <p className="font-bold">Tecnologías utilizadas:</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CoderGameCard;
  