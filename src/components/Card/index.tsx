import Image from "next/image";
import Link from "next/link";
import { funcoes } from "../../components/funcoes"

type cardProps = {
    id: string;
    titulo: string;
    img: string;
    promocao?: boolean;
    valorAnterior: string;
    valorAtual: string;
}

export default function Card(props:cardProps) {
    return(
        <>
        <div className="card relative bg-white min-w-52 md:min-w-52 md:w-28 hover:border-red-600 hover:scale-105 border-[3px] border-[#0E0A18] duration-300 rounded-xl before:bg-white after:bg-white dark:after:bg-[#0E0A18] dark:before:bg-[#0E0A18] before:border-black before:border-r-[3px] after:border-black after:border-l-[3px]
        ">
            <div className="flex flex-col relative overflow-hidden">
                <div className="img relative after:absolute after:content-['PS2'] after:bg-black after:text-white after:-right-7 after:top-1 after:px-8 after:text-sm after:rotate-45 after:shadow-sm after:shadow-neutral-400 rounded-t-lg overflow-hidden">
                    <Image
                        src={props.img}
                        height={70}
                        width={70}
                        alt="jogo"
                        className="w-full max-h-[250px]"
                    />
                    {props.promocao && <p className="absolute bottom-0 text-center w-full bg-blue-700">{props.promocao && props.valorAtual=="Grátis" ? "Grátis" : "Promoção"}</p>}
                </div>
                {props.promocao ? <article className="flex flex-col text-black px-2 py-1 h-full justify-around">
                    <h3 className="text-center text-xl font-bold">{props.titulo}</h3>
                    <div className="flex gap-2 items-center justify-between md:px-3 font-semibold">
                        <p className="bg-blue-600 rounded-full px-2">{props.valorAtual != "Grátis" && funcoes.calculoDesconto(props.valorAnterior,props.valorAtual)}</p>
                        <div>
                            <p className="line-through text-neutral-400 text-end">{`${(props.valorAtual != "Grátis") ? 'R$ '+props.valorAnterior : ""}`}</p>
                            <p className="text-end text-lg font-bold">{`${(props.valorAtual != "Grátis") ? 'R$ '+props.valorAtual : props.valorAtual}`}</p>
                        </div>
                    </div>
                </article> : <article className="flex flex-col justify-around text-black px-2 py-1 h-full">
                    <h3 className="text-xl font-bold text-center">{props.titulo}</h3>
                    <div className="font-bold text-lg text-right pr-1">
                        <p>R$ {props.valorAtual}</p>
                    </div>
                </article>}
            </div>
            <Link href={`/produto/${props.id}`} className="absolute top-0 left-0 w-full h-full"></Link>
        </div>
        </>
    )
}