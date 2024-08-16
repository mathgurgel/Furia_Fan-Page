import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div id="logo-container">
        <Link to="/" className="link">
          <img
            id="furia-logo"
            src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div id="nav-items">
        <NavItem sectionName="SOBRE"></NavItem>
        <NavItem sectionName="NOTÍCIAS"></NavItem>
        <NavItem sectionName="CALENDÁRIO"></NavItem>
        <NavItem sectionName="TIMES"></NavItem>
        <p className="nav-item">LOJA</p>
        <NavItem sectionName="4FUN"></NavItem>
      </div>
    </nav>
  );
}

export default NavBar;
