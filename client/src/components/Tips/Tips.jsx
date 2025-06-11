import React from 'react';
import { Box, Typography } from '@mui/material';



const Tips = () => {
  return (
    <>
    <section style={{ padding: '20px', textAlign: 'center', height: 'auto', backgroundColor: 'var(--gris-section)' }}>
        <h2 className='roboto-condensed'>Razones para elegir <span style={{color:'var(--verde-inacex)'}}>INACEX</span></h2>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: {xs: 'column', md: 'row'},
            gap: '50px',
            py: '20px',
            width: '100%',
        }}>
            <img 
                src="./imgSection/ccm.png" 
                alt="logo del Consejo de competencias mineras" 
                style={{ 
                    // width: '300px', 
                    height: 'auto', 
                    maxWidth: '300px', 
                    margin: '0' 
                }} 
            />
            <img 
                src="./imgSection/sence.png" 
                alt="logo del SENCE" 
                style={{ 
                    // width: '300px', 
                    height: 'auto', 
                    maxWidth: '250px', 
                    margin: '0' 
                }} 
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'left',
                width: '280px',
                gap: '5px',
            }}>
                <img 
                    src="./imgSection/certificado.png" 
                    alt="imagen de certificado en vector color verde" 
                    style={{ 
                        // width: '300px',
                        color: 'var(--verde-inacex)',
                        height: '150px', 
                        maxWidth: '200px',
                        margin: '0 auto' 
                    }} 
                />
                <Box>
               <Typography sx={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    lineHeight: '1',
               }}> Doble certificación </Typography>
               <Typography sx={{
                    fontSize: '1.4rem',
                    lineHeight: '1',
               }}>Chile y Perú</Typography>
               </Box>
            </Box>
        </Box>
        <h6>Inacex el mejor centro de entrenamiento minero</h6>
    </section>
  </>
  );
};

export default Tips;