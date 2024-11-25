'use client'

import ModalIdade from "@/components/ModalIdade";
import InformacoesProduto from "@/components/InformacoesProduto";
import { useIdadeContext } from "@/contexts/contextIdade";
import { useAgeContext, verificaFaixaEtaria } from "@/contexts/FaixaEtariaJogo";
import { useParams } from "next/navigation";
import { jogos } from "@/components/funcoes";
import { useEffect, useState } from "react";
import ModalErro from "@/components/ModalErro";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";

export default function Produto() {
    const { setIdadePermitida } = useAgeContext()
    const { idadeUsuario } = useIdadeContext()
    const { nome } = useParams()
    const nameJogo = nome as string
    const tituloJogo = nameJogo.replace(/%20/g,' ')
    const [jogoBiblioteca , setJogoBiblioteca] = useState<boolean>(false)

    //retorna o json do jogo se tiver no site
    const jogo = jogos.find((e)=>{
        return e.titulo.toLocaleLowerCase() == tituloJogo.toLocaleLowerCase()
    })

    useEffect(()=>{
        // verifica se o usuário pode ver o conteúdo do jogo
        const faixaEtariaRecomendada = jogos.find((j) => j.titulo.toLocaleLowerCase() === tituloJogo.toLocaleLowerCase())

        if (faixaEtariaRecomendada) {
            setIdadePermitida(Number(faixaEtariaRecomendada.faixaEtaria))
        }

        //verifica se está logado
        const getuserLogin = window.sessionStorage.getItem('login')
        if (getuserLogin) {
            const userLogin = JSON.parse(getuserLogin)
           // Verificar se o usuário possui jogos comprados
            if (userLogin.dataUser.jogosComprados) {
                const jogoEncontrado = userLogin.dataUser.jogosComprados.find((e: string) => e === jogo?.id);
                
                if (jogoEncontrado) {
                    setJogoBiblioteca(true);  // Jogo já está na biblioteca
                }
            }
        }

    },[])

    return(
        <>
            { (jogo) ? 
                (idadeUsuario || jogo.faixaEtaria === "livre")?
                    <>
                        <InformacoesProduto 
                            id={jogo.id}
                            titulo={jogo!.titulo}
                            banner={jogo.banner}
                            bannerName={jogo.bannerName}
                            dataLançamento={jogo.dataLançamento}
                            descricao={jogo.descricao}
                            desenvolvedor={jogo.desenvolvedor}
                            destaques={jogo.destaques}
                            editora={jogo.editora}
                            faixaEtaria={verificaFaixaEtaria(jogo.faixaEtaria)}
                            generos={jogo.generos}
                            imagens={jogo.imagens}
                            promocao={jogo.promocao}
                            recursos={jogo.recursos}
                            valorAnterior={jogo.valorAnterior}
                            valorAtual={jogo.valorAtual}
                            video={jogo.video}
                            naBiblioteca={jogoBiblioteca}
                            key={jogo.id}
                        />
                        <Rodape/>
                    </>
                    : 
                    <ModalIdade 
                        tituloJogo={nome as string}
                    />
                :
                <>
                    <Header/>
                    <ModalErro text="desculpa! produto não encontrado." height="h-[calc(100dvh-53px)]"/>
                </> 
            }
        </>
    )
}