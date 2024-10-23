'use client'

import { IoLogoWindows } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Header from "../../components/Header";
import Image from "next/image";
import livre from "../../../public/image/faixaEtaria/livre.jpg";
import maior10 from "../../../public/image/faixaEtaria/maior10.jpg";
import maior12 from "../../../public/image/faixaEtaria/maior12.jpg";
import maior14 from "../../../public/image/faixaEtaria/maior14.jpg";
import maior16 from "../../../public/image/faixaEtaria/maior16.jpg";
import maior18 from "../../../public/image/faixaEtaria/maior18.jpg";
import Button from "../../components/Button";
import { BsShare } from "react-icons/bs";
import { useEffect } from "react";
import { useParams } from "next/navigation"
import { jogos , calculoDesconto } from "../../components/funcoes"
import { useAgeContext } from "@/contexts/FaixaEtariaJogo";

// const designer = localFont({src:"../../fonts/DESIGNER.otf"})

const verImagemProduto =  (evt:EventTarget) => {
    const mostrar = document.querySelector(".ver")!
    const seta = mostrar.lastChild!.previousSibling
    const evento = evt as Element
    const imagem = evento.parentNode!.firstChild!.cloneNode(true)as HTMLDivElement;

    if (imagem.classList[0] == "img") {
        const filho = imagem.firstChild as HTMLDivElement;
        filho.classList.remove("h-[67px]")
        filho.classList.add("w-full","h-[186px]", "md:h-[300px]")
    } else {
        imagem.classList.remove("w-[93px]", "h-[67px]")
        imagem.classList.add("h-full")
    }
    
    limparGaleria()

    evento.classList.remove("bg-black/50")
    const bordaFocus = evento.parentNode! as HTMLDivElement
    bordaFocus.classList.remove("border-transparent")
    bordaFocus.classList.add("border-red-800")
    

    mostrar.removeChild(mostrar.firstChild!)
    mostrar.insertBefore(imagem, seta)
}

const mostraSetas = () => {
    document.querySelector(".setaL")?.classList.add("translate-x-10")
    document.querySelector(".setaR")?.classList.add("-translate-x-10")
}

const ocutarSetas = () => {
    document.querySelector(".setaL")?.classList.remove("translate-x-10")
    document.querySelector(".setaR")?.classList.remove("-translate-x-10")
}

const proximaImagem = (evt:EventTarget) => {
    const seta = evt as HTMLDivElement
    const galeria = document.querySelector(".galeria")?.childNodes
    const arrayElementosGaleria:HTMLDivElement[] = [];
    galeria?.forEach((el)=>{
        const e = el as HTMLDivElement
        arrayElementosGaleria.push(e)
    })
    const r: boolean[] = []
    arrayElementosGaleria.map((e)=>{
        const t = e as HTMLDivElement
        r.push(t.classList.contains("border-red-800"))
    })
    
    if (seta.classList.contains("setaL")) {
        if (r!.indexOf(true) <= 0) {
            const ge = galeria![galeria!.length - 1].lastChild as EventTarget
            verImagemProduto(ge)
        } else {
            const fe = galeria![r!.indexOf(true) - 1].lastChild as EventTarget
            verImagemProduto(fe)
        }
    } else {
        if (r!.indexOf(true) >= galeria!.length - 1) {
            console.log(r);
            const fe = galeria![0].lastChild as EventTarget
            verImagemProduto(fe)
        } else {
            const ge = galeria![r!.indexOf(true) + 1].lastChild as EventTarget
            verImagemProduto(ge)
        }
    }
    
}

const limparGaleria = () => {
    const galeria = document.querySelector(".galeria")?.childNodes
    
    galeria?.forEach((el)=>{
        const e = el as HTMLDivElement
        if (e.classList.contains("border-red-800")) {
            const removeFocus = e.lastChild as HTMLDivElement
            removeFocus.classList.add("bg-black/50")
            
            e.classList.remove("border-red-800")
            e.classList.add("border-transparent")
        }
    })   
}

