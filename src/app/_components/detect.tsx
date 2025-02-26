import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Detect(){
  return(
    <section className="bg-(--background-secondary) text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12">
          <div className="space-y-4 flex flex-col">
            <h1 className="font-bold md:text-4xl text-[40px] pb-14">Como detectar?</h1>
            <div className="bg-[#E1EFFA] w-[59px] h-[64px] flex items-center justify-center">
              <Image width={24} height={24} src={"/search.svg"} alt="Lupa de pesquisar"></Image>
            </div>
            <p className="font-normal text-2xl py-12">
              A detecção precoce é essencial para evitar complicações no fígado. Confira os principais exames:
            </p>
            <Link href="https://sbhepatologia.org.br/associados/busca-de-especialistas/" target="_blank"><Button className="w-[314px] h-14 py-4 px-6 bg-blue-900 text-white rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]">Agende sua consulta agora <Image alt="Saiba Mais" src={"./icon-saiba-mais.svg"} width={32} height={32}></Image></Button></Link>            <Button className="w-[314px] h-14 py-4 px-6 border-blue-900 border-1 bg-transparent text-blue-900 rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]">Acesse a Calculadora FIB-4 <Image alt="Saiba Mais" src={"./icon-saiba-mais.svg"} width={32} height={32}></Image></Button>
          </div>
          <div className="space-y-12">
            <div className="space-y-2">
              <Image width={21} height={24} src={"/calculadora.svg"} alt="Calculadora"></Image>
              <p className="font-normal text-2xl">
                <span className="font-bold">Calculadora FIB-4:</span> Ferramenta que utiliza as taxas de exame de sangue (TGO, TGP e Plaquetas) para estimar uma possível alteração hepática.
              </p>
            </div>
            <div className="space-y-2">
              <Image width={27} height={24} src={"/graph.svg"} alt="Grafico de ultrassom"></Image>
              <p className="font-normal text-2xl">
                <span className="font-bold">Ultrassom abdominal:</span> Identifica o acúmulo de gordura no fígado.
              </p>
            </div>
            <div className="space-y-2">
              <Image width={21} height={24} src={"/radar.svg"} alt="Radar da elastografia"></Image>
              <p className="font-normal text-2xl">
              <span className="font-bold">Elastografia:</span> Avalia a rigidez do fígado para confirmar diagnósticos e identificar a gravidade do quadro.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}