/* eslint-disable react/prop-types */
import ReactFlipCard from "reactjs-flip-card";

function CardHotel({ image, title, location, stars, description }) {
  return (
    <ReactFlipCard
      containerStyle={{ width: "auto", height: "auto" }}
      flipTrigger="onClick"
      frontComponent={
        <div className="h-[400px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src={
              image ||
              "https://media.omnibees.com/Images/16984/Property/998225.jpg"
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
              {description
                ? description.slice(0, 90)
                : "Descrição não disponível"}
              {description && description.length > 90 && "..."}
              {description && description.length > 90 && (
                <button className="text-blue-500 hover:underline">
                  Ler mais
                </button>
              )}
            </p>
          </div>
        </div>
      }
      backComponent={
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

          {/* Área de texto rolável para a descrição */}
          <textarea
            className="w-full h-[235px] mt-10 p-2 text-sm text-gray-700 mb-4 border border-gray-300 rounded-md resize-none overflow-auto"
            value={description || "Descrição não disponível"}
            readOnly
          />

          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
          >
            Ver no Google Maps
          </a>
        </div>
      }
    />
  );
}

export default CardHotel;
