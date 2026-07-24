import React from "react";

export const Solution: React.FC = () => {
  return (
    <section className="section solution" id="solucao">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">A solução Dalmonte</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Dois materiais.
              <br />
              Um padrão de <em>execução</em>.
            </h2>
          </div>
          <div className="right">
            <p>
              Especialistas em fachadas comerciais em ACM e letra caixa — os dois
              principais materiais usados por negócios que querem presença visual
              de alto impacto. Cada projeto começa com um entendimento completo
              do seu negócio.
            </p>
          </div>
        </div>
        <div className="materials">
          <div className="material">
            <div>
              <div className="tag">Material 01</div>
              <h3>ACM (Alumínio Composto)</h3>
              <p>
                Painéis em alumínio composto de 3mm e 4mm. Acabamento limpo,
                resistência extrema a intempéries, possibilidade de recorte
                computadorizado CNC e aplicação de adesivagem de alta performance.
              </p>
            </div>
            <div
              className="preview"
              style={{
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('/Fachadas/Webp/011.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="pv-label" style={{ color: "#fff", background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "4px" }}>Painéis de ACM Premium</span>
                <span style={{ fontSize: "11px", color: "var(--accent-2)", fontWeight: 700 }}>VER DETALHES →</span>
              </div>
            </div>
          </div>

          <div className="material">
            <div>
              <div className="tag">Material 02</div>
              <h3>Letra Caixa Iluminada</h3>
              <p>
                Letras tridimensionais em PVC, aço galvanizado ou inox, com
                iluminação interna em módulos LED de alto rendimento. Presença visual
                que continua atraindo clientes dia e noite.
              </p>
            </div>
            <div
              className="preview"
              style={{
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('/Letra Caixa/Webp/HIGA 7.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="pv-label" style={{ color: "#fff", background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "4px" }}>Letras 3D em LED</span>
                <span style={{ fontSize: "11px", color: "var(--accent-2)", fontWeight: 700 }}>VER DETALHES →</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 6,
            overflow: "hidden",
          }}
          className="process-grid"
        >
          {[
            { n: "01", t: "Briefing", d: "Visita técnica e entendimento" },
            { n: "02", t: "Projeto", d: "Proposta visual e técnica" },
            { n: "03", t: "Fabricação", d: "Material de primeira linha" },
            { n: "04", t: "Instalação", d: "Execução dentro das normas" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "26px 22px",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 11,
                  color: "var(--accent-2)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  marginTop: 8,
                }}
              >
                {s.t}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.65)",
                  marginTop: 4,
                }}
              >
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
