import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export const infoMoto = [
  {
    descripcion: ` El curso de Teórico y Simulación sobre
MOTONIVELADORA SERIE M para
Minería y Construccion está diseñado
para presentar a los nuevos operadores
la seguridad de las máquinas, los controles
de la máquina, el mantenimiento, la
inspección y los procedimientos operativos.
También es una herramienta de apoyo
para que las personas con experiencia
actualicen o mejoren sus conocimientos
sobre la operación segura y responsable
de una Motoniveladora. El curso se
desarrollará por la plataforma virtual
Zoom y el entrenamiento se realizará
con la mejor tecnología de simulación
CATSIMULATORS.`
  },
  {
    textoPrincipal: 'Tener rendido 4° año medio deseable (mínimo 8 básico)',
    fondo: '#1D1D1D',
    icon: <AssignmentIndOutlinedIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
  },
   {
    textoPrincipal: 'Tener disponibilidad de viajar a simulación',
    textoSecundario: 'Según región donde te encuentres',
     fondo: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
    icon: <FlightTakeoffIcon sx={{ color: 'var(--verde-icon)', fontSize: { xs: '35px', md: '40px', lg: '50px' } }} />,
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


export default infoMoto;