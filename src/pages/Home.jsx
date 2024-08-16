import "./Home.css";

function Home() {
  return (
    <nav>
      <div id="logo-container">
        <img id ="furia-logo" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="Logo"/>
      </div>
      <div id="nav-items">
        <p className="nav-item">SOBRE</p>
        <p className="nav-item">NOTÍCIAS</p>
        <p className="nav-item">CALENDÁRIO</p>
        <p className="nav-item">TIMES</p>
        <p className="nav-item">LOJA</p>
        <p className="nav-item">4FUN</p>
      </div>
    </nav>
  );
}

export default Home;
