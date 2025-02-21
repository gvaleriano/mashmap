import { About } from "./_components/about";
import { Calculadora } from "./_components/calculator";
import { Detect } from "./_components/detect";
import { Header } from "./_components/header";
import { ArtigoUtil } from "./_components/hear-you";
import { Hero } from "./_components/hero";
import { Localizacao } from "./_components/localization";
import { Causas } from "./_components/main-infos";
import { Schedule } from "./_components/schedule";

export default function Home(){
  return (
    <main>
      <Header/>
      <Hero/>
      <Schedule/>
      <About/>
      <Detect/>
      <Calculadora/>
      <Localizacao/>
      <Causas/>
      <ArtigoUtil/>
    </main>
  )
}