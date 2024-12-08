'use client'

import Button from "@/components/Button";
import CampoInput from "@/components/CampoInput";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { calcCpfValido, regexAge, regexCel, regexCpf, regexNickName_Email, regexPassword, regexZipCode } from "@/components/funcoes/funcoesForm";
import { fetchCurrentDate } from "@/services/dateZipCodeService";

const schamaForm = z.object({
    dataUser: z.object({
        name: z.string().trim().min( 1 ,'Nome obrigatório'),
        nickName: z.string().trim().min(3 , 'Mímino 3 caracteres').max( 10, 'limite máximo'),
        mail: z.string().trim().email("E-mail inválido"),
        cpf: z.string().trim().min(14 , 'Informe um CPF válido'),
        cel: z.string().trim().min(15 , 'Informe um celular válido'),
        age: z.string().trim().min(10 , 'Informe sua idade'),
        zipCode: z.string().trim().min(9 , 'Informe seu CEP'),
        city: z.string().trim().min(1 , 'Informe sua cidade'),
        state: z.string().trim().min(1 , 'Informe seu estado'),
        address: z.string().trim().min(1 , 'Informe seu endereço'),
        number: z.string().trim().min(1 , 'Obrigatóírio'),
        password: z.string().min(6 , 'Deve conter no mínimo 6 caracteres'),
        confPassword: z.string().min(6 , 'Deve conter no mínimo 6 caracteres'),
    }).refine((data)=> data.password === data.confPassword, {
        message: 'Senha destintas',
        path: ['confPassword']        
    })
})

type formProps = z.infer<typeof schamaForm>
type dataUserProps = {
    estado: string,
    localidade: string,
}


