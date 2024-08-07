import React from "react";
import CertificateForm from "../components/CertificateForm";

const Certificates = () => {
  return (
    <div className="container mx-auto pt-[15vh]">
      <div className="pl-32 pr-16">
        <h1 className="subtitle">Solicitação de certidões</h1>
        <div className="flex">
          <div>
            <h2>Como solicitar?</h2>
            <p className="how-request w-[40vw]">
              Para solicitar uma certidão, é necessário preencher o formulário
              ao lado com os dados solicitados. Após isso, será gerada uma guia
              referente a certidão solicitada, após o pagamento da guia e o
              encaminhamento do comprovante, sua certidão será enviada próximo
              dia útil.
            </p>
          </div>
          <div className="flex grow justify-end">
            <CertificateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
