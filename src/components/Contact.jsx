const Contact = () => {
  return (
    <div>
      <h3 class="text-3xl text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">
        Contáctame
      </h3>

      <section class="flex flex-col w-[90%] m-auto" id="contacto">
        <form action="" class="w-[90%] md:max-w-[600px] m-auto">
          <div>
            <input
              placeholder="info@ejemplo.com"
              type="email"
              name="email"
              id="email"
              class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div class="py-3">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <textarea
              name="msj"
              id="msj"
              rows="5"
              placeholder="Mensaje"
              class="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
          </div>
          <div class="my-3">
            <button class="bg-sky-600 text-white p-3 w-full rounded-lg text-xl tracking-widest">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Contact;
