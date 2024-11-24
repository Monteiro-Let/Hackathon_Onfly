/* eslint-disable react/prop-types */

function CardHotel({ image, title, location, stars, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover border-b-4 border-blue-600"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{location}</p>
        <p className="text-yellow-500 mb-2">{stars}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default CardHotel;
