import React, { useEffect } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const requisitos = [
  {
    textoPrincipal: 'Tener disponibilidad de tiempo según el horario del curso',
    fondo: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
  },
  {
    textoPrincipal: 'Tener rendido 4° año medio deseable (mínimo 8 básico)',
    fondo: '#1D1D1D',
  },
  {
    textoPrincipal: 'Tener mínimo 18 años de edad',
    textoSecundario: 'Requisito obligatorio de acuerdo a la normativa legal vigente.',
    fondo: '#1D1D1D',
  },
  {
    textoPrincipal: 'Ser peruano o extranjero con residencia permanente o en trámite',
    fondo: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
  },
];

export const Requisitos = ({ image }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section style={{ position: 'relative', width: '100vw', minHeight: '100vh' }}>
      {/* Fondo en escala de grises */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
            zIndex: 0,
          }}
        />

        {/* Capa oscura encima del fondo */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Puedes subir a 0.6 o 0.7 si necesitas más contraste
            zIndex: 1,
          }}
        />
      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          px: { xs: 2, md: 6 },
          py: 8,
          display: 'flex',
          flexDirection: isXlUp ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {/* Texto de encabezado y descripción */}
        <Box
          sx={{
            width: isXlUp ? '40%' : '100%',
            textAlign: isXlUp ? 'left' : 'center',
          }}
        >
          <Typography
            variant="h4"
            className="roboto-condensed"
            sx={{
              color: 'white',
              mb: 2,
            }}
            data-aos="fade-up"
          >
            DESCRIPCIÓN Y
          </Typography>
          <Typography
            variant="h4"
            className="roboto-condensed"
            sx={{
              color: 'var(--verde-inacex)',
              mb: 3,
            }}
            data-aos="fade-up"
          >
            REQUISITOS
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'white' }}
            data-aos="fade-up"
          >
            Nuestras clases de grúa cumplen con todos los estándares actuales. Esto asegura que 
            los operadores estén instruidos en las mejores prácticas de seguridad, reduciendo el 
            riesgo de incidentes. Póngase en contacto con nuestros ejecutivos de admisión  hoy 
            mismo
          </Typography>
        </Box>

        {/* Requisitos */}
        <Grid
          container
          spacing={3}
          sx={{ width: isXlUp ? '50%' : '100%' }}
          justifyContent="center"
        >
          {requisitos.map((item, index) => (
            <Grid item xs={12} md={6} key={index} data-aos="fade-up">
              <Box
                sx={{
                  background: item.fondo,
                  color: item.fondo.includes('#1D1D1D') ? 'white' : 'black',
                  borderRadius: 2,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  minHeight: 150,
                  boxShadow: 3,
                  clipPath: 'polygon(0 0, 93% 0, 100% 10%, 100% 100%, 0 100%)',
                }}
              >
                <CheckCircleOutlineIcon sx={{ color: '#8BC34A', fontSize: { xs: 32, lg: 42 } }} />
                <Typography variant="subtitle1" fontWeight="bold" fontSize={{ xs: 16, lg: 20 }}>
                  {item.textoPrincipal}
                </Typography>
                {item.textoSecundario && (
                  <Typography variant="body2">{item.textoSecundario}</Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Requisitos;
