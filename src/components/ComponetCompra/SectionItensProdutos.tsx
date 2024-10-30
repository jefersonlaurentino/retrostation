'use client'
import { verificaFaixaEtaria } from "@/contexts/FaixaEtariaJogo";
import { FaRegTrashAlt } from "react-icons/fa";
import { calculoDesconto } from "../funcoes";
import Image from "next/image";
import React from "react";
import { dataJogoProps, tamanhoCard } from "./funcoesPageComprar";
import { jogos } from '../../components/funcoes/index'
import { useEffect, useState } from 'react';
import TelaComprar from "./TelaComprar";

export type inforCart = {
        valorDesconto: number,
        totalItems: number,
        valorTotal: number,
        arrayJogos: string,
    }

export default function SectionItensProdutos() {
    const [ arrayCartJogos , setArrayCartJogos] = useState<Array<dataJogoProps>>();
    const [ inforValueCart , setInforValueCart ] = useState<inforCart | undefined>()
    const [ reloudCart , setReloudCart ] = useState<boolean>(false)
    let getListJogos: string[];
    useEffect(()=>{
        const getCart = window.sessionStorage.getItem('cart')
        getListJogos = JSON.parse(getCart!)
        if (getCart) {
            setArrayCartJogos(jogos.filter(jogo => getListJogos.includes(jogo.id)))
        }
        
        window.addEventListener('resize', tamanhoCard)
        setTimeout(tamanhoCard,80)
        setReloudCart(true)
    },[])

    const valorApagar = () =>{
            const jogoPromo = arrayCartJogos!.filter((j)=>j.promocao===true)
            let valorDesconto: number=0;
            const arrayIdJogos:string[]=[];
            let valueJogos = 0
            if (jogoPromo) {
                jogoPromo.map((j)=>{
                    valorDesconto+=(parseFloat(j.valorAnterior.replace(/,/g,'.'))-parseFloat(j.valorAtual.replace(/,/g,'.')))
                })
            } 
            
            arrayCartJogos?.forEach(j=>{
                valueJogos += parseFloat(j.valorAnterior.replace(/,/g,'.'))
            });
            arrayCartJogos?.forEach((jogo)=>arrayIdJogos.push(jogo.id))
            const re:inforCart = { valorDesconto , totalItems: arrayCartJogos!.length , valorTotal: valueJogos , arrayJogos: JSON.stringify(arrayIdJogos)}
            
            setInforValueCart(re)
        }

        const removeJogo = (evt: React.MouseEvent<HTMLButtonElement>) =>{
            const buttonClick = evt.currentTarget.parentNode?.parentNode?.parentNode
            const cardJogo =  buttonClick as HTMLDivElement
            setArrayCartJogos(arrayCartJogos?.filter(j=>j.id != cardJogo.id))
            
            tamanhoCard()
        }

        useEffect(()=>{
            if (arrayCartJogos){
                if (arrayCartJogos.length <= 0) {
                    window.sessionStorage.removeItem('cart')
                    setArrayCartJogos(undefined)
                    return
                }
                const arrayIdJogos:string[]=[]
                arrayCartJogos?.filter((jogo)=>arrayIdJogos?.push(jogo.id))
                window.sessionStorage.setItem('cart', JSON.stringify(arrayIdJogos))
                window.sessionStorage.setItem('comprasCarrinho', JSON.stringify(arrayIdJogos))
                valorApagar() 
            }
        },[arrayCartJogos])

    return(
        <>
        <section className='flex gap-2 max-md:flex-col max-h-[calc(100vh-48px)]'>
            <div className="max-sm:h-3/5 md:w-3/4 pb-2 overflow-x-hidden">
            <div className="flex max-sm:flex-col sm:flex-wrap gap-3 px-4 w-full">
                { reloudCart ?
                    (arrayCartJogos ?
                        (arrayCartJogos!.map((jogo)=>
                            <article
                                key={jogo.id} 
                                id={jogo.id}
                                className='car flex flex-grow border-2 rounded-md md:max-w-96 overflow-hidden'>
                                <div className="w-28">
                                    <Image
                                        src={jogo.banner}
                                        alt="jogo"
                                        width={80}
                                        height={80}
                                        priority
                                        className="w-full h-full"
                                    />
                                </div>
                                <section className='flex flex-col gap-1 justify-between p-2 w-3/4'>
                                    <div className='flex flex-col md:flex-row justify-between w-full'>
                                        <h2>{jogo.titulo}</h2>
                                    </div>
                                    <div className="text-right">
                                        {jogo.promocao == true ? 
                                            <>
                                                <div className="flex gap-2 justify-end leading-tight">
                                                    <p className='bg-blue-600 text-white rounded-full px-1'>{calculoDesconto(jogo.valorAnterior, jogo.valorAtual)}</p>
                                                    <p className='line-through text-neutral-500'>R${jogo.valorAnterior}</p>
                                                </div>
                                                <p className="font-semibold">R${jogo.valorAtual}</p> 
                                            </>
                                        : <p className="font-semibold">R$ {jogo.valorAtual}</p>
                                        }
                                    </div>

                                    <div className='flex gap-3 justify-between items-end'>
                                        <div className='inline-flex border-2 rounded-md overflow-hidden'>
                                            <Image 
                                                src={verificaFaixaEtaria(jogo.faixaEtaria)}
                                                alt='faixa etaria'
                                                width={50}
                                                height={50}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <button
                                            onClick={(e)=>removeJogo(e)} 
                                            className='flex gap-1 items-center'><FaRegTrashAlt /> remover</button>
                                    </div>
                                </section>
                            </article>
                        ))
                        :
                        <div>desculpa sem items no carrinho</div>
                    )
                    : 
                    <div>carregando....</div>
                }
            </div>
            </div>
            {arrayCartJogos != undefined &&
            <TelaComprar data={inforValueCart}/>
            }
        </section>
        </>
    )
}