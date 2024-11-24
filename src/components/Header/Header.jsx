import logo from "../../assets/Logo-Onfly.png";

function Header() {

    return (
        <header>
            <nav className="bg-off_white w-screen p-7 flex justify-around shadow-md p-5">
                <div className="flex-shrink-0">
                    <img src={logo} />
                </div>
                <div> 
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                <div className=" text-dark_medium_blue">
                    <select className="outline-none bg-off_white">
                        <option value="">REDES HOTELEIRAS</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                        <option value="4">Opção 4</option>
                    </select>
                </div>
                <div>
                    <button className="bg-orange px-4 py-2 rounded-full text-sm text-white hover:bg-hover_orange">Fale com Especialista</button>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;