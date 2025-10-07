"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const node = imgWrapRef.current;
    if (!node || typeof window === "undefined") return;
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    let rafId: number | null = null;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          const newOpacity = Math.max(0, Math.min(1, ratio));

          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            setOpacity(newOpacity);
            rafId = null;
          });
        }
      },
      {
        root: null, 
        threshold: thresholds,
      }
    );

    obs.observe(node);

    return () => {
      obs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="bg-primary-blue bg-cover bg-fixed bg-center text-light-gray min-h-screen flex items-center pt-20 shadow-2xl"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,59,122,0.5), rgba(26,59,122,0.9)), url('/background.png')",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        {/* Texto */}
        <div className="text-center md:text-left z-10 animate-show-in">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-light-gray">
            A logística da sua empresa de forma{" "}
            <span className="text-accent-yellow">Tecnológica</span>
          </h1>
          <p className="text-xl text-light-gray mb-8">
            O sistema GMD organiza e conecta cada etapa da logística – do
            agendamento à expedição – com prioridade para o que importa,
            bloqueios em caso de erro e indicadores em tempo real.
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-accent-yellow px-8 py-3 text-lg font-bold text-dark-gray transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
          >
            <span className="relative flex items-center gap-2 whitespace-nowrap after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-0 after:bg-dark-gray/30 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full">
              Agendar demonstração
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        <div
          ref={imgWrapRef}
          className="flex justify-center h-max"
          style={{
            opacity,
            transform: `translateY(${(1 - opacity) * 30}px)`,
            transition: "opacity 220ms ease-out, transform 300ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <Image
            src="/people5.png"
            alt="Executivos da GMD que auxiliam na sua escolha"
            className="object-contain animate-slide-in-right"
            width={750}
            height={750}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
