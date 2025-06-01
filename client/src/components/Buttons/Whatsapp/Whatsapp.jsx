import React from 'react';
import { Fab, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Whatsapp = () => {
  const isMobile = useMediaQuery('(max-width:480px)');

  const handleClick = () => {
    window.open('https://wa.me/56976512953', '_blank');
  };

  return (
    <Fab
      color="success"
      aria-label="WhatsApp"
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: isMobile ? 15 : 30,
        right: isMobile ? 15 : 30,
        zIndex: 1300,
        boxShadow: 3,
      }}
    >
      <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 28, color: 'white' }} />
    </Fab>
  );
};

export default Whatsapp;
