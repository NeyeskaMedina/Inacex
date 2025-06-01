import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './carousel.css';
import '../.././index.css';

const slides = [
  {
    anexoTitle: 'CERTIFICATE EN',
    title: 'CAMIÓN EXTRACCIÓN ALTO TONELAJE',
    Marca2: 'CAT',
    Modelo2: '797F Y 793F',
    notification: 'Obtén tu certificado en sólo 4 meses.',
    image: './imgCarousel/930e-komatsu.png',
  },
  {
    anexoTitle: 'OPERACIÓN SEGURA DE',
    title: 'GRÚA HORQUILLA',
    notification: 'Con nuestros beneficios obten tu licencia clase D.',
    image: './imgCarousel/horquilla.jpg',
  },
  {
    anexoTitle: 'OPERACIÓN SEGURA DE',
    title: 'BULLDOZER',
    Marca2: 'CAT',
    Modelo2: 'D09 Y D11',
    notification: 'Capacitación reconocida en Chile y Perú',
    image: './imgCarousel/bulldozer.jpg',
  },
];

const Carousel = () => {
  return (
    <Box sx={{ width: '100%'}}>
      <Swiper
        className={'mi-swiper'}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 4000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        style={{ overflow: 'hidden' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: {xs: '90vh', md: '82vh'},
                width: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 0,
                margin: 0,
              }}
            >
              {/*  Contenedor del texto */}
              <Box
                sx={{
                 // backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: {xs: 'center', md: 'start'},
                  color: '#fff',
                  width: '100%',
                  height: '100%',
                  paddingLeft: { xs: 0, md: 10 },
                }}
              >


                {/*ANEXO DEL TÍTULO */}
                <Typography
                  className="roboto-condensed"
                  variant="h4"
                  sx={{
                    fontWeight: {xs: '400', md: '800' },
                    letterSpacing: '-0.1rem',
                    fontSize: {
                        xs: '1.4rem',  
                        sm: '1.4rem',
                        md: '1.7rem',
                        lg: '2rem',
                        xl: '2.3rem',
                    },
                    lineHeight: 1,
                    width: {xs: '100%', md: '50%'},
                    color: 'white',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {slide.anexoTitle}
                </Typography>

                  {/* TÍTULO */}
                <Typography
                  className="roboto-condensed"
                  variant="h3"
                  sx={{
                    fontWeight: {xs: '400', md: '800' },
                    // fontSize: {
                    //     xs: '1.6rem',  
                    //     sm: '1.6rem',
                    //     md: '1.9rem',
                    //     lg: '2.5rem',
                    //     xl: '2.5rem',
                    // },
                    lineHeight: 1,
                    width: {xs: '100%', md: '50%'},
                    color: 'var(--verde-inacex)',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {slide.title}
                </Typography>

                {/* MARCA / MODELO */}
                <Typography
                  className="roboto-condensed"
                  variant="subtitle1"
                  sx={{
                    letterSpacing: '-0.1rem',
                    fontSize: {
                        xs: '1.6rem',  
                        sm: '1.6rem',
                        md: '1.9rem',
                        lg: '2.2rem',
                        xl: '2.5rem',
                    },
                    color: 'var(--naranja-cat)',
                    fontWeight: '100',
                    marginLeft: 0,
                    lineHeight: 1,
                  }}
                >
                  {slide.Marca2} {slide.Modelo2}
                </Typography>

                {/* SUBTITULO */}

                <Typography
                  className=""
                  variant="subtitle1"
                  sx={{
                    fontWeight: '100',
                    letterSpacing: '0',
                    fontSize: {
                        xs: '0.9rem',  
                        sm: '0.9rem',
                        md: '1.2rem',
                        lg: '1.3rem',
                        xl: '1.5rem',
                    },
                    lineHeight: 2,
                    marginTop: 2,
                  }}
                >
                  {slide.notification}
                </Typography>

                <Button 
                    color="inherit"
                    sx={{
                      backgroundColor: 'var(--verde-inacex)',
                      alignSelf: {xs: 'center', md: 'start'},
                      color: 'white',
                      width: 'fit-content',
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '0.8rem',  
                        sm: '0.8rem',
                        md: '0.8rem',
                        lg: '1rem',
                        xl: '1.2rem',
                      },
                      marginTop: 2,
                      padding: 1,
                      borderRadius: '40px',
                      '&:hover': {
                        backgroundColor: 'var(--naranja-cat-hover)',
                      },
                    }}
                >
                    Mas información
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