export default function Cadastro() {
    const { handleSubmit , register , watch , setValue , setError , formState: { errors } } = useForm<formProps>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schamaForm),
        defaultValues: {
            dataUser: {
                name: '',
                nickName: '',
                mail: '',
                cpf: '',
                cel: '',
                age: '',
                city: '',
                state: '',
                address: '',
                number: '',
                password: '',
                confPassword: '',
            }
        }
    })

    const router = useRouter()
    const [ stateOlho , setStateOlho] = useState('password')
    
    const verSenha = () => {
        if ( stateOlho == "password") {
            setStateOlho("text")
        } else {
            setStateOlho("password")
        }
    }
    const [ zip ,setZip ] = useState(true)
    const [ cpfValido ,setCpfValido ] = useState(true)

    const handleRegisterUser = (data: formProps) =>{
        if(!zip){
            setError('dataUser.zipCode', { type: 'custom' , message: 'CEP inválido' })
            return
        }
        if (!cpfValido) {
            setError('dataUser.cpf', { type: 'custom' , message: 'CPF inválido' })
            return
        }
        if (window.sessionStorage.getItem(`user${data.dataUser.mail}`)) {
            setError('dataUser.mail', { type: 'custom' , message: 'Erro e-mail já cadastrado' })
            return
        }
        window.sessionStorage.setItem(`user${data.dataUser.mail}`, JSON.stringify(data))
        router.push('/login')
    }
    

    const setValueDataUser = useCallback((data:dataUserProps) => {
        setValue('dataUser.city', data.localidade)
        setValue('dataUser.state', data.estado)
    },[ setValue ])


    const handleFetchSubit = useCallback( async(zipCode:string)=>{
        const getZipCode = await fetchCurrentDate(zipCode) 
        
        if (getZipCode) {
            setError('dataUser.zipCode', { type: 'custom' , message: '' })
            setValueDataUser(getZipCode)
            setZip(true)
        } else {
            setError('dataUser.zipCode', { type: 'custom' , message: 'CEP inválido' })
            setZip(false)
        }
    },[setValueDataUser , setError ]) 


    const zipCode = watch('dataUser.zipCode')
    useEffect(()=>{
        if(zipCode?.length != 9) return;
            handleFetchSubit(zipCode)
    },[ zipCode , handleFetchSubit ])

    const cpf = watch('dataUser.cpf')
    useEffect(()=>{
        if(cpf.length != 14) return;
        if(!calcCpfValido(cpf)) {
            setCpfValido(false)
            setError('dataUser.cpf', { type: 'custom' , message: 'CFP inválido' })
        } else {
            setCpfValido(true)
            setError('dataUser.cpf', { type: 'custom' , message: '' })
        }
    },[ cpf , setError ])

    return(
        <>
        <main className="w-10/12 max-w-5xl m-auto relative">
            <h1 className="text-center my-5">Crie seu cadastro</h1>
            <Link href={"/login"} className="absolute top-3 flex items-center gap-1"><FaArrowLeft/>Login</Link>
            <form onSubmit={handleSubmit(handleRegisterUser)} className="flex flex-col min-h-[calc(100vh-100px)] justify-center md:gap-5 md:mt-9 max-w-screen-lg">
                <div className="md:flex md:gap-4">
                    <div className="div_campo_input md:w-2/5">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.name')}
                            type="text"
                            name="nome"
                            placeholder="Nome Completo"
                            focus={true}
                        />
                        {errors.dataUser?.name && <p>{errors.dataUser.name.message}</p>}
                    </div>
                    <div className="div_campo_input">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.nickName')}
                            type="text"
                            name="nickName"
                            placeholder="NickName"
                            functionChange={value=>{
                                setValue('dataUser.nickName' , regexNickName_Email(value))
                            }}
                        />
                        {errors.dataUser?.nickName && <p>{errors.dataUser.nickName.message}</p>}
                    </div>
                    <div className="div_campo_input md:w-2/5">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.mail')}
                            type="text"
                            name="e-mail"
                            placeholder="E-mail"
                            functionChange={value=>{
                                setValue('dataUser.mail', regexNickName_Email(value))
                            }}
                        />
                        {errors.dataUser?.mail && <p>{errors.dataUser.mail.message}</p>}
                    </div>
                </div>

                <div className="md:flex md:gap-4 overflow-hidden">

                    <div className="div_campo_input md:w-1/4">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.cpf')}
                            type="text"
                            name="cpf"
                            inputmode="numeric"
                            placeholder="CPF"
                            functionChange={value=>{
                                setValue('dataUser.cpf', regexCpf(value))
                            }}
                        />
                        {errors.dataUser?.cpf && <p>{errors.dataUser.cpf.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/4">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.cel')}
                            type="text"
                            name="cel"
                            inputmode="numeric"
                            placeholder="Celular"
                            functionChange={value=>{
                                setValue('dataUser.cel' , regexCel(value))
                            }}
                        />
                        {errors.dataUser?.cel && <p>{errors.dataUser.cel.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/4">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.age')}
                            type="text"
                            name="age"
                            inputmode="numeric"
                            placeholder="Data de nascimento"
                            functionChange={value=>{
                                setValue('dataUser.age' , regexAge(value))
                            }}
                        />
                        {errors.dataUser?.age && <p>{errors.dataUser.age.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/5">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.zipCode')}
                            type="text"
                            name="cep"
                            inputmode="numeric"
                            placeholder="CEP"
                            functionChange={value=>{
                                setValue('dataUser.zipCode', regexZipCode(value))
                            }}
                        />
                        {errors.dataUser?.zipCode && <p>{errors.dataUser.zipCode.message}</p>}
                    </div>
                </div>
                <div className="md:flex md:gap-4">
                    <div className="div_campo_input md:w-1/4">
                        <CampoInput 
                            register={register('dataUser.city')}
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            style="disabled dark:bg-dark dark:border-primaria/40 dark:placeholder-primaria/40 dark:text-primaria"
                            disabled={true}
                        />
                        {errors.dataUser?.city && <p>{errors.dataUser.city.message}</p>}
                    </div>
                    <div className="div_campo_input md:w-1/5">
                        <CampoInput 
                            register={register('dataUser.state')}
                            type="text"
                            name="estado"
                            placeholder="Estado"
                            style="disabled dark:bg-dark dark:border-primaria/40 dark:placeholder-primaria/40 dark:text-primaria"
                            disabled={true}
                        />
                        {errors.dataUser?.state && <p>{errors.dataUser.state.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/3">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.address')}
                            type="text"
                            name="endereco"
                            placeholder="Endereço"
                        />
                        {errors.dataUser?.address && <p>{errors.dataUser.address.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/6">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.number')}
                            type="text"
                            name="num_casa"
                            placeholder="N&ordm; da casa"
                            maxLength={10}
                        />
                        {errors.dataUser?.number && <p>{errors.dataUser.number.message}</p>}
                    </div>

                </div>
                <div className="md:flex md:gap-4">
                    <div className="div_campo_input md:w-1/2">
                        <CampoInput 
                            style="dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            register={register('dataUser.password')}
                            type={stateOlho}
                            name="cdt_senha"
                            placeholder="Digite sua senha"
                            functionChange={(value)=>{
                                setValue('dataUser.password', regexPassword(value))
                            }}
                        />
                        {errors.dataUser?.password && <p>{errors.dataUser.password.message}</p>}
                    </div>

                    <div className="div_campo_input md:w-1/2">
                        <CampoInput 
                            register={register('dataUser.confPassword')}
                            type={stateOlho}
                            name="cdt_conf_senha"
                            placeholder="Digite novamente sua senha"
                            style="pr-9 dark:bg-dark dark:border-primaria dark:placeholder-primaria dark:text-primaria"
                            functionChange={(value)=>{
                                setValue('dataUser.confPassword', regexPassword(value))
                            }}
                            >
                            <button 
                                aria-label="botão ver senha"
                                type="button" 
                                onClick={verSenha}
                                className="absolute top-1/2 -translate-y-1/2 right-1 text-2xl cursor-pointer olho">
                                    {stateOlho != 'text' ? <PiEye/> : <PiEyeClosed/>}
                            </button>
                        </CampoInput>
                        {errors.dataUser?.confPassword && <p>{errors.dataUser.confPassword.message}</p>}
                    </div>
                </div>
                <div className="flex max-md:flex-col justify-center gap-4 my-5">
                    <Button type="submit" style="bg-secundaria hover:bg-secundariaHove text-black">Cadastrar-se</Button>
                    <Button type="button" f_function={()=>router.push('/')} style="bg-terciaria hover:bg-terciariaHove">Cancelar</Button>
                </div>
            </form>
        </main>
        </>
    )
}