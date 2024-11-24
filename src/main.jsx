import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import App from './App.jsx'
import HotelGrid from './components/HotelGrid/HotelGrid.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <div className='bg-off_white'>
    <HotelGrid  hotels={[
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 1',
        location: 'Rio de Janeiro',
        stars: '⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 2',
        location: 'São Paulo',
        stars: '⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },{
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      },
      {
        image:
          'https://imghotelrioquente.com.br/wp-content/uploads/2024/04/hotel1.jpg',
        title: 'Hotel 3',
        location: 'Bahia',
        stars: '⭐⭐⭐⭐⭐',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi sed felis rhoncus aliquam.'
      }
    ]} />
    </div>
    {/* <App /> */}
  </StrictMode>,
)
