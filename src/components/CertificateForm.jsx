import React from "react";

const CertificateForm = () => {
  return (
    <>
      <div className="form">
        <form
          className=" grid grid-cols-2 gap-3"
          action=""
        >
          <div className=" col-span-2 field">
            <label htmlFor="fiel_name">Nome completo</label>
            <input
              className="input"
              type="text"
              name="name"
              id="fiel_name"
              placeholder="Nome completo"
            />
          </div>
          <div className=" field">
            <label htmlFor="field_rg">Registro geral(RG)</label>
            <input
              className="input"
              type="text"
              name="rg"
              id="field_rg"
              placeholder="Registro geral(RG)"
            />
          </div>
          <div className=" field">
            <label htmlFor="field_cpf">CPF</label>
            <input
              className="input"
              type="text"
              name="cpf"
              id="field_cpf"
              placeholder="CPF"
            />
          </div>
          <div className=" field">
            <label htmlFor="field_birth_date">Data de nascimento</label>
            <input
              className="input "
              type="date"
              name="birthDate"
              id="field_birth_date"
              placeholder="Data de nascimento"
            />
          </div>
          <div className="col-span-2 field">
            <label htmlFor="fiel_m_name">Nome da mãe</label>
            <input
              className="input"
              type="text"
              name="Mname"
              id="fiel_m_name"
              placeholder="Nome da mãe"
            />
          </div>
          <div className="col-span-2 field">
            <label htmlFor="field_d_name">Nome do pai</label>
            <input
              className="input"
              type="text"
              name="Dname"
              id="field_d_name"
              placeholder="Nome do pai"
            />
          </div>
          <div className="col-span-2 field">
            <label htmlFor="field_email">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              id="field_email"
              placeholder="Email"
            />
          </div>
          <div className="col-span-2 field">
            <label htmlFor="field_phone">Telefone / WhatsApp</label>
            <input
              className="input"
              type="text"
              name="phone"
              id="field_phone"
              placeholder="Telefone / WhatsApp"
            />
          </div>
          <input type="checkbox" name="certificate" id="formCertificateGeral" />
          <label htmlFor="formCertificateGeral">Geral</label>
          <input type="checkbox" name="" id="formCertificateGeralCriminal" />
          <label htmlFor="formCertificateGeralCriminal">Geral criminal</label>
          <input type="checkbox" name="" id="formCertificateGeralCivel" />
          <label htmlFor="formCertificateGeralCivel">Geral cível</label>
          <input
            type="submit"
            name="submit"
            id="submitBtn"
            value={"Solicitar certidão"}
          />

        </form>
      </div>
    </>
  );
};

export default CertificateForm;
