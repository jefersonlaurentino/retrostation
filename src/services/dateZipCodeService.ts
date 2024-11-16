export interface FetchApiZipCode {
    estado: string,
    localidade: string,
    erro?: boolean,
}

export const fetchCurrentDate = async(zipCode: string) : Promise<FetchApiZipCode | null > => {
    try {
        const data : FetchApiZipCode  = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`).then(res => res.json())
        
        if (data.erro) {
            return null
        }

        return data;
    } catch (erro) {
        console.error('Erro na requisição de CEP: ', erro)
        return null;
    }
}