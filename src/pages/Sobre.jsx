import "./PaginaBase.css";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <section className="pagina">
      <h2>Sobre mim</h2>
      <p>Olá, me chamo Ariel Carlos, tenho 37 anos, me encontro em fase de transição de carreira; <br />
Venho da área de Segurança Patrimonial e estou a procura de uma oportunidade na área de desenvolvimento Web ou Programação.

Estou cursando uma formação de programadores, o Dev Club. <br /> Nesse curso estou me desenvolvendo em tecnologias como:
 <span> HTML, CSS, JAVA SCRIPTS, NODE.JS, REACT e EXCEL</span> , Além de algumas tecnologias que tambem estou aprendendo,
  como:<span> PHP e MY SQL</span>. <br /> Estou motivado a aprender mais tecnologias.

Sou organizado, foco muito na resolução de problemas e prezo sempre pela pontualidade.</p>
<br />

 <div className="link-contato">
        <p>Se quiser bater um papo ou trabalhar comigo:</p>
        <Link to="/contato" className="btn-contato">Entre em contato</Link>
      </div>
    </section>
  );
}

export default Sobre;
