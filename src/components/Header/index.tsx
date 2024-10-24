'use client'

import logoWhite from "../../../public/image/logo_white.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import { useImagemContext } from "@/contexts/contextFotoPerfil";
import { useDataLogin } from "@/contexts/contexUserLogin";

export default function Header(){
    const { dataLoginUser } = useDataLogin()
    const [ nickName , setNickName ] = useState<string>('******')
    useEffect(()=>{
        const getLogin = window.sessionStorage.getItem("login")
        SetPesquisa(getLogin);
    },[])

    useEffect(()=>{
        if (dataLoginUser) {
            setNickName(dataLoginUser.dataUser.nickName)
        }
    },[dataLoginUser])

    const { imagemAvatar } = useImagemContext()

    const [ Pesquisar , SetPesquisa ] = useState<string|null>(null)
    
    return (
        <>
        <header className="p-2 flex justify-between items-center bg-black shadow-principal shadow-lg">
            <Link href={"/"}>
                <Image 
                    src={logoWhite}
                    width={100}
                    alt="Logo do site"
                    className="w-32 md:w-48"
                />
            </Link>
            <div className="flex gap-5 items-center">
                <div>
                    <input placeholder="Pesquisar" name="C_pesqui" type="text" className="rounded-lg border-none placeholder:text-principal bg-white max-sm:hidden w-40"/>
                </div>
                <nav>
                    {(Pesquisar == null)? 
                    <Link href={"/login"} className="relative border-principal text-principal hover:text-white font-bold z-0 overflow-hidden border-2 rounded-lg px-2 py-1 animaButton flex items-center gap-2">
                        <FaUserLarge/>
                        <p>Entrar</p>
                    </Link>
                    :
                    <Link href={"/perfil"} className="flex items-center justify-between gap-1 border-2 rounded-lg max-w-[140px] px-1">
                        <Image
                            src={imagemAvatar}
                            alt="foto do perfil"
                            width={32}
                            className="rounded-full"
                        />
                        <p className="text-white font-mono">{nickName}</p>
                    </Link>}
                </nav>
            </div>
        </header>
        </>
    )
}