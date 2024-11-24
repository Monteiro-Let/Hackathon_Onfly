/* eslint-disable react/prop-types */
import { useState } from 'react';

function HotelFilters({ onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [city, setCity] = useState('');

  const categories = [
    'Hotel',
    'Pousada',
    'Hostel ou Albergue',
    'Resort',
    'Hotel Fazenda',
    'Flat/Apart Hotel',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilter({ category, city });
  };

  const handleSearch = () => {
    onFilter({ category: selectedCategory, city });
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Adicionar cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default HotelFilters;
