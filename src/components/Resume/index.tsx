import { IconBook, IconBriefcase2 } from "@tabler/icons-react";
import Information from "./Information";

const Resume = () => {
  const education = {
    title: "Educación",
    icon: <IconBook size={35} />,
    content: [
      {
        title: "Politécnico Grancolombiano, Colombia",
        date: "2015 — 2018",
        description:
          "Ingeniería de Sistemas con énfasis en arquitectura de software, desarrollo web y fundamentos sólidos de ingeniería. Formación orientada al análisis, diseño e implementación de soluciones tecnológicas bajo buenas prácticas.",
      },
      {
        title: "Universidad Uniminuto, Colombia",
        date: "2024 — Presente",
        description:
          "Ingeniería de Software con enfoque en diseño arquitectónico, desarrollo de aplicaciones modernas, estructuras avanzadas de datos, modelos de aprendizaje automático y prácticas actuales del ecosistema tecnológico.",
      },
    ],
  };

  const experience = {
    title: "Experiencia",
    icon: <IconBriefcase2 size={35} />,
    content: [
      {
        title: "Freelance Software Developer",
        date: "Enero 2020 – Abril 2020",
        description:
          "Diseñé y desarrollé una plataforma de transmisión en vivo para eventos masivos, integrando pasarelas de pago como Stripe y Mercado Pago con esquemas de reparto automático de ingresos. Implementé un sistema de control de acceso avanzado con validación de dispositivo, IP y sesiones activas, optimizando además la experiencia de streaming y el rendimiento en tiempo real.",
      },
      {
        title: "Software Developer – Teleperformance",
        date: "Enero 2020 – Enero 2022",
        description:
          "Gestioné tickets técnicos relacionados con la integración del SDK de Cybersource, brindando soporte a clientes nacionales e internacionales en ambientes de prueba y producción. Colaboré con equipos de desarrollo y QA para resolver problemas críticos, mejorar la adopción del SDK, documentar flujos de integración y asegurar la estabilidad de las transacciones.",
      },
      {
        title: "Freelance Software Developer",
        date: "Febrero 2024 – Febrero 2025",
        description:
          "Administré y optimicé bases de datos en Oracle Apex para aplicaciones empresariales, implementé interfaces interactivas conectadas a modelos relacionales, automatizé consultas y procedimientos almacenados para mejorar el rendimiento, y brindé soporte técnico acompañado de documentación de integración y despliegue.",
      },
      {
        title: "Full Stack Developer – Grupo Cigon",
        date: "Enero 2023 – Presente",
        description:
          "Desarrollo full stack con foco en arquitecturas escalables. Implementé interfaces modernas en React.js y TypeScript, construí y consumí APIs REST con NestJS bajo principios SOLID y estándares de seguridad, desplegué soluciones en AWS utilizando S3, Lambda y servicios de integración, administré bases de datos PostgreSQL y MongoDB, e integré servicios externos para almacenamiento, autenticación, mensajería y operaciones críticas. Participé activamente en decisiones de arquitectura y mejoras de infraestructura.",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Resumen</h1>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>

      <Information information={education} />
      <Information information={experience} />
    </div>
  );
};

export default Resume;
