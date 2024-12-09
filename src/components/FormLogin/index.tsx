"use client"

import Link from "next/link"
import Button from "../Button"
import CampoInput from "../CampoInput"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useDataLogin } from "@/contexts/contexUserLogin"
import { useCallback, useEffect, useState } from "react"
import { PiEye, PiEyeClosed } from "react-icons/pi"
import { useIdadeContext } from "@/contexts/contextIdade"
import { UsePopUp } from "@/contexts/contextNotificacao"
import handler from "@/app/login/action";
import ReCAPTCHA from "react-google-recaptcha";

const schamaForm = z.object({
    userLogin: z.object({
        mail: z.string().email('E-mail inválido'),
        password: z.string().min( 1,'Senha obrigatória').trim().transform(value=>value.replace(/\s+/g,'')),
        recaptcha: z.boolean({required_error: 'Por favor, confirme que você não é um robô.'})
    })
})

type formProps = z.infer<typeof schamaForm>

export default function FormLogin() {
    const { setReloud } = useDataLogin()
    const [ stateOlho , setStateOlho] = useState('password')
    const { setPermicaoReloud } = useIdadeContext()
    const router = useRouter()
    const { setMsgPopUp } = UsePopUp()

    // se o usuário estiver logado volta a tela inicial
    useEffect(()=>{
        if (window.sessionStorage.getItem('login')) router.push('/')
    },[ router ])

    const {
        handleSubmit,
        register,
        setError,
        setValue,
        watch,
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
                password: '',
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
            window.sessionStorage.removeItem('idade');
            setReloud(true)
            setPermicaoReloud(true)

            if (window.sessionStorage.getItem('pageProduto')) {
                const produto = window.sessionStorage.getItem('pageProduto')
                const id = produto!.indexOf('-')
                if (id > 0) {
                    window.sessionStorage.setItem('cart', JSON.stringify([produto!.slice( id + 1, produto!.length)]))
                    window.sessionStorage.removeItem('pageProduto')
                    handler()
                    window.location.href = produto!.slice(0 , id)
                    return
                } else {
                    window.location.href = window.sessionStorage.getItem('pageProduto')!
                    handler()
                    window.sessionStorage.removeItem('pageProduto')
                    return
                }
            } else {
                window.location.href = '/';
                handler()
                return
            }
        }
    }
    setError('userLogin.password', {type: 'manual' , message: "Senha ou E-mail inválido"})
}


    
    const verSenha = () => {
        if ( stateOlho == "password") {
            setStateOlho('text')
        } else {
            setStateOlho('password')
        }
    }

    const keyReCaptcha = '6Ld604gqAAAAAKBSGewbmbsSiFSsog4Sz7LLrCMK';

    const validReChaptcha = useCallback(() =>{
        const reCaptcha = watch('userLogin.recaptcha')
        if (!reCaptcha) {
            document.querySelector('.reCaptcha')?.classList.toggle('border-red-600')
            document.querySelector('.reCaptcha')?.classList.toggle('border-transparent')
        } else {
            document.querySelector('.reCaptcha')?.classList.toggle('border-transparent')
            document.querySelector('.reCaptcha')?.classList.toggle('border-red-600')
        }
    },[watch])
    
    return(
        <>
        <form onSubmit={handleSubmit(handleUserSubmit)} className="p-3 flex flex-col justify-between w-full md:w-2/5">
            <h1 className="text-center text-2xl">Login</h1>
            <div className="flex flex-col gap-3">
                <div className="div_campo_input">
                    <CampoInput register={register('userLogin.mail')} type="text" placeholder="E-mail" name="email"
                    focus
                    style="placeholder:text-black bg-primaria"
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
                        style="placeholder:text-black bg-primaria"
                        functionChange={value=>{
                            const valuePassword = value.currentTarget.value.replace(/\s+/g,'')
                            setValue('userLogin.password', valuePassword)
                        }}
                    >
                    <button 
                        type="button" 
                        onClick={verSenha}
                        aria-label="botão ver senha"
                        className="absolute top-1/2 -translate-y-1/2 right-1 text-2xl cursor-pointer">
                            { stateOlho != 'text' ? <PiEye/> : <PiEyeClosed/>}
                    </button>
                    </CampoInput>
                    {errors.userLogin?.password?.message&& <p>{errors.userLogin.password.message}
                    </p>}
                </div>
            </div>
            <div>
                <div className="w-full my-2 h-24 flex flex-col items-center">
                    <ReCAPTCHA 
                        {...register('userLogin.recaptcha')}
                        sitekey={keyReCaptcha}
                        className="reCaptcha border-2 border-transparent rounded-md"
                        onChange={(e)=>{
                            if (e) {
                                setValue('userLogin.recaptcha',true)
                            } else {
                                setValue('userLogin.recaptcha',false)
                            }
                        }}
                    />
                    {errors.userLogin?.recaptcha?.message && <p className="w-full text-red-600">{errors.userLogin.recaptcha.message}</p>}
                </div>
                <div className="flex justify-end my-2">
                    <button type="button" onClick={()=>{
                        setMsgPopUp({checked: false , msg: 'função ainda não adicionada'})
                    }}
                    className="">Esqueceu a senha?</button>
                </div>
                <div className="flex flex-col gap-3">
                    <Button type="submit" f_function={validReChaptcha} style="bg-secundaria hover:bg-secundariaHove text-black">Entrar</Button>
                    <Link href={"/cadastro"} className="bg-terciaria hover:bg-terciariaHove text-center text-lg text-black font-bold py-1 rounded-lg">Criar conta</Link>
                </div>
            </div>
        </form>
        </>
    )
}