import Image from "next/image";
import joy from "../../../public/image/joyStick/joyStick_aviso.png"
import Link from "next/link";

export default function ModalErro({text , height , linkHidden }: {text:string , height?:string , linkHidden?:string }) {
    return(
        <>
            <section className={`alert_erro flex flex-col items-center justify-center gap-3 w-full ${height} text-2xl`}>
                <h2 className="px-2 text-center">{text}</h2>
                <Link href={'/'} className={`bg-blue-700 px-2 py-1 rounded-lg text-white ${linkHidden}`}>voltar a home</Link>
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