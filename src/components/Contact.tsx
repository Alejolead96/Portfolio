import { IconSend } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472667477!2d-74.27261661242906!3d4.648620627506904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1765425427646!5m2!1ses!2sco"
        className="w-full h-[40vh] rounded-2xl my-6"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <form action="">
        <div className="grid grid-cols-2 gap-8 my-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nombre completo</label>
            <input
              className="p-3 text-lg rounded-md border border-gray-300 dark:border-gray-700/90 bg-sky-100/20 dark:bg-third-dark focus:outline-none focus:ring-2 focus:ring-sky-500"
              type="text"
              id="name"
              placeholder="Nombre completo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Correo electrónico</label>
            <input
              className="p-3 text-lg rounded-md border border-gray-300 dark:border-gray-700/90 bg-sky-100/20 dark:bg-third-dark focus:outline-none focus:ring-2 focus:ring-sky-500"
              type="email"
              id="email"
              placeholder="alejandro@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Tu mensaje</label>
          <textarea
            className="p-3 resize-none text-lg rounded-md border border-gray-300 dark:border-gray-700/90 bg-sky-100/20 dark:bg-third-dark focus:outline-none focus:ring-2 focus:ring-sky-500"
            name=""
            id=""
            rows={8}
            placeholder="Escribe tu mensaje aquí ..."
          ></textarea>
        </div>
        <button className="flex items-center gap-2 bg-sky-500 text-white py-3 px-6 rounded-md text-lg mt-6">
          <IconSend /> Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
