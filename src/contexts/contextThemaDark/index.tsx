import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type themaDarkProps = {
    themeDark: string;
    setThemeDark: (vle: string) => void;
    handleTheme: string;
    setHandleTheme: (vle: string) => void;
}

const ThemaDark = createContext<themaDarkProps | null>(null)

const ThemaDarkProvider = ({children}: {children:ReactNode}) => {
    const [ themeDark , setThemeDark ] = useState<string>('system')
    const [ handleTheme , setHandleTheme ] = useState<string>('system')

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "system" || !savedTheme) {
        applySystemTheme();
        setThemeDark("system");
        } else {
        applyTheme(savedTheme);
        setThemeDark(savedTheme);
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemThemeChange = () => {
        if (!savedTheme || savedTheme === "system") {
            applySystemTheme();
        }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);
        const applyTheme = (theme: string) => {
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        }
    };

    useEffect(()=>{
        setThemeDark(handleTheme)
        localStorage.setItem('theme', handleTheme);
        if (handleTheme === 'system') {
        applySystemTheme();
        } else {
        applyTheme(handleTheme);
        }
    },[handleTheme])

    const applySystemTheme = () => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }

    return (
        <>
            <ThemaDark.Provider value={{ themeDark , setThemeDark , handleTheme , setHandleTheme }}>
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