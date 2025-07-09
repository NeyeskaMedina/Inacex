import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import PricingCardsUnit from '../../components/Generals/Plain/PricingCardsUnit';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import { getCursoPorTituloYAnexo } from '../../utils/utils';

const Contratar = () => {
  const location = useLocation();
  const plan = location.state?.plan;
  const image = location.state?.image;
  const cursoSeleccionado = getCursoPorTituloYAnexo(plan?.title, plan?.nexo);

  if (!plan) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <h2>No se seleccionó ningún plan.</h2>
      </Box>
    );
  }
  const bgColor = 'var(--verde-trans)';
  const font = 'white';

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        py: 8,
        px: 2,
      }}
    >
      {/* Overlay semitransparente */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 0,
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          zIndex: 1,
        }}
      >
        <Grid container spacing={4} justifyContent={{ xs: 'center', md: 'space-around' }} alignItems={'center'} >
          <Grid item xs={12} md={5}>
            <PricingCardsUnit plan={plan} />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormularioInacex bgColor={bgColor} font={font} cursoSeleccionado={cursoSeleccionado} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contratar;
