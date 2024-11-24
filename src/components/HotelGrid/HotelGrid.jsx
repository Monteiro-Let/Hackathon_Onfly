import { useContext, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { HotelContext } from "../../context/HotelContext";
import CardHotel from "../CardHotel/CardHotel";
import HotelFilters from "../HotelFilters/HotelFilters";

function HotelGrid() {
  const { filteredHotels, loading } = useContext(HotelContext);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8;
  const pageCount = Math.ceil(filteredHotels.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentHotels = filteredHotels.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Resetar a página para 0 sempre que os hotéis filtrados mudarem
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredHotels]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-[#121212] text-center text-2xl font-bold leading-[normal] pb-[28px]">
        <h1>Nosso Lugares</h1>
      </div>
      <HotelFilters />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-gray-600">Carregando hotéis...</p>
        </div>
      ) : filteredHotels.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-red-600">Nenhum hotel encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentHotels.map((hotel, index) => (
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
      )}
      {!loading && filteredHotels.length > 0 && (
        <div className="flex justify-center mt-6">
          <ReactPaginate
            className="flex"
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName={"px-4 py-2 border rounded hover:bg-gray-200"}
            previousLinkClassName={"px-4 py-2 border rounded hover:bg-gray-200"}
            nextLinkClassName={"px-4 py-2 border rounded hover:bg-gray-200"}
            breakLinkClassName={"px-4 py-2"}
            activeLinkClassName={"bg-gray-300"}
          />
        </div>
      )}
    </div>
  );
}

export default HotelGrid;
