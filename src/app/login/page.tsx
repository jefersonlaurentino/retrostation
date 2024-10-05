

// import Button from "@/components/Button";
// import BannerLoja from "../../../public/image/BannerLoja.jpg"
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import { useAgeContext } from "@/contexts/FaixaEtariaJogo";
// import Idade from "../idade/[name]/page";
import Teste from "@/components/Teste";

export default function Login() {
    
    
    return(
        <>
        <section className="flex justify-center items-center">
            <Teste/>
            {/* <div className="flex max-sm:w-11/12">
                <form className="w-full md:w-1/3 bg-slate-400 px-2">
                    <div className="flex flex-col my-2">
                        <label htmlFor="">E-mail:</label>
                        <input type="text" name="" id="" className="border-4"/>
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="">E-mail:</label>
                        <input type="text" name="" id="" className="border-4"/>
                    </div>
                    <div className="flex flex-col">
                        <Button>Entrar</Button>
                        <Link href={"/"} className="text-center">Voltar ao Home</Link>
                    </div>
                </form>
                <div className="w-2/3 max-md:hidden">
                    <Image 
                        src={BannerLoja}
                        alt="Banner da Loja"
                        height={450}
                        width={600}
                        className="w-full"
                    />
                </div>
            </div> */}
        </section>
        </>
    )
}