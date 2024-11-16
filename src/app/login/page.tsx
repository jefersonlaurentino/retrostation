

import BannerLoja from "../../../public/image/BannerLoja.jpg"
import Image from "next/image";
import React from "react";
import FormLogin from "@/components/FormLogin";

export default function Login() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <section className="flex flex-col w-10/12 md:max-w-[900px] rounded-lg bg-primaria overflow-hidden text-black">
                <div className="flex">
                    <FormLogin/>
                    <div className="w-3/5 max-md:hidden">
                        <Image
                            src={BannerLoja}
                            alt="Banner da Loja"
                            width={550}
                            className="h-full rounded-s-xl"
                        />
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}