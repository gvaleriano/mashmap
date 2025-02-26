import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-(--background-secondary) text-blue-900 relative overflow-hidden">
      <div className="container mx-auto p-12 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
        <section className="w-full sm:w-auto">
          <div className="text-sm space-y-1">
            <h1 className="font-bold">NOVO NORDISK BRASIL</h1>
            <p>Av. Francisco Matarazzo, 1350, 1º andar, Torre II</p>
            <p>Água Branca, 05001 100 São Paulo, SP, Brasil</p>
            <p>Telefone: +55 11 3868 9100</p>
            <p>CNPJ: 82.277.955/0001-55</p>
          </div>
        </section>
        <section className="w-full sm:w-auto">
          <div className="w-full flex flex-col">
            <h1 className="font-bold text-sm">LINKS ÚTEIS</h1>
            <Link href={'/'}>Fale conosco</Link>
            <Link href={'/'}>Relate uma reclamação ou efeito adverso</Link>
            <Link href={'/'}>Notícias e Imprensa</Link>
            <Link href={'/'}>Quem Vê Diabetes Vê Coração</Link>
            <Link href={'/'}>Bulas</Link>
            <Link href={'/'}>Programa Novo Dia</Link>
            <Link href={'/'}>Meu Peso, Minha Jornada</Link>
            <Link href={'/'}>Fornecedores na Novo Nordisk Brasil</Link>
          </div>
        </section>
        <section className="w-full sm:w-auto">
          <div className="w-full flex flex-col">
            <h1 className="font-bold text-sm">SIGA A NOVO NORDISK</h1>
            <Link href={'/'}>Linkedin</Link>
            <Link href={'/'}>YouTube</Link>
            <Link href={'/'}>Facebook</Link>
            <Link href={'/'}>X (Twitter)</Link>
            <Link href={'/'}>Instagram</Link>
            <Link href={'/'}>Spotify</Link>
          </div>
        </section>
        <section className="w-full sm:w-auto">
          <div className="w-full flex flex-col">
            <h1 className="font-bold text-sm">OUTROS ESCRITÓRIOS</h1>
            <span>Selecione o país</span>
          </div>
        </section>
      </div>
      <div className="container mx-auto p-12 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-items-start gap-36 items-center">
        <section className="w-full sm:w-auto">
            <div className="text-sm space-y-1">
              <span>© Novo Nordisk Brasil</span>
            </div>
        </section>
        <section className="w-full sm:w-auto">
            <div className="text-sm space-y-1">
              <span>Política de privacidade </span>
            </div>
        </section>
      </div>
    </footer>
  );
}
