import { Box, Typography } from '@mui/material';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

export const Metodologia = () => {
  const iconos = [
    {
      icon: <CastForEducationOutlinedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'var(--naranja-oscuro)', m: 1 }} />,
      texto: 'Aprendizaje E-Learning',
    },
    {
      icon: <AssuredWorkloadOutlinedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'var(--naranja-oscuro)', m: 1 }} />,
      texto: 'Campus virtual',
    },
    {
      icon: <AssignmentIndOutlinedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'var(--naranja-oscuro)', m: 1 }} />,
      texto: 'Tutor especializado',
    },
    {
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'var(--naranja-oscuro)', m: 1 }} />,
      texto: 'Soporte al alumno',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        px: 2,
        py: 2,
        width: '100%',
        zIndex: { xs: 0, md: 2 }, // detrás en XS, encima en grandes
        position: {
          xs: 'fixed',       // fijo en móviles
          md: 'absolute',    // posición absoluta en cabina (pantallas grandes)
        },
        bottom: {
          xs: '20px',        // fijo al fondo en móviles
          md: '40px',        // pegado abajo en cabina
        },
        left: 0,
        backgroundColor: {
          xs: 'transparent',
          md: 'transparent',
        },
      }}
    >
      {iconos.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--naranja-cat)',
            width: { xs: '100px', sm: '120px', md: '150px' },
            height: { xs: '100px', sm: '120px', md: '150px' },
            borderRadius: '12px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(3px)', //zoom
          }}
        >
          {item.icon}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
              color: 'var(--naranja-cat)',
              px: 1,
            }}
          >
            {item.texto}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Metodologia;
