import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Collapse,
  useTheme,
  useMediaQuery,
  Slide

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './nav.css';
import ScrollTitleBar from './ScrollTitleBar'
import { useLocation, Link } from 'react-router-dom';


const NavbarInacex = () => {
  const [open, setOpen] = useState(false);
  const [showTitleBar, setShowTitleBar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const menuRef = useRef(null);

  const location = useLocation();

    // Define los títulos por ruta
    const titlesByPath = {
      '/grua-horquilla': 'OPERACÓN SEGURA DE GRÚA HORQUILLA',
      '/caex': 'CAMIÓN EXTRACCIÓN DE ALTO TONELAJE',
      '/retroexcavadora': 'OPERACÓN SEGURA DE RETRO-EXCAVADORA',
      '/motoniveladora': 'OPERACIÓN SEGURA DE MOTONIVELADORA',
    };

    // Saber si estamos en la home
    const isHome = location.pathname === '/';

    // Obtener el título dinámicamente
    const dynamicTitle = titlesByPath[location.pathname];

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 0;
      setShowTitleBar(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MenuButtons = ({ onClick, fullWidth = false }) => (
    <>
      <Button 
          className={'btnNav'} 
          component={Link} 
          to="/nosotros" 
          onClick={onClick} 
          color="inherit" 
          fullWidth={fullWidth}
      >Nosotros
      </Button>
      <Button 
          className={'btnNav'} 
          component={HashLink} 
          smooth
          to="/#nuestros-cursos"
          onClick={onClick} 
          color="inherit" 
          fullWidth={fullWidth}
      >Nuestros cursos
      </Button>
      <Button 
          className={'btnNav'} 
          component={Link} 
          to="/contacto"
          onClick={onClick} 
          color="inherit" 
          fullWidth={fullWidth}
      >Contacto
      </Button>
      <Button 
          component={Link} 
          to="/matriculate"
          onClick={onClick} 
          color="inherit" 
          fullWidth={fullWidth}
      >
        <span className='btnMat' style={{border: '1px solid var(--verde-inacex)', borderRadius: '20px', padding: '10px'}}>Matricúlate</span>
      </Button>
    </>
  );

  return (
    <>
      {/* Título que aparece al hacer scroll */}
      {/* Mostrar ScrollTitleBar solo si no es Home y hay título */}
    {!isHome && dynamicTitle && (
      <ScrollTitleBar show={showTitleBar} title={dynamicTitle}/>
    )}


      {/* AppBar principal: solo visible si estamos en el top */}
      <Slide appear={false} direction="down" in={!showTitleBar}>
        <AppBar
          sx={{
            backgroundColor: 'black',
            color: 'white',
            boxShadow: 'none',
            px: 1,
            minHeight: '60px',
            zIndex: 1200,
          }}
          position="fixed"
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box className={'logoNav'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <img src="./LogoInacex.png" alt="Logo de Inacex sin letras" height={35} />
              <img src="./LogoInacexWhite.png" alt="Logo de Inacex con letras" width={140} height={35} />
            </Box>
            {isMobile ? (
              <IconButton onClick={handleToggle} sx={{ color: 'white' }}>
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <MenuButtons />
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Collapse menu debajo del AppBar solo en móvil */}
      {isMobile && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            ref={menuRef}
            sx={{
              width: '100%',
              border: '1px solid var(--verde-inacex)',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              px: 2,
              py: 1,
              gap: 1,
              boxShadow: 1,
              mt: '60px', // compensar altura del appbar
            }}
          >
            <MenuButtons onClick={() => setOpen(false)} fullWidth />
          </Box>
        </Collapse>
      )}
      {/* Espaciador para que el contenido no quede tapado */}
      <Toolbar />
    </>
  );
};

export default NavbarInacex;
