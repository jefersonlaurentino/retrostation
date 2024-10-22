'use client'

import React from "react"
import { FaixaEtariaProvider }  from "../contexts/FaixaEtariaJogo"
import { ImagemAvatarProvider } from "@/contexts/contextFotoPerfil"
import { DataUserProvider } from "@/contexts/contexUserLogin"

export default function Providers({ children }: { children :React.ReactNode}) {
    return(
        <>
        <FaixaEtariaProvider>
            <DataUserProvider>
                <ImagemAvatarProvider>
                    { children }
                </ImagemAvatarProvider>
            </DataUserProvider>
        </FaixaEtariaProvider>
        </>
    )
}