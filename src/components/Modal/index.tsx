'use client'
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import mulherMorena from "../../../public/image/avatares/mulherMorena.webp"
import mulherPaz from "../../../public/image/avatares/mulherPaz.webp"
import av from "../../../public/image/avatares/1.webp"
import av2 from "../../../public/image/avatares/2.webp"
import h from "../../../public/image/avatares/h.webp"
import h2 from "../../../public/image/avatares/h2.webp"
import sem from "../../../public/image/avatares/sem.jpg"
import Button from "../Button"
import { useImagemContext } from "@/contexts/contextFotoPerfil"

const  teste = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
}

const imagensAvatares = [
    ["mulherMorena", mulherMorena ],
    [ "mulherPaz", mulherPaz ],
    [ "h", h ],
    [ "h2", h2 ],
    [ "av", av ],
    [ "av2", av2 ],
]

export default function Modal() {
    const { setImagemAvatar } = useImagemContext()
    
    const setavt = (avt:string | null) =>{
        const avtSelect = avt
        if (avtSelect) {
            imagensAvatares.forEach((avt)=>{
                if (avt[0] == avtSelect) {
                    setAvatarselect(avt[1]as StaticImageData)
                }
            })
        } else {
            setAvatarselect(sem)
        }
    }
        
    useEffect(()=>{
        setavt(window.sessionStorage.getItem("avt"))
    },[])
    
const fecharmodal = () =>{
    document.querySelector('.modal')?.classList.add("hidden")
    document.querySelector('body')!.removeAttribute("style")
    setavt(window.sessionStorage.getItem("avt"))
}
    const [ avatarSelect , setAvatarselect ] = useState(sem)
    const [ avatarAnterios , setAvatarAnterios ] = useState<string>("")

    return(
        <>
        <div onClick={fecharmodal} className="modal fixed top-0 left-0 w-full h-full bg-neutral-200/80 z-10 flex justify-center items-center hidden">
            <div onClick={(e)=>teste(e)} className="flex flex-col items-center gap-2 p-2 bg-white w-10/12 max-w-2xl h-4/5 overflow-x-hidden rounded-lg shadow-2xl relative">
                <h2>Escolha uma imagen</h2>
                <Image
                    src={avatarSelect}
                    alt="imagen do avatar selecionado"
                    width={150}
                    className="imgSelect rounded-full"
                />
                <p className="mt-3">Imagens criadas por AI</p>
                <div className="flex gap-3 flex-wrap justify-center">
                    {imagensAvatares.map((avatar,index)=>
                        <Image 
                            key={index}
                            src={avatar[1]}
                            alt={avatar[0]as string}
                            width={60}
                            className="rounded-full cursor-pointer"
                            onClick={()=>{
                                setAvatarAnterios(avatar[0]as string)
                                setAvatarselect(avatar[1]as StaticImageData)
                            }}
                        /> 
                    )}
                </div>
                <div className="flex gap-2 absolute bottom-2">
                    <Button style="bg-neutral-500 text-white" f_function={()=>{
                        fecharmodal()
                    }}>Cancelar</Button>
                    <Button style="bg-blue-600 text-white" f_function={()=>{
                        setImagemAvatar(avatarSelect)
                        window.sessionStorage.setItem("avt",avatarAnterios)
                        fecharmodal()
                    }}>Salvar</Button>
                </div>
            </div>
        </div>
        </>
    )
}