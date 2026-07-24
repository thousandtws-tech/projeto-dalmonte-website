import React, { useState } from "react";

export interface TweakState {
  headline: "A" | "B" | "C";
  accent: string;
  mode: "light" | "dark";
  showPs: boolean;
  heroLayout: "centered" | "split";
}

export const TWEAK_DEFAULTS: TweakState = {
  headline: "A",
  accent: "#0096D6",
  mode: "light",
  showPs: true,
  heroLayout: "centered",
};

interface TweaksPanelProps {
  tweaks: TweakState;
  onChange: (edits: Partial<TweakState>) => void;
}

export const TweaksPanel: React.FC<TweaksPanelProps> = ({ tweaks, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "22px",
          left: "22px",
          zIndex: 9999,
          background: "rgba(15, 23, 42, 0.85)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(12px)",
          borderRadius: "999px",
          padding: "10px 18px",
          fontSize: "13px",
          fontWeight: 600,
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "14px" }}>⚙</span> {isOpen ? "Fechar Tweaks" : "Painel Tweaks"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            left: "22px",
            zIndex: 9999,
            width: "280px",
            background: "rgba(250, 249, 247, 0.92)",
            color: "#1e293b",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "16px",
            padding: "18px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            fontSize: "13px",
            fontFamily: "var(--font-sans)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              paddingBottom: "8px",
            }}
          >
            <strong style={{ fontSize: "14px" }}>Personalizar Landing Page</strong>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Headline Variant */}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>
                Variante da Headline
              </label>
              <div style={{ display: "flex", gap: "6px" }}>
                {(["A", "B", "C"] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onChange({ headline: opt })}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: tweaks.headline === opt ? "var(--accent)" : "#cbd5e1",
                      background: tweaks.headline === opt ? "var(--accent)" : "#fff",
                      color: tweaks.headline === opt ? "#fff" : "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Mode */}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>
                Modo de Cor
              </label>
              <div style={{ display: "flex", gap: "6px" }}>
                {[
                  { key: "light", label: "Claro" },
                  { key: "dark", label: "Escuro" },
                ].map((modeOpt) => (
                  <button
                    key={modeOpt.key}
                    onClick={() => onChange({ mode: modeOpt.key as "light" | "dark" })}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: tweaks.mode === modeOpt.key ? "var(--accent)" : "#cbd5e1",
                      background: tweaks.mode === modeOpt.key ? "var(--accent)" : "#fff",
                      color: tweaks.mode === modeOpt.key ? "#fff" : "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {modeOpt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color */}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>
                Cor de Destaque
              </label>
              <div style={{ display: "flex", gap: "8px" }}>
                {["#0096D6", "#1F1F6C", "#00829B", "#334155"].map((color) => (
                  <button
                    key={color}
                    onClick={() => onChange({ accent: color })}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: color,
                      border: tweaks.accent === color ? "3px solid #0f172a" : "1px solid #cbd5e1",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hero Layout */}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#64748b", marginBottom: "6px" }}>
                Layout do Hero
              </label>
              <div style={{ display: "flex", gap: "6px" }}>
                {[
                  { key: "centered", label: "Centralizado" },
                  { key: "split", label: "Dividido" },
                ].map((layoutOpt) => (
                  <button
                    key={layoutOpt.key}
                    onClick={() => onChange({ heroLayout: layoutOpt.key as "centered" | "split" })}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: tweaks.heroLayout === layoutOpt.key ? "var(--accent)" : "#cbd5e1",
                      background: tweaks.heroLayout === layoutOpt.key ? "var(--accent)" : "#fff",
                      color: tweaks.heroLayout === layoutOpt.key ? "#fff" : "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {layoutOpt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle PS */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: 600 }}>Exibir bloco P.S.</span>
              <input
                type="checkbox"
                checked={tweaks.showPs}
                onChange={(e) => onChange({ showPs: e.target.checked })}
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
