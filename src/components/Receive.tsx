"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";


import {
  YouTubeEmbedProps,
} from "@/assets/interfaces";

// Lógica do YouTube
const youtubeVideoId = "vjgGt5QDFV8?si=S_iWvEyKUbTLpVPa";
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



export default function Receive() {
    const title = "GMD RECEBE E VALIDA"
  return (
    <section id="why-us" className="py-20 bg-dark-gray text-light-gray rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_-25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 ">
      <h2 className="text-3xl font-bold mb-2 text-secondary-blue md:hidden">
            {title}
          </h2>
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
        <div className="mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-secondary-blue hidden md:flex">
            {title}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-end ">
              <CheckCircle2 className="text-secondary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-light-gray">
                Expertise em áreas distintas para oferecer a melhor solução.
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-secondary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-light-gray">
                Construção de parcerias de longo prazo baseadas em confiança.
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-secondary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-light-gray">
                Flexibilidade e agilidade para atender às suas necessidades.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
