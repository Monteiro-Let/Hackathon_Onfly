import logo from "../../assets/Logo-Onfly.png";

function Header() {

    return (
        <header className="">
            <nav className="bg-off_white w-screen p-7 flex justify-around">
                <div>
                    <img src={logo} />
                </div>
                <div> 
                </div>
                <div className="flex gap-4">
                <div className="text-dark_medium_blue">
                    <select className="outline-none bg-off_white">
                        <option value="">REDES HOTELEIRAS</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                        <option value="4">Opção 4</option>
                    </select>
                </div>
                <div>
                    <button className="bg-orange px-4 py-2 rounded-full text-sm text-white">Fale com Especialista</button>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;