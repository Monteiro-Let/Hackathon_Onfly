import { useContext, useState } from "react";
import { HotelContext } from "../../context/HotelContext";

function HotelFilters() {
  const { filterHotels } = useContext(HotelContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [city, setCity] = useState("");

  const categories = [
    "Hotel",
    "Pousada",
    "Hostel ou Albergue",
    "Resort",
    "Hotel Fazenda",
    "Flat/Apart Hotel",
  ];

  const handleCategoryClick = (category) => {
    const newCategory = selectedCategory === category ? "" : category;
    setSelectedCategory(newCategory);
    filterHotels({ category: newCategory, city });
  };

  const handleSearch = () => {
    filterHotels({ category: selectedCategory, city });
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full transition text-white focus:outline-none ${
              selectedCategory === category
                ? "bg-blue-600 scale-110"
                : "bg-medium_blue hover:bg-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-4 w-full max-w-lg">
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Pesquisar seu destino"
          className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-orange-500 text-white bg-orange rounded-full hover:bg-[#dc2626]"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default HotelFilters;
