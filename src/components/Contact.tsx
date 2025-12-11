import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472667477!2d-74.27261661242906!3d4.648620627506904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1765425427646!5m2!1ses!2sco"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Contact;
