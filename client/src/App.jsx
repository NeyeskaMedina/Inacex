import React, { useEffect } from 'react';
import { ContextProvider } from './context/UserContext';
import NavbarInacex from "./components/Nav/Navbar/NavbarInacex";
import TicketsBar from "./components/Nav/TicketsBar/TicketsBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Generals/Buttons/Whatsapp/Whatsapp";
import ScrollToTop from './components/Generals/Buttons/ScrollTop/ScrollToTop';
import ScrollTopAut from './components/Generals/Buttons/ScrollTop/ScrollTopAut';
import TerminosCondiciones from './view/TerminosCondiciones';
import Contratar from './view/Programas/Contratar'
import { useLocation } from 'react-router-dom';
import Login from './view/Login/Login'
import ProtectedRoute from './context/ProtectedRoute'
// import { useState } from 'react'
// En tu index.js o App.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import CabinaInteractiva from './components/Cabina/CabinaInteractiva';
import Horquilla from './view/NuestrosCursos/Horquilla';
import CargadorFrontal from './view/NuestrosCursos/CargadorFrontal';
import Retroexcavadora from './view/NuestrosCursos/Retroexcavadora'
import Caex from './view/NuestrosCursos/Caex'
import Bulldozer from './view/NuestrosCursos/Bulldozer';
import Motoniveladora from './view/NuestrosCursos/Motoniveladora';
import ListProspectBk from './view/ListProspectBk';
import ListProspectBkEj from './view/ListProspectBkEj';
import Programas from './view/Programas/Programas'
import ConfirmacionExitosa from "./view/Confirmacion/ConfirmacionExitosa"
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation();
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
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
            path ='/retroexcavadora'
            element ={<Retroexcavadora/>}
        />
    </Routes>
    <Routes>
        <Route
            path ='/caex'
            element ={<Caex/>}
        />
    </Routes>
    <Routes>
        <Route
            path ='/cargador-frontal'
            element ={<CargadorFrontal />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/bulldozer'
            element ={<Bulldozer />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/motoniveladora'
            element ={<Motoniveladora />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/programas'
            element ={<Programas />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/contratar'
            element ={<Contratar />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/prospectos'
            element ={
                <ProtectedRoute>
                    <ListProspectBk />
                </ProtectedRoute>
            }
        />
    </Routes>
    <Routes>
        <Route
            path ='/prospectos-ejecutivas'
            element ={
                <ProtectedRoute>
                    <ListProspectBkEj />
                </ProtectedRoute>
            }
        />
    </Routes>
    <Routes>
        <Route
            path ='/confirmacion-exitosa'
            element ={<ConfirmacionExitosa />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/ingreso'
            element ={<Login />}
        />
    </Routes>
    <Routes>
        <Route
            path ='/terminos-y-condiciones'
            element ={<TerminosCondiciones />}
        />
    </Routes>
    {/* <Routes>
        <Route
            path ='/*'
            element ={<NotFound />}
        />
    </Routes> */}

        <ScrollToTop />
        <Whatsapp number={'56976512953'} text={'Hola,%20quiero%20más%20información%20sobre%20los%20cursos'} />
    </main>
    <Footer />
     <ToastContainer />
    </ContextProvider>
    </>
  )
}

export default App
