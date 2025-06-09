import { Box, Grid, Typography, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid container spacing={4}>
        {/* Información de contacto */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Contacto
          </Typography>
          <Typography variant="body2">📍 Av. Principal 123, Santiago</Typography>
          <Typography variant="body2">📞 +56 9 1234 5678</Typography>
          <Typography variant="body2">✉ contacto@inacex.cl</Typography>
        </Grid>

        {/* Navegación */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Navegación
          </Typography>
          <Link href="#" underline="hover" color="inherit" variant="body2">Nuestros Cursos</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Preguntas Frecuentes</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Términos y Condiciones</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Política de Privacidad</Link>
        </Grid>

        {/* Otros enlaces */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Recursos
          </Typography>
          <Link href="#" underline="hover" color="inherit" variant="body2">Simuladores</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Campus Virtual</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Certificaciones</Link><br />
          <Link href="#" underline="hover" color="inherit" variant="body2">Manual del Alumno</Link>
        </Grid>

        {/* Redes Sociales */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: 'var(--verde-inacex)', mb: 1 }}>
            Conéctate
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <FacebookIcon sx={{ color: 'var(--verde-inacex)' }} />
            <InstagramIcon sx={{ color: 'var(--verde-inacex)' }} />
            <YouTubeIcon sx={{ color: 'var(--verde-inacex)' }} />
            <WhatsAppIcon sx={{ color: 'var(--verde-inacex)' }} />
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
