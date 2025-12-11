import CardsPortfolio from "./CardsPortfolio";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <div className="h-1 w-12 bg-sky-500 rounded-md"></div>

      <div className="mt-6 grid grid-cols-3 gap-6">
        <CardsPortfolio />
        <CardsPortfolio />
        <CardsPortfolio />
        <CardsPortfolio />
        <CardsPortfolio />
        <CardsPortfolio />
        <CardsPortfolio />
      </div>
    </div>
  );
};

export default Portfolio;
