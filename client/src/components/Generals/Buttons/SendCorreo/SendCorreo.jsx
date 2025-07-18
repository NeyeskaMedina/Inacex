import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export const SendCorreo = ({ prospect }) => {

  return (
    <Link 
      to="/contratar" 
      state={{ plan }}
      style={{ textDecoration: 'none', color: 'inherit' }}>
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: 'var(--verde-inacex)',
        color: '#fff',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#388e3c',
        },
      }}
    >
      Enviar correo
    </Button>
    </Link>
  );
};

export default SendCorreo;
