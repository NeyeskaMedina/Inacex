import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export const Requisitos = ({ image, requisitos, colorIcon }) => {
  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));

  if (!Array.isArray(requisitos) || requisitos.length === 0) {
    return null;
  }

  const descripcion = requisitos[0].descripcion ?? '';
  const listaRequisitos = requisitos.slice(1);

  return (
    <section
      style={{
        position: 'relative',
        p: 2,
        width: '100%', // ✅ Evita overflow por scrollbar
        minHeight: '100vh',
        overflowX: 'hidden', // ✅ Previene desbordamiento horizontal
      }}
    >
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
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          px: { xs: 2, sm: 4, md: 6 },
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
            width: isXlUp ? '40%' : '90%',
            textAlign: isXlUp ? 'left' : 'center',
          }}
        >
          <Typography
            variant="h4"
            className="roboto-condensed"
            sx={{ color: 'white', mb: 2 }}
          >
            DESCRIPCIÓN Y
          </Typography>
          <Typography
            variant="h4"
            className="roboto-condensed"
            sx={{ color: 'var(--verde-inacex)', mb: 3 }}
          >
            REQUISITOS
          </Typography>
          <Typography variant="body1" 
            sx={{ 
                color: 'white', 
                maxWidth: '100%',          // ✅ nunca supera el ancho del contenedor
                wordBreak: 'break-word',   // ✅ corta palabras largas
                overflowWrap: 'break-word',
                whiteSpace: 'normal',   
            }}>
            {descripcion}
          </Typography>
        </Box>

        {/* Lista de requisitos */}
        <Grid
          container
          spacing={3}
          sx={{
            width: isXlUp ? '50%' : '100%',
            overflowX: 'hidden',
            m: 0,
          }}
          justifyContent="center"
        >
          {listaRequisitos.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
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
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    maxWidth: '100%',
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontSize={{ xs: 16, lg: 20 }}
                  sx={{ wordBreak: 'break-word' }}
                >
                  {item.textoPrincipal}
                </Typography>
                {item.textoSecundario && (
                  <Typography
                    variant="body2"
                    sx={{ wordBreak: 'break-word' }}
                  >
                    {item.textoSecundario}
                  </Typography>
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
