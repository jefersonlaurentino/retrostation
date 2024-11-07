import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type themaDarkProps = {
    themeDark: string;
    setThemeDark: (vle: string) => void;
}

const ThemaDark = createContext<themaDarkProps | null>(null)

const ThemaDarkProvider = ({children}: {children:ReactNode}) => {
    const [ themeDark , setThemeDark ] = useState('')

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (savedTheme){
            setThemeDark(savedTheme)
            applyTheme(savedTheme)
        } else if (mediaQuery) {
            setThemeDark('dark')
            applyTheme('dark')
        } else {
            applyTheme('light')
            setThemeDark('light')
        }
    },[]);

        const applyTheme = (theme: string) => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else if (theme === 'light') {
                document.documentElement.classList.remove('dark');
            }
        };

    useEffect(()=>{
        if (themeDark != '') {
            setThemeDark(themeDark)
            localStorage.setItem('theme', themeDark);
            applyTheme(themeDark);
        }
    },[themeDark])

    return (
        <>
            <ThemaDark.Provider value={{ themeDark , setThemeDark }}>
                {children}
            </ThemaDark.Provider>
        </>
    )
}
    
const useContextTheme = () =>{
    const context = useContext(ThemaDark);
    if (!context) {
        throw new Error('error');
    }
    return context;
}



export {
    ThemaDark,
    ThemaDarkProvider,
    useContextTheme,
}