import ListCards from "./ListCards";
import TechnologiesCards from "./TechnologiesCards";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">¿Quién soy?</h2>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>
      <p className="text-gray-700 dark:text-secondary-dark-text">
        Soy un ingeniero de software con experiencia en el diseño y desarrollo
        de aplicaciones web escalables utilizando nestjs, typeorm, postgresql,
        react, next.js y python. Me especializo en arquitectura backend,
        creación de APIs consistentes, modelado de datos y sistemas modulares
        basados en buenas prácticas como solid e inyección de dependencias.
        <br />
        <br />
        He trabajado en soluciones que integran llms, ocr y automatización de
        procesos, optimizando flujos internos mediante procesamiento
        estructurado. Mi enfoque se basa en construir software claro, mantenible
        y preparado para crecer, tomando decisiones arquitectónicas que aporten
        valor real y resuelvan problemas complejos con eficiencia.
      </p>

      <ListCards />

      <TechnologiesCards />

      {/* <h1 className="text-3xl font-bold mt-6">Certifications</h1> */}
    </div>
  );
};

export default About;
