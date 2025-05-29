import React from 'react';
import { ContextProvider } from './context/UserContext';
import NavbarInacex from "./components/Navbar/NavbarInacex";
import TicketsBar from "./components/TicketsBar/TicketsBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import { Carrito } from "./view/Carrito";
import { Footer } from "./components/Footer";
import { Pizza } from "./view/Pizza";
import Caurosel from "./components/Carousel/Carousel";
// import { useState } from 'react'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider>
    <NavbarInacex />
    <TicketsBar />
    <Caurosel />
    
    
      {/* <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      {/* <Routes>
        <Route
            path ='/'
            element ={<Home/>}
        /> 
        <Route
            path ='/carrito'
            element ={<Carrito/>}
        /> 
        <Route
            path ='/pizza/:id'
            element ={<Pizza/>}
        /> 
    </Routes> */}
    <Footer />
    </ContextProvider>
    </>
  )
}

export default App
