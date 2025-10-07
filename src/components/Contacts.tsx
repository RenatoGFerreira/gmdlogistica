import React from "react";
import { useRevealOnScroll } from "@/assets/useRevealOnScrool";


type FooterProps = {
  phone?: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function Contacts({
  phone = "+5531984378974",
  message = "Olá! Vi o site da GMD Logística e fiquei interessado",
  children,
  ariaLabel = "Abrir chat no WhatsApp",
}: FooterProps) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;
        const { ref, visible } = useRevealOnScroll();
  
  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 ">
        {/* Lado do Depoimento */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-primary-blue">
            O que nossos clientes dizem
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              &quot;Com a GMD Logística, a organização no pátio reduziu mais de
              22% do custo de perdas logísticas.&ldquo;
            </p>
            <div className="flex items-center">
              {/* <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div> */}
              <div>
                <p className="font-bold">Heitor Neves</p>
                {/* <p className="text-sm text-gray-500">CEO da InovaTech</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Lado do Formulário */}
        <div>
          <h2 ref={ref} className="text-3xl font-bold mb-8 text-primary-blue">
            Entre em Contato
          </h2>
          {/* <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                type="phone"
                id="phone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent-yellow text-primary-blue font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </form> */}
          {/* Inicio Whats */}
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left text-sm text-dark-gray">
              {children ?? (
                <>
                  <strong className="font-medium text-dark-gray">
                    Ainda com dúvidas?
                  </strong>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 ">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className={`
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
        ${
            visible
              ? "opacity-100 translate-y-0 animate-show-in"
              : "opacity-0 translate-y-8"
          }`}
      
              >
                {/* Container para o texto e a seta para aplicar o efeito de linha */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 mr-2 text-dark-gray"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.15 1.586 5.97L0 24l6.342-1.657A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.204-1.248-6.205-3.48-8.52zM12 22.2c-1.77 0-3.506-.466-5.03-1.347l-.36-.203-3.76.982.987-3.664-.232-.375A9.4 9.4 0 0 1 2.8 12 9.2 9.2 0 0 1 21.2 12 9.2 9.2 0 0 1 12 22.2z" />
                  <path d="M17.2 14.28c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.13-.61.14s-.7.9-.86 1.08c-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.61-1.46-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.25.29-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.14.18 1.9 2.9 4.6 3.95 2.7 1.05 2.7.7 3.18.66.47-.04 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.12-.25-.19-.54-.33z" />
                </svg>
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
                </span>
              </a>
            </div>
          </div>
          {/* FIM WHATS */}
          
        </div>
      </div>
    </section>
  );
}
