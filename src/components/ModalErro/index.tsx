import Image from "next/image";
import joy from "../../../public/image/joyStick/joyStick_aviso.png"
import Link from "next/link";
import Header from "../Header";

export default function ModalErro() {
    return(
        <>
            <Header/>
            <section className="alert_erro flex flex-col items-center justify-center gap-3 w-full h-[calc(100vh-53px)] text-2xl">
                <h1 className="px-2 text-center">Desculpa! produto não encontrado.</h1>
                <Link href={'/'} className="bg-blue-700 px-2 py-1 rounded-lg text-white">voltar a home</Link>
                <div className="alert absolute bottom-0 right-0 -z-10">
                    <Image
                        src={joy}
                        width={350}
                        height={350}
                        priority
                        sizes="(max-width: 450px) 150px"
                        alt="imagem da joy stick argumentando."
                        className="max-sm:w-54 max"
                    />
                </div>
            </section>
        </>
    )
}