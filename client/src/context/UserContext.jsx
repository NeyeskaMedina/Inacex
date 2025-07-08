import { createContext } from 'react'
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { getData } from "../helpers/getData";

export const UserContext = createContext({});

export const ContextProvider = ( {children} ) => {
         const [showTicker, setShowTicker] = useState(true);
         const location = useLocation();
         const [ userLogin, setUserLogin ] = useState(null);

            useEffect(() => {
                const currentPath = location.pathname;

                // Rutas con temporizador
                const rutasConTemporizador = 
                    [   '/grua-horquilla', 
                        '/retroexcavadora', 
                        '/caex', 
                        '/cargador-frontal', 
                        '/motoniveladora',
                        '/bulldozer',
                        '/prospectos',
                        '/confirmacion-exitosa'
                        
                    ];

                // Rutas donde SIEMPRE se ve el ticker
                const rutasVisiblesSiempre = ['/', '/contratar', '/programas'];

                // Si está en rutas con temporizador, mostrar y luego ocultar
                if (rutasConTemporizador.includes(currentPath)) {
                  setShowTicker(true);
                  const timer = setTimeout(() => {
                    setShowTicker(false);
                  }, 10000); // 10 segundos
              
                  return () => clearTimeout(timer);
                }
            
                // Si está en rutas visibles siempre, mostrar sin temporizador
                if (rutasVisiblesSiempre.includes(currentPath)) {
                  setShowTicker(true);
                } else {
                  // En las demás rutas, ocultar
                  setShowTicker(false);
                }
        }, [location]);
        const cabinaRef = useRef(null);
       
        
        const sharedContext = {
            userLogin,
            setUserLogin,
            showTicker,
            setShowTicker,
            cabinaRef,
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
