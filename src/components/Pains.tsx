import React, { useState } from "react";
import { Icon } from "./Icon";

export const PAINS = [
  {
    num: "01",
    t: "Sua fachada não reflete o nível do seu serviço",
    d: "Você sabe que precisa mudar — mas não sabe por onde começar.",
  },
  {
    num: "02",
    t: "Pediu orçamento e ficou sem resposta",
    d: "Fornecedores que somem, prazos vagos, ausência de clareza técnica.",
  },
  {
    num: "03",
    t: "Já investiu e o resultado decepcionou",
    d: "Acabamento ruim, material errado, instalação amadora. Dói no bolso e na imagem.",
  },
  {
    num: "04",
    t: "Concorrentes parecem mais estabelecidos",
    d: "Mesmo sendo menores, eles ocupam mais espaço visual — e ganham mais clientes.",
  },
  {
    num: "05",
    t: "Medo de investir sem ver retorno",
    d: "Comunicação visual parece custo. Bem feita, é o ativo de marketing mais barato que existe.",
  },
  {
    num: "06",
    t: "Não quer dor de cabeça com obra",
    d: "Normas, segurança, autorização, prazo — você só quer que dê certo.",
  },
];

export const Pains: React.FC = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const count = Object.values(checked).filter(Boolean).length;

  return (
    <section className="section" id="dores">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Você reconhece?</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Marque as situações
              <br />
              que <em>já aconteceram</em>
              <br />
              com você.
            </h2>
          </div>
          <div className="right" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <p>
              Se você marcou alguma dessas situações, saiba que tem solução — e ela começa
              com quem entende do assunto de verdade e cumpre prazos em contrato.
            </p>

            {/* Imagem de Destaque da Seção com Caminho Verificado */}
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "200px",
                border: "1px solid var(--line-strong)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
              }}
            >
              <img
                src="/Fachadas/Webp/02.webp"
                alt="Transformação Visual de Fachada Dalmonte"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px 20px",
                }}
              >
                <div style={{ color: "#fff", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: "15px",
                      boxShadow: "0 0 16px rgba(0,150,214,0.6)",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <b style={{ display: "block", fontSize: "14.5px", fontWeight: 700 }}>
                      Transformação Visual Garantida
                    </b>
                    <span style={{ fontSize: "12px", opacity: 0.85 }}>
                      Projeto, Fabricação & Instalação Dalmonte
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {count > 0 && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(0,150,214,0.12)",
                  border: "1px solid rgba(0,150,214,0.3)",
                  color: "var(--accent-2)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                }}
              >
                <span>✓ {count} {count === 1 ? "situação marcada" : "situações marcadas"}</span>
                <span>— A Dalmonte resolve todas elas!</span>
              </div>
            )}
          </div>
        </div>

        <div className="pains-grid">
          {PAINS.map((p, i) => (
            <div
              key={i}
              className={`pain ${checked[i] ? "active" : ""}`}
              onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
            >
              <span className="num">{p.num}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className={`check ${checked[i] ? "active" : ""}`}>
                <Icon name="check" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
