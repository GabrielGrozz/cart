import React from "react";

const CertificateTypes = () => {
  return (
    <div className="container mx-auto pt-[15vh]">
      <div className="px-12 sm:px-32">
        <h2 className="subtitle1">Nossas certidões</h2>
        <div className="pb-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="certificate-type">
              <h2 className="subtitle2">Certidão geral</h2>
              <p className="">
                A nossa certidão geral possui o valor de R$42,95. Ela abrange as
                Varas Cíveis, Vara da Fazenda Pública, Juizados Especiais Cíveis
                e Fazenda Pública, Varas Criminais Criminais e e Juizado Juizado
                de Violência Doméstica. Normlamente essa certidão é solicitada
                compra e venda e aluguel de amóveis.
              </p>
            </div>
            <div className="certificate-type">
              <h2 className="subtitle2">Certidão geral cível</h2>
              <p className="">
                Nossa certidão geral civel possui o valor de R$42,95. Ela
                abrange as Varas Cíveis, Ações de interdição dase Tutela, Vara
                da Fazenda Pública, Juizados Especiais Cíveis e da Fazenda
                Pública. Normalmente essa certidão é solicitada para, compra e
                venda, aluguel de imóvel, concursos, processos seletivos, cargos
                comissionados.
              </p>
            </div>
            <div className="certificate-type">
              <h2 className="subtitle2">Certidão geral criminal</h2>
              <p >
                Nossa certidão geral criminal possui o valor de R$85,90. Ela
                abrange as ações com sentença transitada em julgado e/ou
                condenações nas Varas Criminais, Juizados Especiais Criminais e
                Execuções de Pena em andamento. Normalmente essa certidão é
                solicitada para concursos, processos seletivos, cargos
                comissionados
              </p>
            </div>
            <div className="certificate-type">
              <h2 className="subtitle2">Certidão de trabalho</h2>
              <p >
                Nossa certidão de trabalho é gratuita e deve ser solicitada pela
                própria pessoa. Ela abrange as Varas Cíveis, Vara da Fazenda
                Pública, Juizados Especiais Cíveis e Fazenda Pública, Varas
                Criminais Criminais e e Juizado Juizado de Violência Doméstica.
              </p>
            </div>
            <div className="certificate-type">
              <h2 className="subtitle2">Certidão de falência</h2>
              <p >
                Nossa certidão de falência possui o valor de R$42,95. Ela
                abrange as ações de falência ou concordata, recuperação
                extrajudicial e recuperação judicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CertificateTypes;
