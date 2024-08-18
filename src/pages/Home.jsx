import "./Home.css";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import NumbersBanner from "../components/NumbersBanner";
import NewsBanner from "../components/NewsBanner";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <HeroBanner />
      <NumbersBanner />
      <NewsBanner />
    </div>
  );
}

export default Home;