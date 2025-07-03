import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export const infoCaex = [
  {
    descripcion: ` El alumno egresado del programa Camión Minero del Centro de 
Entrenamiento Minero INACEX, está capacitado para desempeñarse en 
faenas extractivas de recursos minerales metálicos y no metálicos, donde 
se empleen métodos de explotación a tajo abierto. Será un operador con 
capacidad para trabajar con altos estándares de seguridad, 
responsabilidad y compromiso, adquirá conocimientos, habilidades y 
actitudes para trabajar colaborativamente con los miembros del equipo de 
trabajo.`
  },
  {
    textoPrincipal: 'Tener disponibilidad de tiempo según el horario del curso',
    fondo: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
    icon: <AccessAlarmIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
  {
    textoPrincipal: 'Tener rendido 4° año medio deseable (mínimo 8 básico)',
    fondo: '#1D1D1D',
    icon: <AssignmentIndOutlinedIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
  {
    textoPrincipal: 'Tener licencia clase D (No excluyente)',
    fondo: '#1D1D1D',
    icon: <ArtTrackIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
  {
    textoPrincipal: 'Tener buena conectividad a internet',
    textoSecundario: 'Se recomienda realizar el curso a través de PC, MAC ó TABLET',
    fondo: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
    icon: <LaptopChromebookIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
];


export default infoCaex;