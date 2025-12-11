import { IconBook, IconBriefcase2 } from "@tabler/icons-react";
import Information from "./Information";

const Resume = () => {
  const education = {
    title: "Education",
    icon: <IconBook size={35} />,
    content: [
      {
        title: "Politecnico GranColombiano, Colombia",
        date: "2015 — 2018",
        description:
          "Estudié Ingeniería de Sistemas con énfasis en tecnologías web, arquitectura de software y fundamentos de desarrollo de aplicaciones.",
      },
      {
        title: "Universidad Uniminuto, Colombia",
        date: "2024 — Presente",
        description:
          "Estudiante de Ingeniería de Software, con formación en desarrollo de aplicaciones, arquitectura, buenas prácticas, machine learning y demás áreas modernas del ecosistema tecnológico.",
      },
    ],
  };

  const experience = {
    title: "Experience",
    icon: <IconBriefcase2 size={35} />,
    content: [
      {
        title: "Freelance Software Developer",
        date: "January 2020 – April 2020",
        description:
          "Desarrollé una plataforma de transmisión en vivo para conciertos y eventos durante la pandemia, implementando métodos de pago con Stripe y Mercado Pago que permiten la distribución de fondos entre múltiples cuentas, construyendo un sistema de control de acceso inteligente que restringe a los usuarios a un solo dispositivo mediante validación de IP y sesiones activas, y optimizando el rendimiento del streaming junto con la experiencia del usuario en tiempo real.",
      },
      {
        title: "Software Developer – TELEPERFORMANCE",
        date: "January 2020 – January 2022",
        description:
          "Resolvía tickets técnicos relacionados con la integración del SDK de Cybersource, brindaba soporte a clientes nacionales e internacionales en entornos de prueba y producción, colaboraba con los equipos de desarrollo y QA para asegurar una correcta adopción del SDK, y documentaba procesos, realizaba tareas de troubleshooting y mejoraba la experiencia de integración.",
      },
      {
        title: "Freelance Software Developer",
        date: "February 2024 – February 2025",
        description:
          "Gestioné y optimicé bases de datos Oracle Apex para aplicaciones empresariales, creé y mantuve interfaces frontend interactivas conectadas a datos relacionales, automatizé consultas y procedimientos almacenados para mejorar el rendimiento, y brindé soporte técnico junto con documentación de integración y despliegue.",
      },
      {
        title: "Full Stack Developer – GRUPO CIGON",
        date: "January 2023 – Present",
        description:
          "Desarrollé interfaces responsivas con React.js y TypeScript optimizadas para el rendimiento, diseñé y consumí APIs REST con NestJS siguiendo estándares de seguridad y escalabilidad, implementé soluciones en AWS usando S3 para almacenamiento de documentos y AWS Lambda para funciones serverless, administré bases de datos PostgreSQL y MongoDB garantizando su integridad y disponibilidad, e integré servicios externos como almacenamiento, correo y autenticación en entornos de producción.",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Resume</h1>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>

      <Information information={education} />
      <Information information={experience} />
    </div>
  );
};

export default Resume;
