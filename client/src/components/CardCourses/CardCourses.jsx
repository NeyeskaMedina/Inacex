import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CardCourses = ({ image, title, subtitle }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '420px', md: '450px' },
        borderRadius: "40px",
        overflow: 'hidden',
        boxShadow: 1,
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer',
        backgroundColor: '#000',
        '&:hover .image-layer': {
          filter: 'grayscale(0%)',
          transform: 'scale(1.05)',
          transition: 'filter 0.5s ease, transform 0.5s ease',
        },
      }}
    >
      {/* Imagen con grayscale (clase para apuntar en el hover) */}
      <Box
        className="image-layer"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
          transition: 'filter 0.5s ease, transform 0.5s ease',
          zIndex: 0,
        }}
      />

      {/* Overlay para contraste */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          p: 3,
          width: '100%',
          color: '#fff',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#A0FF00' }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt={1}>
          {title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: 'var(--verde-inacex)',
            color: '#000',
            borderRadius: '20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#8ed900',
            },
          }}
        >
          MÁS INFORMACIÓN
        </Button>
      </Box>
    </Box>
  );
};

export default CardCourses;
