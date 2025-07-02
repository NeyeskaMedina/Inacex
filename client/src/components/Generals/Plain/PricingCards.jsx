import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  Zoom,
} from '@mui/material';
import './PricingCards.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Programs from '../Buttons/Programs/Programs'

const PricingCards = ({ plans, color = '#f57c00', colorInacex = '#4caf50', image }) => {
  return (
    <Box
      className="pricing-section"
      sx={{
        position: 'relative',
        zIndex: 0,
        backgroundImage: `url(${image})`,
        backgroundPosition: { xs: 'top center', sm: 'center' },
        backgroundSize: { xs: 'cover' },
        backgroundRepeat: 'no-repeat',
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        className="pricing-title roboto-condensed"
        sx={{
          zIndex: 1,
          position: 'relative',
          textAlign: 'center',
          mb: 1,
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
          textAlign: 'center',
          color: 'var(--gris-sub)',
          fontSize: '1.1rem',
          fontWeight: 400,
        }}
      >
        Elige el programa que te ayude a construir el sueño de tu futuro laboral
      </Typography>
        <Programs />
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
        }}
        className="pricing-grid"
      >
        {plans.map((plan, index) => (
          <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
          <Card
            sx={{
              width: { xs: '100%', sm: 320 },
              minHeight: { xs: 'auto', sm: 580 },
              background: 'rgba(255, 255, 255, 0.38)', // Más transparente
              backdropFilter: 'blur(20px)',           // Más elegante
              border: '1px solid rgba(255, 255, 255, 0.17)', // Borde tenue
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)', // Sombra suave
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 2,
            }}
            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
          >

              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                    sx={{ color: '#d32f2f', fontSize: '1.2rem', fontWeight: 'bold' }}
                    variant="h6"
                    className="roboto-condensed"
                  >
                    {plan.other}
                  </Typography>
                ) : (
                  <s style={{ color: '#d32f2f' }}>
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
                  sx={{ color: colorInacex, fontSize: '1.6rem', fontWeight: 700 }}
                  variant="h5"
                  className="roboto-condensed"
                >
                  {plan.price}
                </Typography>

                <Divider
                  sx={{
                    my: 2,
                    borderColor: '#66bb6a',
                    borderBottomWidth: 2,
                    opacity: 0.9,
                    borderRadius: 2,
                  }}
                />

                <Box component="ul" className="features-list" sx={{ flexGrow: 1, p: 0, pl: 2 }}>
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

                <Box sx={{ mt: 'auto' }}>
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
        ))}
      </Box>
    </Box>
  );
};

export default PricingCards;
