import "./HeroBanner.css";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero-banner" id="home-hero">
      <div className="image-container">
        <img id="furia-crowd" src="https://img-cdn.hltv.org/gallerypicture/MxHkMlj7n5aZCct0KUPdCy.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=895&mx=166&my=3976&q=75&w=6720&s=2e2d66948fcd3d7c1accf9b2c63df0d1" />
      </div>
      <div id="hero-content">
        <h1 id="hero-header">SOMOS<br/>FURIA</h1>
        <p>Uma organização de e-sports<br/>de brasileiros, para brasileiros.</p>
        <Link to="/sobre">
          <button>SAIBA MAIS</button>
        </Link>
        </div>
    </section>
  );
}

export default HeroBanner;