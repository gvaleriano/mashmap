import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SectionProps {
  scrollToSection: () => void;
}

export function Hero({ scrollToSection }: SectionProps) {
  return (
    <section className="text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative justify-center items-center md:p-12">
          <div className="space-y-12">
            <h1 className="font-bold md:text-4xl text-[32px]">
              A saúde do seu fígado importa!
            </h1>
            <p className="font-normal text-2xl leading-9">
              Não deixe a gordura no fígado (esteatose hepática) evoluir para formas mais graves, como fibrose e cirrose.
              Entenda os riscos e descubra como proteger a sua saúde!
            </p>
            <Button
              className="w-44 h-14 py-4 px-6 bg-blue-900 text-white rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]"
              onClick={scrollToSection}
            >
              Saiba Mais
              <Image
                alt="Saiba Mais"
                src={"/icon-saiba-mais.svg"}
                width={32}
                height={32}
              />
            </Button>
          </div>
          <div>
            <Image
              width={587}
              height={429}
              src={"/hero-logo.svg"}
              alt="Imagem do figado com informações se está: Normal? Fibrose Avançada? Esteatose simples?"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
