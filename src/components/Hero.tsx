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
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-light-gray">
            A logística da sua empresa de forma{" "}
            <span className="text-accent-yellow">Tecnológica</span>.
          </h1>
          <p className="text-xl text-light-gray mb-8">
            Sistema completo com 6 soluções voltados para a logística, gestão e
            automatização da sua empresa.
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
          <Image
            src="/people4.png"
            alt="Imagem representando uma solução digital inovadora"
            className="w-200 h-max object-contain"
            width={500} 
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
