'use client'

import Button from "@/components/Button";
import CampoInput from "@/components/CampoInput";
import Header from "@/components/Header";
import React, { useCallback, useEffect, useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useForm } from "react-hook-form"
import Modal from "@/components/Modal";
import Image from "next/image";
import { useImagemContext } from "@/contexts/contextFotoPerfil";
import localFont from "next/font/local";
import { useDataLogin } from "@/contexts/contexUserLogin";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { regexAge, regexCel, regexNickName_Email, regexZipCode } from "@/components/funcoes/funcoesForm";
import { useIdadeContext } from "@/contexts/contextIdade";
import { UsePopUp } from "@/contexts/contextNotificacao";
import { FetchApiZipCode, fetchCurrentDate } from "@/services/dateZipCodeService";
import { logout } from "../login/action";
const designer = localFont({src:"../fonts/designer.otf"})

const schamaForm = z.object({
    dataUser: z.object({
        name: z.string().trim().min( 1 ,'nome obrigatório'),
        nickName: z.string().trim().min(3 , 'mímino 3 caracteres').max( 10, 'limite máximo'),
        mail: z.string().trim().email("E-mail inválido"),
        cpf: z.string().trim().min(14 , 'Informe um CPF válido'),
        cel: z.string().trim().min(15 , 'Informe um celular válido'),
        age: z.string().trim().min(10 , 'Informe sua idade'),
        zipCode: z.string().trim().min(9 , 'Informe seu CEP'),
        city: z.string().trim().min(1 , 'Informe sua cidade'),
        state: z.string().trim().min(1 , 'Informe seu estado'),
        address: z.string().trim().min(1 , 'Informe seu endereço'),
        number: z.string().trim().min(1 , 'Obrigatório'),
    })
})

type formProps = z.infer<typeof schamaForm>

