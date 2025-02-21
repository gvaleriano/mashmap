"use client"
import useEmblaCarousel from 'embla-carousel-react'
const infos = [
  {
    title: "1. Gordura no Fígado (Esteatose Hepática)",
    subTitle: "",
    subText: [
      "Fase inicial e silenciosa: na maioria dos casos, não há sintomas. Muitas pessoas só descobrem o problema por meio de exames de rotina.",
      "Se tratado a tempo, o quadro pode ser revertido com mudanças no estilo de vida. Caso contrário, pode evoluir para um estágio mais grave."
    ],
  },
  {
    title: "2. Inflamação no Fígado",
    subTitle: "Se a gordura acumulada no fígado causar inflamação e danos celulares, o quadro passa a ser chamado de MASH (Esteato-hepatite associada à disfunção metabólica).",
    subText:[
      "- O fígado começa a sofrer inflamação crônica, o que pode levar à destruição progressiva das células hepáticas.",
      "- O organismo responde a essa agressão com um processo de cicatrização.",
      "- Se a inflamação persistir, pode evoluir para fibrose hepática.",
      "Essa fase ainda é reversível, mas exige tratamento imediato para evitar complicações."
    ]
  },
  {
    title: "3. Fibrose Hepática",
    subTitle: "Quando a inflamação do fígado persiste, o órgão começa a formar cicatrizes no tecido, caracterizando a fibrose hepática.",
    subText:[
      "- O fígado tenta se regenerar, mas o processo de cicatrização prejudica seu funcionamento.",
      "- Com a progressão da fibrose, a circulação sanguínea no fígado fica comprometida.",
      "- Se não controlada, pode levar à cirrose hepática.",
      "Nessa fase, os sintomas podem se tornar mais evidentes: cansaço extremo, inchaço abdominal e alteração nos exames hepáticos.",
      "A fibrose pode ser controlada, mas requer acompanhamento médico rigoroso."
    ]
  },
  {
    title: "4. Cirrose Não Alcoólica",
    subTitle: "A cirrose hepática é o estágio mais avançado da doença hepática gordurosa, onde o fígado já está gravemente comprometido e não consegue mais exercer suas funções corretamente.",
    subText:[
      "- O fígado perde grande parte da sua capacidade de regeneração.",
      "- Ocorre um aumento do risco de insuficiência hepática e câncer de fígado.",
      "- Em casos graves, o único tratamento pode ser o transplante de fígado.",
      "Nessa fase, os danos já são irreversíveis, mas o tratamento pode retardar a progressão da doença.",
    ]
  },
]
export function Carroussel(){
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align:"start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width:768px)': { slidesToScroll: 3 },
    }
  })

  return(
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {infos.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-[478px] md:flex-[0_0_calc(100%/4)] px-3">
                  <article className="bg-(--background-secondary) text-blue-900 rounded-2xl p-6 space-y-4 h-[478px] flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="leading-9 text-2xl font-bold">{item.title}</h3>
                        <p className="leading-6 text-base">{item.subTitle}</p>
                        {index == 0 ? (<br/>) : (<p className="leading-6 text-base font-bold">O que acontece nessa fase?</p>)}
                        {item.subText.map((subitem, index) => (
                          <p key={index} className="leading-6 text-base">{subitem}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}