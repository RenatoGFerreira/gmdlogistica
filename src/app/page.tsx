"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Whoweare from "@/components/Whoweare";
import Systems from "@/components/Systems";
import Scheduling from "@/components/Scheduling";
import Receive from "@/components/Receive";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-light-gray text-dark-gray">
      <Header />
      <main>
        <Hero />
        <Whoweare />
        <Systems />
        <Scheduling />
        <Receive />
        <Contacts/>
      </main>
      <Footer />
    </div>
  );
}
