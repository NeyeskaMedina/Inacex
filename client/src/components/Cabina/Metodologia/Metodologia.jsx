import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
// import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
// import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
// import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

export const Metodologia = ({ targetRef, icons }) => {
     const [visible, setVisible] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
        if (!targetRef?.current) return;

        const rect = targetRef.current.getBoundingClientRect();
        const threshold = window.innerWidth >= 1200 ? 800 : 380;
        const isInView = rect.top < window.innerHeight && rect.bottom > threshold;
        setVisible(isInView);
        
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // ejecutar al cargar

      return () => window.removeEventListener('scroll', handleScroll);
    }, [targetRef]);

  return visible && (
    <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: { xs: 'center', md: 'end' },
    gap: 2,
    width: '100%',
    zIndex: { xs: 0, md: 2 },
    position: 'fixed',
    bottom: { xs: '10px', md: '10px' },
    left: 0,
    backgroundColor: 'transparent',
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
        width: {
          xs: 'calc(50% - 46px)', // 2 por fila en móviles (con gap de 24px)
          sm: '130px',
          md: '150px',
          lg: '160px',
          xl: '180px',
        },
        height: {
          xs: 'calc(50vw - 72px)', 
          sm: '130px',
          md: '150px',
          lg: '160px',
          xl: '180px',
        },
        borderRadius: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(3px)',
      }}
    >
      {item.icon}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontWeight: 500,
          fontSize: {
            xs: '0.85rem',
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

  );
};

export default Metodologia;
