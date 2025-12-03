import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import Profile from "./Profile";

const Layout = () => {
  return (
    <div className="basis-4/12  dark:bg-secondary-dark border dark:border-primary-border-dark rounded-md p-6">
      <div className="flex flex-col items-center gap-4 border-b dark:border-b-primary-border-dark py-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-developer-avatar-uYgGQKMAOh5KVhhgI6aFD1CLrHXn8H.png"
          alt=""
          className="w-30 h-30 rounded-md"
        />
        <div className="flex flex-col items-center gap-1">
          <h2>Alejandro Agudelo</h2>
          <p className="text-sm dark:bg-third-dark px-5 py-1 rounded-md">
            Full Stack Developer
          </p>
        </div>
      </div>

      <Profile />

      <div className="py-6 flex justify-center gap-4">
        <button className="flex items-center p-2 dark:bg-third-dark rounded-md">
          <IconBrandGithub />
        </button>
        <button className="flex items-center p-2 dark:bg-third-dark rounded-md">
          <IconBrandLinkedin />
        </button>
        <button className="flex items-center p-2 dark:bg-third-dark rounded-md">
          <IconFileCv />
        </button>
      </div>
    </div>
  );
};

export default Layout;
