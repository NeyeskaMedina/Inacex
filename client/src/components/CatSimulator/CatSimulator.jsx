import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

const CatSimulator = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const listItems = [
    'Controles Cat auténticos para una experiencia real.',
    'Entorno minero virtual con terreno, iluminación y maquinaria.',
    'Compatibilidad con realidad virtual para mayor inmersión.',
    'Entrenamiento en seguridad y procedimientos de mantenimiento.',
    'Evaluación de habilidades en carga, descarga y conducción.',
  ];

  return (
    <Box
      id="cat-simulator"
      sx={{
        position: 'relative',
        backgroundColor: '#111',
        backgroundImage: 'url(./imgCursos/bgCat.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        fontFamily: '"Roboto Condensed", sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Overlay oscuro sobre imagen de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(9, 8, 8, 0.86)', // puedes ajustar el nivel de opacidad aquí
          zIndex: 1,
        }}
      />

      {/* Contenido principal sobre el overlay */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Texto */}
          <Box
            sx={{
              flex: 1,
              transform: { xs: 'none', md: 'skewX(-6deg)' },
              background: { md: 'rgba(255,255,255,0.02)' },
              px: { xs: 0, md: 4 },
              py: { xs: 0, md: 3 },
              borderRadius: 2,
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Box sx={{ transform: { xs: 'none', md: 'skewX(6deg)' } }}>
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
                <span style={{ color: 'var(--naranja-cat)' }}>CAT</span>SIMULATOR
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                "CAT SIMULATOR" (Caterpillar) es una herramienta de última generación que capacita operadores de maquinaria pesada en un entorno seguro, controlado y completamente inmersivo:
              </Typography>

              <List>
                {listItems.map((text, index) => (
                  <ListItem
                    key={index}
                    data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
                    data-aos-duration="900"
                    sx={{
                      py: 0.5,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'var(--naranja-cat)' }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>

              <Typography
                variant="body2"
                sx={{ mt: 3, color: '#ccc' }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Mejora la seguridad, reduce los costos y optimiza la productividad de los operadores en faena.
              </Typography>
            </Box>
          </Box>

          {/* Imagen */}
          <Box
            component="img"
            src="./imgCursos/catSimulator.png"
            alt="Simulador CAT CAEX"
            data-aos="zoom-in"
            data-aos-duration="1200"
            sx={{
              flex: 1,
              width: '100%',
              height: { xs: 300, md: 600 },
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: 6,
              mt: { xs: 4, md: 0 },
              p: '50px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CatSimulator;
