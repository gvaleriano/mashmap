import Image from "next/image";
import Link from "next/link";

export function Header(){
  return(
    <header className="w-full flex text-blue-900 py-6 px-64 justify-between items-center">
      <div className="w-1/6">
        <Image width={72} height={48} alt="Novo Nordisk Logo" src={"./logo-nordisk.svg"}></Image>
      </div>
      <nav className="flex-1">
        <ul className="flex justify-between gap-4">
          <li><Link href="/">Esteatose hepática</Link></li>
          <li><Link href="/">Complicações</Link></li>
          <li><Link href="/">Como detectar</Link></li>
          <li><Link href="/">Clínicas e Laboratórios</Link></li>
          <li><Link href="/">Calculadora FIB-4</Link></li>
          <li><Link href="/">Fatores de Risco</Link></li>
          <li><Link href="/">Quem trata</Link></li>
        </ul>
      </nav>
    </header>
  )
}