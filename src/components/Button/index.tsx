interface ButtonProps{
    children?:string;
    style?:string;
    f_function?: () => void;
    type?:"submit" | "reset" | "button"
}

export default function Button(props:ButtonProps){
    return (
        <>
            <button type={props.type} onClick={props.f_function} className={`font-semibold px-3 text-xl duration-200 py-1 rounded-lg ${props.style}`}>{props.children}</button>
        </>
    )
}