import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Zoom,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
  Button,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { findPlanByGroup } from '../../../utils/utils';

const HtmlEmail = ({
  colorPrimary = '#4caf50',
  colorAccent = '#f57c00',
}) => {
    const plan = findPlanByGroup('caex_Grua');

  if (!plan) return null;

  return (
    <Zoom in={true}>
      <Box
        sx={{
          width: { xs: 320, md: 400 },
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.3)',
          },
        }}
      >
        <Card
          sx={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }}
        >
          {/* Imagen */}
          {plan.image && (
            <CardMedia
              component="img"
              height="180"
              image={plan.image}
              alt={plan.title}
              sx={{
                objectFit: 'cover',
              }}
            />
          )}

          {/* Franja superior */}
          <Box
            sx={{
              backgroundColor: colorPrimary,
              color: 'white',
              p: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
          >
            ¡Oferta especial!
          </Box>

          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              {plan.title}{' '}
              <span style={{ color: colorAccent }}>{plan.nexo}</span>
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              {plan.subtitle}
            </Typography>
            <Typography
              variant="h4"
              color="error"
              fontWeight={800}
              my={2}
            >
              {plan.price}
            </Typography>

            <Divider sx={{ my: 2, borderColor: colorPrimary, borderBottomWidth: 2 }} />

            <List dense>
              {plan.detalles.map(([label, value], idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: colorAccent }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <strong>{label}:</strong> {value}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" mt={2} color="text.secondary">
              {plan.foo}
            </Typography>

            {/* Botón de inscripción */}
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                backgroundColor: colorAccent,
                '&:hover': {
                  backgroundColor: '#ff9800',
                },
              }}
              onClick={() => {
                if (onEnrollClick) {
                  onEnrollClick(plan);
                } else {
                  // Por defecto redirige a una página
                  window.open('https://tusitio.com/inscripcion', '_blank');
                }
              }}
            >
              Inscribirme
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Zoom>
  );
};

export default HtmlEmail;
