import image from "../../assets/Image-Onfly.png";

function Banner() {
    return (
        <section className="mt-12 w-screen">
            <div className="bg-white h-100 flex items-center justify-center gap-24 font-medium">
                <div className="text-justify pl-5 text-font_dark_blue">
                    <h1 className="text-4xl pt-10 tracking-wide">
                        <strong>Encontre o hotel</strong><br></br>
                        ideal para sua<br></br>viagem corporativa!
                    </h1>
                    <p className="pt-2">Descubra onde oferecemos nossos serviços!</p>
                </div>
                <img src={image} className="h-45" />
            </div>
        </section>
    )
}

export default Banner;