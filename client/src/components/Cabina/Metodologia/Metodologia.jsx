import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const Metodologia = ({ targetRef, icons }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef?.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const threshold = window.innerWidth >= 1200 ? 400 : 50;
      const isInView = rect.top < window.innerHeight && rect.bottom > threshold;
      setVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetRef]);

  return (
    visible && (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, minmax(100px, 120px))', // tamaño controlado en XS
            sm: 'repeat(auto-fit, minmax(120px, 140px))',
          },
          justifyContent: 'center',
          gap: 1.5,
          width: '100%',
          maxWidth: '100vw',
          zIndex: { xs: 0, md: 2 },
          position: 'fixed',
          bottom: { xs: '10px', md: '10px' },
          left: 0,
          px: 1,
          backgroundColor: 'transparent',
          overflowX: 'hidden',
        }}
      >
        {icons.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--naranja-cat)',
              aspectRatio: '1 / 1',
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(3px)',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            {item.icon}
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: {
                  xs: '0.8rem',
                  sm: '0.95rem',
                  md: '1.2rem',
                  xl: '1.5rem',
                },
                color: 'var(--naranja-cat)',
                px: 1,
              }}
            >
              {item.texto}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  );
};

export default Metodologia;
