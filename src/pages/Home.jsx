import "./Home.css";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import NumbersBanner from "../components/NumbersBanner";
import NewsBanner from "../components/NewsBanner";
import NextMatchesBanner from "../components/NextMatchesBanner";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <HeroBanner />
      <NumbersBanner />
      <NewsBanner />
      <NextMatchesBanner />
    </div>
  );
}

export default Home;