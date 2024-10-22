"use client"

import Link from "next/link"
import Button from "../Button"
import CampoInput from "../CampoInput"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useDataLogin } from "@/contexts/contexUserLogin"
import { useState } from "react"
import { PiEye, PiEyeClosed } from "react-icons/pi"

const schamaForm = z.object({
    userLogin: z.object({
        mail: z.string().email('E-mail invalido'),
        password: z.string().min( 1,'senha obrigatório').trim().transform(value=>value.replace(/\s+/g,''))
    })
})

type formProps = z.infer<typeof schamaForm>



export default function Teste() {
    const { setReloud } = useDataLogin()
    const router = useRouter()

    const {
        handleSubmit,
        register,
        setError,
        setValue,
        formState: 
        { 
            errors 
        }
    } = useForm<formProps>({
        criteriaMode: 'all',
        mode: "all",
        resolver: zodResolver(schamaForm),
        defaultValues: {
            userLogin: {
                mail: '',
                password: ''
            }
        }
    })
    
const handleUserSubmit = (data:formProps) => {
    const getUser = window.sessionStorage.getItem(`user${data.userLogin.mail}`)
    if (getUser) {
        const usuario = JSON.parse(getUser)
        const passwordUser = usuario.dataUser.password
        if (passwordUser == data.userLogin.password) {
            window.sessionStorage.setItem('login', getUser );
            setReloud(Math.random() * 10)
            router.push('/')
            return
        }
    }
    setError('userLogin.password', {type: 'manual' , message: "senha ou E-mail invalido"})
}

const [ stateOlho , setStateOlho] = useState('password')
    
    const verSenha = () => {
        const olhoAberto = document.querySelector(".olho_aberto")
        const olhoFechado = document.querySelector(".olho_fechado")
        if ( stateOlho == "password") {
            olhoAberto?.classList.add("hidden")
            olhoFechado?.classList.remove("hidden")
        } else {
            olhoAberto?.classList.remove("hidden")
            olhoFechado?.classList.add("hidden")
        }
    }
    
    return(
        <>
        <form onSubmit={handleSubmit(handleUserSubmit)} className="p-3 flex flex-col justify-between w-full md:w-2/5">
            <h1 className="text-center text-2xl">Login</h1>
            <div className="flex flex-col gap-3">
                <div className="div_campo_input">
                    <CampoInput register={register('userLogin.mail')} type="text" placeholder="E-mail" name="email" style="placeholder:text-black"
                    functionChange={value=>{
                        const valueMail = value.currentTarget.value.replace(/\s+/g,'')
                        setValue('userLogin.mail', valueMail)
                    }}
                    />
                    {errors.userLogin?.mail?.message&& <p>{errors.userLogin.mail.message}
                    </p>}
                </div>
                <div className="div_campo_input">
                    <CampoInput 
                    register={register('userLogin.password')} 
                    type={stateOlho}
                    placeholder="Senha" 
                    name="senha" 
                    style="placeholder:text-black"
                    functionChange={value=>{
                        const valuePassword = value.currentTarget.value.replace(/\s+/g,'')
                        setValue('userLogin.password', valuePassword)
                    }}
                    >
                    <div className="absolute top-1/2 -translate-y-1/2 right-1 text-2xl cursor-pointer">
                        <PiEye className="olho_aberto" onClick={()=>{
                            verSenha()
                            setStateOlho("text")
                        }}/>
                        <PiEyeClosed className="olho_fechado hidden" onClick={()=>{
                            verSenha()
                            setStateOlho("password")
                        }}/>
                    </div>
                    </CampoInput>
                    {errors.userLogin?.password?.message&& <p>{errors.userLogin.password.message}
                    </p>}
                </div>
            </div>
            <div>
                <div className="w-full mt-3">
                    <div className="w-2/3 bg-gray-600 h-16 m-auto"></div>
                </div>
                <div className="flex justify-end my-2">
                    <Link href={"/cadastro"} className="">Esqueceu a senha?</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <Button type="submit" style="bg-blue-600 text-white">Entrar</Button>
                    <Link href={"/cadastro"} className="bg-red-600 text-center text-lg text-white font-bold py-1 rounded-lg">Criar conta</Link>
                </div>
            </div>
        </form>
        </>
    )
}