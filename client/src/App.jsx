import React, { useEffect } from 'react';
import { ContextProvider } from './context/UserContext';
import NavbarInacex from "./components/Navbar/NavbarInacex";
import TicketsBar from "./components/TicketsBar/TicketsBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Buttons/Whatsapp/Whatsapp";
import ScrollToTop from './components/Buttons/ScrollTop/ScrollToTop';
// import { useState } from 'react'
// En tu index.js o App.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import CabinaInteractiva from './components/Cabina/CabinaInteractiva';
import Horquilla from './view/NuestrosCursos/Horquilla';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []); 

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
        <ScrollToTop />
        <Whatsapp />
    </main>
    <Footer />
    </ContextProvider>
    </>
  )
}

export default App
