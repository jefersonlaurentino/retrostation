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


export default function Menu() {
    const { setThemeDark } = useContextTheme()

    useEffect(()=>{
        const themeDark = document.querySelector('html')!.classList
        if (themeDark.contains('dark')) {
            document.querySelector('.button_theme')!.nextSibling!.textContent = 'Escuro';
            document.querySelector('.button_theme')?.classList.remove('before:left-1');
            document.querySelector('.button_theme')?.classList.add('before:left-6');
            document.querySelector('.button_theme')?.setAttribute('aria-checked','true');
        }
    },[])

    const darkMode = () => {
        const buttonClick = document.querySelector('.button_theme');
        const currentState = buttonClick?.getAttribute('aria-checked');
        
        if (currentState === 'false') {
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
                        <div className="flex items-center gap-1 text-lg font-semibold p-2">
                            <VscColorMode />
                            <p>Dark-Mode</p>
                        </div>
                        <div className="flex flex-row-reverse gap-2 leading-4 pr-3 items-center">
                            <button
                                role="switch"
                                aria-checked={false}
                                aria-label="seleciona o tema do site"
                                onClick={darkMode}
                                className="button_theme border-black dark:border-primaria border-2 rounded-xl w-12 h-6 relative before:content-[''] before:h-4 before:w-4 before:absolute before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1 before:duration-300"
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
                        <Link href={'/carrinho'} 
                            aria-label="Ver produtos no carrinho">
                            <IoCartSharp />
                            Carrinho
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} 
                            aria-label="Sair da sua conta">
                            <ImExit />
                            Sair
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} 
                            aria-label="informações da RetroStation">
                            <FcAbout />
                            Sobre Nós
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