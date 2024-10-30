import SectionItensProdutos from '@/components/ComponetCompra/SectionItensProdutos';
import localFont from 'next/font/local';

const designer = localFont({src: "../fonts/designer.otf"})

export default function Comprar() {

    return(
        <>
        <main className='max-w-screen-xl m-auto'>
            <h1 className={`text-center my-2 text-2xl ${designer.className}`}>carrinho de compras</h1>
            <SectionItensProdutos />
        </main>
        </>
    )
}