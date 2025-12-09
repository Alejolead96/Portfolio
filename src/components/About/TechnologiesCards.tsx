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
      name: "Languages",
      description:
        "JavaScript, TypeScript, Python, Go, Java, Swift, Kotlin, SQL",
      icon: <IconCode size={30} />,
    },
    {
      name: "Frontend Frameworks",
      description:
        "React, Next.js, Vue.js, Angular, Svelte, Tailwind CSS, Material-UI",
      icon: <IconTableRow size={30} />,
    },
    {
      name: "Backend & APIs",
      description:
        "Node.js, Express, NestJS, FastAPI, Django, Spring Boot, GraphQL",
      icon: <IconServer size={30} />,
    },
    {
      name: "Cloud Platforms",
      description:
        "AWS (Lambda, ECS, S3, RDS), Azure, Google Cloud Platform, Vercel, Netlify",
      icon: <IconCloud size={30} />,
    },
    {
      name: "Databases",
      description:
        "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, Elasticsearch, Cassandra",
      icon: <IconDatabase size={30} />,
    },
    {
      name: "DevOps & Tools",
      description:
        "Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GitLab CI, Prometheus",
      icon: <IconSettings size={30} />,
    },
    {
      name: "Message Queues",
      description: "Apache Kafka, RabbitMQ, AWS SQS, Redis Pub/Sub, NATS",
      icon: <IconSitemap size={30} />,
    },
  ];

  return (
    <div className="flex flex-col gap-6 justify-center">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex gap-4">
          <p className="flex items-center justify-center p-4 rounded-md dark:bg-sky-600/10 dark:text-sky-500">
            {technology.icon}
          </p>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold">{technology.name}</h2>
            <p className="dark:text-secondary-dark-text">
              {technology.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesCards;
