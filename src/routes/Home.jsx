import React from "react";

const Home = () => {
  return (
    <div className="home-container container pt-[70px] pl-10 ">
      <div className="title flex justify-center m-10 text-4xl font-bold">
        <h1>CARTÓRIO DISTRIBUIDOR DE CASCAVEL- PARANÁ</h1>
      </div>
      <div className="request-container m-9">
        <h2 className="request-title text-3xl font-semibold my-3">
          Solicitação de certidão
        </h2>
        <div className="container flex flex-wrap">
          <p className="request-content max-w-96 ">
            Você pode tanto estar solicitando uma certidão tanto pessoalmente
            quanto pelo nosso WhatsApp, e-mail e site, basta acessar a área
            solicitar certidão ou clicar no botão ao lado.
          </p>
          <div className="request-btn-container ml-32 flex justify-center items-center">
            <button className="request-btn bg-green-700 hover:bg-green-600 rounded text-white text-lg px-6 h-10 w-72">
              solicitar certidão
            </button>
          </div>
        </div>
      </div>
      <div className="location-container m-9">
        <h2 className="locatio-title  text-3xl font-semibold my-3">
          Localização
        </h2>
        <p className="location-content">
          Estamos localizados anexo ao Fórum de Cascavel - Paraná
        </p>

        <div className="flex">
          <iframe
            className="w-72 h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.894876395984!2d-53.490105489994896!3d-24.969691014744008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d6a6b7ffff7b%3A0x2332c7bb5a0797c4!2sOf%C3%ADcio%20Distribuidor%20Partidor%20Aval%20Deposit%20Publ%20CSC!5e0!3m2!1spt-BR!2sbr!4v1722555756458!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col m-2">
            <p className="location-info">Avenida Tancredo Neves, 2320</p>
            <p>1º Andar</p>
            <p>85806-5000</p>
          </div>
        </div>
      </div>
      <div className="m-9">
        <h2 className="text-2xl font-semibold my-3">Dúvidas</h2>
        <p className="mb-2">Nosso horário de atendimento é de segunda a sexta das 12:00 às 18:00</p>
        <p className="mb-2">Sobre demais dúvidas você pode estar entrando em contato pelo nosso telefone (45) 3326-4479.</p>
      </div>
    </div>
  );
};

export default Home;
