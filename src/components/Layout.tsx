import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import Profile from "./Profile";

const Layout = () => {
  return (
    <div className="lg:w-90 sticky top-8 h-fit bg-blue-100/20 border-gray-300 border dark:bg-secondary-dark dark:border-primary-border-dark rounded-md p-6">
      <div className="flex flex-col items-center gap-4 border-b border-gray-300 dark:border-b-primary-border-dark py-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-developer-avatar-uYgGQKMAOh5KVhhgI6aFD1CLrHXn8H.png"
          alt=""
          className="w-30 h-30 rounded-md"
        />
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg font-semibold">Alejandro Agudelo</h2>
          <p className="text-sm bg-gray-200/60 text-gray-600 dark:bg-third-dark dark:text-secondary-dark-text px-5 py-1 rounded-md">
            Full Stack Developer
          </p>
        </div>
      </div>

      <Profile />

      <div className="py-6 flex justify-center gap-4">
        <button className="flex items-center p-2 bg-gray-200/60 dark:bg-third-dark rounded-md">
          <IconBrandGithub />
        </button>
        <button className="flex items-center p-2 bg-gray-200/60 dark:bg-third-dark rounded-md">
          <IconBrandLinkedin />
        </button>
        <button className="flex items-center p-2 bg-gray-200/60 dark:bg-third-dark rounded-md">
          <IconFileCv />
        </button>
      </div>
    </div>
  );
};

export default Layout;
