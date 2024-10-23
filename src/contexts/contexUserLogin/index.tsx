'user client'

import { createContext, useState , ReactNode, useContext, useEffect } from "react";

type dataUserProps = {
    dataLoginUser: userProps | null,
    setReloud: (reloud:number) => void,
    setDataLoginUser: (data: userProps) => void,
}

type dataLoginUserProps = {
    name: string,
    nickName: string,
    cpf: string,
    cel: string,
    age: string,
    avatar: string,
    mail: string,
    city: string,
    state: string,
    zipCode: string,
    address: string,
    number: string,
    password: string,
    confPassword: string,
}

export type userProps = {
    dataUser: dataLoginUserProps
}

const dataUserLoginContext = createContext<dataUserProps | null>(null)

const DataUserProvider = ({ children }: {children: ReactNode}) => {
    const [ dataLoginUser , setDataLoginUser ] = useState<userProps | null>(null)
    const [ reloud , setReloud ] = useState(0)
    useEffect(()=>{
        const getUserLogin = window.sessionStorage.getItem('login')
        if (getUserLogin) {
            setDataLoginUser(JSON.parse(getUserLogin))
        }
    },[reloud])

    return (
        <dataUserLoginContext.Provider value={{ dataLoginUser , setDataLoginUser , setReloud }}>
            {children}
        </dataUserLoginContext.Provider>
    )
}

const useDataLogin = () =>{
    const context = useContext(dataUserLoginContext);
    if (!context) {
        throw new Error("useDataLogin deve ser usado dentro de um DataUserProvider");
    }
    return context
}

export { dataUserLoginContext , DataUserProvider , useDataLogin}
