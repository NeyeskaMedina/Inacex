import React, { useEffect, useState } from 'react';
import { Fab, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 200);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Fab
      color='success'
      aria-label="Scroll to top"
      onClick={handleClick}
      sx={{
        color: 'var(--verde-inacex)',
        position: 'fixed',
        bottom: isMobile ? 80 : 90,
        right: isMobile ? 20 : 30,
        zIndex: 1300,
        boxShadow: 3,
      }}
    >
      <KeyboardArrowUpIcon sx={{ fontSize: isMobile ? 30 : 32, color: 'white' }} />
    </Fab>
  );
};

export default ScrollToTop;
