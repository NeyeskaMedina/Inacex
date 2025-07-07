import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Zoom,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './PricingCards.css';

const PricingCardsUnit = ({ plan, color = '#f57c00', colorInacex = '#4caf50' }) => {
  if (!plan) return null;

  return (
    <Zoom in={true}>
      <Box
        sx={{
          width: { xs: 320, md: 380, lg: 450, xl: 520 },
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.3)',
          },
        }}
      >
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.17)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 0,
          }}
          className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
        >
          {/* Franja superior */}
          <Box
            sx={{
              backgroundColor: colorInacex,
              color: 'white',
              p: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              letterSpacing: 1,
            }}
          >
            ¡Oferta especial!
          </Box>

          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3,
            }}
          >
            <Typography
              className="roboto-condensed"
              variant="h5"
              sx={{ color: '#222', fontWeight: 700 }}
            >
              {plan.title}{' '}
              <span style={{ color: colorInacex }}>{plan.nexo}</span>
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
              sx={{ color: '#d32f2f', fontSize: '2rem', fontWeight: 800 }}
              variant="h4"
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
                width: '100%',
              }}
            />

            <Box
              component="ul"
              className="features-list"
              sx={{
                flexGrow: 1,
                p: 0,
                pl: 2,
                textAlign: 'left',
                alignSelf: 'stretch',
              }}
            >
              {plan.detalles.map(([key, val], idx) => (
                <li key={idx} style={{ marginBottom: 8 }}>
                  <CheckCircleOutlineIcon sx={{ color: colorInacex, mr: 1, fontSize: '1.2rem' }} />{' '}
                  <strong>{key}:</strong> {val}
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
          </CardContent>
        </Card>
      </Box>
    </Zoom>
  );
};

export default PricingCardsUnit;
