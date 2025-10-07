"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Scheduling from "@/components/Scheduling";
import Receive from "@/components/Receive";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import Efforts from "@/components/Efforts";
import Management from "@/components/Management";
import Return from "@/components/Return";
import Critics from "@/components/Critics";
import Expedition from "@/components/Expedition";

export default function LandingPage() {
  return (
    <div className="bg-light-gray text-dark-gray">
      <Header />
      <main>
        <Hero />
        <Description/>
        <Efforts/>
        <Scheduling />
        <Receive />
        <Critics/>
        <Expedition/>
        <Return/>
        <Management/>
        <Contacts/>
      </main>
      <Footer />
    </div>
  );
}
