import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>CARTÓRIO DISTRIBUIDOR DE CASCAVEL- PARANÁ</h1>
      </div>
      <div className="request-container">
        <h2 className="request-title">Solicitação de certidão</h2>
        <p className="request-content ">
          Você pode tanto estar solicitando uma certidão tanto pessoalmente
          quanto pelo nosso WhatsApp, e-mail e site, basta acessar a área
          solicitar certidão ou clicar no botão ao lado.
        </p>
        <div className="request-btn-container">
          <button className="request-btn">solicitar certidão</button>
        </div>
      </div>
      <div className="location-container">
        <h2 className="location-title">Localização</h2>
        <p className="location-content">
          Estamos localizados anexo ao Fórum de Cascavel - Paraná
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.894876395984!2d-53.490105489994896!3d-24.969691014744008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d6a6b7ffff7b%3A0x2332c7bb5a0797c4!2sOf%C3%ADcio%20Distribuidor%20Partidor%20Aval%20Deposit%20Publ%20CSC!5e0!3m2!1spt-BR!2sbr!4v1722555756458!5m2!1spt-BR!2sbr"
          width="250"
          height="250"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="location-info">
          Avenida Tancredo Neves, 2320
        </p>
        <p>1º Andar</p>
      </div>
    </div>
  );
};

export default Home;
