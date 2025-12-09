import ListCards from "./ListCards";
import TechnologiesCards from "./TechnologiesCards";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>
      <p className="text-gray-500 dark:text-secondary-dark-text">
        I'm a Full-Stack Developer from San Francisco, California, specializing
        in web development and creating innovative digital solutions. I enjoy
        turning complex problems into simple, beautiful and intuitive
        applications.
        <br />
        <br />
        My job is to build your website or application so that it is functional
        and user-friendly but at the same time attractive. Moreover, I add
        personal touch to your product and make sure that is eye-catching and
        easy to use. My aim is to bring across your message and identity in the
        most creative way. I've worked with various technologies including
        React, Next.js, Node.js, and modern cloud platforms.
      </p>
      <h2 className="text-3xl font-bold">What I'm Doing</h2>
      <ListCards />
      <h1 className="text-3xl font-bold mt-6">Technologies</h1>

      <TechnologiesCards />

      <h1 className="text-3xl font-bold mt-6">Certifications</h1>
    </div>
  );
};

export default About;
