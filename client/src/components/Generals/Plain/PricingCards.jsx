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
      }}
    >
      {/* TÍTULOS FUERA DEL GRID */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
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
                  width: {xs: 320, md: 320, lg: 350, xl: 450},
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircleOutlineIcon sx={{ color: colorInacex, mr: 1 }} /> {feature}
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
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: colorInacex,
                        color: '#fff',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#388e3c',
                        },
                      }}
                    >
                      Contratar
                    </Button>
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
