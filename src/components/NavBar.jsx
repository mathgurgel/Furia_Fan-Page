import { Link } from "react-router-dom";
import { useEffect } from "react";
import NavItem from "./NavItem";
import "./NavBar.css";

function NavBar() {
  useEffect(() => {
    const mobileNav = document.querySelector(".hamburger");
    const navbar = document.querySelector(".menubar");

    const toggleNav = () => {
      navbar.classList.toggle("active");
      mobileNav.classList.toggle("hamburger-active");
    };

    mobileNav.addEventListener("click", toggleNav);

    return () => {
      mobileNav.removeEventListener("click", toggleNav);
    };
  }, []);


  return (
    <div id="nav-bar">
      <div className="menubar">
        <ul>
          <li>
            <Link to="/" className="link">HOME</Link>
          </li>
          <li>
            <Link to="/sobre" className="link">SOBRE</Link>
          </li>
          <li>
            <Link to="/noticias" className="link">NOTICIAS</Link>
          </li>
          <li>
            <Link to="/calendario" className="link">CALENDARIO</Link>
          </li>
          <li>
            <Link to="/times" className="link">TIMES</Link>
          </li>
          <li>
            <Link to="https://furia.gg/" className="link">LOJA</Link>
          </li>
          <li>
            <Link to="/forfun" className="link">4FUN</Link>
          </li>
          <li>
            <Link to="/midia" className="link">MÍDIA</Link>
          </li>
        </ul>
      </div>
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
            <a href="https://furia.gg/" target="_blank" className="nav-item">LOJA</a>
            <NavItem sectionName="4FUN"></NavItem>
            <NavItem sectionName="MÍDIA"></NavItem>
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
    </div>
  );
}

export default NavBar;
