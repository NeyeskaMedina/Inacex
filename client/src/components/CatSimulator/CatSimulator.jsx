import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CatSimulator = () => {
  const listItems = [
    {
      text: 'Controles Cat auténticos para una experiencia real.',
      aos: 'fade-up-right'
    },
    {
      text: 'Entorno minero virtual con terreno, iluminación y maquinaria.',
      aos: 'fade-up-left'
    },
    {
      text: 'Compatibilidad con realidad virtual para mayor inmersión.',
      aos: 'fade-up-right'
    },
    {
      text: 'Entrenamiento en seguridad y procedimientos de mantenimiento.',
      aos: 'fade-up-left'
    },
    {
      text: 'Evaluación de habilidades en carga, descarga y conducción.',
      aos: 'fade-up-right'
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#1b1b1b',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        // backgroundImage: 'url(./imgCursos/catSimulator.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '100%',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        color: 'white',
        fontFamily: '"Roboto Condensed", sans-serif',
      }}
      id="cat-simulator"
    >
      <Grid container spacing={6} alignItems="center">
        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Box data-aos="fade-right" data-aos-duration="1000">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: 'white',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              <span style={{color: 'var(--naranja-cat)'}}>CAT</span>SIMULATOR
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              "CAT SIMULATOR" (Caterpillar) es una herramienta avanzada que permite capacitar operadores de camiones mineros de forma segura y realista:
            </Typography>
          </Box>

          <List>
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                data-aos={item.aos}
                data-aos-duration="900"
                sx={{ py: 0.5 }}
              >
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'var(--naranja-cat)' }} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Typography variant="body2" sx={{ mt: 3, color: '#ccc' }} data-aos="fade-up" data-aos-delay="300">
            Mejora la seguridad, reduce los costos y optimiza la productividad de los operadores en faena.
          </Typography>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="./imgCursos/catSimulator.png"
            alt="Simulador CAT CAEX"
            data-aos="zoom-in"
            data-aos-duration="1200"
            sx={{
              width: '100%',
              maxHeight: { xs: 300, md: 500 },
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: 6,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CatSimulator;
