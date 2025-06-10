import React, { useEffect } from 'react';
import { ContextProvider } from './context/UserContext';
import NavbarInacex from "./components/Navbar/NavbarInacex";
import TicketsBar from "./components/TicketsBar/TicketsBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Buttons/Whatsapp/Whatsapp";
import ScrollToTop from './components/Buttons/ScrollTop/ScrollToTop';
import ScrollTopAut from './components/Buttons/ScrollTop/ScrollTopAut'
import { useLocation } from 'react-router-dom';
// import { useState } from 'react'
// En tu index.js o App.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import CabinaInteractiva from './components/Cabina/CabinaInteractiva';
import Horquilla from './view/NuestrosCursos/Horquilla';
import Caex from './view/NuestrosCursos/Caex'
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation;
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });

      // if (!window.FB) {
      // const script = document.createElement('script');
      // script.async = true;
      // script.defer = true;
      // script.crossOrigin = 'anonymous';
      // script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0';
      // document.body.appendChild(script);
      // } else {
      //   window.FB.XFBML.parse(); // Vuelve a renderizar los plugins
      // }
  }, []); 
  useEffect(() => {
    AOS.refresh(); // actualiza AOS en cada cambio de ruta
  }, [location.pathname]);

  return (
    <>
    
    <ContextProvider>
      <nav>
    <NavbarInacex />
    <TicketsBar />
    </nav>

    <main>
    
      {/* <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <ScrollTopAut/>
      <Routes>
        <Route
            path ='/'
            element ={<Home/>}
        />
    </Routes>
    <Routes>
        <Route
            path ='/grua-horquilla'
            element ={<Horquilla/>}
        />
    </Routes>
    <Routes>
        <Route
            path ='/caex'
            element ={<Caex/>}
        />
    </Routes>
        <ScrollToTop />
        <Whatsapp />
    </main>
    <Footer />
    </ContextProvider>
    </>
  )
}

export default App
