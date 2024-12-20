import { IoIosArrowDown } from "react-icons/io"
import { submit, verMaisInfor } from "./funcoesPageComprar"
import { inforCart } from "./SectionItensProdutos"
import { useContextItensCart } from "@/contexts/contextItensCart"
import { useRouter } from "next/navigation"
import { abrirPopUpInterativo, fecharPopUpInterativo, UsePopUpInteractive } from "@/contexts/contextPopUpInteractive"
import { useDataLogin } from "@/contexts/contexUserLogin"

export default function TelaComprar({data}:{data:inforCart | undefined}) {
    const { setTotalItensCart } = useContextItensCart()
    const { setReloud } = useDataLogin()
    const { setPopUpMsg } = UsePopUpInteractive()
    const router = useRouter()
    
    return(
        <>
        {data &&
        <>
            <div className="teste h-24 w-full duration-300 md:hidden"></div>
            <div className="infor bottom-0 max-sm:absolute max-md:w-full md:w-1/4 min-h-20 overflow-hidden duration-300 md:pr-2">
                <section className="flex flex-col md:gap-4 bg-neutral-950 text-white max-sm:absolute top-0 w-full z-10">
                    <button 
                        className="button_infor w-full flex items-center justify-between py-1 border-b cursor-pointer p-2 md:hidden"
                        onClick={verMaisInfor} 
                    >
                        <p>Ver mais informações</p>
                        <p><IoIosArrowDown className="arrow_verInfor -rotate-180 duration-300"/></p>
                    </button>
                    <h3 className="text-center text-2xl max-md:hidden">Informação da comprar</h3>
                    <div className="flex justify-between border-b px-2 md:pt-4">
                        <p>Total de itens:</p>
                        <p>{data!.totalItens}</p>
                    </div>
                    <div className="flex justify-between border-b px-2">
                        <p>Preço:</p>
                        <p>R$ {data.valorTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between px-2 border-b">
                        <p>Desconto:</p>
                        <p>-R$ {data.valorDesconto.toFixed(2)}</p>
                    </div>
                </section>
                <section className="flex md:flex-col justify-between max-sm:items-center gap-2 p-2 bg-neutral-950 text-white max-sm:absolute bottom-0 w-full z-20">
                    <div className="flex gap-2 md:justify-between">
                        <p>Total a pagar:</p>
                        {data.valorTotal === 0 ?
                            <p>R$ 00,00</p>
                            :
                            <p>R$ {(data.valorTotal-data.valorDesconto).toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        }
                    </div>
                    <button onClick={()=>{
                        submit(data.arrayJogos , setTotalItensCart , setReloud )
                        setPopUpMsg({
                            msg: <p>Compra Concluída com sucesso!</p>,
                            buttonLeft: {
                                onClick: () => {
                                    router.push('/')
                                    fecharPopUpInterativo()
                                },
                                text: 'Voltar à Home',
                            },
                            buttonRight: {
                                onClick:() => {
                                    router.push('/biblioteca')
                                    fecharPopUpInterativo()
                                },
                                text: 'Ver na Biblioteca',
                            }
                        })
                        abrirPopUpInterativo()
                    }} className="bg-secundaria hover:bg-secundariaHove text-black rounded-lg md:my-2 px-2 py-1">
                        comprar
                    </button>
                </section>
            </div>
            </>
            }
        </>
    )
}