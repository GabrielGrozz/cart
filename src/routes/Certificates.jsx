import React from "react";
import CertificateForm from "../components/CertificateForm";

const Certificates = () => {
  return (
    <div className="certificate-container">
      <h1>Certificates</h1>
      
      <h2>Como solicitar?</h2>
      <p className="how-request">
        Para solicitar uma certidão, é necessário preencher o
        formulário ao lado com os dados solicitados. Após isso, será gerada uma
        guia referente a certidão solicitada, após o pagamento da guia e o
        encaminhamento do comprovante, sua certidão será enviada próximo dia
        útil.
      </p>
      <div className="form-container">
        <CertificateForm />
      </div>
    </div>
  );
};

export default Certificates;
