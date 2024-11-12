'use client'

import Image from "next/image";
import JoyAviso from '../../../public/image/joyStick/joyStick_aviso.png'
import JoyBemVindo from '../../../public/image/joyStick/joyStick_bem-vindo.png'
import { UsePopUpInteractive } from "@/contexts/contextPopUpInteractive";

export default function PopUpInteractive() {
    const { popUpMsg  } = UsePopUpInteractive()

    return(
        <>
        <section className="popUp_interactive fixed top-full left-0 w-full h-full z-[1000] flex flex-col justify-center gap-2 max-lg:justify-end items-center max-xl: m-auto duration-500">
            <article className="bg-primaria text-black w-10/12 max-w-xl rounded-lg p-2 md:text-xl border-2 border-t-secundaria border-l-secundaria border-b-terciaria border-r-terciaria relative after:content-[''] after:h-2 after:w-2 after:bg-red-700 after:absolute sm:after:-right-2 max-sm:after:-bottom-2 max-sm:after:left-2/3 sm:after:top-1/3">
                <div>
                    {popUpMsg?.msg}
                    <div className="flex justify-around mt-4">
                        <button onClick={popUpMsg?.buttonLeft?.onClick} className="bg-terciaria rounded-md text-white w-2/6 p-1">{popUpMsg?.buttonLeft?.text}</button>
                        <button onClick={popUpMsg?.buttonRight?.onClick} className="bg-secundaria rounded-md text-black w-2/6 p-1">{popUpMsg?.buttonRight?.text}</button>
                    </div>
                </div>
            </article>
            <div className="max-lg:h-2/5"></div>
            <div className="w-72 max-lg:h-2/5 absolute bottom-0 -right-0">
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