import { CalculadoraForm } from "@/components/calculator-form";
import Image from "next/image";

export function Calculadora(){
  return(
    <section className="bg-white text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative justify-center items-center md:p-12">
          <div className="flex flex-row space-x-10">
            <div className="bg-blue-900 w-12 h-12 flex items-center justify-center rounded-sm">
              <Image width={24} height={24} src={"/calculadora-white.svg"} alt="Calculadora FIB-4"></Image>
            </div>
            <h1 className="font-bold md:text-4xl text-[40px]">Calculadora FIB-4</h1>
          </div>
          <div className="space-y-12">
            <div>
              <p className="font-normal text-lg">
                Calcule aqui seus marcadores de sangue com a calculadora FIB-4.
              </p>
            </div>
          </div>
        </article>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-36 relative md:p-12 bg-(--background-secondary) rounded-2xl">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl leading-9">Como funciona?</h1>
            <p> - Insira seus dados nos campos indicados.</p>
            <p> - Receba um cálculo estimado do seu risco hepático.</p>
            <p> - Veja um feedback explicativo sobre o que seu resultado pode indicar.</p>
            <div className="bg-white space-y-4 rounded-2xl p-4">
              <h1 className="font-bold text-base leading-6">Importante!</h1>
              <p> - Este cálculo é uma ferramenta educativa e não substitui a avaliação médica..</p>
              <p> - Consulte um hepatologista para uma análise completa e acompanhamento adequado..</p>
            </div>
          </div>
          <div className="w-[481px] h-auto bg-white flex rounded-2xl">
            <CalculadoraForm/>
          </div>
        </article>
      </div>
    </section>
  )
}