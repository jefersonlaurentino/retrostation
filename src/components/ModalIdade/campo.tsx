'use client'

import { useAgeContext } from "@/contexts/FaixaEtariaJogo"
import { camposPreenchidos } from "./funcoes"
import { useEffect } from "react"
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

            window.sessionStorage.setItem("idade", `${Dia.textContent}/${Mes.textContent}/${Ano.textContent}`)

            setPermicaoReloud(true)
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
        if (window.sessionStorage.getItem('login') || window.sessionStorage.getItem('idade')) {
            if ((getIdade && Number(getIdade) < idadePermitida) || !idadeUsuario ) {
                document.querySelector(".msg_recusado")?.classList.remove("hidden")
                document.querySelector(".msg_padrao")?.classList.add("hidden")
                document.querySelector(".div_idades")?.classList.add("hidden")
                document.querySelector(".entrar")?.classList.add("hidden")
            }
            return
        }

        verificaPermissao()
    },[permicaoReloud , idadePermitida , idadeUsuario])

    return (
        <>
        <div className="flex flex-col w-10/12 md:w-1/2 m-auto gap-3">
            <Button style="entrar button_verificar_idade" f_function={calcularIdade}>Continuar</Button>
            <Link href={"/"} className="bg-terciaria hover:bg-terciariaHove text-center font-semibold text-lg rounded-lg py-1">Voltar para a página da store</Link>
        </div>
        </>
    )
}

const nameJogos = 'teste'
export { nameJogos }