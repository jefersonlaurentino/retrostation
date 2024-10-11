import CampoInput from "@/components/CampoInput";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Cadastro() {
    return(
        <>
        <main className="w-10/12 max-w-5xl m-auto relative">
            <h1 className="text-center my-5">Crie seu cadastro</h1>
            <Link href={"/login"} className="absolute top-3 flex items-center gap-1"><FaArrowLeft/>Login</Link>
            <form>
                <CampoInput type="text" msg name="Nome" placeholder="Nome"/>
                <CampoInput type="text" msg name="Nick" placeholder="Nick"/>
                <CampoInput type="text" msg name="E-mail" placeholder="E-mail"/>
            </form>
        </main>
        </>
    )
}