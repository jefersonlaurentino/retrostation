'use client'

import { useParams } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { FaRegShareFromSquare } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useAgeContext } from "@/contexts/FaixaEtariaJogo";
import { useRouter } from "next/navigation";

let dia = 0
const Mes = 12
let anoBix = true

const dias = () => {
    const campodia = document.querySelector(".dia .list")! as HTMLDivElement
    
    campodia.innerHTML = ""
    if (dia == 0) {
        dia = 31
    }
    const arrayDias:string[] = []
    arrayDias.push("DD")
    for (let i = 1; i <= dia; i++) {
        arrayDias.push(String(i < 10 ? `0${i}` : i))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>buttonTes(e.target!))
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const mes = () => {
    const campodia = document.querySelector(".mes .list")! as HTMLDivElement
    campodia.innerHTML = ""
    const arrayDias:string[] = []
    arrayDias.push("MM")
    for (let i = 1; i <= Mes; i++) {
        arrayDias.push(String(i < 10 ? `0${i}` : i))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>{
            escolheMes(e.target!)
            buttonTes(e.target!)
        })
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const escolheMes = (mes:EventTarget) => {
    const Mes = mes as HTMLDivElement
    const mesSelect = parseInt(Mes.textContent!)
    const campoDia = document.querySelector(".dia")

    if ([1, 3, 5, 7, 8, 10, 12].includes(mesSelect)) {
        dia = 31
    } else if ([4 , 6 , 9, 11].includes(mesSelect)){
        dia = 30
        if (campoDia!.firstChild!.firstChild!.firstChild!.textContent == "31") {
            document.querySelector(".dia p")!.textContent = "DD"
        }
    } else {
        console.log(parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 29 && anoBix && mesSelect == 2);

        console.log(parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 29);
        console.log(anoBix);
        console.log(mesSelect == 2);
        
        
        if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 29 && anoBix && mesSelect == 2) {
            dia = 29
            if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 30) {
                document.querySelector(".dia p")!.textContent = "DD"
            }
        } else {
            if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 28 && mesSelect== 2 && !anoBix){
                dia = 28  
                document.querySelector(".dia p")!.textContent = "DD"
            } else{
                dia = 29
            }
        }
    }
}

const anoBissexto = (ano :EventTarget) => {
    const mes = document.querySelector(".mes p")
    const anoSelect = ano as HTMLDivElement
    const anos = parseFloat(anoSelect.textContent!)
        
    if ((anos % 4 == 0 && anos % 100 != 0 ) || (anos % 400 == 0)) {
        anoBix = true
        
        if (mes!.textContent == "02") {
            if (dia > 29) {
                document.querySelector(".dia p")!.textContent = "DD"
            } 
            dia = 29
        }
    } else {
        if (dia >= 29 && mes?.textContent == "02") {
            dia = 28
        }
        if (Number(document.querySelector(".dia p")?.textContent)> 28 && mes?.textContent == "02") {
            document.querySelector(".dia p")!.textContent = "DD"
        }
        anoBix = false
        
    }
}

