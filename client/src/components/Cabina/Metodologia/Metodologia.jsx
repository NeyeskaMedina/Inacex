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
        const isInView = rect.top < window.innerHeight && rect.bottom > 380;

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
        alignItems: {xs: 'center', md: 'end'},
        gap: 2,
        width: '100%',
        zIndex: { xs: 0, md: 2 }, // detrás en XS, encima en grandes
        position: {
          xs: 'fixed',       // fijo en móviles
          md: 'fixed',  // absoluto en pantallas grandes
        },
        bottom: {
          xs: '10px',  
          md: '10px'      // fijo al fondo en móviles
          // md: '15px',
          // lg: '20px'        // pegado abajo en cabina
        },
        left: 0,
        backgroundColor: {
          xs: 'transparent',
          md: 'transparent',
        },
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
            width: { xs: '120px', sm: '120px', md: '150px', xl: '200px' },
            height: { xs: '120px', sm: '120px', md: '150px', xl: '200px' },
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(3px)', //zoom
          }}
        >
          {item.icon}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem', xl: '1.5rem' },
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
