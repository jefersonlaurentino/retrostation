'use client'

import logoMaior from "../../../public/image/logo_maior.png";
import logoMenor from "../../../public/image/logo_menor.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import { useImagemContext } from "@/contexts/contextFotoPerfil";
import { useDataLogin } from "@/contexts/contexUserLogin";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useContextItensCart } from "@/contexts/contextItensCart";
import { useRouter } from "next/navigation";
import { jogos } from "../funcoes";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { typeJogos } from "@/app/biblioteca/page";
import Menu from "../Menu";
import { UsePopUp } from "@/contexts/contextNotificacao";
import { formattedtitle } from "@/function/formattedGameTitle";

export default function Header(){
    const { dataLoginUser } = useDataLogin()
    const { totalItensCart } = useContextItensCart()
    const Router = useRouter()
    const { setMsgPopUp } = UsePopUp()
    const [ nickName , setNickName ] = useState<string>('******')
    const [ valueInput , setValueInput ] = useState('')
    const [ logo , setLogo ] = useState<string>()
    const [ jogosEncontrados , setJogosEncontrados ] = useState<typeJogos[] | null>(null)


    useEffect(()=>{
        const getLogin = window.sessionStorage.getItem("login")
        SetLogado(getLogin);
    },[])

    useEffect(()=>{
        if (dataLoginUser) {
            setNickName(dataLoginUser.dataUser.nickName)
        }
    },[dataLoginUser])

    const { imagemAvatar } = useImagemContext()

    const [ logado , SetLogado ] = useState<string|null>(null)

    useEffect(()=>{
        const inputPesquisaJogos = document.querySelector('.campo_animacao_input input')
        
        inputPesquisaJogos?.addEventListener('focusout',()=>{
            document.querySelector(".button_pesquisa")?.classList.remove('mt-1')
            document.querySelector(".button_pesquisa")?.classList.remove('text-black')
            document.querySelector(".button_pesquisa")?.classList.add('text-white')
            document.querySelector(".button_pesquisa")?.classList.remove('border-black')
            document.querySelector(".button_pesquisa")?.classList.add('border-secundaria')
            document.querySelector(".button_pesquisa")?.classList.remove('translate-y-12')
            document.querySelector(".button_pesquisa")?.classList.remove('-translate-x-1')
            inputPesquisaJogos?.classList.remove('p-1')
            document.querySelector('.campo_animacao_input form')?.classList.remove('border-2')
            inputPesquisaJogos?.classList.add('h-0')
            inputPesquisaJogos?.classList.remove('h-9')
            setValueInput('')
            setTimeout(()=>{
                document.querySelector('.campo_animacao_input')?.classList.add('hidden')
                setJogosEncontrados(null)
            },400)
        })

        if (window.innerWidth <= 640) {
            setLogo("logoMenor")
        } else {
            setLogo("logoMaior")
        }
        window.addEventListener('resize', ()=>{
            if (window.innerWidth <=640) {
                setLogo("logoMenor")
            } else {
                setLogo("logoMaior")
            }
        })
        
    },[])

    const pesquisaJogo = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const produto = document.querySelector('.campo_animacao_input input') as HTMLInputElement
        Router.push(`/produto/${produto.value}`)
    }
    
    const animacaoInput = () =>{
        document.querySelector(".button_pesquisa")?.classList.add('translate-y-12')
        document.querySelector(".button_pesquisa")?.classList.add('mt-1')
        document.querySelector(".button_pesquisa")?.classList.add('-translate-x-1')
        document.querySelector(".button_pesquisa")?.classList.remove('text-white')
        document.querySelector(".button_pesquisa")?.classList.add('text-black')
        document.querySelector(".button_pesquisa")?.classList.remove('border-secundaria')
        document.querySelector(".button_pesquisa")?.classList.add('border-black')
        const inputPesquisaJogos = document.querySelector('.campo_animacao_input input') as HTMLInputElement | null
        document.querySelector('.campo_animacao_input')?.classList.remove('hidden')
        setTimeout(()=>{
            inputPesquisaJogos?.classList.add('p-1')
            document.querySelector('.campo_animacao_input form')?.classList.add('border-2')
            inputPesquisaJogos?.classList.remove('h-0')
            inputPesquisaJogos?.classList.add('h-9')
            inputPesquisaJogos?.focus()
        },10)
    }

    const pesquisa = (value:string)=> {
        const arrayPesquisaJogos=[];
        if (value != '') {
            arrayPesquisaJogos.push(jogos.filter(jogo=>jogo.titulo.includes(value)))
            setJogosEncontrados(arrayPesquisaJogos[0].slice(0,5));
        }
    }
    
    return (
        <>
        <header className="p-2 flex justify-between items-center bg-black shadow-secundaria shadow-lg sticky top-0 w-full z-50">
            <Menu />
            <div className="flex items-center gap-2 text-white">
                <button 
                    className="text-3xl"
                    aria-label="Entrar no menu"
                    onClick={()=>{
                        document.querySelector('.menu')?.classList.add('left-0')
                        document.querySelector('.menu')?.classList.remove('-left-full')
                    }}
                >
                    <IoMenu />
                </button>
                <Link href={"/"} aria-label="voltar para a tela inicial">
                { 
                    logo === "logoMaior" ?
                    <Image
                        src={logoMaior}
                        width={100}
                        alt="Logo do site"
                        className="w-32 md:w-48"
                    />
                    :
                    <Image
                        src={logoMenor}
                        width={100}
                        alt="Logo do site"
                        className="w-10"
                    />
                }
                </Link>
            </div>
            <div className="flex gap-2 items-center">
                <button aria-label="ir ao carrinho" onClick={()=>{
                    const itensCarrinho = window.sessionStorage.getItem('comprasCarrinho')
                    if (itensCarrinho) {
                        window.sessionStorage.setItem('cart',itensCarrinho)
                        Router.push('/comprar')
                    } else {
                        setMsgPopUp({checked: false , msg: 'Sem itens no carrinho'})
                    }
                }} className="text-white p-1 pr-2 mr-2 rounded-md border-2 border-secundaria text-xl relative">
                    <HiOutlineShoppingCart />
                    <span className="absolute -top-2 -right-3 rounded-full bg-terciaria text-sm px-1">{
                    (totalItensCart >= 10)? 
                        (totalItensCart > 99)?
                            '99'
                            :  
                            totalItensCart
                        : 
                        `0${totalItensCart}`
                    }</span>
                </button>
                <nav>
                    {(logado == null)? 
                    <Link href={"/login"} aria-label="ir para tela de login" className="relative border-secundaria text-secundaria hover:text-black font-bold z-0 overflow-hidden border-2 rounded-lg px-2 py-1 animaButton flex items-center gap-2">
                        <FaUserLarge/>
                        <p>Entrar</p>
                    </Link>
                    :
                    <Link href={"/perfil"} aria-label="ir para tela do perfil" className="flex items-center justify-between gap-1 border-2 rounded-lg max-w-[140px] border-b-secundaria border-r-secundaria border-l-terciaria border-t-terciaria px-1">
                        <Image
                            src={imagemAvatar}
                            alt="foto do perfil"
                            width={32}
                            className="rounded-full"
                        />
                        <p className="text-white font-mono">{nickName}</p>
                    </Link>}
                </nav>
                <button 
                    onClick={animacaoInput}
                    aria-label="pesquisar jogos"
                    className="button_pesquisa border-2 border-secundaria z-30 p-1 rounded-lg duration-500 text-white">
                    <IoSearchSharp/>
                </button>
            </div>
            <div className="campo_animacao_input absolute top-14 right-2 flex flex-col gap-1 w-64 text-white ">
                <form onSubmit={(e)=>pesquisaJogo(e)} className="flex bg-white rounded-md border-black overflow-hidden">
                    <input 
                        type="text" 
                        placeholder="Pesquisar..." 
                        className="h-0 focus:outline-none duration-500 text-black w-[85%]"
                        value={valueInput}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>)=>{
                            setValueInput(evt.currentTarget.value)
                            pesquisa(evt.currentTarget.value.toLocaleLowerCase())
                        }}
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 z-50 text-transparent">
                        <IoSearchSharp/>
                    </button>
                </form>
                <div className="absolute w-full top-[110%]">
                    <section className="bg-neutral-800 rounded-lg flex flex-col gap-1">
                        { jogosEncontrados?.map((jogo)=>
                        <button 
                            key={jogo.id}
                            aria-label={`jogo ${jogo.titulo}`}
                            onClick={()=>Router.push(`/produto/${jogo.titulo}`
                            )}>
                            <article className="flex gap-2 items-center p-2 rounded-md hover:bg-neutral-700">
                                <div className="h-10 min-w-8">
                                    <Image
                                        src={jogo.banner}
                                        alt={jogo.titulo}
                                        height={15}
                                        width={15}
                                        className="w-full h-full"
                                    />
                                </div>
                                <h4 className="text-start line-clamp-1">{formattedtitle(jogo.titulo)}</h4>
                            </article>
                        </button>
                        )}
                    </section>
                </div>
            </div>
        </header>
        </>
    )
}