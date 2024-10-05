'use client'

import React from "react"
import { FaixaEtariaProvider }  from "../contexts/FaixaEtariaJogo"

export default function Providers({ children }: { children :React.ReactNode}) {
    return(
        <>
        <FaixaEtariaProvider>
            { children }
        </FaixaEtariaProvider>
        </>
    )
}