import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: "walterportadev@example.com", // Ingresa aquí tu dirección de correo
      subject: "Mensaje desde el formulario de contacto - Portfolio",
      message: message,
    };

    emailjs
      .send("service_0ztm46j", "template_8xcrzxo", templateParams, "50WlnwzGqTRgEtYdI")
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
    <div className="flex flex-col items-center justify-center bg-gray-900 h-screen" id="contact">
      <h3 className="text-3xl text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">
        Contáctame
      </h3>

      <section className="flex flex-col w-[90%] m-auto" id="contacto">
        <form onSubmit={handleSubmit} className="w-[90%] md:max-w-[600px] m-auto">
          <div>
            <input
              placeholder="info@ejemplo.com"
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
              placeholder="Nombre"
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
            <button className="bg-gray-800 text-white p-3 w-full rounded-lg text-xl tracking-widest" type="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
