
export default function StaticText({titulo}: {titulo: string}) {
    return(
        <>
        <section className="bg-neutral-900 text-white p-4">
            <h3>Requisitos de sistema de {titulo}</h3>
            <h4 className="mt-6 underline text-xl">Windows</h4>
            <div className="requesitos flex gap-4">
                <div className="w-1/2">
                    <div>
                    <h4 className="mb-3 underline">Mínimo recomendado</h4>
                        <h5>Versão do SO</h5>
                        <p>Windows 10 64-bit</p>
                    </div>
                    <div>
                        <h5>Processador</h5>
                        <p>Intel i5-4670k or AMD Ryzen 3 1200</p>
                    </div>
                    <div>
                        <h5>Memória</h5>
                        <p>4 GB</p>
                    </div>
                    <div>
                        <h5>Placa de vídeo</h5>
                        <p>NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750</p>
                    </div>
                    <div>
                        <h5>DirectX</h5>
                        <p>DirectX 12</p>
                    </div>
                    <div>
                        <h5>Armazenamento</h5>
                        <p>15 GB</p>
                    </div>
                    <div>
                        <h5>Idiomas suportados</h5>
                        <p>Áudio: Inglês, Espanhol.</p>
                    </div>
                
                </div>

                <div className="w-1/2">
                    <div>
                        <h4 className="mb-3 underline">Recomendado</h4>
                        <h5>Versão do SO</h5>
                        <p>Windows 10 64-bit</p>
                    </div>
                    <div>
                        <h5>Processador</h5>
                        <p>Intel i5-4670k ou AMD Ryzen 3 1200</p>
                    </div>
                    <div>
                        <h5>Memória</h5>
                        <p>4 GB</p>
                    </div>
                    <div>
                        <h5>Placa de vídeo</h5>
                        <p>NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750</p>
                    </div>
                    <div>
                        <h5>DirectX</h5>
                        <p>DirectX 12</p>
                    </div>
                    <div>
                        <h5>Armazenamento</h5>
                        <p>15 GB</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}