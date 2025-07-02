import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const infoFrontal = [
  {
    descripcion: `Este curso está orientado a operadores principiantes
        y personas que deseen mejorar sus conocimientos
        sobre los controles de los cargadores frontales
        de construcción, obras civiles y sus procedimientos
        de mantenimiento, inspección, seguridad y
        operación.
        Este curso, incluye solo contenido teórico. A
        demás, se muestran o demuestran procedimientos
        de operación básicos y previos a la operación.
        El objetivo de este curso no es formar operadores
        expertos capaces de operar de manera segura
        un cargador de ruedas (cargador frontal de
        cualquier marca o modelo). El curso está disponible
        en cualquier dispositivo conectado a la web y
        contiene actividades atractivas, narración
        completa del curso, video de alta definición,
        recorridos interactivos de máquinas y recorridos
        de la cabina del operador. `
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


export default infoFrontal;