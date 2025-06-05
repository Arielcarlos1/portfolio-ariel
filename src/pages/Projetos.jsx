import "./Projeto.css";
import { useState } from "react";

const projetos = [
  {
    titulo: "Helena Kids",
    descricao: "Aplicativo infantil para ajudar crianças com TDAH a aprender e praticar palavras.",
    imagem: "/assets/proj1.png", // coloque uma imagem sua aqui
    link: "https://helena-kids.vercel.app", // exemplo
    video: "/videos/helena-kids-linkedin.mp4",
  },
  {
    titulo: "DevBurger",
    descricao: "Sistema de pedidos com painel admin, cadastro de produtos, login e API com Node.",
    imagem: "/assets/proj2.png",
    link: "https://github.com/Arielcarlos1/projeto-devburger.git",
    video: "/videos/devburger.mp4",
  },
  {
    titulo: "Salão de Beleza",
    descricao: "Site com agendamentos, serviços, galeria e painel administrativo.",
    imagem: "/assets/proj3.png",
    link: "https://salao.vercel.app",
    video: "/videos/Page Salon.mp4",
  },
  {
    titulo: "Clone Netflix",
    descricao: "Um site com informações sobre a empresa, produtos, galeria e contato.",
    imagem: "/assets/pageflix.png",
    link: "https://arielcarlos.vercel.app",
      video: "/videos/PageFlix.mp4",
  },
    {
    titulo: "Clone BRX Retail",
    descricao: "Um site com informações sobre a empresa, produtos, galeria e contato.",
    imagem: "/assets/brx.png",
    link: "https://arielcarlos.vercel.app",
      video: "/videos/brx.mp4",
  },
    {
    titulo: "Clone da Apple",
    descricao: "Um site com informações sobre a empresa, produtos, galeria e contato.",
    imagem: "/assets/apple.png",
    link: "https://arielcarlos.vercel.app",
      video: "/videos/apple.mp4",
  },

 
];
function Projetos() {
  const [videoAberto, setVideoAberto] = useState(null);

  const abrirVideo = (videoUrl) => setVideoAberto(videoUrl);
  const fecharVideo = () => setVideoAberto(null);

  return (
    <section className="projetos">
      <h2>Meus Projetos</h2>
      <div className="grid">
        {projetos.map((proj, index) => (
          <div className="card" key={index}>
            <img src={proj.imagem} alt={proj.titulo} />
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">Ver Projeto</a>
            <button onClick={() => abrirVideo(proj.video)}>Assistir</button>
          </div>
        ))}
      </div>

      {videoAberto && (
        <div className="modal-video">
          <div className="overlay" onClick={fecharVideo}></div>
          <div className="conteudo">
            <button className="fechar" onClick={fecharVideo}>X</button>
            <video src={videoAberto} controls autoPlay />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projetos;