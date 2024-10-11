import { UseFormProps } from "react-hook-form"

interface CampoInputProps{
    name:string,
    type:string,
    funcaoChan?: (value: string)=> void,
    label?:string,
    placeholder?:string,
    style?:string,
    children?: JSX.Element,
    required?:boolean,
    msg?:boolean,
    register?: UseFormProps
}

// const teste = (id:string) => {
    
//     if (id == "cdt_Conf_Senha") {
//         const senha = document.querySelector<HTMLInputElement>("#cdt_Senha")!.value
//         const confSenha = document.querySelector<HTMLInputElement>("#cdt_Conf_Senha")!.value
//         if (senha != confSenha) {
//             document.querySelector<HTMLDivElement>(".cdt_Conf_Senha")!.innerHTML="a senha não corresponde"
//         } else {
//             document.querySelector<HTMLDivElement>(".cdt_Conf_Senha")!.innerHTML=""
//         }
//     }
        
// }

export default function CampoInput(props:CampoInputProps){
    return (
        <>
        <div className="flex flex-col w-full">
            <div className="flex flex-col relative">
                <input {...props.register} type={props.type} placeholder={props.placeholder} className={`outline-none bg-transparent border-b-2 border-black/50 focus:border-principal ${props.style} dark:text-black`}/>
                {props.children}
            </div>
            {(props.msg != undefined) && <div className={`${props.name} text-red-800 h-4 flex items-center`}>senha ou e-mail incoreto</div>}
        </div>
        </>
    )
}