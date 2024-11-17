import { fetchdate } from "@/services/dateService"

let dia = 0
const Mes = 12
let anoBix = true

const dias = () => {
    const campodia = document.querySelector(".dia .list")! as HTMLDivElement
    
    campodia.innerHTML = ""
    if (dia == 0) {
        dia = 31
    }
    const arrayDias:string[] = []
    arrayDias.push("DD")
    for (let i = 1; i <= dia; i++) {
        arrayDias.push(String(i < 10 ? `0${i}` : i))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>buttonTes(e.target!))
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const mes = () => {
    const campodia = document.querySelector(".mes .list")! as HTMLDivElement
    campodia.innerHTML = ""
    const arrayDias:string[] = []
    arrayDias.push("MM")
    for (let i = 1; i <= Mes; i++) {
        arrayDias.push(String(i < 10 ? `0${i}` : i))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>{
            escolheMes(e.target!)
            buttonTes(e.target!)
        })
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const escolheMes = (mes:EventTarget) => {
    const Mes = mes as HTMLDivElement
    const mesSelect = parseInt(Mes.textContent!)
    const campoDia = document.querySelector(".dia")

    if ([1, 3, 5, 7, 8, 10, 12].includes(mesSelect)) {
        dia = 31
    } else if ([4 , 6 , 9, 11].includes(mesSelect)){
        dia = 30
        if (campoDia!.firstChild!.firstChild!.firstChild!.textContent == "31") {
            document.querySelector(".dia p")!.textContent = "DD"
        }
    } else {
        if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 29 && anoBix && mesSelect == 2) {
            dia = 29
            if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 30) {
                document.querySelector(".dia p")!.textContent = "DD"
            }
        } else {
            if (parseFloat(campoDia!.firstChild!.firstChild!.firstChild!.textContent!) >= 28 && mesSelect== 2 && !anoBix){
                dia = 28  
                document.querySelector(".dia p")!.textContent = "DD"
            } else{
                dia = 29
            }
        }
    }
}

const anoBissexto = (ano :EventTarget) => {
    const mes = document.querySelector(".mes p")
    const anoSelect = ano as HTMLDivElement
    const anos = parseFloat(anoSelect.textContent!)
        
    if ((anos % 4 == 0 && anos % 100 != 0 ) || (anos % 400 == 0)) {
        anoBix = true
        
        if (mes!.textContent == "02") {
            if (dia > 29) {
                document.querySelector(".dia p")!.textContent = "DD"
            } 
            dia = 29
        }
    } else {
        if (dia >= 29 && mes?.textContent == "02") {
            dia = 28
        }
        if (Number(document.querySelector(".dia p")?.textContent)> 28 && mes?.textContent == "02") {
            document.querySelector(".dia p")!.textContent = "DD"
        }
        anoBix = false
        
    }
}

const ano = async() => {
    const anoAtual = await fetchdate()
    const campodia = document.querySelector(".ano .list")! as HTMLDivElement

    campodia.innerHTML = ""
    const arrayDias:string[] = []
    arrayDias.push("AAAA")
    for (let i = anoAtual; i >= anoAtual-110 ; i--) {
        arrayDias.push(String( i ))
    }

    const lista = document.createElement("ul")
    lista.setAttribute("class" , "flex flex-col w-11/12 m-auto")
    arrayDias.map(e =>{
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.setAttribute("class", "w-full px-2 text-left hover:bg-neutral-600 py-1 rounded-md text-white font-medium")
        button.addEventListener("click",(e)=>{
            anoBissexto(e.target!)
            buttonTes(e.target!)
        })
        button.innerHTML = e
        li.appendChild(button)
        lista.appendChild(li)
    })
    campodia.appendChild(lista)
}

const buttonTes = (evt:EventTarget) =>{
    const button = evt as HTMLDivElement   

    // que bem feito :) KKKK
    const valueP = button.parentNode?.parentNode?.parentNode?.parentNode as HTMLDivElement
    // chega de tantos parentNode!!!!!
    
    document.querySelector(`.${valueP.classList[0]} p`)!.textContent = button.textContent

    tes(valueP.firstChild as EventTarget)   
}

const tes = (evt:EventTarget) => {
    let e = evt as HTMLDivElement
    e = e.parentNode as HTMLDivElement

    const list = document.querySelector(`.${e.classList[0]} .list`)?.classList.contains("hidden")
    if (list) {
        if (e.classList.contains('dia')) {
            dias()
        }
        if (e.classList.contains('mes')) {
            mes()
        }
        if (e.classList.contains('ano')) {
            ano()
        }

        const listCampo = document.querySelectorAll(`.list`)
        listCampo.forEach( ev => {
            ev.classList.add("hidden")
            const seta = ev.parentNode as HTMLDivElement
            
            document.querySelector(`.${seta.classList[0]} .arrow`)?.classList.remove("anima_arrow")
        })
        document.querySelector(`.${e.classList[0]} .list`)?.classList.remove("hidden")
        document.querySelector(`.${e.classList[0]} .arrow`)?.classList.add("anima_arrow")
    } else {
        document.querySelector(`.${e.classList[0]} .arrow`)?.classList.remove("anima_arrow")
        document.querySelector(`.${e.classList[0]} .list`)?.classList.add("hidden")
    }
}

const camposPreenchidos = () => {
    const Dia = document.querySelectorAll('.campos_idade p')[0] as HTMLDivElement
    const Mes = document.querySelectorAll('.campos_idade p')[1] as HTMLDivElement
    const Ano = document.querySelectorAll('.campos_idade p')[2] as HTMLDivElement
    
    if (Dia.getAttribute("data-preenchido") && Mes.getAttribute("data-preenchido") && Ano.getAttribute("data-preenchido")) {
        return true
        
    } else {
        return false   
    }
}

export {
    dias,
    mes,
    escolheMes,
    ano,
    anoBissexto,
    buttonTes,
    tes,
    camposPreenchidos,
}