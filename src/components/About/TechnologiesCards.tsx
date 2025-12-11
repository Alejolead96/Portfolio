import {
  IconCode,
  IconTableRow,
  IconServer,
  IconCloud,
  IconDatabase,
  IconSettings,
  IconSitemap,
} from "@tabler/icons-react";

const TechnologiesCards = () => {
  const technologies = [
    {
      name: "Lenguajes",
      description: "JavaScript, TypeScript, Python, Java, SQL",
      icon: <IconCode size={30} />,
    },
    {
      name: "Frontend",
      description: "React, Next.js, Tailwind CSS",
      icon: <IconTableRow size={30} />,
    },
    {
      name: "Backend y APIs",
      description: "Node.js, Express, NestJS, Spring Boot, gRPC",
      icon: <IconServer size={30} />,
    },
    {
      name: "Nube",
      description: "AWS, Vercel, Google Cloud",
      icon: <IconCloud size={30} />,
    },
    {
      name: "Bases de Datos",
      description: "PostgreSQL, MySQL, MongoDB, Redis",
      icon: <IconDatabase size={30} />,
    },
    {
      name: "DevOps y Herramientas",
      description: "Docker, Git, GitHub, Kubernetes",
      icon: <IconSettings size={30} />,
    },
    {
      name: "Microservicios",
      description: "Kafka, RabbitMQ, Gateways, Colas, Socket.io",
      icon: <IconSitemap size={30} />,
    },
  ];

  return (
    <div className="mt-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold mt-6">Tecnologias</h1>
      <div className="flex flex-col gap-6 justify-center">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex gap-4">
            <p className="flex items-center justify-center p-3 rounded-md bg-sky-100 text-sky-600 dark:bg-sky-600/10 dark:text-sky-500">
              {technology.icon}
            </p>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-medium">{technology.name}</h2>
              <p className="text-gray-600 dark:text-secondary-dark-text">
                {technology.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCards;
