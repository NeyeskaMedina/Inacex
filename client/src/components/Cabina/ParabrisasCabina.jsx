import { Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';


const ParabrisasCabina = ({ image, viewIzq, viewDer, viewCentXS, viewCentMD, refProp }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  
  return (
    <>
    <Box
      ref={refProp}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        width: '100%',
        height: '95vh',
        p: {xs: '0', md: '16px 0 16px 0'},
        backgroundColor: '#1e1e1e',
      }}
    >
      {/* Parabrisas Izquierdo con perspectiva */}
      <Box
        sx={{
          border: 1,
          borderColor: 'orange',
          flex: isXs ? 0.2 : 1.5,
        //   p: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: viewIzq,
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        //   backdropFilter: 'blur(4px)',
          transform: 'perspective(800px) rotateY(15deg)',
        //   transformOrigin: 'right center',
          clipPath: { xs: 'polygon(0% 0%, 100% 5%, 95% 95%, 0% 100%)',md: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
          borderRadius: '60px 0 0 60px',
          overflow: 'hidden'
        }}
        
      />
        
      {/* Parabrisas Central */}
      <Box
        sx={{
          flex: {xs: 4, md: 3},
          p: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: {xs: viewCentXS, md: viewCentMD},
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        //   backdropFilter: 'blur(2px)',
          borderRadius: 2,
          height: {xs: '90%' , md: '95%'},
          alignSelf: 'center',
          overflow: 'hidden',
          border: 1,
          borderColor: 'orange',
        }}
      >
               
        <Box
          sx={{
            width: '98%',
            height: '100%',
            border: 'none',
          }}
        />
        
      </Box>

      {/* Parabrisas Derecho con perspectiva */}
      <Box
        sx={{
          border: 1,
          borderColor: 'orange',
          flex: isXs ? 0.2 : 1.5,
        //   p: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: viewDer,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        //   backdropFilter: 'blur(4px)',
          transform: 'perspective(800px) rotateY(-15deg)',
        //   transformOrigin: 'left center',
          clipPath: {xs: 'polygon(0% 5%, 100% 0%, 100% 100%, 5% 95%)', md: 'polygon(0 0%, 100% 0, 100% 100%, 0% 100%)'},
          borderRadius: '0 60px 60px 0',
          overflow: 'hidden',
        }}
      />
    </Box>
    </>
  );
};

export default ParabrisasCabina;