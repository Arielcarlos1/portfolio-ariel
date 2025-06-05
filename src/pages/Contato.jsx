import "./Contato.css";

function Contato() {
  return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <form action="https://formsubmit.co/instalador830@gmail.com" method="POST">
        {/* Esconde o captcha automático do FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Após envio, redirecionar para uma página (opcional) */}
        <input type="hidden" name="_next" value="https://seu-portifolio.vercel.app/obrigado" />

        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu email" required />
        <textarea name="mensagem" placeholder="Digite sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
