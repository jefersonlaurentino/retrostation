'use client'

import Button from "@/components/Button";
import CampoInput from "@/components/CampoInput";
import Header from "@/components/Header";
import React from "react";
import { VscEdit } from "react-icons/vsc";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useForm } from "react-hook-form"
import Modal from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useImagemContext } from "@/contexts/contextFotoPerfil";
import localFont from "next/font/local";
const designer = localFont({src:"../fonts/designer.otf"})

export default function Perfil() {
    const { imagemAvatar } = useImagemContext()

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

    // function getSessionStorageSize() {
    //     // let sessionStorage = window.sessionStorage
    //     let total = 0;
    //     for (let item in sessionStorage) {
    //       if (sessionStorage.hasOwnProperty(item)) {
    //         total += sessionStorage.getItem(item)!.length;
    //       }
    //     }
    //     // O tamanho é calculado em caracteres, vamos converter para KB
    //     return (total / 1024).toFixed(2); // Retorna em KB
    //   }
      
    //   console.log("Tamanho do sessionStorage usado: " + getSessionStorageSize() + " KB");

    return(
        <>
        <Header/>
        <main className="flex flex-col items-center md:flex-row max-w-5xl m-auto">
            <Modal/>
            <aside className="flex flex-col md:w-1/4 mt-8 pl-2">
                <div className="foto_perfil relative flex justify-center max-h-52 mb-7">
                    <div className="w-44 h-44 rounded-full drop-shadow-xl overflow-hidden shadow-green-500">
                        <Image
                            src={imagemAvatar}
                            alt="imagen do seu avatar"
                            width={150}
                            className="w-full"
                        />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 text-2xl border border-black cursor-pointer">
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

            <section className=" flex flex-col justify-center w-full md:items-center md:w-3/4 md:min-h-[calc(100vh-70px)] p-2">
                <h1 className={`${designer.className} text-center my-8 text-3xl`}>SEU PERFIL</h1>
                <form onSubmit={handleSubmit(handleSubmitData)}>
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
            </section>
        </main>
        </>
    )
}