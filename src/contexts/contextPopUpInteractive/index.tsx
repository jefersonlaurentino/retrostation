'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type msgPopUp = {
    popUpMsg: msgObjeto | null;
    setPopUpMsg: (value: msgObjeto) => void;
}

type msgObjeto = {
    msg: JSX.Element; // utilize no maximo 291 caracteres para não quebrar a responsividade
    buttonLeft?: {
        onClick?: () => void;
        text?: string;
    };
    buttonRight?: {
        onClick?: () => void;
        text?: string;
    };
    joyStickBemVindo?: boolean;
}

const ContextPopUpInteractive = createContext<msgPopUp | null>(null);

const PopUpInteractiveProvider = ({children}: {children: ReactNode}) =>{
    const [ popUpMsg , setPopUpMsg ] = useState<msgObjeto | null>(null)

    const textSaldacao = () => {
        const text = <>
            <h4 className="mb-3 text-center text-2xl leading-none">Bem-vindo ao RetroStation</h4>
            <p>Olá, Seja muito bem-vindo! Eu sou a <strong>Joy Stick</strong>, sua assistente virtual. Gostaria de saber mais sobre como a RetroStation funciona e tudo o que você pode explorar por aqui?</p>
        </>
        
        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> fecharPopUpInterativo(), 
                text: 'Pular'
            }, 
            buttonRight: { 
                onClick: () => textSaldacao2(),
                text: 'Saiba Mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao2 = () => {
        const text = 
            <>
                <h4 className="mb-3 max-sm:mb-2 text-center text-2xl leading-none">O que é o RetroStation?</h4>
                <p>
                    O RetroStaion é um projeto de e-commerce para estudo. Focado em vendas de jogos clássicos de PS2 para PC. Aqui, você pode revirer a nostalgia de explorar e redescoblir os grandes títulos da época!
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao3(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao3 = () => {
        const text = 
            <>
                <h4 className="mb-3 max-sm:mb-2 text-center text-2xl leading-none">Experiência e Privacidade</h4>
                <p>
                    Para uma melhor experiência, forneça informações válidas. O Site não armazena seus dados, eles são salvos temporariamente no SessionStorage. Portanto, será necessário realizar um novo cadastro sempre que retornar.
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao2(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao4(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao4 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Cadastro e Login</h4>
                <p>
                    Cadastre-se para criar um perfil exclusivo. No cadastro, você formecerá dados como nome, e-mail, CFP , CEP e senha. Você támbem pode continuar sem cadastro, mas nesse caso não terá acesso à Experiência completa.
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao3(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao5(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao5 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Prefil e Avatar</h4>
                <p>
                    Personalize seu perfil e escolha um avatar que combine com você, é possivel alterar seus dados a qualquer nomento.
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao4(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao6(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao6 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Carrinho de compra</h4>
                <p>
                    Você pode adicionar jogos ao seu carrinho para compra-los depois. Apóis a compra, o jogo sera adicionado automaticamente à sua Biblioteca, onde você poderá ver todos os jogos adquiridos.  
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao5(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao7(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao7 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Biblioteca</h4>
                <p>
                    Não se preocupe em comprar o mesmo jogo duas verezes! Quando o jogo estar na sua biblioteca o botão de compra muda para &quot;Na Biblioteca&quot;. Assim te mostrando que você já possui este jogo. 
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao6(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao8(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao8 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Navegação e busca de jogos</h4>
                <p>
                    Explore nossa biblioteca com jogos em promoções e em destaque. Use a brra de busca para encontrar títulos específicos.
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao7(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao9(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao9 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">validação de Idade</h4>
                <p>
                    Para jogos com idade mínima recomendada, solicitarenos sua idade ao acessar pela primeira vez, caso não esteja logado. Se já estiver logado, o conteúdo será exibido, desde que você tenha a idade necessária.
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao8(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => textSaldacao10(), 
                text: 'Saiba mais',
            },
            joyStickBemVindo: true,
        });
    }

    const textSaldacao10 = () => {
        const text = 
            <>
                <h4 className="mb-3 text-center text-2xl leading-none">Bugs</h4>
                <p>
                    Como o projeto ainda está em desenvolvimento, é possível que alguns bugs apareçam. Aguardamos o seu feedback, seja para sugerir melhorias ou informar sobre qualquer erro que encontrar!
                </p>
            </>

        setPopUpMsg({
            msg: text, 
            buttonLeft: { 
                onClick: ()=> textSaldacao9(), 
                text: 'Voltar'}, 
            buttonRight: { 
                onClick: () => fecharPopUpInterativo(), 
                text: 'fechar',
            },
        });
    }

    useEffect(()=>{
        const msgBemVindo = sessionStorage.getItem('bemVindo')
        if (msgBemVindo === null) {
            sessionStorage.setItem('bemVindo' , '')
            abrirPopUpInterativo()
            textSaldacao()
        }
    },[])

    return (
        <>
            <ContextPopUpInteractive.Provider value={{ popUpMsg , setPopUpMsg }}>
                {children}
            </ContextPopUpInteractive.Provider>
        </>
    )
}

const UsePopUpInteractive = () => {
    const context = useContext(ContextPopUpInteractive);
    if (!context) {
        throw new Error('Erro context pop-up interactive');
    }
    return context;
};

const abrirPopUpInterativo = () => {
    const popUP = document.querySelector('.popUp_interactive');
    popUP?.classList.remove('top-full');
    popUP?.classList.add('top-0');
}

const fecharPopUpInterativo = () => {
    const popUP = document.querySelector('.popUp_interactive');
    popUP?.classList.add('top-full');
    popUP?.classList.remove('top-0');
}

export {
    ContextPopUpInteractive,
    PopUpInteractiveProvider,
    UsePopUpInteractive,
    abrirPopUpInterativo,
    fecharPopUpInterativo,
}