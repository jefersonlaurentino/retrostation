import { useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { funcoes } from "../funcoes" 

const jogos = funcoes.jogosArray

export default function Carrossel() {

    let index = 0
    useEffect(()=>{
        document.querySelectorAll(".slide")[0].classList.add("first")
        document.querySelectorAll("section label")[0].classList.add("bg-white")
         
    },[])

    useEffect(()=>{
        const efeitoCarrossel = setInterval(()=>{
            const count = document.querySelectorAll(".slide")
            const inputs = document.querySelectorAll("input[type='radio']")
            const arraySlide = []
            count.forEach((el)=>arraySlide.push(el))
            
            if (index > arraySlide.length -2) {
                index = -1
            }
            index++
            efeitoAnimado(inputs[index], Number(inputs[index].id.slice(-1)))
        },5000)

        return () => clearInterval(efeitoCarrossel)
    },[])

    
    

    const animaCarossel = (el: EventTarget , id:number) => {
        const inputs = document.querySelectorAll("input[type='radio']")
        const array: unknown[] = []
        inputs.forEach((ele)=>{
            array.push(ele)
            if (ele == el) {
                index = Number(array.indexOf(el))
                efeitoAnimado(el, id)
            }
        })
        
    }

    const efeitoAnimado = (el: EventTarget , id:number) => {
        const inputs = document.querySelectorAll("input[type='radio']")
        const label = document.querySelectorAll("label")
        label.forEach((e)=>e.classList.remove("bg-white"))
        const arrayInputs: unknown[] = []
        inputs.forEach((ev)=>{
            arrayInputs.push(ev) 
            if (ev == el) {
                const valor = arrayInputs.indexOf(el)
                document.querySelectorAll(".slide")[0].setAttribute("style", `margin-left: -${valor*25}%;`)
                document.querySelector(`.label${id}`)?.classList.add("bg-white")
            }
        })
    }

    const arrowCarrossel = (Element:EventTarget) =>{
        const count = document.querySelectorAll(".slide")
        const inputs = document.querySelectorAll("input[type='radio']")
        const arraySlide = []
        count.forEach((el)=>arraySlide.push(el))
        const arrows = document.querySelector(".div_arrow")!.children
        if (Element == arrows[0]) {
            console.log(index);
            if (index == 0) {
                console.log("if");
                
                index = 3
            } else {
                console.log("els");
                index--
            }
        } else {
            if (index == 3) {
                console.log("els if");
                index = 0
            } else {
                console.log("els els");
                index++
            }
        }
        efeitoAnimado(inputs[index], Number(inputs[index].id.slice(-1)))
    }
    

    return(
        <>
        <section className="md:w-tamanhoCarrossel w-80 m-auto mt-6 relative h-72">
            <div className="div_arrow flex justify-between w-full absolute top-1/2 -translate-y-1/2 text-3xl text-black dark:text-principal px-2 max-md:hidden">
                <SlArrowLeft className="cursor-pointer" onClick={(element)=>arrowCarrossel(element.target)}/>
                <SlArrowRight className="cursor-pointer" onClick={(element)=>arrowCarrossel(element.target)}/>
            </div>
            <div className="md:w-10/12 w-full m-auto overflow-hidden relative">
                <div className="w-[400%] flex">
                    {(jogos.map((jogo)=>jogo.banner &&<input key={jogo.id} type="radio" name="radio-btn" id={`radio${jogo.id}`} className="hidden" onClick={(value)=>animaCarossel(value.target , parseFloat(jogo.id))}/>))}
                    {jogos.map((jogo)=>jogo.banner && <div className="slide w-[25%] relative max-md:h-44 h-72 duration-1000" key={jogo.id} >
                        <Image
                            width={300}
                            height={300}
                            src={jogo.banner} 
                            alt={`Banner do jogo ${jogo.titulo}`}
                            className="w-full"
                        />
                    </div>)}
                </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 justify-center items-center">
                    {jogos.map((jogo)=>jogo.banner && <label htmlFor={`radio${jogo.id}`} key={jogo.id} className={`label${jogo.id} border-2 p-1 rounded-full cursor-pointer duration-500 hover:bg-white`} ></label>)}
                    </div>
            </div>
        </section>
        </>
    )
}