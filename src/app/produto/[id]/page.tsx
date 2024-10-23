'use client'

import ModalIdade from "@/components/ModalIdade";
import InformacoesProduto from "@/components/InformacoesProduto";
import { useIdadeContext } from "@/contexts/contextIdade";
import { useAgeContext } from "@/contexts/FaixaEtariaJogo";
import { useParams } from "next/navigation";
import { jogos } from "@/components/funcoes";
import { useEffect } from "react";
import { number } from "zod";

export default function Produto() {
    const { setIdadePermitida } = useAgeContext()
    const { id } = useParams()
    
    let indexJogo = 0
    useEffect(()=>{
        jogos.forEach( (j) =>{
            if (j.id == id) {
                if (j.faixaEtaria) {
                    indexJogo= Number(j)
                    const faixaEtaria =  Number(j.faixaEtaria)
                    setIdadePermitida(faixaEtaria)
                }
            }
        })
    },[])
    
    
    
    const { idadeUsuario } = useIdadeContext()
    return(
        <>
            { idadeUsuario ?
                <InformacoesProduto/>
                :<ModalIdade jogo={jogos[indexJogo].titulo}/>
            }
        </>
    )
}