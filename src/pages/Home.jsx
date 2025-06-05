import "./Home.css";
import Banner from "../assets/logo.jpg";
import { Link } from "react-router-dom";


function Home() {
    return (
        <section className="home">
            <div className="container">
                <div className="texto">
                    <h1>Olá, eu sou <span>Ariel Carlos</span></h1>
                    <p>Desenvolvedor Front-End & Back-End focado em criar interfaces modernas, funcionais e acessíveis.</p>
                  <Link to="/projetos" className="btn">Ver projetos</Link>

                </div>

                <div className="img">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;
