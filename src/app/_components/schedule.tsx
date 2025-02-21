import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Schedule(){
  return(
    <section className="bg-(--background-secondary) text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12">
          <div>
            <h1 className="font-bold md:text-4xl text-[40px] pb-14">Não é só uma “gordurinha”</h1>
            <Image width={488} height={491} src={"/doctor.png"} alt="Imagem do figado com informações se esta: Normal? Fibrose Avançada? Esteatose simples?"></Image>
          </div>
          <div className="space-y-12">
            <p className="font-normal text-lg">
              A esteatose hepática, conhecida como gordura no fígado, ocorre quando há um acúmulo excessivo de gordura nas células hepáticas. Embora um pequeno nível de gordura no fígado seja normal,
              quando essa taxa atinge 5% ou mais, o quadro precisa de atenção.
            </p>
            <p className="font-normal text-lg">
              Se não tratada, a gordura no fígado pode desencadear uma <span className="font-bold">inflamação silenciosa</span>, que, ao longo do tempo, pode evoluir para <span className="font-bold">hepatite gordurosa, 
              fibrose, cirrose</span> e até <span className="font-bold">câncer hepático</span>.
            </p>
            <Button className="w-[243px] h-14 py-4 px-6 bg-blue-900 text-white rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]">Agende um exame <Image alt="Saiba Mais" src={"./icon-saiba-mais.svg"} width={32} height={32}></Image></Button>
          </div>
        </article>
      </div>
    </section>
  )
}