import React from "react";
import { Icon } from "./Icon";

export const Guarantee: React.FC = () => {
  return (
    <section className="section guarantee">
      <div className="container">
        <div className="guarantee-card">
          <div className="guarantee-inner">
            <div className="seal-wrap">
              <div className="seal">
                <div className="seal-inner">
                  <span className="big">D</span>
                  GARANTIA DE
                  <br />
                  QUALIDADE
                  <br />
                  DALMONTE
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ color: "var(--accent-2)" }}>
                Garantia & Compromisso Técnico
              </span>
              <h2>
                Entregamos
                <br />
                o que combinamos.
                <br />
                Ponto final.
              </h2>
              <p>
                Prazo definido em contrato, escopo técnico detalhado, materiais homologados
                dentro das normas vigentes (NR-35) — e suporte ativo no pós-instalação.
                Se algo não sair como acordado, a Dalmonte resolve. Não vendemos promessas,
                entregamos projetos impecáveis.
              </p>

              {/* Badges Grid */}
              <div className="guarantee-badges">
                <div className="guarantee-badge">
                  <b>✓ Prazo em Contrato</b>
                  <span>Data combinada é data cumprida rigorosamente.</span>
                </div>
                <div className="guarantee-badge">
                  <b>✓ Segurança NR-35</b>
                  <span>Equipe técnica homologada para trabalho em altura.</span>
                </div>
                <div className="guarantee-badge">
                  <b>✓ Suporte Pós-Venda</b>
                  <span>Garantia de fábrica e assistência no pós-instalação.</span>
                </div>
              </div>

              <div style={{ marginTop: "28px" }}>
                <a href="#contato" className="btn btn-primary">
                  Solicitar Projeto com Garantia
                  <span className="arrow">
                    <Icon name="arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
