import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CardCourses = ({ image, title, subtitle, view }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: '85%',
          sm: '250px',
          md: '300px',
          lg: '340px',
          xl: '380px',
        },
        minWidth: {
          xs: '250px',
          sm: '250px',
          md: '280px',
        },
        margin: '0 auto',
        height: { xs: '420px', md: '450px' },
        borderRadius: "30px",
        overflow: 'hidden',
        boxShadow: 2,
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer',
        backgroundColor: 'var(--gris-section)',
        '&:hover .image-layer': {
          filter: 'grayscale(0%)',
          transform: 'scale(1.05)',
          transition: 'filter 0.4s ease, transform 0.4s ease',
        },
      }}
    >
      {/* Imagen */}
      <Box
        className="image-layer"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
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
        <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
          {title}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={view}
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
