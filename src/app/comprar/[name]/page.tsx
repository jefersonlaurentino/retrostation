'use client'
import { calculoDesconto, jogos } from '../../../components/funcoes/index'
import Image from 'next/image'
import livre from "../../../../public/image/faixaEtaria/livre.jpg";
import maior10 from "../../../../public/image/faixaEtaria/maior10.jpg";
import maior12 from "../../../../public/image/faixaEtaria/maior12.jpg";
import maior14 from "../../../../public/image/faixaEtaria/maior14.jpg";
import maior16 from "../../../../public/image/faixaEtaria/maior16.jpg";
import maior18 from "../../../../public/image/faixaEtaria/maior18.jpg";
import { FaRegTrashAlt } from 'react-icons/fa';

const faixaEtaria = () =>{
    const faixa = jogos[5].faixaEtaria
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


const arrayJogos:number[] = []
jogos.forEach((j, i )=>{
    if (i == 2 ) {
        arrayJogos.push(i)
    } else if (i == 0) {
        arrayJogos.push(i)
    } else if (i == 4) {
        arrayJogos.push(i)
    }
})

const comprarJogos = () => {
    const userLogado = JSON.parse(window.sessionStorage.getItem('login')!)
    const setDataUser = {
        ...userLogado,
        dataUser: {
            ...userLogado.dataUser,
            jogosComprados: [
                ...userLogado.dataUser.jogosComprados,
                ...arrayJogos,
            ]
        }
    }
    window.sessionStorage.setItem('login', JSON.stringify(setDataUser))
    window.sessionStorage.setItem(`user${userLogado.dataUser.mail}`, JSON.stringify(setDataUser))
}

export default function Comprar() {
    console.log(jogos);
    console.log(arrayJogos);
    
    return(
        <>
        <main>
            <section className='p-2'>
                <article className='flex border-2 rounded-md overflow-hidden max-w-[530px]'>
                    <Image
                        src={jogos[5].banner}
                        alt='jogo'
                        width={150}
                        height={150}
                    />
                    <section className='p-2 w-3/4'>
                        <div className='flex flex-col md:flex-row justify-between w-full'>
                            <h2>{jogos[5].titulo}</h2>
                            <div className='flex gap-2'>
                                {jogos[0].promocao == true ? 
                                    <>
                                        <p className='bg-blue-600 text-white rounded-full px-1'>{calculoDesconto(jogos[0].valorAnterior, jogos[0].valorAtual)}</p>
                                        <p className='line-through text-neutral-500'>R${jogos[0].valorAnterior}</p> 
                                        <p>R${jogos[0].valorAtual}</p> 
                                    </>
                                : <p>R$ {jogos[5].valorAtual}</p>
                                }
                            </div>
                        </div>

                        <div className='flex items-center gap-2 m-3 border-2 rounded-md p-1'>
                            <Image 
                                src={faixaEtaria()}
                                alt='faixa etaria'
                                width={50}
                                height={50}
                                className='rounded-lg'
                            />
                            <p className='text-center'>Violençia, linguagem impropria</p>
                        </div>
                        <div className='flex justify-end mx-3'>
                            <button className='flex gap-2 items-center'><FaRegTrashAlt /> remover</button>
                        </div>
                    </section>
                </article>

            </section>
            
            <section>
                <button onClick={comprarJogos}>
                    comprar
                </button>
            </section>
        </main>
        </>
    )
}