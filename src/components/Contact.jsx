import React, { useState } from "react";
import emailjs from "emailjs-com";

const {
  VITE_APP_EMAIL: EMAIL, 
  VITE_APP_SERVICE: SERVICE, 
  VITE_APP_TEMPLATE: TEMPLATE, 
  VITE_APP_EMAILTEMPLATE: EMAILTEMPLATE
} = import.meta.env;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: EMAIL, 
      subject: "Mensaje desde el formulario de contacto - Portfolio",
      message: message,
      name: name,
    };

    emailjs
      .send(SERVICE, TEMPLATE, templateParams, EMAILTEMPLATE)
      .then((response) => {
        console.log("Correo enviado:", response);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-blue-400 flex flex-col items-center justify-center  h-screen" id="contact">
      <h1 className="text-3xl text-neutral-800font-bold  mt-20 mb-10 px-10 font-bold tracking-widest text-center">
        CONTÁCTAME:
      </h1>

      <div className="flex flex-col w-[90%] m-auto" id="contacto">
        <form onSubmit={handleSubmit} className="w-[90%] md:max-w-[600px] m-auto">
          <div>
            <input
              placeholder="ejemplo@gmail.com"
              type="email"
              name="email"
              id="email"
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="py-3">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre y Apellido"
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              name="msj"
              id="msj"
              rows="5"
              placeholder="Mensaje"
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="my-3">
            <button className="bg-neutral-800 hover:text-cyan-500 text-white p-3 w-full rounded-lg  tracking-widest" type="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center  mb-20">
      <a href="mailto:walterandresporta@gmail.com" target="_blank" rel="noreferrer">
                        <img
                            className={"w-14 h-14 mx-8"}
                            src={"https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688648247/bapzrkehr76auweeuaje.png"}
                            alt="Contact me"
                            title="Contact me"
                            loading="lazy"                            
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/walter-porta-589a52254/" target="_blank" rel="noreferrer">
                        <img
                            className={"w-14 h-14 mx-8"}
                            src={"https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688648242/b0mnhfatyhz3ckvgcsfg.png"}
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"                            
                        />
                    </a>
                    <a href="https://github.com/walterporta" target="_blank" rel="noreferrer">
                        <img
                            className={"w-14 h-14 mx-8"}
                            src={"https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688647394/w6hjfyu5b9kcmwgfqd3e.png"}
                            alt="GitHub"
                            title="GitHub"
                            loading="lazy"                            
                        />
                    </a>
      </div>
    </div>
  );
};

export default Contact;
