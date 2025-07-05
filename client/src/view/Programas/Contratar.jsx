import React from 'react';
import { Box, Grid } from '@mui/material';
import PricingCard from './PricingCardUnit'; // Una sola card con un plan
import FormularioInacex from '../Form/FormularioInacex'; // Tu formulario actual

const Contratar = ({ planSeleccionado }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <PricingCard plan={planSeleccionado} />
        </Grid>
        <Grid item xs={12} md={7}>
          <FormularioInacex cursoSeleccionado={`${planSeleccionado.title}${planSeleccionado.nexo}`} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contratar;
