import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  Zoom,
  Grid
} from '@mui/material';
import './PricingCards.css';
import Contratar from '../Buttons/Contratar/Contratar'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Programs from '../Buttons/Programs/Programs'

const PricingCards = ({ plans, color = '#f57c00', colorInacex = '#4caf50', image }) => {

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 0,
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        py: 10,
        px: 2,
        '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(155, 155, 155, 0.6)', // Overlay claro
              zIndex: 0,
            },
      }}
    >

      {/* TÍTULOS FUERA DEL GRID */}
      <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 1}}>
        <Typography
          variant="h3"
          className="pricing-title roboto-condensed"
          sx={{
            color: colorInacex,
            fontWeight: 'bold',
          }}
        >
          <span style={{ color: '#1b1b1b' }}>Programas de formación</span> Operadores
        </Typography>

        <Typography
          variant="subtitle1"
          className="pricing-subtitle"
          sx={{
            color: 'var(--gris-sub)',
            fontSize: '1.1rem',
            fontWeight: 400,
            mt: 1,
          }}
        >
          Elige el programa que te ayude a construir el sueño de tu futuro laboral
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Programs />
        </Box>
      </Box>

      {/* GRID SOLO PARA TARJETAS */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={4} md={3} xl={2} key={index}>
            <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }}>
              <Card
                sx={{
                  position: 'relative', 
                  zIndex: 1,
                  width: { xs: 320, md: 380, lg: 450, xl: 520 },
                  minHeight: { xs: 'auto', sm: 500 },
                  // maxHeight: 600,
                  background: 'rgba(255, 255, 255, 0.48)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.17)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(138, 75, 75, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 1,
                }}
                className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    className="roboto-condensed"
                    variant="h5"
                    sx={{ color: '#222', fontWeight: 700 }}
                  >
                    {plan.title} <span style={{ color: colorInacex }}>{plan.nexo}</span>
                  </Typography>

                  <Typography
                    sx={{ color: 'black', fontWeight: 600 }}
                    className="roboto-condensed"
                    variant="subtitle1"
                  >
                    {plan.subtitle}
                  </Typography>

                  {plan.other === 'Matrícula' ? (
                    <Typography
                      sx={{ color: colorInacex, fontSize: '1.2rem', fontWeight: 'bold' }}
                      variant="h6"
                      className="roboto-condensed"
                    >
                      {plan.other}
                    </Typography>
                  ) : (
                    <s style={{ color: colorInacex }}>
                      <Typography
                        sx={{ fontSize: '1.2rem', fontWeight: 600 }}
                        variant="h6"
                        className="roboto-condensed"
                      >
                        {plan.other}
                      </Typography>
                    </s>
                  )}

                  <Typography
                    sx={{ color: '#d32f2f', fontSize: '1.6rem', fontWeight: 700 }}
                    variant="h5"
                    className="roboto-condensed"
                  >
                    {plan.price}
                  </Typography>

                  <Divider
                    sx={{
                      my: 1,
                      borderColor: '#66bb6a',
                      borderBottomWidth: 2,
                      opacity: 0.9,
                      borderRadius: 2,
                      width: '100%',
                    }}
                  />

                  <Box
                    component="ul"
                    className="features-list"
                    sx={{ flexGrow: 1, p: 0, pl: 2, textAlign: 'left', alignSelf: 'stretch' }}
                  >
                    {plan.detalles.map(([key, val], idx) => (
                      <li key={idx}>
                        <CheckCircleOutlineIcon sx={{ color: colorInacex, mr: 1 }} /> <strong>{key}:</strong> {val}
                      </li>
                    ))}
                  </Box>

                  <Typography
                    sx={{ mt: 2, mb: 2, color: '#555', fontSize: '0.95rem' }}
                    variant="subtitle2"
                    className="terms-text"
                  >
                    {plan.foo}
                  </Typography>

                  <Box sx={{ mt: 'auto', width: '100%' }}>
                    <Contratar plan={plan} image={image} />
                  </Box>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
