import Layout from "./components/Layout";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="h-screen dark:bg-primary-dark dark:text-primary-light p-20">
      <div className="max-w-7xl mx-auto flex gap-6">
        <Layout />
        <Page />
      </div>
    </div>
  );
};

export default App;
