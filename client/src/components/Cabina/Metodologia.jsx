import { Box } from '@mui/material';
// import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';


export const Metodologia = () => {

  return (
    <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            position: {xs: 'fixed', md: 'absolute'},
            bottom: {xs: '0', md: '-170px'},
            height: {xs: '300px', md: '300px'},
            width: '100vw',
        }}
    >
        <Box 
            sx={{ 
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
        </Box>
        <Box 
            sx={{ 
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
        </Box>
        <Box 
            sx={{ 
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
        </Box>
        <Box 
            sx={{ 
                position: 'relative',
                p: 2,
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
        </Box>
    </Box>
  );
};

export default Metodologia;