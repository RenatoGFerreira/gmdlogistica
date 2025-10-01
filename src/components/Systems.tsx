"use client";
import React, { useState } from "react";
import caminhaoRelogio from "../assets/images/caminhao_relogio.png";
import caixaQrcode from "../assets/images/caixa_qrcode.png";
import homemNotebook from "../assets/images/homem_notebook.png";
import cubosSetas from "../assets/images/cubos_setas.png";
import caminhaoAzulCaixas from "../assets/images/caminhao_azul_caixas.png";
import caminhaoBrancoArmazem from "../assets/images/caminhao_branco_armazem.png";
import {
  GalleryItemProps,
  FaqItemProps,
} from "@/assets/interfaces";
import Image from "next/image";

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 bg-dark-gray">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-light-gray">{question}</span>
        <span className=" text-xl font-bold text-secondary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-secondary-blue">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Lógica do YouTube


const GalleryItem: React.FC<GalleryItemProps> = ({
  imageSrc,
  altText,
  label,
}) => {
  const src =
    typeof imageSrc === "object" && "src" in imageSrc ? imageSrc.src : imageSrc;

  return (
    <div className="flex flex-col items-center p-2 text-center">
      <div className="relative w-30 h-30 md:w-35 md:h-35 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors duration-300">
        <Image
          src={src}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <p className="mt-4 text-white text-sm md:text-base font-semibold leading-tight max-w-[150px]">
        {label}
      </p>
    </div>
  );
};

const Systems: React.FC = () => {
  const galleryItems = [
    {
      imageSrc: caminhaoRelogio,
      altText: "Caminhão com relógio, representando agendamento",
      label: "GMD Agenda e Valida",
    },
    {
      imageSrc: caixaQrcode,
      altText: "Caixa com QR Code, representando recebimento",
      label: "GMD Recebe e Valida",
    },
    {
      imageSrc: homemNotebook,
      altText: "Homem com notebook, representando visibilidade e gestão",
      label: "GMD Visibilidade e Gestão",
    },
    {
      imageSrc: cubosSetas,
      altText:
        "Cubos com setas, uma delas em destaque, representando pontos críticos",
      label: "GMD Críticos",
    },
    {
      imageSrc: caminhaoAzulCaixas,
      altText:
        "Caminhão azul com caixas, representando devoluções e logística reversa",
      label: "GMD Devoluções e Logística reversa",
    },
    {
      imageSrc: caminhaoBrancoArmazem,
      altText:
        "Caminhão branco em frente a um armazém, representando expedição",
      label: "GMD Expedição",
    },
  ];

  const faqData = [
    {
      question: "Como a GMD Logística se diferencia de outras empresas?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question:
        "Qual é o processo da GMD Logística para implantação do serviço?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley and scrambled it to make a type specimen book.",
    },
    {
      question:
        "De que maneira a GMD Logística ajuda na logística da minha empresa?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Quais as etapas de implantação?",
      answer:
        "Lorem Ipsum is simply dummy . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 5); // Mostra 6 por padrão, tirei pra caber na tela resolver esse bug

  return (
    <section
      id="why-us"
      className="py-20 bg-dark-gray text-light-gray rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_-25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm"
    >
      <div className="container mx-auto mb-30 px-6 grid md:grid-cols-2 gap-12 ">
      <div className="md:col-span-2 ">
          <h2 className="text-3xl font-bold mb-6 text-secondary-blue  ">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="space-y-4">
            {displayedFaqs.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          {!showAll && faqData.length > 6 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium focus:outline-none"
              >
                Exibir mais
              </button>
            </div>
          )}
          {showAll && faqData.length > 6 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium focus:outline-none"
              >
                Exibir menos
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-secondary-blue">
            SISTEMA GMD - OVERVIEW
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 max-w-8xl">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={index}
                imageSrc={item.imageSrc}
                altText={item.altText}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;
