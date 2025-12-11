import {
  IconDeviceDesktopPause,
  IconAppWindow,
  IconCloud,
  IconSitemap,
  IconDatabase,
} from "@tabler/icons-react";

const ListCards = () => {
  const listCards = [
    {
      icon: <IconDeviceDesktopPause size={40} />,
      title: "Desarrollo Frontend",
      description:
        "Desarrollo de interfaces modernas con React y Next.js, aplicando patrones reutilizables, manejo avanzado de estado y estrategias de renderizado para lograr experiencias rápidas, estables y escalables.",
    },
    {
      icon: <IconAppWindow size={40} />,
      title: "Desarrollo Backend",
      description:
        "Construcción de servicios backend con NestJS, TypeORM, PostgreSQL y MongoDB, utilizando arquitectura modular, principios SOLID y diseño de APIs consistentes orientadas a desempeño y mantenibilidad.",
    },
    {
      icon: <IconCloud size={40} />,
      title: "Cloud & DevOps",
      description:
        "Despliegue de aplicaciones en AWS con EC2, Lambda, S3 y RDS, utilizando Docker, configuración de entornos, prácticas CI/CD y estrategias orientadas a disponibilidad, seguridad y escalabilidad.",
    },
    {
      icon: <IconSitemap size={40} />,
      title: "Arquitectura de Microservicios",
      description:
        "Diseño de sistemas distribuidos con API Gateways, colas de mensajería, eventos y gRPC. Organización por dominios, servicios independientes y comunicación eficiente para garantizar resiliencia y escalabilidad.",
    },
    {
      icon: <IconDatabase size={40} />,
      title: "Bases de Datos & Almacenamiento",
      description:
        "Manejo de PostgreSQL y MongoDB mediante modelos optimizados, índices, consultas eficientes y caching con Redis, asegurando integridad, rendimiento y soporte para cargas de datos crecientes.",
    },
  ];

  return (
    <div className="mt-6 flex flex-col gap-6">
      <h2 className="text-3xl font-bold">¿Qué hago?</h2>
      <div className="grid grid-cols-2 gap-4">
        {listCards.map((card) => (
          <div
            key={card.title}
            className="flex gap-4 p-6 rounded-md bg-sky-100/20 dark:bg-third-dark border border-gray-300/90 dark:border-gray-800/90 hover:border-sky-500"
          >
            <p className="basis-1/6 text-sky-500">{card.icon}</p>
            <div className="basis-5/6 flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{card.title}</h1>
              <p className="text-[15px] text-gray-600 dark:text-secondary-dark-text">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCards;
