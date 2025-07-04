import React from 'react';
import { Button } from '@mui/material';



const Contratar = () => {

  return (
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
  );
};

export default Contratar;
