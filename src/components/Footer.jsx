import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ariel Carlos. Todos os direitos reservados.</p>
      <div className="social">
        <a href="https://github.com/Arielcarlos1" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ariel-carlos-de-souza/" target="_blank" rel="noreferrer">LinkedIn</a>
        {/* Adicione outras redes se quiser */}
      </div>
    </footer>
  );
}

export default Footer;
