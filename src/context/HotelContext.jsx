/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HotelContext = createContext();

export function HotelProvider({ children }) {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setHotels(response.data);
        setFilteredHotels(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  useEffect(() => {
    console.log(filteredHotels);
  }, [filteredHotels]);

  function filterHotels({ category, city }) {
    setLoading(true);
    let url = import.meta.env.VITE_API_URL;
  
    if (category) {
      url += `/category/${encodeURIComponent(category)}`;
    }
    if (city) {
      url += `/city/${encodeURIComponent(city)}`;
    }
  
    axios
      .get(url)
      .then((response) => {
        setFilteredHotels(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar hotéis filtrados:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <HotelContext.Provider
  value={{
    hotels,
    setHotels,
    filteredHotels,
    setFilteredHotels,
    loading,
    filterHotels,
  }}
>
  {children}
</HotelContext.Provider>
  );
};