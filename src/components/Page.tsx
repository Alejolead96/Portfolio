import useTheme from "../hooks/useTheme";

const Page = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="basis-8/12 dark:bg-secondary-dark border dark:border-primary-border-dark rounded-md ">
      <button onClick={toggleTheme}>Icon Change theme</button>
      <div className="flex gap-4">
        <button>About</button>
        <button>Resume</button>
        <button>Portfolio</button>
        <button>Contact</button>
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          I'm a Full-Stack Developer from San Francisco, California,
          specializing in web development and creating innovative digital
          solutions. I enjoy turning complex problems into simple, beautiful and
          intuitive applications.
        </p>
        <h2>What I'm Doing</h2>
      </div>
    </div>
  );
};

export default Page;
