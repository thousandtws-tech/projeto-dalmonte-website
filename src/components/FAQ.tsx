import React, { useState } from "react";
import { Icon } from "./Icon";

export const FAQS = [
  {
    q: "Quais materiais vocês trabalham?",
    a: "Trabalhamos principalmente com ACM (alumínio composto) e letra caixa iluminada em LED — os dois materiais mais utilizados para fachadas comerciais de alto impacto e durabilidade.",
  },
  {
    q: "Atendem em quais regiões?",
    a: "Atendemos toda a região metropolitana de São Paulo e cidades vizinhas. Consulte sua localização ao solicitar o orçamento.",
  },
  {
    q: "Quanto tempo leva a instalação?",
    a: "O prazo varia conforme o tamanho e complexidade do projeto. Definimos o prazo exato no orçamento e o cumprimos rigorosamente em contrato.",
  },
  {
    q: "Como funciona o processo do projeto à entrega?",
    a: "1. Você solicita o orçamento.\n2. Nossa equipe realiza a visita técnica ou avaliação virtual.\n3. Desenvolvemos o projeto 3D e proposta técnica.\n4. Com aprovação, iniciamos a fabricação e instalação dentro das normas de segurança.",
  },
  {
    q: "A instalação é segura? Segue normas técnicas?",
    a: "Sim. Toda instalação é realizada por equipe técnica qualificada e certificada, seguindo todas as normas técnicas e de segurança NR-35 vigentes.",
  },
  {
    q: "E se eu precisar de suporte após a instalação?",
    a: "Oferecemos suporte pós-venda completo com prazo de garantia definido em contrato. Qualquer ajuste necessário dentro desse período é coberto por nossa conta.",
  },
  {
    q: "Como solicito meu orçamento gratuito?",
    a: "É só preencher o formulário no final desta página ou chamar direto no WhatsApp. Um especialista da Dalmonte entra em contato em até 24 horas úteis — sem compromisso.",
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-grid">
          {/* Left Column Header & Support Card */}
          <div>
            <span className="eyebrow">Dúvidas Frequentes</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Tirando
              <br />
              suas <em>dúvidas</em>.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Ainda com perguntas sobre o seu projeto de comunicação visual? Nossa equipe está de prontidão para ajudar.
            </p>

            {/* Quick Support Badge Card */}
            <div
              style={{
                marginTop: "32px",
                padding: "24px",
                borderRadius: "16px",
                background: "var(--card)",
                border: "1px solid var(--line-strong)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(0,150,214,0.12)",
                    color: "var(--accent)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name="whats" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>Fale Conosco no WhatsApp</h4>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>Atendimento humano rápido</span>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 16px 0" }}>
                Esclareça dúvidas técnicas, prazos ou solicite uma visita no seu local.
              </p>
              <a
                href="#contato"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "14px", padding: "12px 18px" }}
              >
                Falar com Especialista →
              </a>
            </div>
          </div>

          {/* Right Column Cards Accordion */}
          <div className="acc-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`acc ${open === i ? "open" : ""}`}>
                <button
                  className="acc-btn"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="q">{f.q}</span>
                  <span className="plus">
                    <Icon name="plus" />
                  </span>
                </button>
                <div className="acc-body">
                  <div className="acc-body-inner" style={{ whiteSpace: "pre-line" }}>
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
