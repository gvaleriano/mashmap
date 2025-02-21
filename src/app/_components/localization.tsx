import { LocalizacaoForm } from "@/components/localization-form";
import Image from "next/image";

export function Localizacao(){
  return(
    <section className="text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12">
          <div className="flex flex-row space-x-10">
            <div className="bg-blue-900 w-14 h-12 flex items-center justify-center rounded-sm">
              <Image width={24} height={24} src={"/map.svg"} alt="Calculadora FIB-4"></Image>
            </div>
            <h1 className="font-bold md:text-4xl text-[40px]">Laboratórios e centros de diagnóstico</h1>
          </div>
          <div className="space-y-12">
            <div>
              <p className="font-normal text-lg">
                Se você já identificou algum fator de risco ou quer fazer um check-up para garantir que está tudo bem, o próximo passo é simples: encontrar uma clínica ou laboratório especializado.
              </p>
            </div>
          </div>
        </article>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-36 relative md:p-12 bg-(--background-secondary) rounded-2xl">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl leading-9">Agende um exame</h1>
            <p> - <span className="font-bold">Digite a sua localização</span> e veja a lista de clinicas próximas.</p>
            <p> - Encontre <span className="font-bold">profissionais qualificados</span> para o melhor atendimento.</p>
            <p> - <span className="font-bold">Agende sua consulta</span> e cuide da sua saúde antes que a doença evolua.</p>
            <p className="text-sm">*O mapa engloba apenas o estado de São Paulo</p>
            <div className="bg-white space-y-4 rounded-2xl p-4">
              <LocalizacaoForm/>
            </div>
            <div className="bg-white space-y-4 rounded-2xl p-4">
              <p>
                Não deixe de procurar atendimento especializado. A consulta com um hepatologista é fundamental para a prevenção e complicações mais graves.
              </p>
            </div>
          </div>
          <div className="w-auto h-full bg-white flex justify-center items-center">
            <h1>MAPA</h1>
          </div>
        </article>
      </div>
    </section>
  )
}