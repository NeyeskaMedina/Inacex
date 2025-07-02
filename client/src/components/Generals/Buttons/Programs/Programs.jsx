import React from 'react';
import { Button } from '@mui/material';


const Programs = () => {

  return (
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
  );
};

export default Programs;
