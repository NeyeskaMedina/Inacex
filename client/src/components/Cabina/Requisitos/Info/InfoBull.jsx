import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export const infoBull = [
  {
    descripcion: ` Este curso está diseñado para capacitar a nuevos operadores en el 
    manejo seguro y eficiente de los bulldozers D9 y D11, utilizados en operaciones 
    mineras. A través de contenidos teóricos y simulación avanzada, se abordan aspectos
     esenciales como los sistemas de seguridad, controles operativos, mantenimiento 
     preventivo, inspecciones técnicas y procedimientos de operación. Asimismo, 
     constituye una valiosa herramienta de actualización para operadores con 
     experiencia, permitiéndoles reforzar sus conocimientos y promover una operación 
     segura, responsable y alineada con los estándares actuales del sector minero.
`
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


export default infoBull;