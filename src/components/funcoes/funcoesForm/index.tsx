import { ChangeEvent } from "react";

const regexNickName_Email = (value: ChangeEvent<HTMLInputElement>) => {
    if (value.currentTarget.id == 'nickName'){
        value.currentTarget.maxLength = 10
    } 
    const valueNick = value.currentTarget.value.replace(/\s+/g,'').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return valueNick 
}

const regexCpf = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.maxLength = 14
    const valueCpf = value.currentTarget.value.replace(/\D/g,'')
    return valueCpf.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const calcCpfValido = (valueCpf:string) => {
    const cpf = valueCpf.replace(/\D/g,'')
    
    const calcCpf = (cpf: string, ateIndex: number) =>{
        let soma=0
        for (let i = 0; i < ateIndex - 1 ; i++) {
            soma += parseInt(cpf[i]) * (ateIndex - i );
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
    const valorPrimeiroIndex =  calcCpf(cpf , 10)
    const valorSegundoIndex =  calcCpf(cpf , 11)

    return valorPrimeiroIndex === parseInt(cpf[9]) && valorSegundoIndex === parseInt(cpf[10])
}

const regexCel = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.maxLength = 15
    let valueCel = value.currentTarget.value.replace(/\D/g,'')
    valueCel = valueCel.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2')
    return valueCel
}

const regexAge = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.maxLength = 10
    let valueIdade = value.currentTarget.value.replace(/\D/g,'')
    valueIdade = valueIdade.replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2')
    return valueIdade
}

const regexZipCode = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.maxLength = 9
    let valueCep = value.target.value.replace(/\D/g,'')
    valueCep = valueCep.replace(/^(\d{5})(\d)/,'$1-$2')
    return valueCep
}

const regexPassword = (value: ChangeEvent<HTMLInputElement>) => {
    const valuePassowrd = value.target.value.replace(/\s+/g,'')
    return valuePassowrd
}

export {
    regexNickName_Email,
    regexCpf,
    regexCel,
    regexAge,
    regexZipCode,
    regexPassword,
    calcCpfValido,
}