import { useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import useTheme from "../hooks/useTheme";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ParentPages from "./ParentPages";

const Page = () => {
  const { toggleTheme, theme } = useTheme();
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="w-full relative border bg-sky-100/10 border-gray-300 dark:border-primary-border-dark dark:bg-secondary-dark rounded-md ">
      <button
        className="absolute top-[-20px] right-[-20px] p-3 rounded-md bg-gray-100 border border-gray-300 text-blue-400 dark:bg-third-dark dark:border-primary-border-dark text-xl"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
      <div className="flex gap-6 p-6 border-b border-b-gray-300 dark:border-primary-border-dark">
        <button
          className={`px-4 py-2 rounded-md ${
            activePage === 0
              ? "bg-blue-200/40 dark:bg-fourth-dark dark:text-primary-dark-text"
              : "text-gray-600 dark:text-secondary-dark-text"
          }`}
          onClick={() => setActivePage(0)}
        >
          Sobre mí
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activePage === 1
              ? "bg-blue-200/40 dark:bg-fourth-dark dark:text-primary-dark-text"
              : "text-gray-600 dark:text-secondary-dark-text"
          }`}
          onClick={() => setActivePage(1)}
        >
          Resumen
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activePage === 2
              ? "bg-blue-200/40 dark:bg-fourth-dark dark:text-primary-dark-text"
              : "text-gray-600 dark:text-secondary-dark-text"
          }`}
          onClick={() => setActivePage(2)}
        >
          Portafolio
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activePage === 3
              ? "bg-blue-200/40 dark:bg-fourth-dark dark:text-primary-dark-text"
              : "text-gray-600 dark:text-secondary-dark-text"
          }`}
          onClick={() => setActivePage(3)}
        >
          Contacto
        </button>
      </div>
      <ParentPages activePage={activePage}>
        <About key="About" />
        <Resume key="Resume" />
        <Portfolio key="Portfolio" />
        <Contact key="Contact" />
      </ParentPages>
    </div>
  );
};

export default Page;
