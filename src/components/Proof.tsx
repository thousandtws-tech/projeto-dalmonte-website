import React, { useState } from "react";
import { ALL_PROJECTS, type ProjectItem } from "../data/projects";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

export const TESTIMONIALS = [
  {
    name: "Carlos Eduardo",
    co: "Menezes & Advogados Associados",
    body: "A fachada em ACM com LED da Dalmonte transformou totalmente a nossa sede. A entrega foi rigorosamente no prazo e a qualidade do acabamento superou nossas expectativas.",
    initials: "CE",
  },
  {
    name: "Fernanda Lima",
    co: "Clínica Lumina, São Paulo",
    body: "O processo do projeto à instalação foi transparente e muito profissional. Nossos pacientes elogiam a fachada iluminada diariamente.",
    initials: "FL",
  },
  {
    name: "Roberto Santos",
    co: "Restaurante Prime Gourmet",
    body: "O movimento de clientes aumentou significativamente após renovarmos nossa fachada com a letra caixa Dalmonte. Recomendo de olhos fechados!",
    initials: "RS",
  },
];

export const Proof: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "acm" | "letra">("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  const filteredItems =
    filter === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((item) => item.category === filter);

  const acmCount = ALL_PROJECTS.filter((i) => i.category === "acm").length;
  const letraCount = ALL_PROJECTS.filter((i) => i.category === "letra").length;

  const currentDisplay = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section className="section" id="projetos">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="eyebrow">Catálogo de Projetos ({ALL_PROJECTS.length} Imagens)</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Negócios que
              <br />
              já <em>ocupam mais espaço</em>
              <br />
              no mercado.
            </h2>
          </div>
          <div className="right">
            <p>
              Explore nossa galeria completa com todas as {ALL_PROJECTS.length} fotos
              de fachadas em ACM e letras caixa instaladas pela Dalmonte. Clique em qualquer
              imagem para visualizar em tamanho expandido.
            </p>
          </div>
        </div>

        {/* Counter Strip */}
        <div className="counters">
          <div className="counter">
            <div className="num">
              +<span className="accent">200</span>
            </div>
            <div className="lbl">Fachadas instaladas</div>
          </div>
          <div className="counter">
            <div className="num">
              10<span className="accent">+</span>
            </div>
            <div className="lbl">Anos de mercado</div>
          </div>
          <div className="counter">
            <div className="num">
              100<span className="accent">%</span>
            </div>
            <div className="lbl">Projetos no prazo</div>
          </div>
          <div className="counter">
            <div className="num">
              24<span className="accent">h</span>
            </div>
            <div className="lbl">Tempo médio de resposta</div>
          </div>
        </div>

        {/* Complete Portfolio Section */}
        <div style={{ marginTop: "40px", marginBottom: "60px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Galeria Completa de Trabalhos ({filteredItems.length} exibições)
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: "4px 0 0 0" }}>
                Exibindo {currentDisplay.length} de {filteredItems.length} imagens disponíveis
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { id: "all", label: `Todas (${ALL_PROJECTS.length})` },
                { id: "acm", label: `Fachadas ACM (${acmCount})` },
                { id: "letra", label: `Letras Caixa (${letraCount})` },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => {
                    setFilter(btn.id as "all" | "acm" | "letra");
                    setVisibleCount(12);
                  }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid",
                    borderColor:
                      filter === btn.id ? "var(--accent)" : "var(--line-strong)",
                    background:
                      filter === btn.id ? "var(--accent)" : "transparent",
                    color: filter === btn.id ? "#fff" : "var(--ink)",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {currentDisplay.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "220px" }}>
                  <ImageWithSkeleton
                    src={item.image}
                    alt={item.title}
                    containerHeight="220px"
                    borderRadius="14px 14px 0 0"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(0, 150, 214, 0.9)",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      zIndex: 2,
                    }}
                  >
                    {item.categoryLabel}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(4px)",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  >
                    🔍 Ampliar
                  </span>
                </div>
                <div style={{ padding: "16px" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 700,
                      margin: "0",
                      color: "var(--ink)",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "15px" }}
              >
                Carregar Mais Imagens ({filteredItems.length - visibleCount} restantes)
              </button>
            </div>
          )}

          {visibleCount < filteredItems.length && (
            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <button
                onClick={() => setVisibleCount(filteredItems.length)}
                className="btn btn-ghost"
                style={{ fontSize: "13px" }}
              >
                Ver todas as {filteredItems.length} imagens de uma vez
              </button>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                background: "#0f172a",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 10,
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <div
                style={{
                  padding: "20px 24px",
                  background: "#1e293b",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>
                    {selectedImage.title}
                  </h4>
                  <span style={{ fontSize: "13px", color: "var(--accent-2)" }}>
                    Categoria: {selectedImage.categoryLabel}
                  </span>
                </div>
                <a
                  href="#contato"
                  onClick={() => setSelectedImage(null)}
                  className="btn btn-primary"
                  style={{ padding: "10px 20px", fontSize: "13px" }}
                >
                  Solicitar Orçamento Deste Projeto
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Depoimentos de Clientes
        </h3>
        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="quote-mark">“</div>
              <div className="body">{t.body}</div>
              <div className="who">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.co}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
