interface InformationProps {
  information: {
    title: string;
    icon: React.ReactNode;
    content: {
      title: string;
      date: string;
      description: string;
    }[];
  };
}

const Information = ({ information }: InformationProps) => {
  const { title, icon, content } = information;
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center gap-2 my-4">
        <p className="text-sky-500">{icon}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="flex flex-col gap-8">
        {content.map((item) => (
          <div key={item.title} className="flex gap-8">
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
              <div className="absolute top-0 -left-[9px] h-4 w-4 bg-sky-500 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold dark:text-primary-dark-text">
                {item.title}
              </h3>
              <p className="text-cyan-600 text-sm">{item.date}</p>
              <p className="text-gray-600 dark:text-secondary-dark-text">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
