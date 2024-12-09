'use client'

import Image, { StaticImageData } from "next/image"
import { useCallback, useEffect, useState } from "react"
import sem from "../../../public/image/avatares/sem.jpg"
import Button from "../Button"
import { imagensAvatares, useImagemContext } from "@/contexts/contextFotoPerfil"
import { useDataLogin } from "@/contexts/contexUserLogin"

const  childClickLock = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
}


export default function Modal() {
    const { dataLoginUser } = useDataLogin()
    const { setImagemAvatar } = useImagemContext()
    const [ avatarSelect , setAvatarselect ] = useState(sem)
    const [ avatarAnterios , setAvatarAnterios ] = useState<string>("")
    const arrayImagensAvatares = imagensAvatares
    
    const setavt = useCallback((avt:string | null) =>{
        const avtSelect = avt
        if (avtSelect) {
            arrayImagensAvatares.forEach((avt)=>{
                if (avt[0] == avtSelect) {
                    setAvatarselect(avt[1]as StaticImageData)
                }
            })
        } else {
            setAvatarselect(sem)
        }
    },[ setAvatarselect , arrayImagensAvatares ])
        
    useEffect(()=>{
        if (dataLoginUser) {
            setavt(dataLoginUser!.dataUser.avatar!)
        }
    },[dataLoginUser , setavt ])
    
    
    
const fecharmodal = () =>{
    document.querySelector('.modal')?.classList.add("hidden")
    document.querySelector('body')!.removeAttribute("style")
    setavt(window.sessionStorage.getItem('avt'))
}

const setAvatarDateUser = () =>{
    setImagemAvatar(avatarSelect)
    const dataUser = {
        ...dataLoginUser,
        dataUser: {
            ...dataLoginUser?.dataUser,
            avatar: avatarAnterios,
        },
    }
    window.sessionStorage.setItem("avt", avatarAnterios)
    window.sessionStorage.setItem("login",JSON.stringify(dataUser))
    window.sessionStorage.setItem(`user${dataLoginUser?.dataUser.mail}`,JSON.stringify(dataUser))

    fecharmodal()
}

    return(
        <>
        <div onClick={fecharmodal} className="modal fixed top-0 left-0 w-full h-full bg-neutral-200/80 dark:bg-dark z-10 flex justify-center items-center mt-6 hidden">
            <div onClick={(e)=>childClickLock(e)} className="w-10/12 max-w-2xl h-4/5 rounded-lg shadow-2xl overflow-hidden bg-primaria text-black">
                <div className="flex flex-col gap-2 items-center p-2 h-[calc(100%-50px)] overflow-x-hidden">
                    <h2>Escolha um Avatar</h2>
                    <Image
                        src={avatarSelect}
                        alt="imagen do avatar selecionado"
                        width={150}
                        className="imgSelect rounded-full"
                    />
                    <p className="mt-3">Imagens Criadas Por AI</p>
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
                </div>
                    <div className="flex justify-center pt-2 gap-2">
                        <Button style="bg-terciaria text-white" f_function={()=>{
                            fecharmodal()
                        }}>Cancelar</Button>
                        <Button style="bg-secundaria text-black" f_function={setAvatarDateUser}>Salvar</Button>
                    </div>
            </div>
        </div>
        </>
    )
}