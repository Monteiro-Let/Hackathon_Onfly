import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    {/* <App /> */}
  </StrictMode>,
)
