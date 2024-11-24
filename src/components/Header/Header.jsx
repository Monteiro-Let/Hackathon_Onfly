import logo from "../../assets/Logo-Onfly.png";

function Header() {
    return (
        <header>
            <nav className="bg-off_white w-full p-4 flex flex-col lg:flex-row items-center lg:justify-between shadow-md">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <img src={logo} alt="Logo Onfly" className="h-15" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                    <div className="text-dark_medium_blue w-full lg:w-auto">
                        <select
                            className="w-full lg:w-auto outline-none bg-off_white text-dark_medium_blue font-semibold cursor-pointer 
               appearance-none border border-gray-300 rounded-full px-4 py-1  hover:border-dark_medium_blue"
                            onChange={(e) => window.location.href = e.target.value}
                        >
                            <option value="" className="disabled selected text-center">REDES HOTELEIRAS</option>
                            <option value="https://all.accor.com">Accor</option>
                            <option value="https://www.amerishoteis.com.br">Ameris</option>
                            <option value="https://www.letsatlantica.com.br">Atlântica</option>
                            <option value="https://www.choicehotels.com/pt-br">Choice</option>
                            <option value="https://www.nacionalinn.com.br">Nacional Inn</option>
                            <option value="https://www.wyndhamhotels.com/pt-br">Wyndham</option>
                            <option value="https://windsorhoteis.com">Windsor</option>
                            <option value="https://www.nobilehoteis.com.br">Nobile Hotels & Resorts</option>
                            <option value="https://www.slavierohoteis.com.br">Hotéis Slaviero</option>
                            <option value="https://bristolhoteis.com.br">Bristol Hotelaria</option>
                            <option value="https://www.andradehoteis.com.br">Rede Andrade</option>
                            <option value="https://sambahoteis.com">Samba Hotéis</option>
                        </select>
                    </div>
                    <div className="w-full lg:w-auto text-center">
                        <button
                            className="w-full lg:w-auto bg-orange px-4 py-2 rounded-full text-sm text-white hover:bg-hover_orange 
                                       focus:ring-2 focus:ring-orange focus:outline-none transition"
                        >
                            Fale com Especialista
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
