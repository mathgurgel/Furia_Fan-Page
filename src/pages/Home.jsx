import "./Home.css";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import NumbersBanner from "../components/NumbersBanner";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <HeroBanner />
      <NumbersBanner />
    </div>
  );
}

export default Home;