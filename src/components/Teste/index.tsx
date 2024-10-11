"use client"

import Link from "next/link"
import Button from "../Button"
import CampoInput from "../CampoInput"

export default function Teste() {
    
    return(
        <>
        <form onSubmit={()=>alert("ola")} className="p-3 flex flex-col justify-between w-full md:w-2/5">
            <h1 className="text-center text-2xl">Login</h1>
            <div className="flex flex-col gap-3">
                <CampoInput type="text" placeholder="E-mail" name="email" style="placeholder:text-black"/>
                <CampoInput type="password" placeholder="Senha" name="email" style="placeholder:text-black" msg/>
            </div>
            <div>
                <div className="w-full mt-3">
                    <div className="w-2/3 bg-gray-600 h-16 m-auto"></div>
                </div>
                <div className="flex justify-end my-2">
                    <Link href={"/cadastro"} className="">Esqueceu a senha?</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <Button type="submit" style="bg-blue-600 text-white">Entrar</Button>
                    <Link href={"/cadastro"} className="bg-red-600 text-center text-lg text-white font-bold py-1 rounded-lg">Criar conta</Link>
                </div>
            </div>
        </form>
        </>
    )
}