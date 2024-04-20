import Image from "next/image";
import Link from "next/link";

import { GridContainer } from "./grid";
import LogoImg from "/public/Logo.svg";
import SearchImg from "/public/icon-search.svg";
import UserImg from "/public/icon-user.svg";

export function Header() {
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer>
        <Image src={LogoImg} alt="logo" />
        <div>
          <nav>
            <Link href="#">Inicio</Link>
            <Link href="#">Beneficios</Link>
            <Link href="#">Pra quem e o curso</Link>
            <Link href="#">Precos promocionais</Link>
            <Link href="#">Sobre Nos</Link>
          </nav>
          <div>
            <button>
              <Image src={SearchImg} alt="SearchIcon" />
            </button>
            <button>
              <Image src={UserImg} alt="UserImg" />
              <span>Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
