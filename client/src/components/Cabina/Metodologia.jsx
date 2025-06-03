import { Box, Typography } from '@mui/material';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
// import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';


export const Metodologia = () => {

  return (
    // Box Principal
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
        {/* Box HIJO 1 */}
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evelyn',
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
            <CastForEducationOutlinedIcon 
                sx={{
                    fontSize: '50px',
                    color: 'var(--naranja-oscuro)',
                    m: 1,
                }}
            />
            <Typography 
                className=""
                variant="p"
                sx={{
                    m: 0,
                    p: 0,
                    fontWeight: '100',
                    textAlign: 'center',
                    fontSize: {xs: '0.8rem', md: '1rem'},
                    color: 'var(--naranja-cat)',
                }}
            >
                {'Aprendizaje E-Learning'}
            </Typography>
            
        </Box>
        {/* Box HIJO 2 */}
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evelyn',
                position: 'relative',
                border: '1px solid var(--naranja-oscuro)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
            <AssuredWorkloadOutlinedIcon 
                sx={{
                    fontSize: '50px',
                    color: 'var(--naranja-oscuro)',
                    m: 1,
                }}
            />
            <Typography 
                className=""
                variant="p"
                sx={{
                    m: 0,
                    p: 0,
                    fontWeight: '100',
                    textAlign: 'center',
                    fontSize: {xs: '0.8rem', md: '1rem'},
                    color: 'var(--naranja-cat)',
                }}
            >
                {'Campus virtual'}
            </Typography>
        </Box>
    {/*Box HIJO 3 */}
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evelyn',
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
            <AssignmentIndOutlinedIcon 
                sx={{
                    fontSize: '50px',
                    color: 'var(--naranja-oscuro)',
                    m: 1,
                }}
            />
            <Typography 
                className=""
                variant="p"
                sx={{
                    m: 0,
                    p: 0,
                    fontWeight: '100',
                    textAlign: 'center',
                    fontSize: {xs: '0.8rem', md: '1rem'},
                    color: 'var(--naranja-cat)',
                }}
            >
                {'Tutor especializado'}
            </Typography>
        </Box>
        {/* HIJO 4 */}
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evelyn',
                position: 'relative',
                border: '1px solid var(--naranja-cat)',
                width: '120px',
                height: '120px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-transp)',
            }}
        >
            <SupportAgentOutlinedIcon 
                sx={{
                    fontSize: '50px',
                    color: 'var(--naranja-oscuro)',
                    m: 1,
                }}
            />
            <Typography 
                className=""
                variant="p"
                sx={{
                    m: 0,
                    p: 0,
                    fontWeight: '100',
                    textAlign: 'center',
                    fontSize: {xs: '0.8rem', md: '1rem'},
                    color: 'var(--naranja-cat)',
                }}
            >
                {'Soporte al alumno'}
            </Typography>
        </Box>
    </Box>
  );
};

export default Metodologia;