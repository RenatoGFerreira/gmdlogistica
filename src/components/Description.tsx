import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AdvCard from "./Cards";
import { AdvCardProps } from "./Cards";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import agendaValida from "../assets/images/transparente/01_agenda_valida.png";
import recebeValida from "../assets/images/transparente/02_recebe_valida.png";
import visibilidadeGestao from "../assets/images/transparente/03_visibilidade_gestao.png";
import criticos from "../assets/images/transparente/04_criticos.png";
import devolucoeslogisticas from "../assets/images/transparente/05_devolucoes_logistica_reversa.png";
import expede from "../assets/images/transparente/06_expede.png";
import { useRevealOnScroll } from "@/assets/useRevealOnScrool";


const itemDescription = [
  {
    icon: agendaValida,
    title: "Agenda & Valida",
    text:
      "Organize a fila de entregas conforme sua capacidade e necessidade real. Reduza veículos na portaria e evite recebimento fora de hora.",
    link: "#contact",
  },
  {
    icon: recebeValida,
    title: "Recebe & Valida",
    text:
      "Divergência na nota? O sistema bloqueia na hora. Controle total do que entrou, com checagem automática e rastreio completo.",
    link: "#contact",
  },
  {
    icon: criticos,
    title: "Críticos",
    text:
      "Itens vitais em fluxo prioritário. Do ERP à portaria, o que não pode atrasar recebe atenção especial — sem depender de planilha ou aviso manual.",
    link: "#contact",
  },
  {
    icon: expede,
    title: "Expede",
    text:
      "Evite envio errado com dupla conferência obrigatória. Sem etiqueta batendo com nota, a carga não sai. Expedição segura, com trilha de rastreio.",
    link: "#contact",
  },
  {
    icon: devolucoeslogisticas,
    title: "Devoluções & Logística Reversa",
    text:
      "Aproveite o retorno do caminhão. O sistema mostra o que pode voltar e registra tudo. Menos deslocamento, mais eficiência.",
    link: "#contact",
  },
  {
    icon: visibilidadeGestao,
    title: "Visibilidade & Gestão",
    text:
      "Indicadores operacionais em tempo real. Tudo que entrou, saiu ou está parado, em um só lugar. Com relatórios, filtros e histórico completo.",
    link: "#contact",
  },
];


export default function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isMediumScreen = useMediaQuery('(min-width: 1000px)');
  const { ref, visible } = useRevealOnScroll();
  let itemsPerPage;

  const StatItem: React.FC<AdvCardProps> = ({ title, text, icon, link }) => (

      <AdvCard icon={icon} title={title} text={text} link={link} />    
  );

  if (isLargeScreen) {
    itemsPerPage = 4;
  } else if (isMediumScreen) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 1;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    const lastPossibleIndex = itemDescription.length - itemsPerPage;
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, lastPossibleIndex));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < itemDescription.length - itemsPerPage;

  return (
    // <section id="functionalities" ref={ref} className="py-20 bg-light-gray ">
          <section id="functionalities" ref={ref} className={` py-20 bg-light-gray transition-all duration-900 ease-out ${
            visible
              ? "opacity-100 translate-y-0 animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}>

      <div className="container mx-auto px-6 text-centeR">
        <h2 className="text-3xl font-bold mb-2 text-primary-blue text-center md:text-start">MODULAR, INTEGRADO, DECISIVO</h2>
        <h3 className="text-xl text-left text-dark-gray font-bold mb-12 "> &#10003; Um sistema logístico que te dá o controle.</h3>
        <p className="text-left text-dark-gray">
        A GMD oferece uma solução completa, dividida em módulos que resolvem as dores reais do seu negócio. Use tudo junto ou implemente por partes — no seu ritmo.
        </p>
        <div>
          <div className={`flex flex-col mt-4 items-center gap-x-2 sm:mt-0 ${
            visible
              ? "opacity-100 translate-y-0 animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}>
            <div className="mt-12 pt-3 pb-12 overflow-hidden w-full">
              <div
                className="flex items-stretch transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerPage)
                  }%)`,
                }}
              >
                {itemDescription.map((stat, index) => (
                  <div
                    key={index}
                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                    className="px-1 flex justify-center"
                  >
                    <StatItem
                      title={stat.title}
                      text={stat.text}
                      icon={stat.icon}
                      link={stat.link}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="m-2 flex flex-row">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className="flex flex-row h-11 w-11 items-center justify-center rounded-full border border-secondary-blue bg-light-gray text-dark-gray transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-blue bg-gray-300 text-gray-800 transition hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
