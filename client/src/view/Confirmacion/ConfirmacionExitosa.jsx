import React from 'react';
import { Box, Typography } from '@mui/material';

export const ConfirmacionExitosa = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#007d3c',
        backgroundImage: 'url(./imgCursos/frontal/12.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 0,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography sx={{ color: 'black' }} className={'roboto-condensed'} variant="h4" gutterBottom>
          ✅ ¡Correo confirmado con éxito!
        </Typography>
        <Typography sx={{ color: 'black' }} variant="body1">
          Gracias por confirmar tu correo. Un asesor se pondrá en contacto contigo muy pronto, continua desde tu correo electronico.
        </Typography>
      </Box>
    </Box>
  );
};

export default ConfirmacionExitosa;
