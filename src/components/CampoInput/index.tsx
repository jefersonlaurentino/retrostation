
interface CampoInputProps{
    name:string,
    type:string,
    value:string,
    funcaoChan: (value: string)=> void,
    label?:string,
    placeholder?:string,
    style?:string,
    children?: JSX.Element,
    required?:boolean,
    msg?:boolean,
}

const teste = (id:string) => {
    
    if (id == "cdt_Conf_Senha") {
        const senha = document.querySelector<HTMLInputElement>("#cdt_Senha")!.value
        const confSenha = document.querySelector<HTMLInputElement>("#cdt_Conf_Senha")!.value
        if (senha != confSenha) {
            document.querySelector<HTMLAnchorElement>(".cdt_Conf_Senha")!.innerHTML="a senha não corresponde"
        } else {
            document.querySelector<HTMLAnchorElement>(".cdt_Conf_Senha")!.innerHTML=""
        }
    }
        
}

export default function CampoInput(props:CampoInputProps){
    return (
        <>
        <div className="flex flex-col">
            <label className="text-black" htmlFor={props.name}>{props.label}</label>
            <div className="flex flex-col relative">
                <input id={props.name} name={props.name} type={props.type} value={props.value} placeholder={props.placeholder} className={`p-1 outline-none border-b-2 border-black/50 focus:border-principal ${props.style} dark:text-black`} required={props.required} onChange={(evt)=>props.funcaoChan(evt.target.value)} onBlur={(evt)=>teste(evt.target.id)}/>
                {props.children}
            </div>
            {(props.msg != undefined) && <div className={`${props.name} text-red-800 pl-2 h-4 flex items-center`}></div>}
        </div>
        </>
    )
}