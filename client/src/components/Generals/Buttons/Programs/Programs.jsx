import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export const Programs = () => {

  return (
    <Link to={'/programas'} style={{ textDecoration: 'none' }}>
    <Button 
        className={'roboto-condensed'}
        sx={{ 
            backgroundColor: 'var(--verde-inacex)', 
            color: 'white',
            marginLeft: '10px',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: 'var(--blanco-notification)', // usa una variable o color directo
              color: 'var(--verde-inacex)'
            }
        }}
    >
        Ver Programas
    </Button>
    </Link>
  );
};

export default Programs;
