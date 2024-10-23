'use client'

import { createContext, useState , ReactNode, useContext, useEffect } from "react";
import { userProps } from "../contexUserLogin";
import { useAgeContext } from "../FaixaEtariaJogo";

type idadePermitidaProps = {
    idadeUsuario: boolean | null,
    setIdadeUsuario: ( value: boolean ) => void
    permicaoReloud: number,
    setPermicaoReloud: ( value: number ) => void
}

const contextIdade = createContext<idadePermitidaProps | null>(null)

const IdadePermitidaProvider = ({ children }: {children:ReactNode}) => {
    const [ idadeUsuario , setIdadeUsuario ] = useState<boolean | null>(null)
    const [ permicaoReloud , setPermicaoReloud ] = useState<number>(0)
    const { idadePermitida  } = useAgeContext()

    useEffect(()=>{
        if (idadePermitida != 0) {
            const Usuario = window.sessionStorage.getItem('login')
            if(Usuario){
                const dadosUsuario:userProps = JSON.parse(Usuario)
                setIdadeUsuario(calcularIdade(dadosUsuario.dataUser.age , idadePermitida))
                return
            }
            if (window.sessionStorage.getItem('idade')) {
                setIdadeUsuario(calcularIdade(window.sessionStorage.getItem('idade')!, idadePermitida))
            }
        }

    },[idadePermitida , permicaoReloud ])
    
    return (
        <contextIdade.Provider value={{idadeUsuario , setIdadeUsuario , permicaoReloud, setPermicaoReloud}}>
            {children}
        </contextIdade.Provider>
    )
}

const calcularIdade = (dataNascimentoUsuario: string , idadePermitida: number) => {
    const dia = dataNascimentoUsuario.slice(0,2)
    const mes = dataNascimentoUsuario.slice(3,5)
    const ano = dataNascimentoUsuario.slice(6,10)
    const dataNascimento = new Date(`${ano}-${mes}-${dia}`)
    const dataHoje = new Date()
    
    const anoNascimento = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const mesNascimento = dataHoje.getMonth() - dataNascimento.getMonth();
    const diaNascimento = dataHoje.getDate() - dataNascimento.getDate();

    // Verifica se já tem a idade recomendade
    if (anoNascimento > idadePermitida || (anoNascimento === idadePermitida && (mesNascimento > 0 || (mesNascimento === 0 && diaNascimento >= 0)))) {
        console.log('maior');
        
        return true
        // document.querySelector('.modal')?.classList.add('hidden')
        // window.sessionStorage.setItem("idade", anoNascimento.toString())
    } else{
        
        console.log('menor');
        return false
    }
        // window.sessionStorage.setItem("idade", (anoNascimento -1).toString())
}

const useIdadeContext = () =>{
    const context = useContext(contextIdade);
    if(!context) {
        throw new Error("erro");
    }
    return context
}

export { 
    contextIdade,
    IdadePermitidaProvider,
    useIdadeContext,
}