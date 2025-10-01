"use client";
import React, { useState, useEffect, useRef } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(step);
            }
          };
          animationFrameRef.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  return { count, ref };
};

const Hero: React.FC = () => {
  const { count, ref } = useCountUp(2000000, 3000);
  return (
      <section
        id="hero"
        className="bg-primary-blue bg-cover bg-center text-light-gray min-h-screen flex items-center pt-20 shadow-2xl backdrop-blur-sm"
        style={{ backgroundImage: "linear-gradient(rgba(26, 59, 122, 0.5), rgba(26, 59, 122, 0.9)), url('/background.png')" }}

      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          {/* Conteúdo de Texto */}
          <div className="text-center md:text-left animate-showIn z-1">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-light-gray">
              A logística da sua empresa de forma{" "}
              <span className="text-accent-yellow">Tecnológica</span>.
            </h1>
            <p className="text-xl text-light-gray mb-8">
              Sistema completo com 6 soluções voltados para a logística, gestão e automatização da sua empresa.
            </p>
            <a
              href="#contact"
              className="bg-accent-yellow text-dark-gray font-bold py-3 px-8 rounded-2xl text-lg  transition-transform duration-300 inline-block hover:scale-105"
            >
              Comece Agora
            </a>
          </div>

          {/* Imagem precisa de Animação ainda tem que fazer acho boa aquela animate-slide-in-right */}
          <div className="flex justify-center h-max ">
            <img
              src="/people4.png"
              alt="Imagem representando uma solução digital inovadora"
              className="w-200 h-max object-contain"
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;


