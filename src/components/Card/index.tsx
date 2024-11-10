'use client'

import Image from "next/image";
import React from "react";
import { calculoDesconto } from "../../components/funcoes"
import { useAgeContext } from "@/contexts/FaixaEtariaJogo";
import Link from "next/link";

type cardProps = {
    id: string;
    titulo: string;
    img: string;
    promocao?: boolean;
    faixaEtaria: string
    valorAnterior: string;
    valorAtual: string;
}

export default function Card(props:cardProps) {
    const { setIdadePermitida } = useAgeContext()

    return(
        <>
        <Link href={`/produto/${props.titulo.toLocaleLowerCase()}`}
        aria-label={`O jogo ${props.titulo} estar por ${props.valorAtual} ${(props.promocao)&& "em promoção não perca!"}`}
        onClick={()=>{
            setIdadePermitida(Number(props.faixaEtaria))}}
        >
            <div className="card relative bg-white min-w-40 w-40 md:min-w-48 hover:border-secundaria hover:scale-105 border-[3px] border-[#0E0A18] duration-300 rounded-xl before:bg-primaria after:bg-primaria dark:after:bg-dark dark:before:bg-dark before:border-black before:border-r-[3px] after:border-black h-full after:border-l-[3px]"
            >
                <div className="flex flex-col relative overflow-hidden">
                    <div className="img relative after:absolute after:content-['PS2'] after:bg-black after:text-white after:-right-7 after:top-1 after:px-8 after:text-sm after:rotate-45 after:shadow-sm after:shadow-neutral-400 rounded-t-lg overflow-hidden">
                        <Image
                            src={props.img}
                            height={70}
                            width={70}
                            alt="jogo"
                            className="w-full max-h-[180px] md:max-h-[230px]"
                        />
                        {props.promocao && <p className="absolute bottom-0 text-center w-full bg-blue-700 text-white text-lg">{props.promocao && props.valorAtual=="Grátis" ? "Grátis" : "Promoção"}</p>}
                    </div>
                    {props.promocao ? <article className="flex flex-col text-black py-1 h-full justify-around">
                        <h3 className="text-center text-xl font-bold line-clamp-1">{props.titulo}</h3>
                        <div className="flex gap-2 px-2 items-center justify-between md:px-3 font-semibold leading-none">
                            <p className="bg-blue-600 rounded-full px-2">{props.valorAtual != "Grátis" && calculoDesconto(props.valorAnterior,props.valorAtual)}</p>
                            <div>
                                <p className="line-through text-neutral-400 text-end">{`${(props.valorAtual != "Grátis") ? 'R$ '+props.valorAnterior : ""}`}</p>
                                <p className="text-end text-lg font-bold">{`${(props.valorAtual != "Grátis") ? 'R$ '+props.valorAtual : props.valorAtual}`}</p>
                            </div>
                        </div>
                    </article> : <article className="flex flex-col justify-around text-black py-1 h-full">
                        <h3 className="text-xl font-bold text-center line-clamp-2 leading-6">{props.titulo}</h3>
                        <div className="font-bold text-lg text-right pr-1">
                            <p>R$ {props.valorAtual}</p>
                        </div>
                    </article>}
                </div>
                </div>
            </Link>
        </>
    )
}