"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

import {
  YouTubeEmbedProps,
} from "@/assets/interfaces";

// Lógica do YouTube
const youtubeVideoId = "eGq9bqRQFeI?si=tByPPfvj0x1FFg_M";
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

export default function Scheduling() {
  return (
    <section id="why-us" className="py-20 bg-light-gray text-dark-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-12 text-primary-blue">
            GMD AGENDA E VALIDA
          </h2>

          <ul className="space-y-4">
            <li className="flex items-end ">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Agende entregas conforme a capacidade das docas
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Controle automático com base na necessidade real{" "}
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Evite filas e desperdícios com cadência precisa{" "}
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Bloqueie excessos: só entra o que foi solicitado{" "}
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Estoque enxuto e sob controle do seu time{" "}
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
