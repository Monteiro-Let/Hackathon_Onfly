import LogoWhite from "../../assets/Logo-White-Onfly.png";

function Form() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-blue-500 text-white">
            <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center items-center lg:mb-40 lg:items-start mt-8 lg:mt-0">
                <img src={LogoWhite} className="mb-6 lg:mb-8 w-40 lg:w-auto" alt="Logo"></img>
                <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold mb-4">
                    Registre o seu hotel<br></br> e aumente sua<br></br> visibilidade!
                </h1>
                <p className="text-sm lg:text-lg text-center lg:text-left mb-8">
                    Gestão simplificada e suporte 24h.
                </p>
            </div>

            <form className="w-full lg:w-1/2 mt-0 lg:mt-8 mb-8 max-w-lg mx-auto bg-white p-6 lg:p-8 rounded-2xl">
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
                        Nome do Hotel <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="nome"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="cidade" className="block text-gray-700 font-bold mb-2">
                        Cidade <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="cidade"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="estado" className="block text-gray-700 font-bold mb-2">
                        Estado <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="estado"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="endereco" className="block text-gray-700 font-bold mb-2">
                        Endereço <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="endereco"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="descricao" className="block text-gray-700 font-bold mb-2">
                        Descrição <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="descricao"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="distrito" className="block text-gray-700 font-bold mb-2">
                        Distrito <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="distrito"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="comodidades" className="block text-gray-700 font-bold mb-2">
                        Comodidades <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="comodidades"
                        required
                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange hover:bg-hover_orange text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Form;
