import React from "react";
import CertificateForm from "../components/CertificateForm";

const Certificates = () => {
  return (
    <div className="container-certificate container mx-auto pt-[15vh]">
      <div className=" pr-0">
        <h1 className="subtitle1 text-center">Solicitação de certidões</h1>
        <div className="flex flex-wrap justify-center">
          <div className="pt-[10vh] ">
            <h2 className="subtitle2">Como solicitar?</h2>
            <p className="how-request w-[75vw] sm:w-[50vw] text-center">
              Para solicitar uma certidão, é necessário preencher o formulário
              ao lado com os dados solicitados. Após isso, será gerada uma guia
              referente a certidão solicitada, após o pagamento da guia e o
              encaminhamento do comprovante, sua certidão será enviada próximo
              dia útil.
            </p>
            <div className="pt-[10vh]">
              <h2 className="subtitle2">Não sabe qual certidão solicitar?</h2>
              <p className="how-request w-[75vw] sm:w-[50vw] text-center">
                Para saber mais sobre quais certidões fornecemos, você estar
                acessando a página certidões, onde estão descritas todas as
                nossas certidões.
              </p>
            </div>
          </div>

          <div className="flex grow justify-center ml-0 py-10 px-5 ">
            <CertificateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
