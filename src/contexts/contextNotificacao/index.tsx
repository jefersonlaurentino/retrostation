'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type popUpProps = {
    checked: boolean; 
    msg : string;
}

type inforPopUp = {
    msgPopUp: popUpProps | null;
    setMsgPopUp: (value: popUpProps | null) => void;
}

const ContextPopUp = createContext<inforPopUp | null>(null)

const PopUpProvider = ({children}:{children: ReactNode }) =>{
    const [ msgPopUp , setMsgPopUp ] = useState<popUpProps | null>(null);

    useEffect(()=>{
        setTimeout(()=>{
            setMsgPopUp(null)
        },2300)
    },[msgPopUp])

    return (
        <>
            <ContextPopUp.Provider value={{msgPopUp , setMsgPopUp}}>
                {children}
            </ContextPopUp.Provider>
        </>
    )
}

const UsePopUp = () =>{
    const context = useContext(ContextPopUp);
    if (!context) {
        throw new Error('erro');
    }
    return context;
}

export {
    ContextPopUp,
    PopUpProvider,
    UsePopUp,
}