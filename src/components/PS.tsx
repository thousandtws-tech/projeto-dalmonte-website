import React from "react";
import { Icon } from "./Icon";
import { ShineBorder } from "./ShineBorder";

interface PSProps {
  show?: boolean;
}

export const PS: React.FC<PSProps> = ({ show = true }) => {
  if (!show) return null;

  return (
    <section className="section" style={{ padding: "80px 0" }}>
      <div className="container-narrow">
        <ShineBorder
          borderRadius="24px"
          padding={2}
          block
          style={{ display: "block", width: "100%" }}
        >
          <div className="ps-block">
            <div className="ps-mark">P.S.</div>
            <div>
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.45",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                <b>Toda semana,</b> empresas perdem clientes pra concorrentes com
                comunicação visual mais forte — não por serem piores, mas por{" "}
                <span className="underline-accent">parecerem menos.</span>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.65",
                  color: "var(--ink-2)",
                  marginTop: "12px",
                  marginBottom: "24px",
                }}
              >
                Uma fachada profissional em ACM e letra caixa resolve isso. A Dalmonte entrega projetos
                com qualidade técnica, dentro do prazo e com preço justo.{" "}
                <b style={{ color: "var(--accent-2)" }}>Nossa agenda de execução é limitada por mês.</b>
              </p>
              <div style={{ marginTop: "24px" }}>
                <a
                  href="#contato"
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "16px 32px",
                    fontSize: "16px",
                    fontWeight: 700,
                    boxShadow: "0 8px 28px rgba(0, 150, 214, 0.45)",
                  }}
                >
                  Quero uma fachada que representa meu negócio
                  <span className="arrow" style={{ marginLeft: "8px" }}>
                    <Icon name="arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
};
