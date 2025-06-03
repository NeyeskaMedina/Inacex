import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './nav.css';

const NavbarInacex = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const menuRef = useRef(null);


  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const MenuButtons = ({ onClick, fullWidth = false }) => (
    <>
      <Button className={'btnNav'} onClick={onClick} color="inherit" fullWidth={fullWidth}>Nosotros</Button>
      <Button className={'btnNav'} onClick={onClick} color="inherit" fullWidth={fullWidth}>Nuestros cursos</Button>
      <Button className={'btnNav'} onClick={onClick} color="inherit" fullWidth={fullWidth}>Contacto</Button>
      <Button onClick={onClick} color="inherit" fullWidth={fullWidth}> <span className='btnMat' style={{border: '1px solid var(--verde-inacex)', borderRadius: '20px', padding: '10px'}}>Matricúlate</span></Button>
    </>
  );

  return (
    <>
      {/* AppBar */}
      <AppBar 
          sx={{
            backgroundColor: 'black',
            color: 'white',
            boxShadow: 'none',
            px: '1',
            height: '60px',
            zIndex: 1000,
          }} 
          position="static"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box className={'logoNav'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <img  
            src="./LogoInacex.png" 
            alt="Logo de Inacex sin letras" 
           // width={60}
            height={35}
          />
          <img 
            src="./LogoInacexWhite.png" 
            alt="Logo de Inacex con letras" 
            width={140}
            height={35}
          />
          </Box>
          {isMobile ? (
            <IconButton onClick={handleToggle} sx={{ color: 'white' }}>
              <MenuIcon 
                sx={{ fontSize: 28 }}
              
              />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <MenuButtons />
            </Box>
          )}
        </Toolbar>
      </AppBar>

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
            }}
          >
            <MenuButtons onClick={() => setOpen(false)} fullWidth />
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default NavbarInacex;
