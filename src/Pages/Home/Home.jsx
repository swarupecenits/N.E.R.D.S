import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <h1 className="font-ethenocentric text-3xl font-bold underline">
        Hello NERDS!
      </h1>
      <div className="px-4 md:px-8 lg:px-16">
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;
