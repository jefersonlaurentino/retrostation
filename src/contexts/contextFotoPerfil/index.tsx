'use client'

import mulherMorena from "../../../public/image/avatares/mulherMorena.webp"
import mulherPaz from "../../../public/image/avatares/mulherPaz.webp"
import mulherLoira from "../../../public/image/avatares/mulherLoira.webp"
import mulherNegra from "../../../public/image/avatares/mulherNegra.webp"
import homemBoner from "../../../public/image/avatares/homemBoner.webp"
import homemToca from "../../../public/image/avatares/homemToca.webp"
import mulherDeOculos from "../../../public/image/avatares/mulherdeoculos.webp"
import homemDeOculos from "../../../public/image/avatares/homendeoculos.webp"
import homemNegro from "../../../public/image/avatares/homem_negro.webp"
import av from "../../../public/image/avatares/1.webp"
import av2 from "../../../public/image/avatares/2.webp"
import h2 from "../../../public/image/avatares/h2.webp"
import sem from "../../../public/image/avatares/sem.jpg"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { StaticImageData } from "next/image"
import { useDataLogin } from "../contexUserLogin"

type contextType = {
    imagemAvatar: StaticImageData,
    setImagemAvatar: (img:StaticImageData)=> void
}

const ImagemAvatar = createContext<contextType | null>(null)

const imagensAvatares = [
        ["mulher Morena", mulherMorena ],
        [ "mulher Paz", mulherPaz ],
        [ "mulher Negra", mulherNegra ],
        [ "mulher Loira", mulherLoira ],
        [ "homemNegro", homemNegro ],
        [ "homemBoner", homemBoner ],
        [ "homemToca", homemToca ],
        [ "homemDeOculos", homemDeOculos ],
        [ "mulherDeOculos", mulherDeOculos ],
        [ "h2", h2 ],
        [ "av", av ],
        [ "av2", av2 ],
    ]

const ImagemAvatarProvider = ({ children }: { children: ReactNode }) =>{
    const [ imagemAvatar , setImagemAvatar ] = useState<StaticImageData>(sem)
    const { dataLoginUser } = useDataLogin()

    useEffect(()=>{
        const imgGet = dataLoginUser?.dataUser.avatar
        imagensAvatares.map((img)=>{
        if (imgGet != undefined) {
            if (img[0]== imgGet){
                setImagemAvatar(img[1]as StaticImageData)
            }
        } else {
            setImagemAvatar(sem)
        }
        })
    },[dataLoginUser])

    return (
        <ImagemAvatar.Provider value={{ imagemAvatar , setImagemAvatar}}>
            { children }
        </ImagemAvatar.Provider>
    )
    
}

const useImagemContext = () =>{
    const context = useContext(ImagemAvatar)
    if (!context) {
        throw new Error("erro")
    }

    return context;
}



export { ImagemAvatar, ImagemAvatarProvider , useImagemContext , imagensAvatares }