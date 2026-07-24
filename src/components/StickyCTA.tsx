import React from "react";
import { Icon } from "./Icon";

interface StickyCTAProps {
  scrollY: number;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ scrollY }) => {
  return (
    <div className={`sticky-cta ${scrollY > 600 ? "show" : ""}`}>
      <a href="#contato" className="pill">
        <span className="dot"></span>
        <span>Orçamento em 24h</span>
        <Icon name="arrow" />
      </a>
    </div>
  );
};
