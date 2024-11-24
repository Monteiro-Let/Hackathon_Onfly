import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import App from "./App.jsx";
import HotelGrid from "./components/HotelGrid/HotelGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { HotelProvider } from "./context/HotelContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Banner />
    <div className="bg-off_white pb-[40px]">
      <HotelProvider>
        <HotelGrid />
      </HotelProvider>
    </div>
    <div className="px-[150px] py-[15px]">
      <Footer />
    </div>
    {/* <App /> */}
  </StrictMode>
);
