import React from 'react';
import { Box, Typography } from '@mui/material';
import './ticketsBar.css'; // Asegúrate de tenerlo

const TicketsBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--naranja-cat)', // O usa '#FFA500' si no tienes la variable
        overflow: 'hidden',
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box className="ticker-text">
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            fontSize: { xs: '0.8rem', sm: '1rem' },
            color: 'var(--negro-ticket)',
            px: 2,
          }}
        >
          🎉 ¡Inscripciones abiertas! — 40% de descuento en cursos de camión alto tonelaje — Certifícate con INACEX — Cupos limitados 🚨 — ¡Matricúlate ahora!
        </Typography>
      </Box>
    </Box>
  );
};

export default TicketsBar;
