'use client'

// import Carrossel from "../components/Carrossel";
import Header from "../components/Header";
import { useState, useEffect } from 'react'
import Card from "../components/Card";
// import localFont from "next/font/local";
import { funcoes } from "@/components/funcoes";

// const designer = localFont({src:"./fonts/DESIGNER.otf"})

export default function Home() {
  const [ , setActiveTheme ] = useState<string>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
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

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme)
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'system') {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const array = funcoes.jogos

const secao = [
  "Destaques", "Corrida" , "aventura" , "Gta"
]

  return (
    <>
    <Header/>
    {/* <Carrossel/> */}
    <main>
      {secao.map((secao)=>secao && 
        <section className="w-11/12 m-auto my-6" key={secao}>
          <h2 className={` text-3xl dark:text-white`}>{secao.toLocaleUpperCase()}</h2>
            <div className="flex gap-4 pb-4 overflow-y-hidden pl-2 py-2">
              {array.map((jogo)=> jogo.destaques.map((e)=>(e.toLocaleUpperCase() == secao.toLocaleUpperCase()) &&
                <Card key={jogo.id} id={jogo.id} titulo={jogo.titulo} img={jogo.banner} promocao={jogo.promocao} valorAnterior={jogo.valorAnterior} valorAtual={jogo.valorAtual}/>
              ))}
            </div>
        </section>
      )}
    </main>
    <footer className="flex items-center justify-center pt-32">
      <div className="flex items-center gap-2">
          <button onClick={() => handleThemeChange('light')} className="text-black dark:text-white border-2">Light Theme</button>
          <button onClick={() => handleThemeChange('dark')} className="text-black dark:text-white border-2">Light Theme</button>
          <button onClick={() => handleThemeChange('system')} className="text-black dark:text-white border-2">Light Theme</button>
        </div>
    </footer>
    </>
  );
}
