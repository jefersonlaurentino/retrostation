'use client'

import React from "react"
import { FaixaEtariaProvider }  from "../contexts/FaixaEtariaJogo"
import { ImagemAvatarProvider } from "@/contexts/contextFotoPerfil"
import { DataUserProvider } from "@/contexts/contexUserLogin"
import { IdadePermitidaProvider } from "@/contexts/contextIdade"
import { ItensCartProvider } from "@/contexts/contextItensCart"
import { ThemaDarkProvider } from "@/contexts/contextThemaDark"
import { PopUpProvider } from "@/contexts/contextNotificacao"
import { PopUpInteractiveProvider } from "@/contexts/contextPopUpInteractive"

export default function Providers({ children }: { children :React.ReactNode}) {
    return(
        <>
        <FaixaEtariaProvider>
            <DataUserProvider>
                <ImagemAvatarProvider>
                    <IdadePermitidaProvider>
                        <ItensCartProvider>
                            <ThemaDarkProvider>
                                <PopUpProvider>
                                    <PopUpInteractiveProvider>
                                        { children }
                                    </PopUpInteractiveProvider>
                                </PopUpProvider>
                            </ThemaDarkProvider>
                        </ItensCartProvider>
                    </IdadePermitidaProvider>
                </ImagemAvatarProvider>
            </DataUserProvider>
        </FaixaEtariaProvider>
        </>
    )
}