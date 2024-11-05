export type dataJogoProps = {
    id: string,
    titulo: string,
    descricao:string[],
    desenvolvedor:string,
    editora:string,
    dataLançamento:string,
    generos:string[],
    recursos:string[],
    promocao:boolean,
    faixaEtaria:string,
    banner:string,
    bannerName:string,
    imagens:string[],
    video:string[],
    destaques:string[],
    valorAnterior:string,
    valorAtual:string,
    jogosComprados?: string[],
    mail?: string,
}

export type datauserProps = {
    dataUser: dataJogoProps
}



const submit = (getListCartJogo:string , setTotalItensCart:(value: number)=> void) => {
    const getListJogos = JSON.parse(getListCartJogo)
    const userLogado:datauserProps = JSON.parse(window.sessionStorage.getItem('login')!)
    let setDataUser: object;
    if (userLogado.dataUser.jogosComprados) {
        setDataUser = {
            ...userLogado,
            dataUser: {
                ...userLogado.dataUser,
                jogosComprados: [
                    ...userLogado.dataUser.jogosComprados,
                    ...getListJogos,
                ]
            }
        }
    } else {
        setDataUser = {
            ...userLogado,
            dataUser: {
                ...userLogado.dataUser,
                jogosComprados: [
                    ...getListJogos,
                ]
            }
        }
    }
    window.sessionStorage.setItem('login', JSON.stringify(setDataUser))
    window.sessionStorage.setItem(`user${userLogado.dataUser.mail}`, JSON.stringify(setDataUser))
    
    if (window.sessionStorage.getItem('cart')?.includes(window.sessionStorage.getItem('comprasCarrinho')!)) {
        window.sessionStorage.removeItem('cart')
        window.sessionStorage.removeItem('comprasCarrinho')
        setTotalItensCart(0)
        return
    }
    window.sessionStorage.removeItem('cart')
}

const verMaisInfor = () => {
    const clickButton = document.querySelector('.arrow_verInfor')!
    const inforTrue = document.querySelector('.infor')!
    if (clickButton.classList.contains('-rotate-180')) {
        document.querySelector('.teste')?.classList.remove("h-24")
        document.querySelector('.teste')?.classList.add("h-60")
        clickButton.classList.remove('-rotate-180')
        inforTrue.classList.remove('min-h-20')
        inforTrue.classList.add('min-h-[155px]')
    } else {
        document.querySelector('.teste')?.classList.remove("h-60")
        document.querySelector('.teste')?.classList.add("h-24")
        clickButton.classList.add('-rotate-180')
        inforTrue.classList.remove('min-h-[155px]')
        inforTrue.classList.add('min-h-20')
    }
}

const tamanhoCard = () =>{
    const irmao = document.querySelectorAll('.car')
    if (irmao.length > 1) {
        const tamanhoIrmao = irmao[0].scrollWidth
        const ultimoIrmao = irmao.length
        irmao[ultimoIrmao-1].setAttribute('style', `max-width:${tamanhoIrmao+4}px;`)
        irmao[ultimoIrmao-2].setAttribute('style', `max-width:${tamanhoIrmao+4}px;`)
    } 
}

export {
    submit,
    verMaisInfor,
    tamanhoCard,
}