"use client";
import { useRef } from "react";
import { About } from "./_components/about";
import { Calculadora } from "./_components/calculator";
import { Detect } from "./_components/detect";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { ArtigoUtil } from "./_components/hear-you";
import { Hero } from "./_components/hero";
import { Localizacao } from "./_components/localization";
import { Causas } from "./_components/main-infos";
import { Schedule } from "./_components/schedule";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Header />
      <Hero scrollToSection={scrollToSection} />
      <Schedule />
      <About />
      <Detect />
      <Calculadora />
      <Localizacao />
      <Causas sectionRef={sectionRef} />
      <ArtigoUtil />
      <Footer />
    </main>
  );
}
