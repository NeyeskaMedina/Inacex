import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const infoHorquilla = [
  {
    descripcion: `Nuestras clases de grúa cumplen con todos los estándares actuales. Esto asegura que 
                los operadores estén instruidos en las mejores prácticas de seguridad, reduciendo el 
                riesgo de incidentes. Póngase en contacto con nuestros ejecutivos de admisión  hoy 
                mismo`
  },
  {
    textoPrincipal: 'Tener buena conectividad a internet',
    textoSecundario: 'Se recomienda realizar el curso a través de PC, MAC ó TABLET',
    fondo: 'linear-gradient(135deg, var(--naranja-oscuro), var(--naranja-gradient))',
    icon: <LaptopChromebookIcon sx={{ color: 'var(--naranja-cat)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
  {
    textoPrincipal: 'Tener rendido 4° año medio deseable (mínimo 8 básico)',
    fondo: '#1D1D1D',
    icon: <AssignmentIndOutlinedIcon sx={{ color: 'var(--naranja-oscuro)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
  {
    textoPrincipal: 'Tener mínimo 18 años de edad',
        textoSecundario: 'Obligatorio de acuerdo a la normativa legal vigente.',
        fondo: '#1D1D1D',
        icon: <HowToRegIcon sx={{ color: 'var(--naranja-oscuro)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
    
  },
  {
    textoPrincipal: 'Ser chileno o extranjero con residencia permanente o en trámite',
    fondo: 'linear-gradient(135deg, var(--naranja-oscuro), var(--naranja-gradient))',
    icon: <AccountBoxIcon sx={{ color: 'var(--naranja-cat)',  fontSize: { xs: '35px', md: '40px', lg: '50px' }  }} />,
  },
];


export default infoHorquilla;