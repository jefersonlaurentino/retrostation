import Link from "next/link";

export default function Rodape() {
    return(
        <>
        <footer className="flex flex-col gap-3 p-3 pt-7 bg-black text-white">
            <section className="flex justify-evenly flex-wrap gap-4">
                <article>
                    <h5 className="underline">Informações</h5>
                    <ul>
                        <li><a href="mailto:" target="_blank">Quem somos</a></li>
                        <li><a href="http://" target="_blank">Política de Cookies</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Termos e Condições</a></li>
                    </ul>
                </article>
                <article>
                    <h5 className="underline">Contatos</h5>
                    <ul>
                        <li><a href="mailto:" target="_blank">E-mail</a></li>
                        <li><a href="http://" target="_blank">Portfólio</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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
                <article>
                    <h5 className="underline">Linguagens Utilizadas</h5>
                    <ul>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Next.js</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">React.js</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Tailwind.css</a></li>
                    </ul>
                </article>
            </section>
            <section className="flex flex-col items-center">
                <p>&copy; 2024 Dereitos reservados a RetroStation</p>
                <p>Site criado por <a href="http://" target="_blank" rel="noopener noreferrer">Jeferson Laurentino</a></p>
            </section>
        </footer>
        </>
    )
}