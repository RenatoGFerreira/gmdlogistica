"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/assets/useRevealOnScrool";
import { YouTubeEmbedProps } from "@/assets/interfaces";

// Lógica do YouTube
const youtubeVideoId = "yTpMVMTsIZw?si=8Bc6Itdr7mbxwHEx";
const youtubeVideoTitle = "Vídeo Institucional - Nossa Empresa";
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = "YouTube video player",
  autoplay = false,
  loop = false,
  controls = true,
  mute = false,
}) => {
  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  embedUrl.searchParams.append("autoplay", autoplay ? "1" : "0");
  embedUrl.searchParams.append("loop", loop ? "1" : "0");
  embedUrl.searchParams.append("controls", controls ? "1" : "0");
  embedUrl.searchParams.append("mute", mute ? "1" : "0");
  if (loop) {
    embedUrl.searchParams.append("playlist", videoId);
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "56.25%" }} // Proporção 16:9 > Lembrar do projeto da ROATS
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl.toString()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default function Return() {
    const { ref, visible } = useRevealOnScroll();
  
  return (
    <section id="return" ref={ref} className={`py-20 bg-light-gray text-dark-gray ${
            visible
              ? "opacity-100 translate-y-0 animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary-blue text-center md:text-start">
                  5. Devoluções organizadas no sistema, sem improviso
                  </h2>
                  <h3 className="text-xl text-left text-dark-gray font-bold mb-2 ">
                    {" "}
                    &#10003; Módulo GMD Devoluções & Logística Reversa
                  </h3>
                  <p className="text-left text-dark-gray mb-6">
                  Toda nota fiscal de devolução vai para um estoque separado. Na próxima entrega, o sistema já mostra o que pode ser trazido de volta no mesmo caminhão.
                  </p>
        
                  <ul className="space-y-4">
                    <li className="flex items-end ">
                      <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-dark-gray">
                      Mostra o que precisa voltar já no agendamento
                      </span>
                    </li>
                    <li className="flex items-end">
                      <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-dark-gray">
                      Registra tudo que foi retirado e por quem{" "}
                      </span>
                    </li>
                    <li className="flex items-end">
                      <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-dark-gray">
                      Reduz viagens e ajuda na sustentabilidade{" "}
                      </span>
                    </li>
                    
                  </ul>
                </div>
        <div className="md:block ">
          <YouTubeEmbed
            videoId={youtubeVideoId}
            title={youtubeVideoTitle}
            autoplay={false}
            loop={false}
            mute={false}
            controls={true}
          />
        </div>
      </div>
    </section>
  );
}
