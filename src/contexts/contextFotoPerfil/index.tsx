'use client'

import mulherMorena from "../../../public/image/avatares/mulherMorena.webp"
import mulherPaz from "../../../public/image/avatares/mulherPaz.webp"
import av from "../../../public/image/avatares/1.webp"
import av2 from "../../../public/image/avatares/2.webp"
import h from "../../../public/image/avatares/h.webp"
import h2 from "../../../public/image/avatares/h2.webp"
import sem from "../../../public/image/avatares/sem.jpg"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { StaticImageData } from "next/image"

type contextType = {
    imagemAvatar: StaticImageData,
    setImagemAvatar: (img:StaticImageData)=> void
}

const ImagemAvatar = createContext<contextType | null>(null)


const ImagemAvatarProvider = ({ children }: { children: ReactNode }) =>{
    const [ imagemAvatar , setImagemAvatar ] = useState<StaticImageData>(sem)

//     const teste = () =>{
    const imagensAvatares = [
        ["mulherMorena", mulherMorena ],
        [ "mulherPaz", mulherPaz ],
        [ "h", h ],
        [ "h2", h2 ],
        [ "av", av ],
        [ "av2", av2 ],
    ]
    let imgGet:string|null;
    useEffect(()=>{
        imgGet = window.sessionStorage.getItem("avt")
        imagensAvatares.map((img)=>{
        if (imgGet != null) {
            if (img[0]== imgGet){
                setImagemAvatar(img[1]as StaticImageData)
            }
        } else {
            setImagemAvatar(sem)
        }
    })
    },[])

    
// }

// teste()
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



export { ImagemAvatar, ImagemAvatarProvider , useImagemContext }