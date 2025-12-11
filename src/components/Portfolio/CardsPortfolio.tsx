import { IconWindowMaximize, IconEye } from "@tabler/icons-react";

const CardsPortfolio = () => {
  return (
    <div className="relative h-56 w-72 rounded-lg overflow-hidden group border border-transparent hover:border-sky-500 transition-all duration-300">
      <img
        className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        src="/proyect.png"
        alt="proyect"
      />

      <div className="absolute inset-0 bg-linear-to-t from-white to-white/10 dark:bg-linear-to-t dark:from-black/90 dark:to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <p className="absolute top-4 right-4 text-[13px] text-sky-500 bg-gray-50 border border-gray-200 dark:border-none dark:bg-gray-800 px-4 py-1.5 rounded-xl z-20">
        Web Development
      </p>

      <p className="absolute -bottom-16 left-4 text-xl font-semibold text-black dark:text-white translate-y-12 transition-all duration-300 z-20 group-hover:translate-y-0 group-hover:bottom-18">
        E-commerce Platform
      </p>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
        <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-xl">
          <IconEye size={20} /> Preview
        </button>

        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700">
          <IconWindowMaximize size={20} /> Visit
        </button>
      </div>
    </div>
  );
};

export default CardsPortfolio;
