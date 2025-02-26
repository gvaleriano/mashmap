import Image from "next/image";
import Link from "next/link";

export function Header(){
  return(
    <header>
      <div className="container mx-auto px-12 py-4 flex text-blue-900 justify-between items-center">
        <div className="px-12">
          <Image width={72} height={48} alt="Novo Nordisk Logo" src={"./logo-nordisk.svg"}></Image>
        </div>
        <nav className="flex-1">
          <ul className="flex items-center justify-center gap-6">
            <li><Link href="/">Esteatose hepática</Link></li>
            <li><Link href="/">Complicações</Link></li>
            <li><Link href="/">Como detectar</Link></li>
            <li><Link href="/">Clínicas e Laboratórios</Link></li>
            <li><Link href="/">Calculadora FIB-4</Link></li>
            <li><Link href="/">Fatores de Risco</Link></li>
            <li><Link href="/">Quem trata</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}