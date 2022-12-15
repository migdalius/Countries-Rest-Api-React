import Flags from "../../components/flags/Flags";
import Hero from "../../components/hero/Hero";
import Nav from "../../components/nav/Nav";
import "../home/home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Flags />
    </div>
  );
};

export default Home;
