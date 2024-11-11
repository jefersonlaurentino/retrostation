'use client'

import { UsePopUp } from "@/contexts/contextNotificacao";
import { useEffect } from "react";

export default function Notificacao() {
    const { msgPopUp } = UsePopUp()
    
    useEffect(()=>{
        if (msgPopUp) {
            const popUp = document.querySelector('.notification');
            popUp?.classList.add('notification_anima');
            if (msgPopUp?.checked) {
                setTimeout(()=>{
                    const circle = document.querySelector('.completed .circle');
                    const check = document.querySelector('.completed .check');
                    circle?.setAttribute('style', 'animation: circle_completed .7s linear;')
                    check?.setAttribute('style', 'animation: checked .9s linear;')
                    setTimeout(()=>{
                        circle?.setAttribute("style" , 'stroke-dashoffset: 23;')
                        setTimeout(()=>{
                            check?.setAttribute("style" , 'stroke-dashoffset: 0;')
                            setTimeout(()=>{
                                circle?.setAttribute('style', 'stroke-dashoffset: 126;')
                                check?.setAttribute('style', 'stroke-dashoffset: 22;')
                            },900)
                        },200)
                    },600)
                },800)
            } else {
                setTimeout(()=>{
                    const circle = document.querySelector('.incomplete .circle');
                    const check = document.querySelector('.incomplete .check');
                    circle?.setAttribute('style', 'animation: circle_incomplete .7s linear;')
                    check?.setAttribute('style', 'animation: checked_false .7s linear;')
                    setTimeout(()=>{
                        circle?.setAttribute("style" , 'stroke-dashoffset: 0;')
                        check?.setAttribute("style" , 'stroke-dashoffset: 0;')
                        setTimeout(()=>{
                            circle?.setAttribute('style','stroke-dashoffset: 126;')
                            check?.setAttribute('style', 'stroke-dashoffset: 23;')
                        },900)
                    },600)
                },800)
            }
            setTimeout(()=>{
                popUp?.classList.remove('notification_anima')
            },2300)
        }
    },[msgPopUp])

    return(
        <>
            <section className="notification fixed top-[110vh] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border-black border rounded-md p-3 shadow-xl z-[10000] flex justify-between items-center gap-2 whitespace-nowrap">
            {
                msgPopUp?.checked ? 
                <div className="icon_checked completed relative">
                    <svg className="circle" width={45} height={45}>
                        <circle cx={23} cy={23} r={18} stroke="green" strokeWidth={3}fill="transparent"/>
                    </svg>
                    <svg className="check absolute -top-1" viewBox="0 0 24 24" width={48} height={48} xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12 L10 17 L20 7" 
                            stroke="green" 
                            strokeWidth={2} 
                            fill="transparent"
                            />
                    </svg>
                </div>
            :
            <div className="icon_checked incomplete relative">
                    <svg 
                        className="circle" 
                        width={45} 
                        height={45}
                        >
                        <circle 
                            cx={23} 
                            cy={23} 
                            r={18} 
                            stroke="red" 
                            strokeWidth={3} 
                            fill="transparent"
                            />
                    </svg>
                    <svg 
                        viewBox="0 0 24 24 " 
                        width={30} 
                        height={30} 
                        xmlns="http://www.w3.org/2000/svg"
                        className="check absolute top-2 left-2"
                        >
                        <line 
                            x1={4} 
                            y1={4} 
                            x2={20} 
                            y2={20} 
                            stroke="red" 
                            strokeWidth={3} 
                            />
                        <line 
                            x1={20} 
                            y1={4} 
                            x2={4} 
                            y2={20} 
                            stroke="red" 
                            strokeWidth={3} 
                            />
                    </svg>
                </div>
            }
            { msgPopUp?.msg &&
                <h6 className="pb-1 font-medium text-center text-lg">{msgPopUp?.msg}</h6>
            }
            </section>
        </>
    )
}