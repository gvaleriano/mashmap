import { Carroussel } from "@/components/carrousel";
import Image from "next/image";

export function About(){
  return(
    <section className="text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12">
          <div>
            <Image width={488} height={491} src={"/sick-about.svg"} alt="Imagem do figado com informações se esta: Normal? Fibrose Avançada? Esteatose simples?"></Image>
          </div>
          <div className="space-y-12">
            <p className="font-normal text-4xl">
              <span className="font-bold">A evolução das doenças hepáticas:</span> Do acúmulo de gordura à cirrose
            </p>
          </div>
        </article>
        <Carroussel/>
      </div>
    </section>
  )
}