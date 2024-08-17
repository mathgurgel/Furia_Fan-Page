import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div id="logo-container">
        <Link to="/" className="link">
          <img
            id="furia-logo"
            src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      <nav>
        <div id="nav-items">
          <NavItem sectionName="SOBRE"></NavItem>
          <NavItem sectionName="NOTÍCIAS"></NavItem>
          <NavItem sectionName="CALENDÁRIO"></NavItem>
          <NavItem sectionName="TIMES"></NavItem>
          <p className="nav-item">LOJA</p>
          <NavItem sectionName="4FUN"></NavItem>
        </div>
        <div className="hamburger-container">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
