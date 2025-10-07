"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image"; 
import Link from "next/link";


export interface AdvCardProps {
  // icon: React.ReactNode;
  icon: string | StaticImageData;
  title: string;
  text: string;
  link: string;
}

const AdvCard: React.FC<AdvCardProps> = ({ icon, title, text, link }) => {
  return (
    <div
      className="
        min-h-[320px]
        flex flex-col   
        gap-2.5                
        border border-primary-blue/30 
        bg-light-gray
        p-4                    
        rounded-lg             
        max-w-[320px]      
        m-2                 
        transition-all         
        duration-300           
        ease-in                
        hover:scale-105        
        hover:cursor-pointer   
        hover:shadow-[0px_72px_49px_-51px_theme(colors.secondary-blue/0.21)]
        hover:bg-gradient-to-b from-transparent to-secondary-blue/10  
      "
    >
      {/* <div className=" text-secondary-blue ">{icon}</div> */}
      <Image
                  src={icon}
                  alt="Caixa com qrcode"
                  className="m-auto"
                  width={240}
                  height={280}
                />
      <h1 className="text-xl text-primary-blue ">{title}</h1>

      <p className="text-base text-justify text-dark-gray ">{text}</p>

      <Link
        href={link}
        className="mt-auto bg-accent-yellow py-2 px-6 rounded-2xl text-base text-center font-bold
        text-dark-gray opacity-70 hover:opacity-100 transition-opacity"
      >
        Agendar Diagnóstico
      </Link>
    </div>
  );
};

export default AdvCard;
