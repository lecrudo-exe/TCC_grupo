function Home() {
    return (
        <main className="bg-black min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative">
                <img 
                    src="cimento.jpg" 
                    alt="Background" 
                    className="w-full h-96 object-cover opacity-80"
                />
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8">Como Funciona</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
                        <h3 className="text-2xl mb-4">Afiliado</h3>
                        <p className="mb-4">
                            Para o pedreiro, o processo é direto: ele cadastra suas 
                            habilidades e localização na Fixy. Quando um cliente solicita 
                            um serviço, a Fixy conecta as oportunidades compatíveis, 
                            facilitando a expansão de seus clientes e negócios.
                        </p>
                        <button className="bg-transparent text-black border-2 border-yellow-500 text-yellow-500  py-2 px-4 rounded">
                            Afiliado
                        </button>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
                        <h3 className="text-2xl mb-4">Cliente</h3>
                        <p className="mb-4">
                            Para o cliente, é fácil: ele descreve o problema e informa sua 
                            localização no app da Fixy. A plataforma filtra e apresenta 
                            pedreiros disponíveis para o trabalho, simplificando a busca 
                            por um profissional.
                        </p>
                        <button className="bg-transparent text-black border-2 border-yellow-500 text-yellow-500 py-2 px-4 rounded">
                            Cliente
                        </button>
                    </div>
                </div>
            </section>

            {/* Seção "Solicitação de serviço" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8">Solicitação de serviço</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <img 
                        src="path_to_your_image.png" 
                        alt="Worker" 
                        className="w-full md:w-1/3 h-80 object-cover opacity-80 rounded"
                    />
                    <div className="text-left max-w-md">
                        <p className="mb-4">
                            Cadastre-se, descreva o seu problema e informe sua localização. 
                            Nosso sistema filtrará pedreiros qualificados próximos de você, 
                            facilitando a contratação do profissional ideal para suas necessidades.
                        </p>
                        <button className="bg-yellow-500 text-black py-2 px-4 rounded">
                            Solicitar um serviço
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
