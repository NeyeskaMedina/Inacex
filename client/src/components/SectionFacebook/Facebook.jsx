import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Facebook = () => {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0';
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        overflow: 'hidden',
        position: 'relative', // necesario para posicionar la franja detrás
        backgroundColor: '#f2f2f2',
        py: 8,
        px: { xs: 2, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 'bold',
          color: 'var(--verde-inacex)',
          textAlign: 'center',
        }}
      >
        CONECTADOS CON NUESTRA COMUNIDAD
      </Typography>

      {/* Franja horizontal verde-inacex en background */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '300px',
          backgroundColor: 'var(--verde-inacex)',
          zIndex: 0,
          transform: 'translateY(-50%)',
          opacity: 0.2,
          animation: 'slideIn 2s ease-out forwards',
          '@keyframes slideIn': {
            from: { width: 0, opacity: 0 },
            to: { width: '100%', opacity: 0.5 },
          },
        }}
      />

      {/* Contenido principal (posts) */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={4}
        justifyContent="center"
        sx={{ position: 'relative', zIndex: 1 }} // para estar sobre la franja
      >
        {/* Primer post */}
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02DQqL55H75iGrBvG4ypKCiyP5WYJ97jdfDozGiEwCnvzkMiLwCiBPTDB12cGvZpcJl&id=61575995351165"
            data-width="100%"
          ></div>
        </Box>

        {/* Segundo post */}
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0qFedE5ZJ2evZEG1jhUroJrVFvLNeUS2F6Qp5A3sp8qbTGBgQr5SGb9x8S9oc6mHKl&id=61575995351165"
            data-width="100%"
          ></div>
        </Box>
      </Box>
    </Box>
  );
};

export default Facebook;
