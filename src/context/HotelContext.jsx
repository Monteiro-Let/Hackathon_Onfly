/* eslint-disable react-hooks/exhaustive-deps */
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
        const response = await axios.get("https://api4squad.rydev.me/api/hotels");
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
    filterHotels(filteredHotels);
  }, [filteredHotels]);

  const filterHotels = (filters) => {
    const { category, city } = filters;
    let filtered = hotels;

    //apply category filter
    if (category) {
      filtered = filtered.filter((hotel) => hotel.category === category);
    }

    //apply city filter
    if (city) {
      filtered = filtered.filter((hotel) => hotel.city.toLowerCase().includes(city.toLowerCase()));
    }

    setFilteredHotels(filtered);
  };



  return (
    <HotelContext.Provider value={{ hotels, setHotels, filteredHotels, setFilteredHotels, loading }}>
      {children}
    </HotelContext.Provider>
  );
};