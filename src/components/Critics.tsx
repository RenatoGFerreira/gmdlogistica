"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/assets/useRevealOnScrool";
import {
  YouTubeEmbedProps,
} from "@/assets/interfaces";

// Lógica do YouTube
const youtubeVideoId = "xUNtvcEQolQ?si=6LKm1y2hx0nJyR8z";
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

export default function Critics() {

    const { ref, visible } = useRevealOnScroll();
  
  return (
    <section id="critics" className="py-20 bg-light-gray text-dark-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 ref={ref} className="text-3xl font-bold mb-6 text-primary-blue text-center md:text-start">
          3. Material crítico entra na frente — sem precisar correr atrás
          </h2>
          <h3 className="text-xl text-left text-dark-gray font-bold mb-2 ">
            {" "}
            &#10003; Módulo GMD Críticos
          </h3>
          <p className="text-left text-dark-gray mb-6">
          Itens que não podem atrasar são tratados com prioridade. O sistema identifica o material crítico na portaria e libera direto para conferência.
          </p>

          <ul className="space-y-4">
          <li className={`flex items-end ${
            visible
              ? "opacity-100 translate-y-0 animate-item-one"
              : "opacity-0 translate-y-8"
          }`}>
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
              Entrada prioritária para itens vitais
              </span>
            </li>
            <li className={`flex items-end ${
            visible
              ? "opacity-100 translate-y-0 animate-item-two"
              : "opacity-0 translate-y-8"
          }`}>
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
              Identificação automática na portaria{" "}
              </span>
            </li>
            <li className={`flex items-end ${
            visible
              ? "opacity-100 translate-y-0 animate-item-three"
              : "opacity-0 translate-y-8"
          }`}>
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
              Rastreio completo da chegada à conferência{" "}
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
