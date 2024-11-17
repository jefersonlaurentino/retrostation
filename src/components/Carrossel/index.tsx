'use client'

import { useEffect } from "react";
import Image from "next/image";
import { calculoDesconto, jogos } from "../funcoes" 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Carrossel() {
    const jogosDestaques = jogos.filter((jogo)=>jogo.destaques.includes('carrossel'))

    let index = 0

    useEffect(()=>{
        document.querySelectorAll(".slide")[0].classList.add("first")
        document.querySelectorAll("section label")[0].classList.add("bg-secundaria")
    },[])

    useEffect(()=>{
        const count = document.querySelectorAll(".slide")
        const inputs = document.querySelectorAll("input[type='radio']")
        const efeitoCarrossel = setInterval(()=>{
            const arraySlide = []
            count.forEach((el)=>arraySlide.push(el))
            
            if (index > arraySlide.length -2) {
                index = -1
            }
            index++
            efeitoAnimado(inputs[index], Number(inputs[index].id.slice(5)))
        },5000)

        return () => clearInterval(efeitoCarrossel)
    },[])

    const animaCarossel = (el: EventTarget , id:number) => {
        const inputs = document.querySelectorAll("input[type='radio']")
        const array: unknown[] = []
        inputs.forEach((ele)=>{
            array.push(ele)
            if (ele == el) {
                index = Number(array.indexOf(el))
                efeitoAnimado(el, id)
            }
        })
        
    }

    // animação das bolinhas
    const efeitoAnimado = (el: EventTarget , id:number) => {
        const inputs = document.querySelectorAll("input[type='radio']")
        const label = document.querySelectorAll("label")
        label.forEach((e)=>e.classList.remove("bg-secundaria"))
        const arrayInputs: unknown[] = []
        inputs.forEach((ev)=>{
            arrayInputs.push(ev);
            if (ev == el) {
                const valor = arrayInputs.indexOf(el)
                document.querySelectorAll(".slide")[0].setAttribute("style", `margin-left: -${valor*25}%;`)
                document.querySelector(`.label${id < 10 ? '0'+id : id }`)?.classList.add("bg-secundaria")
            }
        })
    }

    // controle setas
    const arrowCarrossel = (Element:EventTarget) =>{
        const count = document.querySelectorAll(".slide")
        const inputs = document.querySelectorAll("input[type='radio']")
        const arraySlide = []
        count.forEach((el)=>arraySlide.push(el))
        const arrows = document.querySelector(".div_arrow")!.children
        if (Element == arrows[0]) {
            if (index == 0) {
                index = arraySlide.length-1
            } else {
                index--
            }
        } else {
            if (index == arraySlide.length) {
                index = 0
            } else {
                index++
            }
        }

        if (inputs.length == arraySlide.length && index == inputs.length) {
            index = 0
        }
        efeitoAnimado(inputs[index], Number(inputs[index].id.slice(-1)))
    }
    

    return(
        <>
        <section className="md:w-tamanhoCarrossel w-80 m-auto mt-6 relative h-72 max-md:h-44">
            <div className="div_arrow flex justify-between w-full absolute top-1/2 -translate-y-1/2 text-5xl text-terciaria px-2 max-md:hidden">
                <IoIosArrowBack 
                    className="cursor-pointer" 
                    onClick={(element)=>arrowCarrossel(element.target)}
                />
                <IoIosArrowForward 
                    className="cursor-pointer" 
                    onClick={(element)=>arrowCarrossel(element.target)}
                />
            </div>
            <div className="md:w-10/12 w-full m-auto overflow-hidden relative rounded-xl">
                <div className="w-[400%] flex">
                    { jogosDestaques.map((jogo)=> jogo &&
                        <input 
                            key={jogo.id} 
                            type="radio" 
                            name="radio-btn" 
                            id={`radio${jogo.id}`} 
                            className="hidden" 
                            onClick={(value)=>animaCarossel(value.target , parseFloat(jogo.id))}
                        />)}
                    {jogosDestaques.map((jogo)=>jogo.banner &&
                        <Link 
                            href={`/produto/${jogo.titulo.toLocaleLowerCase()}`}
                            className="slide flex w-[25%] relative max-md:h-44 h-72 duration-1000" 
                            key={jogo.id}
                            >
                            <div className="w-1/2">
                                <Image
                                    width={150}
                                    height={150}
                                    src={jogo.banner}
                                    alt={`Banner do jogo ${jogo.titulo}`}
                                    priority
                                    className="w-full h-full"
                                    />
                            </div>
                            <div className="w-1/2 bg-black text-white flex flex-col justify-between pr-3 pb-4 font-semibold text-xl shadow-banner">
                                <h3 className="text-center mt-3">{jogo.titulo}</h3>
                                {jogo.promocao ? 
                                    <>
                                    <div className="flex flex-col items-end">
                                        <p className="mb-3">Em promoção</p>
                                        {jogo.valorAtual == "Grátis" ?
                                            <div className="text-2xl text-end">Grátis</div>
                                            :
                                            <>
                                            <div className="flex gap-2 text-base">
                                            <p className="bg-blue-700 px-1 ta rounded-xl text-white">
                                                {calculoDesconto(jogo.valorAnterior , jogo.valorAtual)}
                                            </p>
                                            <p className="line-through text-neutral-400">
                                                R$ {jogo.valorAnterior}
                                            </p>
                                        </div>
                                        <p className="text-end text-2xl">R$ {jogo.valorAtual}</p>
                                        </>
                                        }
                                    </div>
                                    </>
                                    :
                                    <div className="text-end">
                                        <p>Novo</p>
                                        <p className="text-2xl">R$ {jogo.valorAtual}</p>
                                    </div>
                                }
                            </div>
                        </Link>
                    )}
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 justify-center items-center">
                    {jogosDestaques.map((jogo)=>jogo && 
                        <label 
                            htmlFor={`radio${jogo.id}`} 
                            key={jogo.id} 
                            className={`label${jogo.id} border-2 p-1 rounded-full cursor-pointer duration-500 hover:bg-secundaria`} 
                        ></label>
                    )}
                </div>
            </div>
        </section>
        </>
    )
}