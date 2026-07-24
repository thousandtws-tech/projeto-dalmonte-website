import React from "react";
import { Icon } from "./Icon";
import { ShineBorder } from "./ShineBorder";

export const Offer: React.FC = () => {
  return (
    <section className="section offer">
      <div className="container">
        <ShineBorder
          borderRadius="22px"
          padding={2}
          block
          style={{ display: "block", width: "100%" }}
        >
          <div className="offer-card">
            <div>
              <span className="eyebrow">Orçamento personalizado</span>
              <h2 style={{ marginTop: 18 }}>
                Cada projeto é único.
                <br />
                Seu orçamento também.
              </h2>
              <p style={{ marginTop: 14, maxWidth: "40ch" }}>
                Tamanho, material, iluminação, acabamento, complexidade da
                instalação — tudo isso define o valor real do projeto. Por isso,
                nada de tabela genérica.
              </p>
              <div style={{ marginTop: 28 }}>
                <ShineBorder borderRadius="999px" padding={2}>
                  <a href="#contato" className="btn btn-accent">
                    Quero meu orçamento gratuito
                    <span className="arrow">
                      <Icon name="arrow" />
                    </span>
                  </a>
                </ShineBorder>
                <div
                  style={{
                    marginTop: 14,
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 11.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  Sem custo · Sem compromisso · Resposta em 24h
                </div>
              </div>
            </div>
            <ul className="checklist">
              {[
                ["Análise técnica do seu espaço", "visita ou avaliação remota"],
                ["Indicação do melhor material", "ACM, letra caixa ou combinação"],
                ["Proposta técnica detalhada", "escopo, materiais e prazos"],
                ["Prazo de execução definido", "data combinada, data cumprida"],
                ["Preço justo", "sem surpresas depois"],
              ].map((it, i) => (
                <li key={i}>
                  <span className="tick">
                    <Icon name="check" />
                  </span>
                  <div>
                    <b>{it[0]}</b>{" "}
                    <span style={{ color: "var(--muted)" }}>— {it[1]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
};
