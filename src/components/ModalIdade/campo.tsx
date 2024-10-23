'use client'

import { useAgeContext } from "@/contexts/FaixaEtariaJogo"
import { camposPreenchidos } from "./funcoes"
import { useCallback, useEffect, useState } from "react"
import Button from "../Button"
import Link from "next/link"
import { useIdadeContext } from "@/contexts/contextIdade"


export default function Campo(){
    const { idadePermitida } = useAgeContext()
    const { idadeUsuario , permicaoReloud , setPermicaoReloud } = useIdadeContext()

    const calcularIdade = () => {
        const idade = camposPreenchidos()

        if (idade) {
            const Dia = document.querySelectorAll('.campos_idade p')[0] as HTMLDivElement
            const Mes = document.querySelectorAll('.campos_idade p')[1] as HTMLDivElement
            const Ano = document.querySelectorAll('.campos_idade p')[2] as HTMLDivElement
            
            // const dataNascimento = new Date(`${Number(Ano.textContent)},${Number(Mes.textContent)},${Number(Dia.textContent)}`)
            // const dataHoje = new Date()

            // const anoNascimento = dataHoje.getFullYear() - dataNascimento.getFullYear();
            // const mesNascimento = dataHoje.getMonth() - dataNascimento.getMonth();
            // const diaNascimento = dataHoje.getDate() - dataNascimento.getDate();

            window.sessionStorage.setItem("idade", `${Dia.textContent}/${Mes.textContent}/${Ano.textContent}`)


            // Verifica se já tem a idade recomendade
            // if (anoNascimento > idadePermitida || (anoNascimento === idadePermitida && (mesNascimento > 0 || (mesNascimento === 0 && diaNascimento >= 0)))) {
            //     // router.push(`/produto/${idJogo}`)
            // } else {
            //     window.sessionStorage.setItem("idade", (anoNascimento -1).toString())
            //     document.querySelector(".msg_recusado")?.classList.remove("hidden")
            //     document.querySelector(".msg_padrao")?.classList.add("hidden")
            //     document.querySelector(".div_idades")?.classList.add("hidden")
            //     document.querySelector(".entrar")?.classList.add("hidden")
            // }
            setPermicaoReloud(Math.random() * 10)
        }
    }
    

const verificaPermissao = ()=>{

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
}

    useEffect(()=>{
        
        const getIdade = window.sessionStorage.getItem('idade')
        console.log(getIdade);
        console.log(window.sessionStorage.getItem('login'));
        console.log(idadeUsuario);
        console.log((getIdade && Number(getIdade) < idadePermitida) || idadeUsuario==false);
        if (window.sessionStorage.getItem('login') || window.sessionStorage.getItem('idade')) {
            if ((getIdade && Number(getIdade) < idadePermitida) || !idadeUsuario ) {
                console.log("entrou if");
                document.querySelector(".msg_recusado")?.classList.remove("hidden")
                document.querySelector(".msg_padrao")?.classList.add("hidden")
                document.querySelector(".div_idades")?.classList.add("hidden")
                document.querySelector(".entrar")?.classList.add("hidden")
            }
            return
        }

        verificaPermissao()
    },[permicaoReloud])

    return (
        <>
        <div className="flex flex-col w-10/12 md:w-1/2 m-auto gap-3">
            <Button style="entrar button_verificar_idade text-white" f_function={calcularIdade}>Continuar</Button>
            <Link href={"/"} className="bg-neutral-400 text-center font-semibold text-lg rounded-lg py-1">Voltar para a página da store</Link>
        </div>
        </>
    )
}

const nameJogos = 'teste'
export { nameJogos }