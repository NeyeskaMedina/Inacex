import React from 'react';
import { Container, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Slider from 'react-slick';
import CardCourses from './CardCourses.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    title: 'Camión de Extracción de alto tonelaje',
    subtitle: 'Modalidad Online / Zoom',
    image: './imgCursos/caex/caex-bg.png',
    view: '/caex'
  },
  {
    title: 'Bulldozer D09 al D11',
    subtitle: 'Modalidad E-Learning',
    image: './imgCursos/bull/bull-bg.png',
    view: '/bulldozer'
  },
  {
    title: 'Grúa Horquilla ',
    subtitle: 'Modalidad E-Learning',
    image: './imgCursos/horquilla/horquillaBG.png',
    view: '/grua-horquilla'
  },
  {
    title: 'Motoniveladora ',
    subtitle: 'Modalidad E-Learning',
    image: './imgCursos/moto/moto-bg-w.webp',
    view: '/motoniveladora'
  },
  {
    title: 'Retroexcavadora ',
    subtitle: 'Modalidad E-Learning',
    image: './imgCursos/retro/retro-bg.png',
    view: '/retroexcavadora'
  },
  {
    title: 'Cargador Frontal ',
    subtitle: 'Modalidad E-Learning',
    image: './imgCursos/frontal/cargador-bg.png',
    view: '/cargador-frontal'
  },
];

// Flechas personalizadas
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      right: -20,
      zIndex: 2,
      transform: 'translateY(-50%)',
      backgroundColor: 'var(--verde-transp)',
      '&:hover': { backgroundColor: 'var(--verde-inacex)' },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      left: -20,
      zIndex: 2,
      transform: 'translateY(-50%)',
      backgroundColor: 'var(--verde-transp)',
      '&:hover': { backgroundColor: 'var(--verde-inacex)' },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const ListCourses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1526,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        },
      },
    ],
  };

  return (
    <Box
       id={'nuestros-cursos'}
      sx={{
        width: '100vw',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
      }}
    >
      {/* Fondo detrás del contenido */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height:'60%',
          backgroundColor: 'var(--gris-section)',
          zIndex: 0,
        }}
      />

      {/* Contenido encima del fondo */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2 className='roboto-condensed'style={{ color: 'var(--verde-inacex)'}}>CURSOS DE MAQUINARIA PESADA</h2>
        <Slider {...settings}>
          {cards.map((card, i) => (
            <Box sx={{ maxWidth: { xs: '100%', sm: 300, md: 320, lg: 350, xl: 380 } }} key={i} px={2} >
              <CardCourses {...card} />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ListCourses;
