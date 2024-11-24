/* eslint-disable react/prop-types */
import CardHotel from "../CardHotel/CardHotel";

const categories = [
  "Hotel",
  "Pousada",
  "Hostel ou Albergue",
  "Resort",
  "Hotel Fazenda",
  "Flat/Apart Hotel",
];

function HotelGrid({ hotels }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-medium_blue transition text-white hover:bg-blue-600 focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Adicionar cidade"
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="px-6 py-2 bg-orange-500 text-white bg-orange rounded-full hover:bg-orange-600">
            Buscar
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <CardHotel
            key={index}
            image={hotel.image}
            title={hotel.title}
            location={hotel.location}
            stars={hotel.stars}
            description={hotel.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelGrid;
