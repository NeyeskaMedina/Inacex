import React from 'react';
import { ContextProvider } from './context/UserContext';
import NavbarInacex from "./components/Navbar/NavbarInacex";
import TicketsBar from "./components/TicketsBar/TicketsBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Buttons/Whatsapp/Whatsapp";
// import { useState } from 'react'
// En tu index.js o App.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import CabinaInteractiva from './components/Cabina/CabinaInteractiva';
import Horquilla from './view/Horquilla';
import { useEffect } from 'react';
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
      <navbar>
    <NavbarInacex />
    <TicketsBar />
    </navbar>

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
            path ='/gruaHorquilla'
            element ={<Horquilla/>}
        />
    </Routes>

    </main>
    <Footer />
    <Whatsapp />
    </ContextProvider>
    </>
  )
}

export default App
