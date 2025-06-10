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
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        py: 8,
        px: { xs: 2, md: 10 },
      }}
    >
      {/* Imagen de fondo en escala de grises */}
<Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(./imgCursos/horquilla/horquillaIA.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    filter: 'grayscale(1)',
    zIndex: -2,
  }}
/>

{/* Capa oscura encima de la imagen */}
<Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // más opacidad
    zIndex: -1,
  }}
/>

      {/* Franja verde-inacex */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '0%', md: '50%' },
          left: { xs: '70%', md: 0 },
          width: { xs: '50px', md: '100%' },
          height: { xs: '100%', md: '300px' },
          backgroundColor: 'var(--verde-inacex)',
          zIndex: 0,
          transform: { xs: 'translateX(-10%)', md: 'translateY(-50%)' },
          opacity: 0.2,
          animation: 'slideIn 2s ease-out forwards',
          '@keyframes slideIn': {
            from: { width: 0, opacity: 0 },
            to: { width: '100%', opacity: 0.5 },
          },
        }}
      />

      {/* Título */}
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

      {/* Posts de Facebook */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={4}
        justifyContent="center"
        alignItems="center"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02DQqL55H75iGrBvG4ypKCiyP5WYJ97jdfDozGiEwCnvzkMiLwCiBPTDB12cGvZpcJl&id=61575995351165"
            data-width="100%"
          ></div>
        </Box>

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
