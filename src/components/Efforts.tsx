import { useState } from "react";
import { FaqItemProps, GalleryItemProps } from "@/assets/interfaces";
import caminhaoRelogio from "../assets/images/caminhao_relogio.png";
import caixaQrcode from "../assets/images/caixa_qrcode.png";
import homemNotebook from "../assets/images/gmd_visibilidade_e_gestao.png";
import cubosSetas from "../assets/images/cubos_setas.png";
import caminhaoAzulCaixas from "../assets/images/caminhao_azul_caixas.png";
import caminhaoBrancoArmazem from "../assets/images/caminhao_branco_armazem.png";
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

const GalleryItem: React.FC<GalleryItemProps> = ({
  imageSrc,
  altText,
  label,
  href
}) => {
  const src =
    typeof imageSrc === "object" && "src" in imageSrc ? imageSrc.src : imageSrc;

  return (
    <a className="flex flex-col items-center p-2 text-center" href={href}>
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
    </a>
  );
};

export default function Efforts() {
  const faqData = [
    {
      question: "Divergência entre nota e pedido?",
      answer:
        "A carga já está na doca, mas o item não bate com o pedido? O sistema bloqueia na entrada — e não deixa o problema virar retrabalho lá na frente..",
    },
    {
      question: "Fila de caminhões na portaria?",
      answer:
        "Veículo sem agendamento? Entrega fora do previsto? A GMD organiza a fila com base na sua capacidade real de recebimento e evita congestionamento logístico.",
    },
    {
      question: "Falta de controle do que está parado?",
      answer:
        "Você sabe há quanto tempo aquele caminhão está parado? Em qual doca? Com qual transportadora? A GMD mostra tudo, em tempo real.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 5); // Mostra 6 por padrão, tirei pra caber na tela resolver esse bug
  const galleryItems = [
    {
      imageSrc: caminhaoRelogio,
      altText: "Caminhão com relógio, representando agendamento",
      label: "GMD Agenda e Valida",
      href: "#scheduling"
    },
    {
      imageSrc: caixaQrcode,
      altText: "Caixa com QR Code, representando recebimento",
      label: "GMD Recebe e Valida",
      href: "#receive"
    },
    {
      imageSrc: cubosSetas,
      altText:
        "Cubos com setas, uma delas em destaque, representando pontos críticos",
      label: "GMD Críticos",
      href: "#critics"
    },
    {
      imageSrc: caminhaoBrancoArmazem,
      altText:
        "Caminhão branco em frente a um armazém, representando expedição",
      label: "GMD Expedição",
      href: "#expedition"
    },
    {
      imageSrc: caminhaoAzulCaixas,
      altText:
        "Caminhão azul com caixas, representando devoluções e logística reversa",
      label: "GMD Devoluções e Logística reversa",
      href: "#return"
    },
    {
      imageSrc: homemNotebook,
      altText: "Homem com notebook, representando visibilidade e gestão",
      label: "GMD Visibilidade e Gestão",
      href: "#management"
    },
  ];
  return (
    <section
      id="efforts"
      className="py-20 bg-dark-gray text-light-gray rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_-25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm"
    >
      <div className="container mx-auto mb-12 px-6 grid md:grid-cols-2 gap-12">
        <div className="md:col-span-2 ">
          <h2 className="text-3xl font-bold mb-2 text-secondary-blue ">
            CHEGA DE CONTORNAR OS MESMOS PROBLEMAS TODOS OS DIAS.
          </h2>
          <h3 className="text-xl text-left text-light-gray font-bold mb-12 ">
            &#10003; A GMD nasceu da vivência em chão de fábrica. O sistema
            resolve as dores que mais comprometem o seu resultado — de forma
            prática, integrada e rastreável.
          </h3>

          {/* FAQ */}
          <div className="space-y-4 ">
            {displayedFaqs.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          {!showAll && faqData.length > 6 && (
            <div className="mt-8 text-center ">
              <button
                onClick={() => setShowAll(true)}
                className="text-light-gray hover:text-green-400 transition-colors duration-300 text-lg font-medium focus:outline-none"
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

      <div className="mt-10 container mx-auto px-2 py-8 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <h3 className="text-3xl font-bold text-secondary-blue">
            TRANSFORME DOR EM DADO E DADO EM DECISÃO
          </h3>

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
            <span
              className="
        relative
        flex
        items-center
        gap-2
        whitespace-nowrap
        after:absolute
        after:bottom-[-1px]
        after:left-0
        after:h-[2px]
        after:w-0
        after:bg-dark-gray/30
        after:transition-all
        after:duration-300
        after:ease-out
        group-hover:after:w-full
      "
            >
              Ver como funciona
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
        <div className="w-full h-px bg-light-gray my-4"></div> 

      </div>
      


      <div className="mt-20 container mx-auto px-2 sm:px-4 lg:px-6">
      <h2 className="text-3xl font-bold mt-12 mb-6 text-secondary-blue">
            SISTEMA GMD - OVERVIEW
          </h2>
          <h3 className="text-xl text-left text-light-gray font-bold mb-12 ">
            &#10003; Um sistema. Seis módulos. Toda a sua operação sob controle
          </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 max-w-8xl">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
