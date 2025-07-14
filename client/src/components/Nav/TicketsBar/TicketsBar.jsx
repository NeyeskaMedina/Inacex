import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import './ticketsBar.css'; // Asegúrate de tenerlo
import { UserContext } from '../../../context/UserContext';

const TicketsBar = () => {
  const { showTicker } = useContext(UserContext); // Accede al estado

  if (!showTicker) return null;
  return (
    <Box
      sx={{
        backgroundColor: 'var(--naranja-oscuro)',
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
            fontSize: { xs: '1rem', sm: '1.2rem' },
            color: 'white',
            px: 2,
          }}
        >
          🎉 ¡Inscripciones abiertas! — <span style={{color: 'var(--negro-ticket)'}}> SUBVENCIÓN </span> en cursos de Camión extracción alto tonelaje — Certifícate con INACEX — Cupos limitados 🚨 — ¡Matricúlate ahora!
        </Typography>
      </Box>
    </Box>
  );
};

export default TicketsBar;
