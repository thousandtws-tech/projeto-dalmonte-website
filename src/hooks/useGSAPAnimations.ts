import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Initialize Lenis + GSAP ScrollTrigger Synchronization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateGSAP = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAP);
    gsap.ticker.lagSmoothing(0);

    // Synchronize anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -40,
            duration: 1.4,
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 2. Hero Timeline (Page Load Reveal)
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          ".hero-eyebrow-row",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          ".hero h1",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-visual",
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power4.out" },
          "-=0.9"
        )
        .fromTo(
          ".trust-strip .item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.6"
        );

      // 3. ScrollTrigger Reveals for Each Section
      const sections = document.querySelectorAll<HTMLElement>(".section");

      sections.forEach((section) => {
        // Section Head
        const head = section.querySelector(".section-head");
        if (head) {
          gsap.fromTo(
            head.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: head,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Compare Cards in ValueProp
        const compareCards = section.querySelectorAll(".compare-card");
        if (compareCards.length > 0) {
          gsap.fromTo(
            compareCards,
            { opacity: 0, y: 45, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.18,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: compareCards[0],
                start: "top 85%",
              },
            }
          );
        }

        // Pains Cards
        const pains = section.querySelectorAll(".pain");
        if (pains.length > 0) {
          gsap.fromTo(
            pains,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: pains[0],
                start: "top 85%",
              },
            }
          );
        }

        // Solution Materials
        const materials = section.querySelectorAll(".material");
        if (materials.length > 0) {
          gsap.fromTo(
            materials,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: materials[0],
                start: "top 85%",
              },
            }
          );
        }

        // Benefits Cards
        const benefits = section.querySelectorAll(".benefit");
        if (benefits.length > 0) {
          gsap.fromTo(
            benefits,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: {
                trigger: benefits[0],
                start: "top 85%",
              },
            }
          );
        }

        // Counters
        const counters = section.querySelectorAll(".counter");
        if (counters.length > 0) {
          gsap.fromTo(
            counters,
            { opacity: 0, scale: 0.8, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: counters[0],
                start: "top 85%",
              },
            }
          );
        }

        // Offer Card & Guarantee Card
        const cards = section.querySelectorAll(".offer-card, .guarantee-card, .ps-block");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        });

        // FAQ & Objections Accordions
        const accordions = section.querySelectorAll(".acc");
        if (accordions.length > 0) {
          gsap.fromTo(
            accordions,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: {
                trigger: accordions[0],
                start: "top 85%",
              },
            }
          );
        }

        // Form Card in CTA Final
        const formCard = section.querySelector(".form-card");
        if (formCard) {
          gsap.fromTo(
            formCard,
            { opacity: 0, x: 40, scale: 0.96 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: formCard,
                start: "top 85%",
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateGSAP);
      lenis.destroy();
    };
  }, []);
}
