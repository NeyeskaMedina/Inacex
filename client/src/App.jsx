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
import TerminosCondiciones from './view/Terminos/TerminosCondiciones';
import PoliticasDePrivacidad from './view/Terminos/PoliticasDePrivacidad';
import Contratar from './view/Programas/Contratar'
import { useLocation } from 'react-router-dom';
import Login from './view/Login/Login';
import ProtectedRoute from './context/ProtectedRoute';
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
import ListProspectBk from './view/Extranet/ListProspectBk';
import ListProspectBkEj from './view/Extranet/ListProspectBkEj';
import Programas from './view/Programas/Programas'
import ConfirmacionExitosa from "./view/Confirmacion/ConfirmacionExitosa"
import AOS from 'aos';
import 'aos/dist/aos.css';
import PaginaNoEncontrada from './view/NotFound/PaginaNoEncontrada';
import Oferta from './components/Generals/Extras/Oferta';
// import HtmlEmail from './components/Generals/Extras/HtmlEmail';


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
        <Route
            path ='/grua-horquilla'
            element ={<Horquilla/>}
        />
        <Route
            path ='/retroexcavadora'
            element ={<Retroexcavadora/>}
        />
        <Route
            path ='/caex'
            element ={<Caex/>}
        />
        <Route
            path ='/cargador-frontal'
            element ={<CargadorFrontal />}
        />
        <Route
            path ='/bulldozer'
            element ={<Bulldozer />}
        />
        <Route
            path ='/motoniveladora'
            element ={<Motoniveladora />}
        />
        <Route
            path ='/programas'
            element ={<Programas />}
        />
        <Route
            path ='/contratar'
            element ={<Contratar />}
        />
        <Route
            path ='/prospectos'
            element ={
                <ProtectedRoute>
                    <ListProspectBk />
                </ProtectedRoute>
            }
        />
        <Route
            path ='/prospectos-ejecutivas'
            element ={
                <ProtectedRoute>
                    <ListProspectBkEj />
                </ProtectedRoute>
            }
        />
        <Route
            path ='/confirmacion-exitosa'
            element ={<ConfirmacionExitosa />}
        />
        <Route
            path ='/ingreso'
            element ={<Login />}
        />
        <Route
            path ='/terminos-y-condiciones'
            element ={<TerminosCondiciones />}
        />
         <Route
            path ='/políticas-de-privacidad'
            element ={<PoliticasDePrivacidad />}
        />
        {/* <Route
            path ='/email_extranet'
            element ={<HtmlEmail />}
        /> */}
        {/* <Route
            path ='/oferta'
            element ={<Oferta />}
        /> */}
        <Route
            path ='/*'
            element ={<PaginaNoEncontrada />}
        />
    </Routes>

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
