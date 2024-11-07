import { ChangeEvent } from "react";
import { UseFormProps } from "react-hook-form"

interface CampoInputProps{
    name:string,
    type:string,
    label?:string,
    placeholder?:string,
    style?:string,
    children?: JSX.Element,
    functionChange?: (value:ChangeEvent<HTMLInputElement>)=> void,
    value?: string;
    dimencao?:string,
    register?: UseFormProps,
    maxLength?:number,
    minLength?:number,
    focus?:boolean,
    disabled?:boolean,
}

export default function CampoInput(props:CampoInputProps){

    return (
        <>
            <div className={`flex flex-col relative w-full ${props.dimencao}`}>
                <label htmlFor={props.label}></label>
                <input id={props.name} {...props.register} type={props.type} disabled={props.disabled} onChange={props.functionChange} value={props.value} autoFocus={props.focus} maxLength={props.maxLength} minLength={props.minLength} placeholder={props.placeholder} className={`pl-1 outline-none border-b-2 border-black/50 bg-primaria focus:border-secundaria ${props.style} placeholder:text-black`}/>
                {props.children}
            </div>
        </>
    )
}