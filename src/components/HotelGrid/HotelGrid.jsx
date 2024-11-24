import { useContext } from "react";
import { HotelContext } from "../../context/HotelContext";
import CardHotel from "../CardHotel/CardHotel";
import HotelFilters from "../HotelFilters/HotelFilters";

function HotelGrid() {
  const { hotels } = useContext(HotelContext);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-[#121212] text-center text-2xl font-bold leading-[normal] pb-[28px]">
        <h1>Nosso Lugares</h1>
      </div>
      <HotelFilters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <CardHotel
            key={index}
            image={hotel.thumb}
            title={hotel.name}
            location={`${hotel.city}, ${hotel.state} - ${hotel.country}`}	
            stars={hotel.stars}
            description={hotel.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelGrid;
