/* eslint-disable react/prop-types */
import CardHotel from "../CardHotel/CardHotel";
import HotelFilters from "../HotelFilters/HotelFilters";

function HotelGrid({ hotels }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-[#121212] text-center text-2xl font-bold leading-[normal] pb-[28px]">
        <h1>Nosso Lugares</h1>
      </div>
      <HotelFilters onFilter={(filters) => console.log(filters)} />
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
