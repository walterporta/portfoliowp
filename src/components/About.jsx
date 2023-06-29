const About = () => {
return (
    <div className=" flex flex-col items-center justify-center h-screen">

    
        <div className=" text-left">
            
            <h1 className="text-lg font-bold">SOBRE MÍ</h1>        
          
            <p>¡Hola! Mi nombre es Walter Porta y soy un Desarrollador Web Full Stack</p>
            <p>graduado del Bootcamp de Henry con más de nueve años de</p>
            <p>experiencia en el mundo de la tecnología. Como profesional, me destaco</p>
            <p>por mi actitud proactiva, resolutiva y capacidad para trabajar en equipo,</p>
            <p>lo que me ha permitido llevar a cabo proyectos exitosos en conjunto. Mi</p>
            <p>enfoque principal es comprender las necesidades de los clientes y</p>
            <p>brindar soluciones personalizadas, utilizando herramientas y tecnologías</p>
            <p>de última generación para garantizar la calidad del producto final.</p>
            <br/>
            <p>Tengo amplio conocimiento en el uso de lenguajes y frameworks tanto</p>
            <p>del lado del cliente como del servidor, lo que me permite abordar cada</p>
            <p>proyecto de manera innovadora y efectiva. Además, siempre estoy</p>
            <p>dispuesto a aprender nuevas tecnologías y mejorar mis habilidades para</p>
            <p>poder seguir creciendo en mi carrera profesional y ofrecer soluciones de</p>
            <p>alta calidad a mis clientes.</p>
            <br/>
            <p>Si estás buscando un profesional apasionado, altamente capacitado y</p>
            <p>comprometido con el éxito de tu empresa, no dudes en contactarme.</p>
            <p>Estoy deseando contribuir al éxito de tu proyecto.</p>        
        </div>
        <div className="mt-6 space-x-4">
            <a 
            href="https://drive.google.com/file/d/17pGeiRA535DKCVIcvlv7xxVXKihNo_jq/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg" >
            Descargar mi CV (Inglés)
            </a>
                        
            <a href="https://drive.google.com/file/d/1D9Vv69mRuarWmYV3gjxYX4p8PvuvlqBD/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:text-cyan-500 text-white px-4 py-2 rounded-lg" >
            Descargar mi CV (Español)
            </a>        
        </div>
    </div>
)
}

export default About