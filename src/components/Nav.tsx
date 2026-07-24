import React from "react";
import { Icon } from "./Icon";

interface NavProps {
  scrollY: number;
}

export const Nav: React.FC<NavProps> = ({ scrollY }) => {
  return (
    <header className={`nav ${scrollY > 20 ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/uploads/Logotipo_dalmonte.svg"
            alt="Dalmonte Comunicação Visual"
            style={{ height: "44px", width: "auto", display: "block" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
        <nav className="nav-links">
          <a href="#solucao">Soluções</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#projetos">Projetos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="nav-cta">
          <a href="#contato" className="btn btn-primary">
            Solicitar orçamento
            <span className="arrow">
              <Icon name="arrow" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
