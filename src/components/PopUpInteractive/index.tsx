'use client'

import Image from "next/image";
import JoyAviso from '../../../public/image/joyStick/joyStick_aviso.png'
import JoyBemVindo from '../../../public/image/joyStick/joyStick_bem-vindo.png'
import { UsePopUpInteractive } from "@/contexts/contextPopUpInteractive";

export default function PopUpInteractive() {
    const { popUpMsg  } = UsePopUpInteractive()

    return(
        <>
        <section className="popUp_interactive top-full fixed left-0 w-full h-dvh z-[1000] flex flex-col justify-center gap-2 max-lg:justify-end items-center max-xl: m-auto duration-500">
            <article className="bg-primaria text-black w-10/12 max-w-xl rounded-lg p-2 md:text-xl border-2 border-t-secundaria border-l-secundaria border-b-terciaria border-r-terciaria relative">
                <div className="indent-3">
                    {popUpMsg?.msg}
                    <div className="flex justify-around mt-4">
                        <button onClick={popUpMsg?.buttonLeft?.onClick} className="bg-terciaria hover:bg-terciariaHove rounded-md text-black w-2/5 p-1">{popUpMsg?.buttonLeft?.text}</button>
                        <button onClick={popUpMsg?.buttonRight?.onClick} className="bg-secundaria hover:bg-secundariaHove rounded-md text-black w-2/5 p-1">{popUpMsg?.buttonRight?.text}</button>
                    </div>
                </div>
                <svg className="absolute bottom-[-34px] left-2/3 lg:left-[95%] max-sm:left-1/3" width={32} height={33} xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 30,30 15,0" fill="#f4f4f4" stroke="#f42E76" strokeWidth={2}/>
                </svg>
            </article>
            <div className="max-lg:h-2/5"></div>
            <div className="w-72 max-lg:h-2/5 absolute bottom-0 -right-0 max-sm:-right-10">
                <Image
                    src={popUpMsg?.joyStickBemVindo? JoyBemVindo : JoyAviso}
                    alt="Imagen da joy stick sua assistente virtual"
                    width={300}
                    height={300}
                    className="h-full w-full"
                    />
            </div>
        </section>
        </>
    )
}