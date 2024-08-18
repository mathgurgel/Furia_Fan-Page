import "./NumbersBanner.css";
import { MdPerson } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaEye } from "react-icons/fa";

function NumbersBanner() {
  return (
    <section id="numbers-banner">
      <div id="numbers">
        <div id="audience-record" className="numbers-div">
          <MdPerson className="icon" />
          <div className="numbers-div-text">
            <div className="number"><span>1.428.993</span></div>
            <div className="description"><span>recorde de audiência</span></div>
          </div>
        </div>
        <div id="social-media-number" className="numbers-div">
          <TbWorld className="icon" />
          <div className="numbers-div-text">
            <div className="number"><span>+1.8M</span></div>
            <div className="description"><span>seguidores nas redes sociais</span></div>
          </div>
        </div>
        <div id="number-of-impressions" className="numbers-div">
          <FaEye className="icon" />
          <div className="numbers-div-text">
            <div className="number"><span>+363M</span></div>
            <div className="description"><span>impressões</span></div>
          </div>
        </div>
      </div>
      <h1 id="numbers-header">COMPETIMOS, VENCEMOS, E FAZEMOS HISTÓRIA!</h1>
    </section>
  );
}

export default NumbersBanner;
