import React from 'react';
import { Box, Typography, Container, Divider, Paper } from '@mui/material';

const PoliticasDePrivacidad = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
          Políticas de Privacidad de INACEX
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" gutterBottom>
          Última actualización: 25 de julio de 2025
        </Typography>

        <Typography paragraph>
          En INACEX valoramos tu privacidad. Esta política describe cómo recopilamos, usamos,
          almacenamos y protegemos tu información personal cuando visitas nuestro sitio web o te
          inscribes en nuestros cursos de capacitación.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          1. Información que recopilamos
        </Typography>
        <Typography paragraph>
          Recopilamos información personal como nombre, RUT, correo electrónico, número de teléfono
          y ciudad, cuando te registras o completas formularios en nuestro sitio web.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          2. Uso de la información
        </Typography>
        <Typography paragraph>
          Utilizamos tus datos para gestionar tu inscripción, enviarte información sobre nuestros
          cursos, promociones y responder tus consultas. No compartimos tu información con terceros
          sin tu consentimiento explícito.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          3. Seguridad de los datos
        </Typography>
        <Typography paragraph>
          Aplicamos medidas técnicas y organizativas para proteger tus datos personales contra el
          acceso no autorizado, pérdida o alteración.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          4. Cookies y tecnologías similares
        </Typography>
        <Typography paragraph>
          Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario. Puedes
          desactivarlas desde la configuración de tu navegador.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          5. Derechos del usuario
        </Typography>
        <Typography paragraph>
          Tienes derecho a acceder, rectificar o eliminar tu información personal. Para ejercer
          estos derechos, contáctanos al correo electrónico que aparece más abajo.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          6. Cambios en esta política
        </Typography>
        <Typography paragraph>
          Nos reservamos el derecho de modificar esta política en cualquier momento. Te
          notificaremos sobre cambios importantes a través de nuestro sitio web o por correo
          electrónico.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          7. Contacto
        </Typography>
        <Typography paragraph>
          Si tienes preguntas sobre nuestras políticas de privacidad, escríbenos a:{' '}
          <strong>contacto@inacexcem.cl</strong>.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} INACEX. Todos los derechos reservados.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PoliticasDePrivacidad;
