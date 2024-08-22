import "./Home.css";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import NumbersBanner from "../components/NumbersBanner";
import NewsBanner from "../components/NewsBanner";
import NextMatchesBanner from "../components/NextMatchesBanner";
import SocialMediaBanner from "../components/SocialMediaBanner";
import PartnersBanner from "../components/PartnersBanner";
import ContactUsBanner from "../components/ContactUsBanner";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <HeroBanner />
      <NumbersBanner />
      <NewsBanner />
      <NextMatchesBanner />
      <SocialMediaBanner />
      <PartnersBanner />
      <ContactUsBanner />
    </div>
  );
}

export default Home;