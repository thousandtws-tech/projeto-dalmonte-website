import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="brand-block">
          <a href="#top" className="nav-brand" style={{ color: "var(--bg)", display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/uploads/Logotipo_dalmonte.svg"
              alt="Dalmonte Comunicação Visual"
              style={{ height: "44px", width: "auto", filter: "brightness(0) invert(1)" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>
          <p>
            Comunicação visual para negócios que querem ser vistos. ACM, letra
            caixa e instalação dentro das normas.
          </p>
        </div>
        <div>
          <h4>Soluções</h4>
          <ul>
            <li>
              <a href="#solucao">ACM</a>
            </li>
            <li>
              <a href="#solucao">Letra Caixa</a>
            </li>
            <li>
              <a href="#solucao">Projetos especiais</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="#beneficios">Por que Dalmonte</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>WhatsApp: (11) 99999-9999</li>
            <li>Telefone: (11) 4004-0000</li>
            <li>E-mail: contato@dalmontefachadas.com.br</li>
            <li>Instagram: @dalmonte.fachadas</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="bottom">
          <span>
            © 2026 Dalmonte Comunicação Visual. Todos os direitos reservados.
          </span>
          <span>CNPJ 00.000.000/0001-00 · Política de Privacidade</span>
        </div>
      </div>
    </footer>
  );
};
