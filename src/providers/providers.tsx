'use client'

import React from "react"
import { FaixaEtariaProvider }  from "../contexts/FaixaEtariaJogo"
import { ImagemAvatarProvider } from "@/contexts/contextFotoPerfil"

export default function Providers({ children }: { children :React.ReactNode}) {
    return(
        <>
        <FaixaEtariaProvider>
            <ImagemAvatarProvider>
                { children }
            </ImagemAvatarProvider>
        </FaixaEtariaProvider>
        </>
    )
}