import Link from "next/link";
import style from './style.module.css'
import DireitosReservados from '../DireitosReservados'

export default function Rodape() {
    return(
        <>
        <footer className={`flex flex-col gap-3 p-3 pt-7 bg-black text-white ${style.footer}`}>
            <section className="flex justify-around max-sm:grid max-sm:grid-cols-2 gap-3 max-sm:m-auto">
                <article>
                    <h5 className="underline">Informações</h5>
                    <ul>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Política de Cookies</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                    </ul>
                </article>
                <article className="max-sm:text-right">
                    <h5 className="underline">Contatos</h5>
                    <ul>
                        <li><a href="mailto:jefersonlaurentino@outlook.com.br" target="_blank">E-mail</a></li>
                        <li><a href="https://jefersonlaurentino.github.io/Portfolio/"
                         target="_blank">Portfólio</a></li>
                        <li><a href="https://www.linkedin.com/in/jeferson-laurentino-dev" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li><a href="https://github.com/jefersonlaurentino" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </article>
                <article>
                    <h5 className="underline">Cliente</h5>
                    <ul>
                        <li><Link href={'/login'}>Login/Cadastro</Link></li>
                        <li><Link href={'/perfil'}>Perfil</Link></li>
                        <li><Link href={'/biblioteca'}>Meus Jogos</Link></li>
                    </ul>
                </article>
                <article className="max-sm:text-right">
                    <h5 className="underline">Linguagens Utilizadas</h5>
                    <ul>
                        <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></li>
                        <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
                        <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a></li>
                        <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind.css</a></li>
                    </ul>
                </article>
            </section>
            <section className="flex flex-col items-center">
                <DireitosReservados/>
                <p>Site criado por <a href="https://www.linkedin.com/in/jeferson-laurentino-dev" target="_blank" rel="noopener noreferrer"><strong>Jeferson Laurentino</strong></a></p>
            </section>
        </footer>
        </>
    )
}