import { Box, Grid, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <Box
      component="footer"
      id='contacto'
      sx={{
        position: 'relative',
        disiplay: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent:'space-around' }}>
        {/* Información de contacto */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Contacto
          </Typography>
          <Typography variant="body2">📍 Antofagasta , Arica, Calama, Concepción, Copiapó,<br/> 
                                        Iquique, Ovalle, Rancagua, Serena, Viña del mar
          </Typography>
          <Typography variant="body2">📞 +56 9 38807453</Typography>
          <Typography variant="body2">✉ admision@inacexmatriculate.cl</Typography>
        </Grid>
        {/* Navegación */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Navegación
          </Typography>
          <Link href="#nuestros-cursos" underline="hover" color="inherit" variant="body2">Nuestros Cursos</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Bulldozer</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Cargador frontal</Link><br />
          <Link href="/caex" underline="hover" color="inherit" variant="body2">Camión Extracción</Link><br />
          <Link href="/grua-horquilla" underline="hover" color="inherit" variant="body2">Grua Horquilla</Link><br />
          <Link component={RouterLink} to="/retroexcavadora" underline="hover" color="inherit" variant="body2">Retro-excavadora</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Motoniveladora</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Términos y Condiciones</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Política de Privacidad</Link>
        </Grid>

        {/* Otros enlaces */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Recursos
          </Typography>
          <Link href="#" underline="hover" color="inherit" variant="body2">CATSIMULATOR</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Campus Virtual</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Certificaciones</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Instructores especializados</Link>
        </Grid>

        {/* Redes Sociales */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Conéctate
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <FacebookIcon sx={{ color: 'var(--verde-inacex)', cursor: 'pointer' }} />
            <InstagramIcon sx={{ color: 'var(--verde-inacex)', cursor: 'pointer' }} />
            <MailOutlineIcon sx={{ color: 'var(--verde-inacex)', cursor: 'pointer' }} />
            <WhatsAppIcon sx={{ color: 'var(--verde-inacex)', cursor: 'pointer' }} />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: 'var(--verde-inacex)' }} />

      {/* Footer inferior */}
      <Box textAlign="center">
        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} INACEX Centro de Entrenamiento Minero. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', mt: 1 }}>
          Diseño web por NeyeTI | Versión 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
