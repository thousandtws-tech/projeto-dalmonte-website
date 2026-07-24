import React from "react";

export const ValueProp: React.FC = () => {
  return (
    <section className="section valueprop">
      <div className="container">
        <div className="valueprop-grid">
          <div style={{ fontFamily: "Tahoma, sans-serif" }}>
            <span className="eyebrow">A primeira impressão</span>
            <blockquote style={{ marginTop: 20, fontFamily: "Tahoma, sans-serif" }}>
              Antes de o cliente entrar pela sua porta, ele já formou uma opinião
              sobre o seu negócio.{" "}
              <em style={{ fontFamily: "Raleway, sans-serif" }}>
                Essa opinião começa pela fachada.
              </em>
            </blockquote>
          </div>
          <div className="compare">
            <div className="compare-card weak">
              <div className="label">
                <span className="dot"></span>O que uma fachada fraca diz
              </div>
              <p>"Somos mais um no mercado."</p>
            </div>
            <div className="compare-card strong">
              <div className="label">
                <span className="dot"></span>O que uma fachada Dalmonte diz
              </div>
              <p>"Aqui é referência. Aqui tem qualidade."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
