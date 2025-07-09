import React from 'react';
import { Box, Typography, Container, Divider, Paper } from '@mui/material';

const TerminosCondiciones = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
          Términos y Condiciones de INACEX
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" gutterBottom>
          Última actualización: 8 de julio de 2025
        </Typography>

        <Typography paragraph>
          Bienvenido al sitio web de INACEX, el mejor centro de entrenamiento minero. Al utilizar
          este sitio, aceptas cumplir con los siguientes términos y condiciones. Si no estás de
          acuerdo con alguno de ellos, por favor no utilices este sitio.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          1. Uso del sitio
        </Typography>
        <Typography paragraph>
          Este sitio web tiene como finalidad proporcionar información sobre nuestros cursos,
          servicios de capacitación y procesos de matrícula. Está prohibido utilizar este sitio para
          fines ilegales, fraudulentos o no autorizados.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          2. Propiedad intelectual
        </Typography>
        <Typography paragraph>
          Todo el contenido de este sitio web, imágenes, logos, videos y marcas
          registradas, pertenece a INACEX o a sus respectivos propietarios y está protegido por las
          leyes de propiedad intelectual. Queda prohibida la reproducción o distribución sin
          autorización previa por escrito.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          3. Proceso de matrícula
        </Typography>
        <Typography paragraph>
          Al registrarte en un curso, te comprometes a proporcionar información veraz y completa. INACEX
          se reserva el derecho de rechazar matrículas que contengan información falsa, incompleta o
          sospechosa.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          4. Pagos y reembolsos
        </Typography>
        <Typography paragraph>
          Los pagos por cursos son procesados a través de plataformas seguras. Solo se realizarán
          reembolsos en casos específicos, los cuales serán evaluados individualmente por nuestro
          equipo de atención.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          5. Modificaciones del sitio
        </Typography>
        <Typography paragraph>
          INACEX se reserva el derecho de modificar, suspender o eliminar cualquier sección del
          sitio sin previo aviso. Nos comprometemos a mantener la información actualizada y precisa.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          6. Protección de datos personales
        </Typography>
        <Typography paragraph>
          La información personal recopilada será tratada de acuerdo a la Ley 19.628 sobre
          Protección de la Vida Privada en Chile. Puedes revisar nuestra Política de Privacidad para
          más detalles.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
          7. Contacto
        </Typography>
        <Typography paragraph>
          Para consultas o sugerencias sobre estos términos, puedes escribirnos a:{' '}
          <strong>contacto@inacex.cl</strong>.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} INACEX. Todos los derechos reservados.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TerminosCondiciones;
