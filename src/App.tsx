import Layout from "./components/Layout";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-primary-dark dark:text-primary-dark-text p-20">
      <div className="max-w-7xl mx-auto gap-6 flex">
        <Layout />
        <Page />
      </div>
    </div>
  );
};

export default App;
