import React from 'react';
import { Card, CardContent, Typography, Button, Box, Divider, Zoom } from '@mui/material';
import './PricingCards.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const PricingCards = ({ plans, color, colorInacex }) => {
  return (
    <Box className="pricing-section" sx={{ position: 'relative'}}>
      <Typography variant="h3" className="pricing-title roboto-condensed">
          <span style={{ color: 'black' }}>Programas de formación</span> Operadores
      </Typography>
      <Typography variant="subtitle1" className="pricing-subtitle">
        Elige el programa que te ayude a construir el sueño de tu futuro laboral
      </Typography>

      <Box sx={{
              marginTop: '2rem',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: 'center',
              justifyContent: 'center', 
              flexWrap: {xs: 'wrap', md: 'nowrap'}, 
              gap: 3, 
            }} className="pricing-grid">
        {plans.map((plan, index) => (
          <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
            <Card className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              <CardContent>
                <Typography className='roboto-condensed' variant="h5">
                  {plan.title}
                </Typography>
                <Typography sx={{ color: colorInacex }} className='roboto-condensed' variant="subtitle1">
                  {plan.subtitle}
                </Typography>
                <Typography sx={{ color: color }} variant="h5" className='roboto-condensed'>
                  {plan.price}
                </Typography>
                <Divider className="divider" />
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}> <CheckCircleOutlineIcon sx={{ color: color }} /> {feature}</li>
                  ))}
                </ul>
                   <Typography sx={{marginBottom: '1rem'}} variant="subtitle2" className="terms-text">
                  {plan.foo}
                </Typography>
                <Button variant="contained" className="card-button">
                  Contratar
                </Button>
              </CardContent>
            </Card>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
};

export default PricingCards;
