import { Link } from "react-router-dom";
import { useState } from "react"; // ← ADICIONADO!
import "./Header.css";
import Banner from "../assets/pri-logo2.png";

function Header() {
  // ← ADICIONADO: Estado para controlar menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="pri">
          <img src={Banner} alt="Logo" />
          <h1 className="logo">Meu Portfólio</h1>
        </div>
        
        {/* ← ADICIONADO: Botão hamburger */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ← MODIFICADO: Nav com classe dinâmica */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
          <Link to="/habilidades" onClick={closeMenu}>Habilidades</Link>
          <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
          <Link to="/contato" onClick={closeMenu}>Contato</Link>
        </nav>

        {/* ← ADICIONADO: Overlay para fechar menu */}
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

export default Header;