import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ArtigoUtil(){
  return(
    <section className="bg-white text-blue-900">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12 bg-(--background-secondary) rounded-2xl">
          <div className="flex items-center justify-center">
            <Image width={289} height={244} src={"/character.svg"} alt="Imagem do figado com informações se esta: Normal? Fibrose Avançada? Esteatose simples?"></Image>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="font-bold text-2xl leading-9 font-[Sora]">Queremos ouvir você!</h1>
            <p className="font-normal text-lg">
              Encontrou o que procurava?
            </p>
            <div className="flex flex-row gap-4">
              <Button className="w-[243px] h-14 py-4 px-6 text-blue-900 rounded-full cursor-pointer font-[Sora] font-bold leading-6 border-1 border-blue-900">Sim</Button>
              <Button className="w-[243px] h-14 py-4 px-6 text-blue-900 rounded-full cursor-pointer font-[Sora] font-bold leading-6 border-1 border-blue-900">Não</Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}