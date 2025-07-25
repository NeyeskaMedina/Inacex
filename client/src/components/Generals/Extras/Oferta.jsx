// OfertaMaquinariaPesada.tsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
} from '@mui/material';
import {
  CheckCircle,
} from '@mui/icons-material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WatchIcon from '@mui/icons-material/Watch';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';


const Oferta = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Card
        sx={{
          boxShadow: 4,
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >

        {/* Encabezado con logo */}
        <Box sx={{ backgroundColor: 'black', display: 'flex',  textAlign: 'center', alignItems: 'center', justifyContent: 'center', py: 2 }}>
          <img
            src="./LogoInacex.png" // Reemplaza con la ruta real de tu logo
            alt="INACEX"
            style={{ height: 60 }}
          />
          <Typography className='roboto-condensed' variant="h4" sx={{ color: '#fff' }}>
            INACEX
          </Typography>
        </Box>
           <Box sx={{
                  backgroundImage: 'url(./imgCursos/caex/caex-cat.png)',
                  backgroundSize: 'cover',         // Ajusta para que ocupe el área sin deformarse
                  backgroundPosition: 'center',    // Centra la imagen
                  backgroundRepeat: 'no-repeat',   // Evita repeticiones
                  height: '200px',
                  width: '100%',
                  py: 2
                }}>

         </Box>

        {/* Contenido principal */}
        <CardContent sx={{ px: 4, py: 3 }}>
            <Typography className='roboto-condensed' variant="h4" fontWeight="bold" color="red" gutterBottom style={{ textAlign: 'center' }}>
            ¡ OFERTA ESPECIAL !
          </Typography>
          <Typography className='roboto-condensed' variant="h5" fontWeight="bold" color="red" gutterBottom style={{ textAlign: 'center', textDecoration: 'line-through' }}>
            Antes 900.000$ CLP
          </Typography>
          <Typography className='roboto-condensed' variant="h5" fontWeight="bold" color="black" gutterBottom>
            <span style={{color: 'var(--verde-inacex)'}}>CAMIÓN EXTRACCIÓN DE ALTO TONELAJE</span> + GRÚA HORQUILLA
          </Typography>

          <Typography className='roboto-condensed' variant="body1" sx={{ color: '#444', mb: 2 }}>
            En <strong>INACEX</strong> te preparamos para ingresar al rubro minero con nuestros cursos prácticos y certificados en maquinaria pesada. ¡Cambia tu futuro!
          </Typography>
          <Typography className='roboto-condensed' variant="h5" fontWeight="bold" color="red" gutterBottom style={{ textAlign: 'center' }}>
            Valor matrícula 70.000$ CLP
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                ⏰
                {/* <AccessTimeFilledIcon sx={{ color: '#8ba920' }} /> */}
              </ListItemIcon>
              <ListItemText  primary={
                              <>
                                <strong>Duración:</strong> 4 meses
                              </>
                            } />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                💻
                {/* <LaptopChromebookIcon sx={{ color: '#8ba920' }} /> */}
              </ListItemIcon>
              <ListItemText primary={
                            <>
                              <strong>Modalidad:</strong> Mixta - Teórica online - Práctica presencial
                            </>
                            }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {/* <SchoolIcon sx={{ color: '#8ba920' }} /> */}
                🎓
              </ListItemIcon>
              <ListItemText primary={
                            <>
                              <strong>Clases: </strong>Lunes y Miércoles ó Martes y Jueves
                            </>
                            }
               />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {/* <WatchIcon sx={{ color: '#8ba920' }} /> */}
                ⌚
              </ListItemIcon>
              <ListItemText primary={
                            <>
                              <strong>Horario: </strong>20:00 a 23:00 hrs
                            </>
                            } 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                🚜
                {/* <PrecisionManufacturingIcon sx={{ color: '#8ba920' }} /> */}
              </ListItemIcon>
              <ListItemText primary={
                            <>
                              <strong>Prácticas: </strong>6 horas simulación Caex + 2 horas terreno Grúa
                            </>
                            }             
              />
            </ListItem>
          </List>
          <Typography className='roboto-condensed' variant="h5" fontWeight="bold" color="red" gutterBottom style={{ textAlign: 'center' }}>
           50% de descuento
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" sx={{ mb: 2 }}>
            <CheckCircle fontSize="small" sx={{ color: '#8ba920', mr: 1 }} />
            Bonificación <strong>teórica y práctica</strong> para licencia clase D<br />
            <CheckCircle fontSize="small" sx={{ color: '#8ba920', mr: 1 }} />
            Modalidad teórica online y práctica presencial<br />
            <CheckCircle fontSize="small" sx={{ color: '#8ba920', mr: 1 }} />
            Certificación reconocida en CHILE y PERÚ.
          </Typography>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#8ba920',
                color: '#fff',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#7a971c',
                },
              }}
              href="https://forms.gle/jmg8R6X9RDZJN4fE7"
            >
              POSTULA AHORA
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 4, fontSize: 13, color: '#777', textAlign: 'center' }}
          >
            ¿Tienes dudas? llámanos al +56 9 7651 2953.
          </Typography>
          {/* <a href="mailto:contacto@inacex.cl">contacto@inacex.cl</a> */}
        </CardContent>

        {/* Pie de página */}
        <Box sx={{ backgroundColor: 'black', textAlign: 'center', py: 2 }}>
          <Typography variant="caption" sx={{ color: '#fff' }}>
            © 2025 INACEX - Centro de entrenamiento minero<br />
            📍 + De 11 sedes a nivel nacional (Chile)
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default Oferta;
