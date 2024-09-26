import logoWhite from "../../../public/image/logo_white.png";
import Link from "next/link";
import CampoInput from "../CampoInput";
import { useState } from "react";
import Image from "next/image";

export default function Header(){

    const [ Pesquisar , SetPesquisa ] = useState<string>("")
    
    return (
        <>
        <header className="p-2 flex justify-between items-center bg-black shadow-principal shadow-lg">
            <div>
                <Image 
                    src={logoWhite}
                    width={100}
                    alt="Logo do site"
                    className="w-32 md:w-48"
                />
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <CampoInput placeholder="Pesquisar" name="C_pesqui" type="text" style="rounded-lg border-none placeholder:text-principal bg-white max-sm:hidden" funcaoChan={(value:string)=>SetPesquisa(value)} value={Pesquisar}/>
                </div>
                <nav>
                    <Link href={"/login"} className="relative block  border-principal text-principal hover:text-white font-bold z-0 overflow-hidden border-2 rounded-lg px-2 py-1 animaButton">ENTRAR</Link>
                </nav>
            </div>
        </header>
        </>
    )
}