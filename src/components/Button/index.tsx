interface ButtonProps{
    children:string;
    style?:string;
    f_function?: () => void;
}

export default function Button(props:ButtonProps){
    return (
        <>
            <button onClick={props.f_function} className={`font-semibold px-3 text-xl duration-200 py-1 rounded-lg ${props.style}`}>{props.children}</button>
        </>
    )
}