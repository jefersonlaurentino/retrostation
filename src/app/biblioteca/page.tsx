'use client'
import { jogos } from "@/components/funcoes";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Image from "next/image";
import { datauserProps } from "@/components/ComponetCompra/funcoesPageComprar";
import { useEffect, useState } from "react";
import ModalErro from "@/components/ModalErro";
import Rodape from "@/components/Rodape";

const designer = localFont({src: "../fonts/designer.otf"})

// type typeJogos = {
//     id: string;
//     titulo: string;
//     descricao: string[];
//     desenvolvedor: string;
//     editora: string;
//     dataLançamento: string;
//     generos: string[];
//     recursos: string[];
//     promocao: boolean;
//     faixaEtaria: string;
//     banner: string;
//     bannerName: string;
//     imagens: string[];
//     video: string[]
//     destaques: string[]
//     valorAnterior: string;
//     valorAtual: string;
// }

export type typeJogos = {
    id: string;
    titulo: string;
    descricao: string[];
    desenvolvedor: string;
    editora: string;
    dataLançamento: string;
    generos: string[];
    recursos: string[];
    promocao: boolean;
    faixaEtaria: string;
    banner: string;
    bannerName: string;
    imagens: string[];
    video: string[]
    destaques: string[]
    valorAnterior: string;
    valorAtual: string;
}
export default function BibliotecaJogos() {
    const [ jogosNaBiblioteca , setJogosNaBiblioteca ] = useState<typeJogos[] | null>(null)
    useEffect(()=>{
        const usuario = window.sessionStorage.getItem('login');
        if (usuario) {
            const test:datauserProps = JSON.parse(usuario)
            if (test.dataUser.jogosComprados) {
                setJogosNaBiblioteca(jogosEncontrado(test.dataUser.jogosComprados));
            }
        }
    },[])
    
    const jogosEncontrado = (jogosUsuario: string[]) =>{
        return jogos.filter(jogo=>jogosUsuario.includes(jogo.id))
    }
    
    return(
        <>
            <Header/>
            <main className="max-w-screen-lg m-auto p-6">
                <h1 className={`text-center my-4 text-2xl md:text-4xl ${designer.className}`}>SUA BIBLIOTECA</h1>
                <section className="flex flex-wrap gap-3 md:gap-6 px-2">
                    {jogosNaBiblioteca ? 
                        jogosNaBiblioteca.map((jogo)=>
                            <article key={jogo.id} className="border-2 border-black rounded-lg w-28 h-48 md:w-36 md:h-52">
                                <div className="w-full h-[70%]">
                                    <Image
                                        src={jogo.banner}
                                        alt={`imagem do jogo ${jogo.titulo}`}
                                        height={100}
                                        width={100}
                                        className="w-full h-full"
                                    />
                                </div>
                                <section className="px-2 h-[30%] flex items-center justify-center">
                                    <div className="line-clamp-2  leading-5">
                                        <h2>{jogo.titulo}</h2>
                                    </div>
                                </section>
                            </article>
                        )
                        :
                        <ModalErro text="Nenhum jogo encontrado na biblioteca." height="h-[calc(100dvh-125px)]" linkHidden="hidden"/>
                    }
                </section>
            </main>
            <Rodape/>
        </>
    )
}