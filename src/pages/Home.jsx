import "./Home.css";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import NumbersBanner from "../components/NumbersBanner";
import NewsBanner from "../components/NewsBanner";
import NextMatchesBanner from "../components/NextMatchesBanner";
// import SocialMediaBanner from "../components/SocialMediaBanner";
import PartnersBanner from "../components/PartnersBanner";
import ContactUsBanner from "../components/ContactUsBanner";
import ShopBanner from "../components/ShopBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <HeroBanner />
      <NumbersBanner />
      <NewsBanner />
      <NextMatchesBanner />
      {/* <SocialMediaBanner /> */}
      <PartnersBanner />
      <ShopBanner />
      <ContactUsBanner />
      <Footer />
    </div>
  );
}

export default Home;