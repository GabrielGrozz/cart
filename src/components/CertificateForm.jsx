import React from "react";

const CertificateForm = () => {
  return (
    <>
      <div className="form">
        <form action="" className="certificate-form">
          <label htmlFor="fiel_name">Nome completo</label>
          <input type="text" name="name" id="fiel_name" placeholder="Nome completo"/>

          <label htmlFor="field_rg">Registro geral(RG)</label>
          <input type="text" name="rg" id="field_rg" placeholder="Registro geral(RG)"/>

          <label htmlFor="field_cpf">CPF</label>
          <input type="text" name="cpf" id="field_cpf" placeholder="CPF"/>

          <label htmlFor="field_birth_date">Data de nascimento</label>
          <input type="text" name="birthDate" id="field_birth_date" placeholder="Data de nascimento"/>

          <label htmlFor="fiel_m_name">Nome da mãe</label>
          <input type="text" name="Mname" id="fiel_m_name" placeholder="Nome da mãe"/>

          <label htmlFor="field_d_name">Nome do pai</label>
          <input type="text" name="Dname" id="field_d_name" placeholder="Nome do pai"/>

          <label htmlFor="field_email">Email</label>
          <input type="text" name="email" id="field_email" placeholder="Email"/>

          <label htmlFor="field_phone">Telefone / WhatsApp</label>
          <input type="text" name="phone" id="field_phone" placeholder="Telefone / WhatsApp"/>

          <input type="checkbox" name="certificate" id="formCertificateGeral" />
          <label htmlFor="formCertificateGeral">Geral</label>

          <input type="checkbox" name="" id="formCertificateGeralCriminal" />
          <label htmlFor="formCertificateGeral">Geral criminal</label>

          <input type="checkbox" name="" id="formCertificateGeralCivel" />
          <label htmlFor="formCertificateGeral">Geral cível</label>

          <input type="submit" name="submit" id="submitBtn" value={"Solicitar certidão"}/>
        </form>
      </div>
    </>
  );
};

export default CertificateForm;
