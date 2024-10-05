"use client"

import { useAgeContext } from "@/contexts/FaixaEtariaJogo"


export default function Teste() {
    const { idadePermitida } = useAgeContext()
    console.log(idadePermitida);
    
    return(
        <>
        <h1>ola</h1>
        </>
    )
}