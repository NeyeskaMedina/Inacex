import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Collapse,
  useTheme,
  useMediaQuery,
  Typography, 
  Slide,
} from '@mui/material';
import './nav.css';
import AudioPlayer from '../../Generals/Audios/AudioPlayer';

const ScrollTitleBar = ({ show, src, title }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const menuRef = useRef(null);

  return (
    <>
      {/* AppBar */}
      <Slide appear={false} direction="down" in={show}>
        <AppBar position="fixed" 
            sx={{  
                backgroundColor: 'black',
                color: 'white',
                boxShadow: 'none',
                px: '1',
                height: '60px',
                top: 0, 
                zIndex: 1201 
        }}>

        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {isMobile ? (
            <>
              <Box className={'logoNav'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <img  
                src="./LogoInacex.png" 
                alt="Logo de Inacex" 
               // width={60}
                height={35}
              />
              </Box>
              <Toolbar>
              <AudioPlayer src={src} />
                <Typography 
                    className={'roboto-condensed'} 
                    sx={{fontSize: '1.2rem'}} 
                    variant="h6">{title === 'CAMIÓN EXTRACCIÓN' ? title : 'OPERACIÓN SEGURA DE ' }
                      <span style={{color: 'var(--verde-inacex)'}}>{title === 'CAMIÓN EXTRACCIÓN' ? ' DE ALTO TONELAJE' : title }
                      </span>
                    </Typography>
              </Toolbar>
              </>
            ) : (
              <>
              <Box className={'logoNav'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <img  
                src="./LogoInacex.png" 
                alt="Logo de Inacex" 
               // width={60}
                height={35}
              />
              <img 
                src="./LogoInacexWhite.png" 
                alt="Letras del logo (INACEX)" 
                width={140}
                height={35}
              />
              </Box>
                    <Toolbar>
                      <AudioPlayer src={src} />
                      <Typography 
                    className={'roboto-condensed'} 
                    sx={{fontSize: '1.2rem'}} 
                    variant="h5">{title === 'CAMIÓN EXTRACCIÓN' ? title : 'OPERACIÓN SEGURA DE ' }
                      <span style={{color: 'var(--verde-inacex)'}}>{title === 'CAMIÓN EXTRACCIÓN' ? ' DE ALTO TONELAJE' : title }
                      </span>
                    </Typography>
                    </Toolbar>
            </>
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
            }}
          >
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default ScrollTitleBar;
