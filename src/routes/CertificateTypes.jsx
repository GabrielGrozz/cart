import React from "react";

const CertificateTypes = () => {
  return (
    <div className="certificate-types-container">
      <h1>Nossas certidões</h1>
      <div className="certificate-container">
        <h2 className="certificate-name">Certidão geral</h2>
        <p className="certificate-content">
          A nossa certidão geral possui o valor de R$42,95. Ela abrange as Varas
          Cíveis, Vara da Fazenda Pública, Juizados Especiais Cíveis e Fazenda
          Pública, Varas Criminais Criminais e e Juizado Juizado de Violência
          Doméstica
        </p>
      </div>
      <div className="certificate-container">
        <h2 className="certificate-name">Certidão geral cível</h2>
        <p className="certificate-content">
          Nossa certidão geral civel possui o valor de R$42,95. Ela abrange as
          Varas Cíveis, Ações de interdição e Tutela, Vara da Fazenda Pública,
          Julzados Especiais Cíveis e da Fazenda Pública
        </p>
      </div>
      <div className="certificate-container">
        <h2 className="certificate-name">Certidão geral criminal</h2>
        <p className="certificate-content">
          Nossa certidão geral criminal possui o valor de R$85,90. Ela abrange
          as ações com sentença transitada em julgado e/ou condenações nas Varas
          Criminais, Juizados Especiais Criminais e Execuções de Pena em
          andamento
        </p>
      </div>
    </div>
  );
};

export default CertificateTypes;
