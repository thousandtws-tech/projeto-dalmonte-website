import { useState, useEffect } from "react";
import type { Route } from "./+types/home";
import { useGSAPAnimations } from "../../src/hooks/useGSAPAnimations";
import { SkeletonProvider } from "../../src/components/SkeletonProvider";
import { Nav } from "../../src/components/Nav";
import { Hero } from "../../src/components/Hero";
import { ValueProp } from "../../src/components/ValueProp";
import { Pains } from "../../src/components/Pains";
import { Solution } from "../../src/components/Solution";
import { Benefits } from "../../src/components/Benefits";
import { Proof } from "../../src/components/Proof";
import { Offer } from "../../src/components/Offer";
import { Objections } from "../../src/components/Objections";
import { Guarantee } from "../../src/components/Guarantee";
import { FAQ } from "../../src/components/FAQ";
import { CTAFinal } from "../../src/components/CTAFinal";
import { PS } from "../../src/components/PS";
import { Footer } from "../../src/components/Footer";
import { StickyCTA } from "../../src/components/StickyCTA";
import {
  TweaksPanel,
  TWEAK_DEFAULTS,
  type TweakState,
} from "../../src/components/TweaksPanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dalmonte · Fachadas em ACM e Letra Caixa" },
    {
      name: "description",
      content:
        "Fachadas comerciais em ACM e letra caixa projetadas com precisão técnica, entregues no prazo e com preço justo. Solicite seu orçamento gratuito.",
    },
  ];
}

const ACCENTS: Record<string, [string, string]> = {
  "#0096D6": ["#0096D6", "#00ADEF"],
  "#1F1F6C": ["#1F1F6C", "#3d3dab"],
  "#00829B": ["#00829B", "#00aec7"],
  "#334155": ["#334155", "#64748b"],
};

export default function Home() {
  useGSAPAnimations();
  const [tweaks, setTweaks] = useState<TweakState>({ ...TWEAK_DEFAULTS, mode: "dark" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mode", "dark");
    root.setAttribute("data-hero", tweaks.heroLayout || "centered");
    const pair = ACCENTS[tweaks.accent] || ["#0096D6", "#00ADEF"];
    root.style.setProperty("--accent", pair[0]);
    root.style.setProperty("--accent-2", pair[1]);
  }, [tweaks.accent, tweaks.heroLayout]);

  const handleTweakChange = (edits: Partial<TweakState>) => {
    setTweaks((prev) => ({ ...prev, ...edits, mode: "dark" }));
  };

  return (
    <SkeletonProvider isDark={true}>
      <Nav scrollY={scrollY} />
      <Hero headline={tweaks.headline} isDark={true} />
      <ValueProp />
      <Pains />
      <Solution />
      <Benefits />
      <Proof />
      <Offer />
      <Objections />
      <Guarantee />
      <FAQ />
      <CTAFinal />
      <PS show={tweaks.showPs} />
      <Footer />
      <StickyCTA scrollY={scrollY} />
      <TweaksPanel tweaks={{ ...tweaks, mode: "dark" }} onChange={handleTweakChange} />
    </SkeletonProvider>
  );
}