export default function Perfil() {
    const { imagemAvatar } = useImagemContext()
    const { dataLoginUser , setReloud } = useDataLogin()
    const [ reloudPerfil  , setReloudPerfil ] = useState(0)
    const { setPermicaoReloud } = useIdadeContext()
    const { setMsgPopUp } = UsePopUp()
    const [ zip ,setZip ] = useState(true)

    const { handleSubmit , register, watch , setError , setValue , formState: { errors } } = useForm<formProps>({
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
            }
        },
    })

    useEffect(()=>{
        if (dataLoginUser) {
            setValue('dataUser.name', dataLoginUser.dataUser.name)
            setValue('dataUser.nickName', dataLoginUser.dataUser.nickName)
            setValue('dataUser.age', dataLoginUser.dataUser.age)
            setValue('dataUser.mail', dataLoginUser.dataUser.mail)
            setValue('dataUser.cpf', dataLoginUser.dataUser.cpf)
            setValue('dataUser.cel', dataLoginUser.dataUser.cel)
            setValue('dataUser.zipCode', dataLoginUser.dataUser.zipCode)
            setValue('dataUser.city', dataLoginUser.dataUser.city)
            setValue('dataUser.state', dataLoginUser.dataUser.state)
            setValue('dataUser.address', dataLoginUser.dataUser.address)
            setValue('dataUser.number', dataLoginUser.dataUser.number)
        }
    },[dataLoginUser , reloudPerfil , setValue ])

     const setValueDataUser = useCallback((data:FetchApiZipCode) => {
        setValue('dataUser.city', data.localidade)
        setValue('dataUser.state', data.estado)
    },[ setValue ])

    const handleFetch = useCallback(
        async(zipCode: string) => {        
        const getZipCode = await fetchCurrentDate(zipCode)
        if (getZipCode) {
            setError('dataUser.zipCode', { type: 'custom' , message: '' })
            setValueDataUser(getZipCode)
            setZip(true)
        } else {
            setError('dataUser.zipCode', { type: 'custom' , message: 'Cep inválido' })
            setZip(false)
        }
    },[ setError , setZip , setValueDataUser ])

    const zipCode = watch('dataUser.zipCode')
    useEffect(()=>{
        if (zipCode?.length != 9) return;
            handleFetch(zipCode)
    },[ zipCode , handleFetch ])
    
    const handleSubmitData = (data: formProps) => {
        const avatar = window.sessionStorage.getItem('avt')
        const jogosCompradosUser = window.sessionStorage.getItem('login')
        let setDataUser;

        if (!zip) {
            setError('dataUser.zipCode', { type: 'custom' , message: 'cep invalido' })
            setMsgPopUp({checked: false , msg: 'Perfil não atualizado!'})
            return
        }
        
        //verifica se o usuário trocou o E-mail
        if (data.dataUser.mail != dataLoginUser?.dataUser.mail) {

            // verifica se ja tem a conta criada com o novo E-mail adicinado pelo usuário 
            if (sessionStorage.getItem(`user${data?.dataUser.mail}`)) {
                setMsgPopUp({checked: false , msg: 'Perfil não atualizado'})
                setError('dataUser.mail', {type: 'manual' , message: 'E-Mail já utilizado'})
                return
            }
            window.sessionStorage.removeItem(`user${dataLoginUser?.dataUser.mail}`)
        }
        
        if (avatar || dataLoginUser?.dataUser.avatar) {
            if (avatar) {
                setDataUser = {
                    ...data,
                    dataUser: {
                        ...data.dataUser,
                        password: dataLoginUser!.dataUser.password,
                        confPassword: dataLoginUser!.dataUser.confPassword,
                        avatar: avatar,
                    }
                }
            } else {
                setDataUser = {
                    ...data,
                    dataUser: {
                        ...data.dataUser,
                        password: dataLoginUser!.dataUser.password,
                        confPassword: dataLoginUser!.dataUser.confPassword,
                        avatar: dataLoginUser?.dataUser.avatar,
                    }
                }
            }
        } else {
            
            setDataUser = {
                ...data,
                dataUser: {
                    ...data.dataUser,
                    password: dataLoginUser!.dataUser.password,
                    confPassword: dataLoginUser!.dataUser.confPassword,
                }
            }
        }

        if (jogosCompradosUser) {
            const jogosComprados = JSON.parse(jogosCompradosUser)
            if (jogosComprados.dataUser.jogosComprados) {
                setDataUser = {
                    ...setDataUser,
                    dataUser: {
                        ...setDataUser.dataUser,
                        jogosComprados: [
                            ...jogosComprados.dataUser.jogosComprados,
                        ]
                    }
                }
            }
            
        }

        window.sessionStorage.setItem(`user${data.dataUser.mail}`, JSON.stringify(setDataUser))
            
        window.sessionStorage.setItem(`login`, JSON.stringify(setDataUser))
        setReloud(true)
        setPermicaoReloud(true)
        setMsgPopUp({checked: true , msg: 'Perfil atualizado!'})
    }

    const modal = () =>{
        document.querySelector('.modal')?.classList.remove("hidden")
        document.querySelector('body')!.setAttribute("style","overflow: hidden;")
    }

    return(
        <>
        <Header/>
        <main className="flex flex-col items-center max-w-5xl m-auto">
            <Modal/>
            <div>
                <h1 className={`${designer.className} text-center mt-5 text-3xl`}>MEU PERFIL</h1>
            </div>
            <div className="flex max-md:flex-col w-full gap-2">
                <aside className="flex flex-col md:w-1/4 mt-8 pl-2">
                    <div className="foto_perfil relative flex justify-center max-h-52 mb-7">
                        <div className="w-44 h-44 rounded-full drop-shadow-xl overflow-hidden border-4 border-secundaria">
                            <Image
                                src={imagemAvatar}
                                alt="imagen do seu avatar"
                                width={150}
                                className="w-full"
                            />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 dark:text-black bg-white rounded-full p-1 text-2xl border border-black cursor-pointer">
                            <VscEdit onClick={modal}/>
                        </div>
                    </div>

                    <div className="flex justify-center my-4">
                        <button onClick={()=>{
                            logout()
                            window.location.href = '/'
                            window.sessionStorage.removeItem("login")
                            window.sessionStorage.removeItem("avt")
                            window.sessionStorage.removeItem("idade")
                            window.sessionStorage.removeItem("comprasCarrinho")
                            setPermicaoReloud(true)
                        }} className="flex items-center gap-2  border-2 p-2 rounded-lg bg-terciaria hover:bg-terciariaHove">
                            <HiMiniArrowRightOnRectangle className="text-2xl"/>
                            <p>Sair da Conta</p>
                        </button>
                    </div>
                    <p className="max-md:hidden">Este site não armazena nenhum dos seus dados pessoais. Insira informações válidas para melhorar sua experiência.</p>
                </aside>

                <section className=" flex flex-col justify-center w-full md:items-center md:w-3/4 md:min-h-[calc(100vh-130px)] p-2">
                    <form onSubmit={handleSubmit(handleSubmitData)} className="w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex max-md:flex-col gap-3">
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.name')} 
                                        name="nome" 
                                        type="text"
                                        placeholder="Nome"
                                    />
                                    {errors.dataUser?.name?.message && <p>{errors.dataUser.name.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/4">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.nickName')} 
                                        name="nickName" 
                                        type="text"
                                        placeholder="NickName"
                                        functionChange={value=>setValue('dataUser.nickName' , regexNickName_Email(value))}
                                    />
                                    {errors.dataUser?.nickName?.message && <p>{errors.dataUser.nickName.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.mail')} 
                                        name="mail" 
                                        type="text"
                                        placeholder="E-mail"
                                        functionChange={value=>setValue('dataUser.mail' , regexNickName_Email(value))}
                                    />
                                    {errors.dataUser?.mail?.message && <p>{errors.dataUser.mail.message}</p>}
                                </div>
                            </div>
                            <div className="flex max-md:flex-col gap-3">
                                <div className="div_campo_input md:w-1/4">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.age')} 
                                        name="idade" 
                                        type="text"
                                        inputmode="numeric"
                                        placeholder="Idade"
                                        functionChange={value=>setValue('dataUser.age' , regexAge(value))}
                                    />
                                    {errors.dataUser?.age?.message && <p>{errors.dataUser.age.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="disabled dark:bg-dark dark:border-primaria/40 dark:placeholder-primaria/40" 
                                        register={register('dataUser.cpf')} 
                                        name="cpf" 
                                        type="text"
                                        inputmode="numeric"
                                        placeholder="CPF"
                                        disabled={true}
                                    />
                                    {errors.dataUser?.cpf?.message && <p>{errors.dataUser.cpf.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.cel')} 
                                        name="cel" 
                                        type="text"
                                        inputmode="numeric"
                                        placeholder="Celular"
                                        functionChange={value=>setValue('dataUser.cel' , regexCel(value))}
                                    />
                                    {errors.dataUser?.cel?.message && <p>{errors.dataUser.cel.message}</p>}
                                </div>
                            </div>
                            <div className="flex max-md:flex-col md:gap-3">
                                <div className="div_campo_input md:w-1/4">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.zipCode')} 
                                        name="cep" 
                                        type="text"
                                        placeholder="CEP"
                                        inputmode="numeric"
                                        functionChange={value=>setValue('dataUser.zipCode' , regexZipCode(value))}
                                    />
                                    {errors.dataUser?.zipCode?.message && <p>{errors.dataUser.zipCode.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="disabled dark:bg-dark dark:border-primaria/40 dark:placeholder-primaria/40"
                                        register={register('dataUser.city')}
                                        name="city"
                                        type="text"
                                        placeholder="Cidade"
                                        disabled={true}
                                        />
                                    {errors.dataUser?.city?.message && <p>{errors.dataUser.city.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/3">
                                    <CampoInput 
                                        style="disabled dark:bg-dark dark:border-primaria/40 dark:placeholder-primaria/40"
                                        register={register('dataUser.state')} 
                                        name="state" 
                                        type="text"
                                        placeholder="Estado"
                                        disabled={true}
                                    />
                                    {errors.dataUser?.state?.message && <p>{errors.dataUser.state.message}</p>}
                                </div>
                            </div>
                            <div className="flex max-md:flex-col md:gap-6">
                                <div className="div_campo_input  md:w-9/12">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria"
                                        register={register('dataUser.address')}
                                        name="endereco"
                                        type="text"
                                        placeholder="Endereço"
                                    />
                                    {errors.dataUser?.address?.message && <p>{errors.dataUser.address.message}</p>}
                                </div>
                                <div className="div_campo_input md:w-1/6">
                                    <CampoInput 
                                        style="dark:bg-dark dark:border-primaria dark:placeholder-primaria" 
                                        register={register('dataUser.number')} 
                                        name="numero_casa" 
                                        type="text"
                                        placeholder="N&ordm; da casa"
                                    />
                                    {errors.dataUser?.number?.message && <p>{errors.dataUser.number.message}</p>}
                                </div> 
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse justify-center gap-4 pt-7 pb-2">
                            <Button type="submit" style="bg-secundaria hover:bg-secundariaHove text-black">Salvar</Button>
                            <Button type="button" f_function={()=>setReloudPerfil(Math.random() * 10)} style="bg-terciaria hover:bg-terciariaHove text-black">Cancelar</Button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
        </>
    )
}