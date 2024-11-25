import { useState } from "react";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import LogoWhite from "../../assets/Logo-White-Onfly.png";
import axios from "axios";

function Form() {
  const [hotelData, setHotelData] = useState({
    name: "",
    city: "",
    state: "",
    address: "",
    description: "",
    district: "",
    amenities: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setHotelData({
      ...hotelData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        import.meta.env.VITE_API_URL,
        hotelData
      );
      alert("Hotel cadastrado com sucesso!");
      setHotelData({
        name: "",
        city: "",
        state: "",
        address: "",
        description: "",
        district: "",
        amenities: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar hotel:", error);
      alert("Erro ao cadastrar hotel. Tente novamente.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-blue-500 text-white">
      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center items-center lg:mb-40 lg:items-start mt-8 lg:mt-0">
        <img
          src={LogoWhite}
          className="mb-6 lg:mb-8 w-40 lg:w-auto"
          alt="Logo"
        />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold mb-4">
          Registre o seu hotel
          <br /> e aumente sua
          <br /> visibilidade!
        </h1>
        <p className="text-sm lg:text-lg text-center lg:text-left mb-8">
          Gestão simplificada e suporte 24h.
        </p>

        <Link
          to="/"
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4"
        >
          Voltar para a Home
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 mt-0 lg:mt-8 mb-8 max-w-lg mx-auto bg-white p-6 lg:p-8 rounded-2xl"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome do Hotel <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={hotelData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            Cidade <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={hotelData.city}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
            Estado <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            value={hotelData.state}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Endereço <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            value={hotelData.address}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Descrição <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={hotelData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-gray-700 font-bold mb-2"
          >
            Distrito <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="district"
            value={hotelData.district}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amenities"
            className="block text-gray-700 font-bold mb-2"
          >
            Comodidades <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="amenities"
            value={hotelData.amenities}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-orange hover:bg-hover_orange text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
        >
          {loading ? (
            <span>Carregando...</span> 
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
