import React, { useState } from "react";
import { Icon } from "./Icon";

export const OBJECTIONS = [
  {
    q: "Tá caro.",
    a: "Entendemos. Investimento em comunicação visual parece custo — mas funciona como ativo. Uma fachada bem executada trabalha por você todos os dias, atraindo clientes sem que você precise fazer mais nada. Nosso orçamento é personalizado: você paga exatamente pelo que precisa, sem pacote engessado com itens que não fazem sentido pro seu negócio.",
  },
  {
    q: "Estou fazendo outros orçamentos.",
    a: "Ótimo — comparar é inteligente. Ao comparar, verifique além do preço: o fornecedor cumpre prazos? Tem equipe técnica certificada? Segue as normas de segurança na instalação? Esses detalhes fazem toda a diferença no resultado final — e evitam dor de cabeça depois.",
  },
  {
    q: "Vou ver e te retorno.",
    a: "Sem problema. Mas considere: cada semana com uma fachada abaixo do potencial é uma semana perdendo clientes pra concorrência. Solicitar o orçamento agora não te compromete a nada. É só uma conversa — e pode ser o começo de uma virada real no seu negócio.",
  },
  {
    q: "Achei que ficaria mais em conta.",
    a: "Qualidade técnica, material de primeira linha, equipe certificada e prazo cumprido têm um preço. O que não tem preço é ver seu negócio se destacar de vez no mercado. Converse com a gente — queremos entender sua realidade e encontrar a melhor solução dentro das suas possibilidades.",
  },
];

export const Objections: React.FC = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Antes de você decidir</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              As perguntas
              <br />
              que <em>todo mundo</em> faz.
            </h2>
          </div>
          <div className="right">
            <p>
              Investir na fachada do negócio é decisão séria. Aqui estão as
              preocupações mais comuns — respondidas sem rodeio.
            </p>
          </div>
        </div>

        <div className="acc-list">
          {OBJECTIONS.map((o, i) => (
            <div key={i} className={`acc ${open === i ? "open" : ""}`}>
              <button
                className="acc-btn"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="q">
                  <span className="quote-q">"</span>
                  {o.q}
                  <span className="quote-q">"</span>
                </span>
                <span className="plus">
                  <Icon name="plus" />
                </span>
              </button>
              <div className="acc-body">
                <div className="acc-body-inner">{o.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
