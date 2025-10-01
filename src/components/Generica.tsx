"use client";
import React from "react";
import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import GMDAgenda from "@/assets/images/gmd_agenda_valida.png"

export default function Scheduling() {
  return (
    <section id="why-us" className="py-20 bg-light-gray text-dark-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
        <h2 className="text-3xl font-bold mb-12 text-primary-blue">GMD AGENDA E VALIDA</h2>

          <ul className="space-y-4">
            <li className="flex items-end ">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Expertise em áreas distintas para oferecer a melhor solução.
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Construção de parcerias de longo prazo baseadas em confiança.
              </span>
            </li>
            <li className="flex items-end">
              <CheckCircle2 className="text-primary-blue w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span className="text-dark-gray">
                Flexibilidade e agilidade para atender às suas necessidades.
              </span>
            </li>
          </ul>
        </div>
        <div className="md:block flex flex-col items-start">
          <Image
            src={GMDAgenda}
            alt="Ilustração tecnológica"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
