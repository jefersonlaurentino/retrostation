'use client'
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { FaRegShareFromSquare } from "react-icons/fa6";
import React from "react";
import { tes } from "./funcoes";
import Campo, { nameJogos } from "./campo";

export default function ModalIdade({ jogo } : { jogo: string }) {
    
    return(
        <>
        <section className="flex h-screen items-center">
            <div className="w-11/12 md:w-1/2 m-auto">
                <div className="flex justify-center my-4">
                    <TbAlertOctagonFilled className="text-8xl"/>
                </div>
                <h1 className="text-4xl text-center">O conteúdo de {jogo} pode não ser adequado para todas as idades.</h1>
                <p className="text-lg msg_padrao">Para continuar, forneça sua data de nascimento. Veja nossa <Link href={"/"} className="underline text-cyan-600">Política de privacidade <FaRegShareFromSquare className="inline-flex"/></Link></p>
                <p className="text-lg my-9 text-red-700 msg_recusado hidden text-center">Desculpe, mas você não pode acessar este conteúdo.</p>
                <div className="div_idades flex gap-3 my-5 max-w-[1000px] m-auto justify-between">
                    <div className="dia campos_idade w-1/3 relative">
                        <button className="relative border-2 border-black w-full rounded-md p-1" onClick={(e)=>tes(e.target)}>
                            <div className="flex items-center justify-between">
                                <p className="text-left">
                                    DD
                                </p>
                                <div className="relative before:content-[''] before:bg-neutral-900 before:h-[150%] before:w-[1px] before:absolute before:-top-1 before:-left-1">
                                    <IoIosArrowDown className="arrow duration-300"/>
                                </div>
                            </div>
                        </button>
                        <div className="list absolute bg-neutral-700 w-full rounded-lg bottom-[110%] max-h-40 overflow-x-hidden hidden">
                        </div>
                        <div className="click absolute h-full w-full top-0 left-0 cursor-pointer" onClick={(e)=>tes(e.target)}></div>
                    </div>

                    <div className="mes campos_idade w-1/3 relative">
                        <button className="relative border-2 border-black w-full rounded-md p-1" onClick={(e)=>tes(e.target)}>
                            <div className="flex items-center justify-between">
                                <p className="text-left">
                                    MM
                                </p>
                                <div className="relative before:content-[''] before:bg-neutral-900 before:h-[150%] before:w-[1px] before:absolute before:-top-1 before:-left-1">
                                    <IoIosArrowDown className="arrow duration-300"/>
                                </div>
                            </div>
                        </button>
                        <div className="list absolute bg-neutral-700 w-full rounded-lg bottom-[110%] max-h-40 overflow-x-hidden hidden">
                        </div>
                        <div className="click absolute h-full w-full top-0 left-0 cursor-pointer" onClick={(e)=>tes(e.target)}></div>
                    </div>

                    <div className="ano campos_idade w-1/3 relative">
                        <button className="relative border-2 border-black w-full rounded-md p-1" onClick={(e)=>tes(e.target)}>
                            <div className="flex items-center justify-between">
                                <p className="text-left">
                                    AAAA
                                </p>
                                <div className="relative before:content-[''] before:bg-neutral-900 before:h-[150%] before:w-[1px] before:absolute before:-top-1 before:-left-1">
                                    <IoIosArrowDown className="arrow duration-300"/>
                                </div>
                            </div>
                        </button>
                        <div className="list absolute bg-neutral-700 w-full rounded-lg bottom-[110%] max-h-40 overflow-x-hidden hidden">
                        </div>
                        <div className="click absolute h-full w-full top-0 left-0 cursor-pointer" onClick={(e)=>tes(e.target)}></div>
                    </div>
                </div>
                <Campo/>
            </div>
        </section>
        </>
    )
}