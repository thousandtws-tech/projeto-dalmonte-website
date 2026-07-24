import React from "react";
import { Icon } from "./Icon";

export const BENEFITS = [
  {
    i: "presence",
    t: "Presença imediata",
    d: "Uma fachada bem executada trabalha 24 horas por dia atraindo atenção — mesmo quando você não está lá.",
  },
  {
    i: "trust",
    t: "Credibilidade antes da primeira conversa",
    d: "Clientes julgam pela aparência. Comunicação visual profissional posiciona você acima da concorrência.",
  },
  {
    i: "custom",
    t: "Projeto sob medida",
    d: "Nada de orçamento padrão. Desenvolvido de acordo com o espaço, identidade e objetivos do seu negócio.",
  },
  {
    i: "safe",
    t: "Instalação segura",
    d: "Equipe técnica trabalha dentro de todas as normas. Você não se preocupa com nada durante a execução.",
  },
  {
    i: "time",
    t: "Prazo cumprido",
    d: "Data combinada é data cumprida. Seu negócio não pode ficar parado esperando.",
  },
  {
    i: "roi",
    t: "Investimento com retorno visível",
    d: "Cada real investido na fachada trabalha pra trazer mais clientes. É custo que vira ativo.",
  },
  {
    i: "honest",
    t: "Atendimento transparente",
    d: "Você sabe o que está contratando, como vai ser feito e quando vai estar pronto. Sem surpresas.",
  },
  {
    i: "warranty",
    t: "Suporte pós-instalação",
    d: "Acabou a obra, não acabou o atendimento. Estamos aqui para o que precisar depois.",
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Por que Dalmonte</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              O que muda
              <br />
              quando sua fachada
              <br />
              <em>está à altura</em>.
            </h2>
          </div>
          <div className="right">
            <p>
              Não vendemos placas. Vendemos transformação visual com impacto
              direto em movimento, percepção e posicionamento.
            </p>
          </div>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <div key={i} className="benefit">
              <div className="icon">
                <Icon name={b.i} />
              </div>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
