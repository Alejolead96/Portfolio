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
      title: "Frontend Development",
      description:
        "Building modern SPAs with React, Next.js, Vue.js, TypeScript, and state management using Redux, Zustand. Expertise in SSR, SSG, and ISR patterns.",
    },
    {
      icon: <IconAppWindow size={40} />,
      title: "Backend Development",
      description:
        "Creating scalable APIs with Node.js, Python (FastAPI, Django), Go, and Java Spring Boot. RESTful and GraphQL services with PostgreSQL, MongoDB, Redis.",
    },
    {
      icon: <IconCloud size={40} />,
      title: "Cloud & DevOps",
      description:
        "Deploying on AWS (Lambda, ECS, S3), Azure, GCP. Infrastructure as Code with Terraform, CI/CD pipelines, Docker, Kubernetes orchestration.",
    },
    {
      icon: <IconSitemap size={40} />,
      title: "Microservices Architecture",
      description:
        "Designing distributed systems with API Gateway, message queues (RabbitMQ, Kafka), service mesh, event-driven architecture, and gRPC communication.",
    },
    {
      icon: <IconDatabase size={40} />,
      title: "Database & Storage",
      description:
        "Expertise in SQL (PostgreSQL, MySQL), NoSQL (MongoDB, DynamoDB), caching strategies (Redis, Memcached), and database optimization.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {listCards.map((card, index) => (
        <div className="flex gap-4 p-6 rounded-md dark:bg-third-dark ">
          <p className="basis-1/6 text-blue-500">{card.icon}</p>
          <div className="basis-5/6 flex flex-col gap-2">
            <h1 className="text-lg font-semibold">{card.title}</h1>
            <p className="dark:text-secondary-dark-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCards;
