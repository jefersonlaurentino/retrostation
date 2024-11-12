'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type msgPopUp = {
    popUpMsg: msgObjeto | null;
    setPopUpMsg: (value: msgObjeto) => void;
}

type msgObjeto = {
    msg: ReactNode; // utilize no maximo 291 caracteres para não quebrar a responsividade
    buttonLeft?: {
        onClick?: () => void;
        text?: string;
    };
    buttonRight?: {
        onClick?: () => void;
        text?: string;
    };
    joyStickBemVindo?: boolean;
}

const ContextPopUpInteractive = createContext<msgPopUp | null>(null);

const PopUpInteractiveProvider = ({children}: {children: ReactNode}) =>{
    const [ popUpMsg , setPopUpMsg ] = useState<msgObjeto | null>(null)

    const textSaldacao = () => {
        const text = (
            <p>&quot;Olá, Seja muito bem-vindo ao RetroStation! Eu sou a <strong>Joy Stick</strong>, sua assistente virtual. Aqui, você encontra desde jogos icônicos até relíquias raras da Era de Ouro dos videogames. Que tal conhecer mais sobre o RetroStation?&quot;</p>
        )
        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> fecharPopUpInterativo(), 
                text: 'pular'
            }, 
            buttonRight: { 
                onClick: () => textSaldacao2(),
                text: 'ver mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao2 = () => {
        const text = (
            <p>
                muito bem Jeferson!
            </p>
        )
        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => fecharPopUpInterativo(), 
                text: 'fim',
            },
            joyStickBemVindo: true,
        });
    }

    useEffect(()=>{
        const msgBemVindo = sessionStorage.getItem('bemVindo')
        if (msgBemVindo === null) {
            sessionStorage.setItem('bemVindo' , '')
            abrirPopUpInterativo()
            textSaldacao()
        }
    },[])

    return (
        <>
            <ContextPopUpInteractive.Provider value={{ popUpMsg , setPopUpMsg }}>
                {children}
            </ContextPopUpInteractive.Provider>
        </>
    )
}

const UsePopUpInteractive = () => {
    const context = useContext(ContextPopUpInteractive);
    if (!context) {
        throw new Error('Erro context pop-up interactive');
    }
    return context;
};

const abrirPopUpInterativo = () => {
    const popUP = document.querySelector('.popUp_interactive');
    popUP?.classList.remove('top-full');
    popUP?.classList.add('top-0');
}

const fecharPopUpInterativo = () => {
    const popUP = document.querySelector('.popUp_interactive');
    popUP?.classList.add('top-full');
    popUP?.classList.remove('top-0');
}

export {
    ContextPopUpInteractive,
    PopUpInteractiveProvider,
    UsePopUpInteractive,
    abrirPopUpInterativo,
    fecharPopUpInterativo,
}