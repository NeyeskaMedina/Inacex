import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export const Contratar = ({ plan, image }) => {

  return (
    <Link 
      to="/contratar" 
      state={{ plan, image }}
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
      Contratar
    </Button>
    </Link>
  );
};

export default Contratar;