const ano = () => {
    const campodia = document.querySelector(".ano .list")! as HTMLDivElement

    campodia.innerHTML = ""
    const arrayDias:string[] = []
    arrayDias.push("AAAA")
    for (let i = 2024; i >= 1900; i--) {
        arrayDias.push(String( i ))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>{
            anoBissexto(e.target!)
            buttonTes(e.target!)
        })
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const buttonTes = (evt:EventTarget) =>{
    const button = evt as HTMLDivElement   

    // que bem feito :) KKKK
    const valueP = button.parentNode?.parentNode?.parentNode?.parentNode as HTMLDivElement
    // chega de tantos parentNode!!!!!
    
    document.querySelector(`.${valueP.classList[0]} p`)!.textContent = button.textContent

    tes(valueP.firstChild as EventTarget)   
}

const tes = (evt:EventTarget) => {
    let e = evt as HTMLDivElement
    e = e.parentNode as HTMLDivElement

    const list = document.querySelector(`.${e.classList[0]} .list`)?.classList.contains("hidden")
    if (list) {
        if (e.classList.contains('dia')) {
            dias()
        }
        if (e.classList.contains('mes')) {
            mes()
        }
        if (e.classList.contains('ano')) {
            ano()
        }

        const listCampo = document.querySelectorAll(`.list`)
        listCampo.forEach( ev => {
            ev.classList.add("hidden")
            const seta = ev.parentNode as HTMLDivElement
            
            document.querySelector(`.${seta.classList[0]} .arrow`)?.classList.remove("anima_arrow")
        })
        document.querySelector(`.${e.classList[0]} .list`)?.classList.remove("hidden")
        document.querySelector(`.${e.classList[0]} .arrow`)?.classList.add("anima_arrow")
    } else {
        document.querySelector(`.${e.classList[0]} .arrow`)?.classList.remove("anima_arrow")
        document.querySelector(`.${e.classList[0]} .list`)?.classList.add("hidden")
    }
}

const camposPreenchidos = () => {
    const Dia = document.querySelectorAll('.campos_idade p')[0] as HTMLDivElement
    const Mes = document.querySelectorAll('.campos_idade p')[1] as HTMLDivElement
    const Ano = document.querySelectorAll('.campos_idade p')[2] as HTMLDivElement
    
    if (Dia.getAttribute("data-preenchido") && Mes.getAttribute("data-preenchido") && Ano.getAttribute("data-preenchido")) {
        console.log(true);
        return true
        
    } else {
        console.log(false);
        return false   
    }
}



export default function Idade() {
    const { idadePermitida , setIdadePermitida } = useAgeContext()
    const router = useRouter()
    const calcularIdade = () => {
        const idade = camposPreenchidos()
        if (idade) {
            const Dia = document.querySelectorAll('.campos_idade p')[0] as HTMLDivElement
            const Mes = document.querySelectorAll('.campos_idade p')[1] as HTMLDivElement
            const Ano = document.querySelectorAll('.campos_idade p')[2] as HTMLDivElement
            
            const dataNascimento = new Date(`${Number(Ano.textContent)},${Number(Mes.textContent)},${Number(Dia.textContent)}`)
            const dataHoje = new Date()

            const anoNascimento = dataHoje.getFullYear() - dataNascimento.getFullYear();
            const mesNascimento = dataHoje.getMonth() - dataNascimento.getMonth();
            const diaNascimento = dataHoje.getDate() - dataNascimento.getDate();

            // Verifica se já tem a idade recomendade
            if (anoNascimento > idadePermitida || (anoNascimento === idadePermitida && (mesNascimento > 0 || (mesNascimento === 0 && diaNascimento >= 0)))) {
                const idJogo = window.sessionStorage.getItem("jogo")
                router.push(`/produto/${idJogo}`)
                window.sessionStorage.setItem("idade", anoNascimento.toString())
            } else {
                window.sessionStorage.setItem("idade", (anoNascimento -1).toString())
                document.querySelector(".msg_recusado")?.classList.remove("hidden")
                document.querySelector(".msg_padrao")?.classList.add("hidden")
                document.querySelector(".div_idades")?.classList.add("hidden")
                document.querySelector(".entrar")?.classList.add("hidden")
            }
        }
    }

    const params = useParams()
    const nameParams = params.name as string
    const nameJogo = nameParams.replace(/[-]/g," ")

    const [ idadeSto, setIdadeSto] =useState< number >(0)

    

useEffect(()=>{
    
    const idadeStor = window.sessionStorage.getItem("idade")
    const idadePermitidaSet = window.sessionStorage.getItem("idadePermitida")

    if (idadePermitidaSet) {
        setIdadePermitida(Number(idadePermitidaSet))
    }
    
    if (idadeStor != null) {
        setIdadeSto(Number(idadeStor))
    }

    if (idadeSto != 0 && idadeSto < idadePermitida) {
        console.log("entrou if");
        document.querySelector(".msg_recusado")?.classList.remove("hidden")
        document.querySelector(".msg_padrao")?.classList.add("hidden")
        document.querySelector(".div_idades")?.classList.add("hidden")
        document.querySelector(".entrar")?.classList.add("hidden")
    }
        
    


    const elementsToObserve = [
        document.querySelectorAll('.campos_idade p')[0],
        document.querySelectorAll('.campos_idade p')[1],
        document.querySelectorAll('.campos_idade p')[2],
    ];
        // Verifique se os elementos existem
        const validElements = elementsToObserve.filter(el => el !== null);
        
        if (validElements.length > 0) {
            const config = {
                childList: true,
                characterData: true
            };
        
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    
                    const campo = mutation.target as HTMLDivElement
                    campo.setAttribute("data-preenchido","true")
                    if (mutation.target.textContent == "DD" || mutation.target.textContent == "MM" || mutation.target.textContent == "AAAA") {
                        const campo = mutation.target as HTMLDivElement
                        campo.removeAttribute("data-preenchido")
                        
                        const buttonEnviar = camposPreenchidos()
                        if (buttonEnviar) {
                            document.querySelector(".entrar")?.classList.add("button_verificar_idade_true")
                            document.querySelector(".entrar")?.classList.remove("button_verificar_idade")
                            
                        } else {
                            document.querySelector(".entrar")?.classList.remove("button_verificar_idade_true")
                            document.querySelector(".entrar")?.classList.add("button_verificar_idade")
                        }
                    } else {
                        const buttonEnviar = camposPreenchidos()
                        if (buttonEnviar) {
                            document.querySelector(".entrar")?.classList.add("button_verificar_idade_true")
                            document.querySelector(".entrar")?.classList.remove("button_verificar_idade")
                        } else {
                            document.querySelector(".entrar")?.classList.remove("button_verificar_idade_true")
                        }
                    }
                });
            });
        
            // Observa cada elemento válido
            validElements.forEach(element => {
                observer.observe(element!, config);  // O "!" garante que o tipo é um Node
            });
        } else {
            console.error("Nenhum elemento válido encontrado para observar.");
        }
        
    },[])

    useEffect(()=>{
        if (idadeSto != 0 && idadeSto < idadePermitida) {
            console.log("entrou if");
            document.querySelector(".msg_recusado")?.classList.remove("hidden")
            document.querySelector(".msg_padrao")?.classList.add("hidden")
            document.querySelector(".div_idades")?.classList.add("hidden")
            document.querySelector(".entrar")?.classList.add("hidden")
        }
    },[idadeSto])
    
    return(
        <>
        <section className="flex h-screen items-center">
            <div className="w-11/12 md:w-1/2 m-auto">
                <div className="flex justify-center my-4">
                    <TbAlertOctagonFilled className="text-8xl"/>
                </div>
                <h1 className="text-4xl text-center">O conteúdo de {nameJogo} pode não ser adequado para todas as idades.</h1>
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
                <div className="flex flex-col w-10/12 md:w-1/2 m-auto gap-3">
                <Button style="entrar button_verificar_idade text-white" f_function={calcularIdade}>Continuar</Button>
                <Link href={"/"} className="bg-neutral-400 text-center font-semibold text-lg rounded-lg py-1">Voltar para a página da store</Link>
                </div>
            </div>
        </section>
        </>
    )
}