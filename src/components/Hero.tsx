import React from "react";
import { Icon } from "./Icon";
import { ShineBorder } from "./ShineBorder";
import { DottedSurface } from "./DottedSurface";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const HEADLINES: Record<
  string,
  { eyebrow: string; title: React.ReactNode; sub: string }
> = {
  A: {
    eyebrow: "Comunicação visual · ACM · Letra caixa",
    title: (
      <>
        Sua fachada é o <em>primeiro</em>
        <br />
        <span style={{ color: "var(--accent)" }}>
          vendedor do seu negócio.
        </span>
      </>
    ),
    sub: "Fachadas comerciais em ACM e letra caixa projetadas com precisão técnica, entregues no prazo e com preço justo. Do projeto à instalação, a Dalmonte cuida de tudo.",
  },
  B: {
    eyebrow: "ACM · Letra caixa iluminada",
    title: (
      <>
        ACM e letra caixa
        <br />
        que fazem seu negócio
        <br />
        ser <em>visto</em> — e lembrado.
      </>
    ),
    sub: "Comunicação visual de alto impacto para quem quer ocupar mais espaço no mercado. Material premium, instalação dentro das normas, prazo cumprido.",
  },
  C: {
    eyebrow: "Enquanto você lê isso…",
    title: (
      <>
        Clientes estão entrando
        <br />
        na <em>concorrência</em>.
      </>
    ),
    sub: "Uma fachada profissional muda esse jogo. ACM e letra caixa instalados pela equipe técnica da Dalmonte — projeto, fabricação e montagem com qualidade verificável.",
  },
};



interface HeroProps {
  headline?: string;
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ headline = "A", isDark = false }) => {
  const h = HEADLINES[headline] || HEADLINES.A;

  return (
    <section
      className="hero"
      id="top"
      style={{ fontFamily: "Raleway, sans-serif", position: "relative", overflow: "hidden" }}
    >
      <DottedSurface dark={isDark} />
      <div className="container" style={{ fontFamily: "Inter, sans-serif", position: "relative", zIndex: 1 }}>
        <div className="hero-eyebrow-row">
          <span className="eyebrow">{h.eyebrow}</span>
          <span className="eyebrow" style={{ opacity: 0.7 }}>
            Atendimento personalizado · Sem compromisso
          </span>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="h-display" style={{ fontFamily: "Tahoma, sans-serif", fontSize: "clamp(38px, 4.8vw, 84px)" }}>
              {h.title}
            </h1>
            <p className="hero-sub" style={{ fontSize: "clamp(16px, 1.3vw, 20px)" }}>
              {h.sub}
            </p>
            <div className="hero-ctas">
              <ShineBorder borderRadius="999px" padding={2}>
                <a href="#contato" className="btn btn-primary">
                  Solicitar orçamento gratuito
                  <span className="arrow">
                    <Icon name="arrow" />
                  </span>
                </a>
              </ShineBorder>
              <a href="#solucao" className="btn btn-ghost">
                Ver como trabalhamos
              </a>
            </div>
            <div className="hero-foot">
              <span>
                <span
                  className="dot"
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    marginRight: 8,
                    verticalAlign: "middle",
                  }}
                ></span>
                Resposta em até 24h úteis
              </span>
              <span>·</span>
              <span>Equipe técnica certificada</span>
              <span>·</span>
              <span>Prazo garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
