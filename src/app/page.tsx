
// import Carrossel from "../components/Carrossel";
import Header from "../components/Header";
import Card from "../components/Card";
import localFont from "next/font/local";
import { jogos } from "@/components/funcoes";
import Rodape from "@/components/Rodape";
// import { useContextTheme } from "@/contexts/contextThemaDark";

const designer = localFont({src:"./fonts/designer.otf"})

export default function Home() {
  // const { setHandleTheme } = useContextTheme()

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
          <h2 className={`${designer.className} text-3xl dark:text-white`}>{secao.toLocaleUpperCase()}</h2>
            <div className="flex gap-4 pb-4 overflow-y-hidden pl-2 py-2">
              {jogos.map((jogo)=> jogo.destaques.map((e)=>(e.toLocaleUpperCase() == secao.toLocaleUpperCase()) &&
                <Card key={jogo.id} id={jogo.id} titulo={jogo.titulo} img={jogo.banner} faixaEtaria={jogo.faixaEtaria} promocao={jogo.promocao} valorAnterior={jogo.valorAnterior} valorAtual={jogo.valorAtual}/>
              ))}
            </div>
        </section>
      )}
    </main>
    <Rodape/>
    {/* <footer className="flex items-center justify-center pt-32">
        <div className="flex items-center gap-2">
            <button onClick={() => setHandleTheme('light')} className="text-black dark:text-white border-2">Light Theme</button>
            <button onClick={() => setHandleTheme('dark')} className="text-black dark:text-white border-2">Light Theme</button>
            <button onClick={() => setHandleTheme('system')} className="text-black dark:text-white border-2">Light Theme</button>
        </div>
    </footer> */}
    </>
  );
}
