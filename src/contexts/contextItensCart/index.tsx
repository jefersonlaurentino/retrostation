import  { useContext, useState , ReactNode , createContext, useEffect } from "react";

type ContextItensCartProps = {
    totalItensCart: number,
    setTotalItensCart: (num: number) => void,
}

const ContextItensCart = createContext<ContextItensCartProps | null >(null)

const ItensCartProvider = ({children}: {children: ReactNode}) => {
    const [ totalItensCart , setTotalItensCart ] = useState<number>(0)

    useEffect(()=>{
        const arrayItensCart = window.sessionStorage.getItem('comprasCarrinho')
        if (arrayItensCart){
            const totalItens:string[] = JSON.parse(arrayItensCart)
            setTotalItensCart(totalItens.length)
        }
    },[])

    return (
        <ContextItensCart.Provider value={{totalItensCart , setTotalItensCart}}>
            {children}
        </ContextItensCart.Provider>
    )
}

const useContextItensCart = () =>{
    const context = useContext(ContextItensCart);
    if(!context) {
        throw new Error("erro");
    }
    return context
}

export {
    ContextItensCart,
    ItensCartProvider,
    useContextItensCart,
}