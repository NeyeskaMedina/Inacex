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
            borderRadius: '10px'
        }}
    >
        Ver Programas
    </Button>
    </Link>
  );
};

export default Programs;
