/* eslint-disable react/prop-types */

function CardHotel({ image, title, location, stars, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={
          image || "https://media.omnibees.com/Images/16984/Property/998225.jpg"
        }
        alt={title}
        className="w-full h-44 object-cover border-b-4 border-blue-600"
        onError={(e) =>
          (e.target.src =
            "https://media.omnibees.com/Images/16984/Property/998225.jpg")
        }
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{location}</p>
        <p className="text-yellow-500 mb-2">{"⭐".repeat(stars)}</p>
        <p className="text-sm text-gray-700">
          {description ? description.slice(0, 90) : "Descrição não disponível"} 
          {description && description.length > 90 && "..."}
          {description && description.length > 90 && (
            <button className="text-blue-500 hover:underline">Ler mais</button>
          )}
        </p>
      </div>
    </div>
  );
}

export default CardHotel;
