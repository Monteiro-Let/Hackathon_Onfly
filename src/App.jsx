import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import HotelGrid from "./components/HotelGrid/HotelGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { HotelProvider } from "./context/HotelContext.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="bg-off_white pb-[40px]">
        <HotelProvider>
          <HotelGrid />
        </HotelProvider>
      </div>
      <div className="px-4 sm:px-6 lg:px-[150px] py-[15px]">
        <Footer />
      </div>
    </>
  );
}

export default App;
