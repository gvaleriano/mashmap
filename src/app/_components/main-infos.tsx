import Image from "next/image";
import { RefObject } from "react";

interface SectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}
export function Causas({ sectionRef }: SectionProps){
  return(
    <section ref={sectionRef} className="text-blue-900 overflow-hidden">
      <div className="container mx-auto">
        <article className="flex flex-col items-center justify-between lg:flex-row md:flex-row sm:flex-col">
          <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 md:p-12">
              <h1 className="font-bold text-[40px]">Principais causas das doenças no fígado.</h1>
          </div>
        </article>
        <article className="flex flex-col items-center justify-between lg:flex-row md:flex-row sm:flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-12">
            <div className="flex flex-col border-1 border-[#D4ECFF] rounded-2xl p-8 space-y-4">
              <div className="bg-[#F1F9FF] w-[59px] h-[64px] flex items-center justify-center rounded-sm">
                <Image width={24} height={24} src={"/bala.svg"} alt="Lupa de pesquisar"></Image>
              </div>
              <h1 className="font-bold text-2xl">Pré-Diabetes e Diabetes</h1>
              <p className="font-normal">
                Condição em que o corpo não usa a insulina de forma eficaz, elevando os níveis de glicose no sangue.
                Aumenta o acúmulo de gordura no fígado e estimula processos inflamatórios.
              </p>
            </div>
            <div className="flex flex-col border-1 border-[#D4ECFF] rounded-2xl p-8 space-y-4">
              <div className="bg-[#F1F9FF] w-[59px] h-[64px] flex items-center justify-center rounded-sm">
                <Image width={24} height={24} src={"/balanca.svg"} alt="Lupa de pesquisar"></Image>
              </div>
              <h1 className="font-bold text-2xl">Obesidade e Sobrepeso</h1>
              <p className="font-normal">
                Excesso de gordura corporal, especialmente na região abdominal, que sobrecarrega os órgãos.
                O excesso de gordura corporal aumenta a infiltração de lipídios no fígado.
              </p>
            </div>
            <div className="flex flex-col border-1 border-[#D4ECFF] rounded-2xl p-8 space-y-4">
              <div className="bg-[#F1F9FF] w-[59px] h-[64px] flex items-center justify-center rounded-sm">
                <Image width={24} height={24} src={"/frasco.svg"} alt="Lupa de pesquisar"></Image>
              </div>
              <h1 className="font-bold text-2xl">Colesterol e Triglicerídeos Elevados</h1>
              <p className="font-normal">
                Níveis elevados de lipídios (gorduras) no sangue, resultantes de dieta inadequada ou problemas metabólicos.
                Lipídios em excesso no sangue favorecem o acúmulo de gordura no fígado.
              </p>
            </div>
            <div className="flex flex-col border-1 border-[#D4ECFF] rounded-2xl p-8 space-y-4">
              <div className="bg-[#F1F9FF] w-[59px] h-[64px] flex items-center justify-center rounded-sm">
                <Image width={24} height={24} src={"/pessoas.svg"} alt="Lupa de pesquisar"></Image>
              </div>
              <h1 className="font-bold text-2xl">Genética e Histórico Familiar</h1>
              <p className="font-normal">
                Predisposição hereditária para desenvolver doenças hepáticas.
                Pessoas com histórico familiar de doenças hepáticas têm maior risco de desenvolver a inflamação no fígado.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col items-center lg:flex-row md:flex-row sm:flex-col ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-16 md:p-12">
            <div className="bg-white flex justify-center items-center">
              <h1 className="font-bold text-[40px] leading-12 text-left">Se cuida! Consulte um médico para manter seu fígado saudável.</h1>
            </div>
            <div className="bg-white flex justify-center items-center">
              <p className="font-normal text-2xl leading-9">O tratamento começa com um <span className="font-bold">diagnóstico preciso e acompanhamento especializado</span>.</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Quais especialidades médicas você pode procurar?</p>
            </div>
          </div>
        </article>
        <article className="flex flex-col items-center lg:flex-row md:flex-row sm:flex-col ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 md:p-12">
            <div className="bg-(--background-secondary) flex p-8 flex-col gap-y-4 rounded-2xl">
              <div className="flex gap-4 flex-row">
                <div className="flex items-center justify-center bg-white p-4 rounded-sm">
                  <Image width={24} height={24} src={"/pulmao.svg"} alt="Médico"></Image>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="font-bold text-2xl leading-9">Endocrinologista</h1>
                </div>
              </div>
              <p className="text-lg leading-7 font-normal">
              Se você tem diabetes, pré-diabetes ou problemas hormonais, um endocrinologista é o especialista ideal. 
              Ele pode tratar condições metabólicas e ajudar no controle da glicose, do colesterol e dos triglicerídeos, 
              fatores diretamente relacionados à saúde do fígado.
              </p>
            </div>
            <div className="bg-(--background-secondary) flex p-8 flex-col gap-y-4 rounded-2xl">
              <div className="flex gap-4 flex-row">
                <div className="flex items-center justify-center bg-white p-4 rounded-sm">
                  <Image width={24} height={24} src={"/figado.svg"} alt="Médico"></Image>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="font-bold text-2xl leading-9">Hepatologista</h1>
                </div>
              </div>
              <p className="text-lg leading-7 font-normal">
                Para avaliação específica da saúde hepática, um hepatologista é o médico especializado no fígado. 
                Ele pode realizar exames mais detalhados, como ultrassonografia hepática, elastografia (para verificar a rigidez do fígado) 
                e biópsia hepática, se necessário. O hepatologista é o especialista no tratamento de doenças hepáticas, incluindo a esteatose e suas complicações.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}