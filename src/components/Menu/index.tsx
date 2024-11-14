import Link from "next/link";
import style from './style.module.css'
import { IoCartSharp, IoClose, IoHomeSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { MdLibraryAddCheck } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { VscColorMode } from "react-icons/vsc";
import { useContextTheme } from "@/contexts/contextThemaDark";
import { useEffect } from "react";
import { UsePopUp } from "@/contexts/contextNotificacao";
import { abrirPopUpInterativo, fecharPopUpInterativo, UsePopUpInteractive } from "@/contexts/contextPopUpInteractive";

export default function Menu() {
    const { setMsgPopUp } = UsePopUp();
    const { setPopUpMsg } = UsePopUpInteractive();
    const { DarkMode , setDarkMode , setThemeDark } = useContextTheme() 

    useEffect(()=>{
        if (DarkMode) {
            const buttonClick = document.querySelector('.button_theme');
            
            if (DarkMode === 'false') {
                buttonClick?.classList.remove('before:left-1')
                buttonClick?.classList.add('before:left-6')
                buttonClick?.setAttribute('aria-checked','true')
                buttonClick!.nextSibling!.textContent = 'Escuro'
                setThemeDark('dark')
            } else {
                buttonClick?.classList.remove('before:left-6')
                buttonClick?.classList.add('before:left-1')
                buttonClick?.setAttribute('aria-checked','false')
                buttonClick!.nextSibling!.textContent = 'Claro'
                setThemeDark('light')
            }
        }
    },[DarkMode])

    const deixarFeedback = () =>{
        const text = <p>
            Por onde você quer deixar o sem feedback?
        </p>

        setPopUpMsg({msg: text , 
            buttonLeft: {
                onClick: () => {
                    fecharPopUpInterativo()
                    const assunto = 'Vi o RetroStation: Vamos conversar sobre o seu projeto?'
                    const mensagem = 'Gostei do seu projeto'
                    location.href = `mailto:jefersonlaurentino@outlook.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`
                },
                text: "E-mail"
            },
            buttonRight: {
                onClick: () => {
                    fecharPopUpInterativo()
                    window.open("https://www.linkedin.com/in/jeferson-laurentino-dev", "_blank")
                },
                text: "Linkedin",
            },
        })
    }

    return(
        <>
            <nav className={`menu w-full fixed h-full top-0 z-50 ${style.nav} -left-full duration-500 md:duration-700`}>
                <ul className="w-11/12 md:w-1/4 bg-white/40 backdrop-blur-md dark:bg-black dark:text-white p-2 relative">
                    <li>
                        <Link href={'/'}
                            aria-label="Ir a tela inicial">
                            <IoHomeSharp />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/perfil'} 
                            aria-label="Ver seu perfil">
                            <FaUserLarge/>
                            Perfil
                        </Link>
                    </li>
                    <li className={style.campo_theme}>
                        <div className="flex items-center gap-1 text-lg font-semibold">
                            <VscColorMode />
                            <p>Dark-Mode</p>
                        </div>
                        <div className="flex flex-row-reverse gap-2 leading-4 items-center">
                            <button
                                role="switch"
                                aria-checked={false}
                                aria-label="seleciona o tema do site"
                                onClick={(evt)=>setDarkMode(evt.currentTarget.getAttribute('aria-checked')!)}
                                className="button_theme border-black dark:border-primaria border-2 rounded-xl w-12 h-6 relative before:content-[''] before:h-4 before:w-4 before:absolute before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1 before:duration-500"
                                >
                            </button>
                            <p>Claro</p>
                        </div>
                    </li>
                    <li>
                        <Link href={'/biblioteca'} 
                            aria-label="Ver sua biblioteca de jogos">
                            <MdLibraryAddCheck />
                            Biblioteca
                        </Link>
                    </li>
                    <li>
                        <Link href={'/comprar'} 
                            aria-label="Ver produtos no carrinho">
                            <IoCartSharp />
                            Carrinho
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} 
                            onClick={()=>setMsgPopUp({checked: false , msg: 'função não adicionada'})} 
                            aria-label="informações da RetroStation">
                            <FcAbout />
                            Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} 
                            onClick={()=>{
                                abrirPopUpInterativo()
                                setPopUpMsg({msg: <p>No momento o feedback ainda não estar pronto. Mas você pode deixar o seu Recado diretamente no meu Linkedin ou no E-mail, gostaria de deixa o seu feedback?</p> , buttonLeft: {
                                onClick: () =>
                                    fecharPopUpInterativo(),
                                text: "Não"
                                },
                                buttonRight: {
                                    onClick:() =>
                                    deixarFeedback(),
                                    text: "Sim"
                                }
                            })}
                            }
                            aria-label="informações da RetroStation">
                            <FcAbout />
                            deixe o seu Feedback
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'}
                            onClick={()=>setMsgPopUp({checked: false , msg: 'função não adicionada'})} 
                            aria-label="Sair da sua conta">
                            <ImExit />
                            Sair da conta
                        </Link>
                    </li>
                    <button
                        aria-label="fechar menu"
                        onClick={()=>{
                            document.querySelector('.menu')?.classList.add('-left-full')
                            document.querySelector('.menu')?.classList.remove('left-0')
                        }}
                        className="absolute top-2 right-0 text-3xl text-secundaria"
                    >
                        <IoClose />
                    </button>
                </ul>
            </nav>
        </>
    )
}