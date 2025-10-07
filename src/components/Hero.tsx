"use client";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-primary-blue bg-cover bg-center text-light-gray min-h-screen flex items-center pt-20 shadow-2xl backdrop-blur-sm"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 59, 122, 0.5), rgba(26, 59, 122, 0.9)), url('/background.png')",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        {/* Conteúdo de Texto */}
        <div className="text-center md:text-left animate-showIn z-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-light-gray">
            A logística da sua empresa de forma{" "}
            <span className="text-accent-yellow">Tecnológica</span>
          </h1>
          <p className="text-xl text-light-gray mb-8">
            O sistema GMD organiza e conecta cada etapa da logística – do
            agendamento a expedição – com prioridade para o que importa,
            bloqueios em caso de erro e indicadores em tempo real.
          </p>

          <a
            href="#contact"
            className="
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-accent-yellow
        px-8
        py-3
        text-lg
        font-bold
        text-dark-gray
        transition-transform
        duration-300
        hover:scale-105
        focus:outline-none
        focus:ring-2
        focus:ring-accent-yellow
        focus:ring-offset-2
      "
          >
            {/* Container para o texto e a seta para aplicar o efeito de linha */}
            <span
              className="
          relative
          flex
          items-center
          gap-2
          whitespace-nowrap
          after:absolute
          after:bottom-[-1px] {/* Ajuste a posição da linha conforme necessário */}
          after:left-0
          after:h-[2px]
          after:w-0
          after:bg-dark-gray/30 {/* Cor da linha */}
          after:transition-all
          after:duration-300
          after:ease-out
          group-hover:after:w-full
        "
            >
              Agendar demonstração
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Imagem precisa de Animação ainda tem que fazer acho boa aquela animate-slide-in-right */}
        <div className="flex justify-center h-max ">
          <Image
            src="/people5.png"
            alt="Imagem representando uma solução digital inovadora"
            className="w-200 h-max object-contain "
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
