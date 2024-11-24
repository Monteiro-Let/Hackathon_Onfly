import image from "../../assets/Image-Onfly.png";

function Banner() {
    return (
        <section className="mt-12 w-screen px-4">
            <div className="bg-white flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-15 font-semibold">
                <div className="text-center lg:text-left px-4 lg:pl-20 text-font_dark_blue leading-relaxed lg:leading-loose">
                    <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
                        Encontre o hotel ideal<br />
                        para sua viagem <br />corporativa!
                    </h1>
                    <p className="pt-4 text-base lg:text-lg">
                        Descubra onde oferecemos nossos serviços!
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img 
                        src={image} 
                        alt="Imagem representando viagens corporativas" 
                        className="w-full max-w-md lg:max-w-lg object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner;
