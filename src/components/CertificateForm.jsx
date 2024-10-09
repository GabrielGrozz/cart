import React from "react";

const CertificateForm = () => {
  return (
    <>
      <div className="form bg-gray-300 p-5 rounded shadow-2xl">
        <form className=" " action="">
          <div className="grid grid-cols-10 gap-3 ">
            <div className=" col-span-10 field">
              <label htmlFor="fiel_name">Nome completo</label>
              <input
                className="input"
                type="text"
                name="name"
                id="fiel_name"
                placeholder="Nome completo"
              />
            </div>
            <div className="col-span-5 field">
              <label htmlFor="field_rg">Registro geral(RG)</label>
              <input
                className="input"
                type="text"
                name="rg"
                id="field_rg"
                placeholder="Registro geral(RG)"
              />
            </div>
            <div className="col-span-5 field">
              <label htmlFor="field_cpf">CPF</label>
              <input
                className="input"
                type="text"
                name="cpf"
                id="field_cpf"
                placeholder="CPF"
              />
            </div>
            <div className="col-span-5 field">
              <label htmlFor="field_birth_date">Data de nascimento</label>
              <input
                className="input "
                type="date"
                name="birthDate"
                id="field_birth_date"
                placeholder="Data de nascimento"
              />
            </div>
            <div className="col-span-10 field">
              <label htmlFor="fiel_m_name">Nome da mãe</label>
              <input
                className="input"
                type="text"
                name="Mname"
                id="fiel_m_name"
                placeholder="Nome da mãe"
              />
            </div>
            <div className="col-span-10 field">
              <label htmlFor="field_d_name">Nome do pai</label>
              <input
                className="input"
                type="text"
                name="Dname"
                id="field_d_name"
                placeholder="Nome do pai"
              />
            </div>
            <div className="col-span-10 field">
              <label htmlFor="field_email">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                id="field_email"
                placeholder="Email"
              />
            </div>
            <div className="col-span-10 field">
              <label htmlFor="field_phone">Telefone / WhatsApp</label>
              <input
                className="input"
                type="text"
                name="phone"
                id="field_phone"
                placeholder="Telefone / WhatsApp"
              />
            </div>
            <div className="col-span-3">
              <input
                className="w-[1.8vw]"
                type="checkbox"
                name="certificate"
                id="formCertificateGeral"
              />
              <label htmlFor="formCertificateGeral">Geral</label>
            </div>
            <div className="col-span-3">
              <input
                type="checkbox"
                name=""
                id="formCertificateGeralCriminal"
              />
              <label htmlFor="formCertificateGeralCriminal">
                Geral criminal
              </label>
            </div>
            <div className="col-span-3">
              <input type="checkbox" name="" id="formCertificateGeralCivel" />
              <label htmlFor="formCertificateGeralCivel">Geral cível</label>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <input
              className="col-span-5 bg-green-700 transition-all hover:bg-green-600 hover:scale-105 rounded-xl text-white text-lg px-10 h-[6vh] w-[20vw]"
              type="submit"
              name="submit"
              id="submitBtn"
              value={"Solicitar certidão"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CertificateForm;