export default function InformacoesProduto() {
    const { idadePermitida ,setIdadePermitida} = useAgeContext()
    const params = useParams()
    const id = params.id as string
    const jogoTrue:string[] = []
    jogos.map(e=>jogoTrue.push(e.id))
    const jogo = jogoTrue.indexOf(id)

    const faixaEtaria = () =>{
        const faixa = jogos[jogo].faixaEtaria
        let classificacao
        if (faixa == "livre") {
            classificacao = livre
        } else if (faixa == "10") {
            classificacao = maior10
        } else if (faixa == "12") {
            classificacao = maior12
        } else if (faixa == "14") {
            classificacao = maior14
        } else if (faixa == "16") {
            classificacao = maior16
        } else {
            classificacao = maior18
        }

        return classificacao
    }

    let faixaEtariaSet:number;
    useEffect(()=>{
        faixaEtariaSet = Number(jogos[jogo].faixaEtaria)
    },[idadePermitida])

    useEffect(()=>{
        const galeria = document.querySelector(".galeria")?.firstChild
        const focus = galeria!.lastChild as HTMLDivElement
        focus.classList.remove("bg-black/50")
        const primeiroElementoGaleria = galeria as HTMLDivElement
        primeiroElementoGaleria.classList.remove("border-transparent")
        primeiroElementoGaleria.classList.add("border-red-800")

        const idadeSet = window.sessionStorage.getItem("idade")
        console.log("idade" + idadeSet);
        console.log("idadeRe" + faixaEtariaSet);
        
        if (!idadeSet || !faixaEtariaSet) {
            
            window.sessionStorage.setItem("idadePermitida", jogos[jogo].faixaEtaria)
            setIdadePermitida(Number(jogos[jogo].faixaEtaria))
            window.sessionStorage.setItem("jogo", jogos[jogo].id)
            // document.querySelector('.modal')?.classList.remove('hidden')
            // router.push(`/idade/${jogos[jogo].titulo.replace(/[" "]/g,"-")}`)
        } else {
            window.sessionStorage.setItem("idadePermitida", jogos[jogo].faixaEtaria)
            setIdadePermitida(Number(jogos[jogo].faixaEtaria))
            console.log(idadeSet);
            console.log(faixaEtariaSet);
            
            if (Number(idadeSet) < Number(faixaEtariaSet)) {
                // document.querySelector('.modal')?.classList.remove('hidden')
                // router.push(`/idade/${jogos[jogo].titulo.replace(/[" "]/g,"-")}`)
            }
        }
    },[])

    const user = JSON.parse(window.sessionStorage.getItem('login')!)

    let naBliblioteca=false
    if (user) {
        if (user.dataUser.jogosComprados) {
            user.dataUser.jogosComprados.map((j :number) =>{
                if(j == jogo) {
                    naBliblioteca = true
                }
            });
    }
    }
    
    return(
        <>
        <Header/>
        <main className="flex flex-col text-black dark:text-white max-w-6xl m-auto">
            <h1 className={`p-5 text-3xl md:text-5xl  underline`}>{jogos[jogo].titulo}</h1>
            <div className="relative">
                <div className="flex flex-col w-full md:w-2/3">
                    <div className="ver relative w-10/12 h-[186px] md:h-[300px] max-w-[500px] rounded-lg m-auto overflow-hidden" onMouseMove={mostraSetas} onMouseOut={ocutarSetas}>
                        <div className="video">
                            {jogos[jogo].video[0] ? 
                            <iframe width="560" src={`https://www.youtube.com/embed/${jogos[jogo].video[0]}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                            </iframe> : <div className="img">
                                <Image
                                    src={jogos[jogo].imagens[0]}
                                    width={250}
                                    height={250}
                                    alt="Imagem de uma cena do jogo"
                                    className="w-full h-[186px] md:h-[300px]"
                                /> 
                                </div> }
                        </div>
                        <SlArrowLeft className="setaL absolute top-1/2 rounded-full text-white -left-8 bg-neutral-800 text-3xl font-semibold p-1 -translate-y-1/2 duration-300 cursor-pointer" onClick={(e)=>proximaImagem(e.target)}/>
                        <SlArrowRight className="setaR absolute top-1/2 rounded-full text-white -right-8  bg-neutral-800 text-3xl font-semibold p-1 -translate-y-1/2 duration-300 cursor-pointer" onClick={(e)=>proximaImagem(e.target)}/>
                    </div>

                    <div className="relative w-10/12 max-w-[500px] m-auto">
                        <SlArrowLeft className="absolute p-1 rounded-full text-3xl bg-neutral-800 text-white -translate-y-1/2 left-0 top-1/2 max-sm:hidden"/>
                        <SlArrowRight className="absolute p-1 rounded-full text-3xl bg-neutral-800 text-white -translate-y-1/2 right-0 top-1/2 max-sm:hidden"/>
                        <div className="galeria flex gap-1 py-2 m-auto w-10/12 min-w-[250px] max-w-[450px] overflow-y-hidden">
                            {jogos[jogo].video.map((video , index)=>
                                <div key={index} className="border-4 md:border-2 border-transparent rounded-lg cursor-pointer relative">
                                    <div className="video w-[93px] h-[67px] overflow-hidden rounded-lg">
                                        <iframe width="560" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full rounded-lg h-full bg-black/50 hover:bg-transparent duration-300" onClick={(e)=>verImagemProduto(e.currentTarget)}></div>
                                </div>
                            )}


                            {jogos[jogo].imagens.map((img , index)=>
                                <div key={index} className="border-4 md:border-2 border-transparent cursor-pointer relative h-[67px] min-w-[89px] w-[90px] rounded-lg overflow-hidden">
                                    <div className="img">
                                    <Image
                                        src={img}
                                        width={200}
                                        height={200}
                                        alt="Imagem de uma cena do jogo"
                                        className="h-[67px]"
                                    /> 
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 hover:bg-transparent duration-300" onClick={(e)=>verImagemProduto(e.target)}>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <aside className="w-full md:absolute md:right-0 md:top-0 md:w-1/3 p-3 bg-black text-white">
                        <Image
                            src={jogos[jogo].bannerName}
                            width={90}
                            height={90}
                            alt="Nome do jogo"
                            className="w-3/4 m-auto py-20 max-md:hidden"
                        />
                        <div className="flex gap-3 items-center justify-center mb-3">
                            {jogos[jogo].promocao && 
                            <><p className="bg-blue-700 px-1 rounded-lg">{calculoDesconto(jogos[jogo].valorAnterior, jogos[jogo].valorAtual)}</p>
                            <p className="line-through text-sm">{`R$ ${jogos[jogo].valorAnterior}`}</p>
                            </>}
                            <p className="font-semibold">{`R$ ${jogos[jogo].valorAtual}`}</p>
                        </div>
                        <div className="flex flex-col gap-4 my-4">
                            {(naBliblioteca)? 
                            <Button style="bg-blue-800 hover:bg-blue-700">
                                na bliblioteca
                            </Button>
                            :
                            <Button style="bg-blue-800 hover:bg-blue-700">
                                Comprar
                            </Button>
                        }
                            <Button style="bg-neutral-700 hover:bg-neutral-600">

                                Adicionar ao Carrinho
                            </Button>
                        </div>

                        <div className="flex gap-3 items-center p-2 rounded-lg border">
                            <Image
                                src={faixaEtaria()}
                                width={40}
                                height={40}
                                alt="classificação da fixa etária"
                                className="rounded-xl w-12 md:w-14 border"
                            />
                            <p>Violençia, linguagem imprópria</p>
                        </div>

                        <div>
                            <div className="flex justify-between gap-3 my-3 border-b">
                                <p>Desenvolvedor</p>
                                <p className="text-right">{jogos[jogo].desenvolvedor}</p>
                            </div>
                            <div className="flex justify-between gap-3 my-3 border-b">
                                <p>Editora</p>
                                <p className="text-right">{jogos[jogo].editora}</p>
                            </div>
                            <div className="flex justify-between gap-3 my-3 border-b">
                                <p>Data de lançamento</p>
                                <p className="text-right">{jogos[jogo].dataLançamento}</p>
                            </div>
                            <div className="flex justify-between gap-3 my-3 border-b">
                                <p>Plataforma</p>
                                <IoLogoWindows className="mr-2"/>
                            </div>
                        </div>
                        <button className="flex items-center gap-3 bg-neutral-700 px-2 py-1 rounded-lg">
                            <BsShare />
                            Compartilhar
                        </button>
                    </aside>

                    <article className="py-3 w-11/12 md:w-10/12 m-auto">
                        {jogos[jogo].descricao.map((text , index)=><p key={index} className="indent-4 my-2">{text}</p>)}
                        <div className="flex my-3">
                            <div className="border-r-2 w-1/2">
                                <h4>Gênerros</h4>
                                <div className="text-black flex gap-2 my-2">
                                    {jogos[jogo].generos.map((type)=><p className="bg-neutral-300 inline-flex rounded-lg px-2" key={type}>{type}</p>)}
                                </div>
                            </div>
                            <div className="w-1/2 px-3">
                                <h4>Recursos</h4>
                                <div className="text-black">
                                    {jogos[jogo].recursos.map((type)=><p className="bg-neutral-300 inline-flex rounded-lg px-2 my-2" key={type}>{type}</p>)}
                                </div>
                            </div>
                        </div>

                        <section className="bg-neutral-900 text-white p-4">
                            <h3>Requisitos de sistema de {jogos[jogo].titulo}</h3>
                            <h4 className="mt-6 underline">Windows</h4>
                            <div className="requesitos flex gap-4">
                                <div className="w-1/2">
                                    <div>
                                        <h5>Versão do SO</h5>
                                        <p>Windows 10 64-bit</p>
                                    </div>
                                    <div>
                                        <h5>Processador</h5>
                                        <p>Intel i5-4670k or AMD Ryzen 3 1200</p>
                                    </div>
                                    <div>
                                        <h5>Memória</h5>
                                        <p>8 GB</p>
                                    </div>
                                    <div>
                                        <h5>Placa de vídeo</h5>
                                        <p>NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750</p>
                                    </div>
                                    <div>
                                        <h5>DirectX</h5>
                                        <p>DirectX 12</p>
                                    </div>
                                    <div>
                                        <h5>Armazenamento</h5>
                                        <p>190 GB</p>
                                    </div>
                                    <div>
                                        <h5>Observações adicionais</h5>
                                        <p>Windows version 2004 2020-05-27 19041</p>
                                    </div>
                                    <div>
                                        <h5>Contas para login obrigatórias</h5>
                                        <p>PlayStation Network</p>
                                    </div>
                                    <div>
                                        <h5>Idiomas suportados</h5>
                                        <p>Áudio: Italiano, Japonês, Alemão, Grego, Inglês, Francês, Árabe, Espanhol (América Latina), Russo, Espanhol (Espanha), Português (Brasil), Polonês, Português
                                        Texto: Húngaro, Coreano, Tcheco, Holandês, Turco, Tailandês, Árabe, Francês, Inglês, Português (Brasil), Russo, Espanhol (América Latina), Polonês, Português, Italiano, Chinês (tradicional), Japonês, Croata, Alemão, Espanhol (Espanha), Grego, Chinês (simplificado)</p>
                                    </div>
                                
                                </div>

                                <div className="w-1/2">
                                    <div>
                                        <h5>Versão do SO</h5>
                                        <p>Windows 10 64-bit</p>
                                    </div>
                                    <div>
                                        <h5>Processador</h5>
                                        <p>Intel i5-4670k or AMD Ryzen 3 1200</p>
                                    </div>
                                    <div>
                                        <h5>Memória</h5>
                                        <p>8 GB</p>
                                    </div>
                                    <div>
                                        <h5>Placa de vídeo</h5>
                                        <p>NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750</p>
                                    </div>
                                    <div>
                                        <h5>DirectX</h5>
                                        <p>DirectX 12</p>
                                    </div>
                                    <div>
                                        <h5>Armazenamento</h5>
                                        <p>190 GB</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                </div>
            </div>
        </main>
        </>
    )
}