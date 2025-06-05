import { Link } from "react-router-dom";
import "./Header.css";
import Banner from "../assets/pri-logo2.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="pri" >
          <img src={Banner} alt="" />
          <h1 className="logo">Meu Portfólio</h1>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/habilidades">Habilidades</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
