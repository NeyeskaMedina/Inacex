import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatoMes } from '../../helpers/formatoMes.js';
import { AccorCaex } from '../../components/Generals/Accordion/AccorCaex';
import { AccorGrua } from '../../components/Generals/Accordion/AccorGrua';

export default function Programas() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        backgroundImage: 'url(./imgCursos/frontal/12.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 0,
      }}
    >
      {/* Capa oscura */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {/* Título principal */}
        <Typography
          variant="h3"
          className="roboto-condensed"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: 'white',
            mb: 1,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
          }}
        >
          Programas de Formación
        </Typography>

        <Typography
          variant="h5"
          className="roboto-condensed"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: 'var(--verde-inacex)',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
          }}
        >
          {formatoMes()}
        </Typography>

        {/* Accordion Maquinaria */}
        <Accordion
          sx={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
            mb: 3,
          }}
          expanded={expanded === 'maquinaria'}
          onChange={handleChange('maquinaria')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: '#e0f2f1',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                }}
              >
                CURSOS DE <span style={{ color: 'var(--verde-inacex)' }}>MAQUINARIA PESADA</span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'var(--blanco-notification)',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                }}
              >
                / Módulos - Modalidad - Horarios
              </Typography>
            </Box>
          </AccordionSummary>
          {/* `PROGRAMAS CAEX` */}
          <AccorCaex />
           {/* `PROGRAMAS GRUA` */}
          <AccorGrua />
        </Accordion>

        {/* Accordion Administrativos */}
        <Accordion
          sx={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            mb: 3,
          }}
          expanded={expanded === 'admin'}
          onChange={handleChange('admin')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: '#a5d6a7',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              }}
            >
              Cursos Administrativos
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                  Gestión de Recursos Humanos
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      Programa Intensivo de RRHH
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <TableContainer
                      component={Paper}
                      sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    >
                      <Table size="small">
                        <TableBody>
                          {[
                            ['Modalidad', 'Online por Zoom'],
                            ['Duración', '+80 horas de formación'],
                            ['Clases', '2 veces por semana'],
                            ['Certificación', 'Doble: Chile y Perú'],
                            ['Soporte', 'Técnico y académico constante'],
                            ['Acceso', 'Campus Virtual + Material descargable'],
                          ].map(([label, value], i) => (
                            <TableRow key={i}>
                              <TableCell
                                sx={{
                                  fontWeight: 'bold',
                                  color: '#2e7d32',
                                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                }}
                              >
                                {label}
                              </TableCell>
                              <TableCell sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                                {value}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
