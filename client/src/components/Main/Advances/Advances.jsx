import React from 'react';
import { Box, Typography, Stack, Card, CardContent } from '@mui/material';
import CountUp from 'react-countup';
import SchoolIcon from '@mui/icons-material/SchoolRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircleRounded';
import PeopleIcon from '@mui/icons-material/PeopleAltRounded';
import EngineeringIcon from '@mui/icons-material/EngineeringRounded';

const avances = [
  { cantidad: 5000, texto: 'Alumnos certificados', icono: <SchoolIcon fontSize="large" /> },
  { cantidad: 20, texto: 'Cursos acreditados', icono: <CheckCircleIcon fontSize="large" /> },
  { cantidad: 2000, texto: 'Alumnos en clases', icono: <PeopleIcon fontSize="large" /> },
  { cantidad: 25, texto: 'Instructores especializados', icono: <EngineeringIcon fontSize="large" /> },
];

const AvancesInacex = ({ image }) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fondo con imagen y overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`, // reemplaza por tu imagen
            backgroundAttachment: { xs: 'scroll', md: 'fixed' },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay oscuro
              zIndex: 1,
            },
          }}
        />

        {/* Contenido en primer plano */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            py: 10,
            px: 2,
            textAlign: 'center',
            color: '#fff',
          }}
        >
            <Box sx={{ py: 8, px: 2, backgroundColor: '', position: 'relative' }}>
              <Typography className={'roboto-condensed'} variant="h4" fontWeight="bold" align="center" mb={6} color="white">
                NUESTROS <span style={{color: 'var(--verde-inacex)'}}>AVANCES</span>
              </Typography>

              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                {avances.map((item, i) => (
                  <Card
                    key={i}
                    sx={{
                      width: 220,
                      minHeight: 180,
                      borderRadius: 4,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                      textAlign: 'center',
                      backgroundColor: 'var(--verde-trans)',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateY(-6px)' },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ color: 'var(--verde-inacex)', mb: 1 }}>{item.icono}</Box>
                      <Typography className={'roboto-condensed'} variant="h4" fontWeight="bold" color="var(--verde-inacex)">
                        <CountUp end={item.cantidad} duration={5} separator="." />+
                      </Typography>
                      <Typography className={'roboto-condensed'} fontSize={'16px'} variant="subtitle2" mt={1} color="rgba(255,255,255,0.9)">
                        {item.texto}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
        </Box>
    </Box>
  );
};

export default AvancesInacex;
