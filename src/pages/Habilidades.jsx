import "./Habilidades.css";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPhp, FaFileExcel } from "react-icons/fa";

function Habilidades() {
  return (
    <section className="habilidades">
      <h2>Minhas Habilidades</h2>
      <div className="grid">
        <div className="icone">
          <FaHtml5 className="html" />
          <span>HTML</span>
        </div>
        <div className="icone">
          <FaCss3Alt className="css" />
          <span>CSS</span>
        </div>
        <div className="icone">
          <FaJs className="js" />
          <span>JavaScript</span>
        </div>
        <div className="icone">
          <FaNodeJs className="node" />
          <span>Node.js</span>
        </div>
        <div className="icone">
          <FaReact className="react" />
          <span>React</span>
        </div>
        <div className="icone">
          <FaPhp className="php" />
          <span>PHP</span>
        </div>
        <div className="icone">
          <FaFileExcel className="excel" />
          <span>Excel</span>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
