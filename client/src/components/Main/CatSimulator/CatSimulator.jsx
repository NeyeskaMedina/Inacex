import React from 'react';
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CatSimulator = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
        maxWidth: '100%',
        mx: 'auto',
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        wrap={isMdUp ? 'nowrap' : 'wrap'}
        justifyContent="center"
      >
        {/* Texto */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              maxWidth: '600px',
              backgroundColor: { md: 'rgba(255,255,255,0.02)' },
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              mx: { xs: 'auto', md: 0 },
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: 'white',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              PRÁCTICAS CON TECNOLOGÍA DE{' '}
              <Box component="span" sx={{ color: 'var(--verde-inacex)' }}>
                CLASE MUNDIAL
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{ mb: 3, lineHeight: 1.8, color: '#ccc' }}
              className='roboto-condensed'
            >
              Simulador <span style={{ color: 'var(--naranja-cat)' }}> Caterpillar</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.8, color: '#ccc' }}
            >
              Es una herramienta de última generación que capacita operadores de maquinaria pesada en un entorno seguro, controlado y completamente inmersivo:
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 3, color: '#ccc' }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Realizas tus prácticas en simuladores Caterpillar para la industria minera, aprobado y comprobado a nivel mundial.
            </Typography>
          </Box>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="./imgCursos/catSimulator.png"
            alt="Simulador CAT CAEX"
            data-aos="zoom-in"
            data-aos-duration="1200"
            sx={{
              width: { xs: '90%', sm: '80%', md: '100%' },
              maxWidth: '800px',
              height: 'auto',
              objectFit: 'contain',
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
