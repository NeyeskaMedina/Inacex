// src/pages/ConfirmacionExitosa.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export const ConfirmacionExitosa = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#007d3c',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          ✅ ¡Correo confirmado con éxito!
        </Typography>
        <Typography variant="body1">
          Gracias por confirmar tu correo. Un asesor se pondrá en contacto contigo muy pronto.
        </Typography>
      </Box>
    </Box>
  );
};

export default ConfirmacionExitosa;
