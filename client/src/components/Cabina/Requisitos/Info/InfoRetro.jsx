import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const infoRetro = [
  {
    descripcion: ` El operador de Retroexcavadora puede trabajar y desempeñarse en rubros de construcción y mineria. Tiene un amplio campo laboral.
    Los participantes estarán en la capacidad de identificar y conocer los componentes del equipo, además podrán detactar fallas sintomáticas, mantenimiento preventivo y operar de acuerdo a parámetros de seguriad y producción conociendo así los procedimientos operacionales según normas vigentes.
    `
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


export default infoRetro;