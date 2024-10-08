'use client'

import Button from "@/components/Button";
import CampoInput from "@/components/CampoInput";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useForm } from "react-hook-form"
import Modal from "@/components/Modal";
import Image from "next/image";
import sem from "../../../public/image/avatares/sem.jpg"
import Link from "next/link";

export default function Perfil() {
    const [ fotoPerfil , setFotoPerfil ] = useState(sem)

    useEffect(()=>{
        setFotoPerfil(sem)
    },[])

    const { register, handleSubmit, formState } = useForm({
        mode: "onBlur",
    });

    const {errors} = formState;

    console.log("erros",errors);
    
    
    const handleSubmitData = (data: object) => {
        console.log("submit",data)
    }

    const modal = () =>{
        document.querySelector('.modal')?.classList.remove("hidden")
        document.querySelector('body')!.setAttribute("style","overflow: hidden;")
    }

    return(
        <>
        <Header fotoPerfil={fotoPerfil}/>
        <main className="flex flex-col md:flex-row max-w-5xl m-auto">
            <Modal setFotoPerfil={setFotoPerfil}/>
            <aside className="flex flex-col md:w-1/4 mt-8 pl-2">
                <div className="foto_perfil relative flex justify-center max-h-52 mb-7">
                    <div className="w-44 h-44 rounded-full bg-blue-700 overflow-hidden">
                        <Image
                            src={fotoPerfil}
                            alt="imagen do seu avatar"
                            width={150}
                            className="w-full"
                        />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 text-2xl border border-black">
                        <VscEdit onClick={modal}/>
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    <Link href="/" onClick={()=>window.sessionStorage.removeItem("login")} className="flex items-center gap-2  border-2 p-2 rounded-lg">
                        <HiMiniArrowRightOnRectangle className="text-2xl"/>
                        <p>Sair da Conta</p>
                    </Link>
                </div>
                <p className="max-md:hidden">Este site não armazena nenhum dado pessoal. Insira informações válidas para uma melhor experiência.</p>
            </aside>

            <form onSubmit={handleSubmit(handleSubmitData)} className="w-full md:w-3/4 md:min-h-[calc(100vh-70px)] md:items-center flex flex-col justify-center p-2">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex max-md:flex-col gap-3">
                        <CampoInput name="nome" type="text" register={register("name")} placeholder="Nome:" msg style="pr-5"><HiMiniArrowRightOnRectangle className="absolute top-1/2 right-0 -translate-y-1/2"/></CampoInput>
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">Nick:</label>
                            <input {...register("nink")} type="text" placeholder="Jotta" className="border-2"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col gap-3">
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">E-mail:</label>
                            <input type="text" name="" id="" placeholder="jefersonlaurentino@teste.com" className="border-2"/>
                        </div>
                        
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">Idade:</label>
                            <input type="text" name="" id="" placeholder="14" className="border-2"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col gap-3">
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">CPF:</label>
                            <input type="text" name="" id="" placeholder="700.357.314-86" className="border-2"/>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">Celular:</label>
                            <input type="text" name="" id="" placeholder="(84) 98722-1172" className="border-2"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:gap-3">
                        <div className="flex flex-col md:w-1/3">
                            <label htmlFor="">Cep:</label>
                            <input type="text" name="" id="" placeholder="59245-000" className="border-2"/>
                        </div>
                        <div className="flex flex-col md:w-1/3">
                            <label htmlFor="">Endereço:</label>
                            <input type="text" name="" id="" placeholder="Rua Wanderley Agra de Azevedo" className="border-2"/>
                        </div>
                        <div className="flex flex-col md:w-1/3">
                            <label htmlFor="">N:</label>
                            <input type="text" name="" id="" placeholder="34" className="border-2"/>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:gap-3">
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">Trocar senha:</label>
                            <input type="text" name="" id="" placeholder="Rua Wanderley Agra de Azevedo" className="border-2"/>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="">Digite a senha novamente:</label>
                            <input type="text" name="" id="" placeholder="34" className="border-2"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center gap-4 pt-7 pb-2">
                    <Button style="bg-neutral-600 text-white">Cancelar</Button>
                    <Button type="submit" style="bg-blue-700 text-white">Salvar</Button>
                </div>
            </form>
        </main>
        </>
    )
}