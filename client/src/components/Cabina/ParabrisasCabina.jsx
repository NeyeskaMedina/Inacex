import { Box } from '@mui/material';

const ParabrisasCabina = ({ image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        width: '100%',
        height: {xs: '60vh', md: '80vh'},
        p: 2,
        backgroundColor: '#1e1e1e',
      }}
    >
      {/* Parabrisas Izquierdo con perspectiva */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: '350% 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        //   backdropFilter: 'blur(4px)',
          transform: 'perspective(800px) rotateY(15deg)',
          transformOrigin: 'right center',
          clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)',
          borderRadius: '60px 0 0 60px',
          overflow: 'hidden',
        }}
      />

      {/* Parabrisas Central */}
      <Box
        sx={{
          flex: 2,
          p: 0,
          backgroundImage: `url(${image})`,
        //   backgroundSize: '200% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(2px)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Box>

      {/* Parabrisas Derecho con perspectiva */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: '350% 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        //   backdropFilter: 'blur(4px)',
          transform: 'perspective(800px) rotateY(-15deg)',
          transformOrigin: 'left center',
          clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0% 95%)',
          borderRadius: '0 60px 60px 0',
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default ParabrisasCabina;
