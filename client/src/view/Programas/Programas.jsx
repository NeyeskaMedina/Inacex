import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatoMes } from '../../helpers/formatoMes.js';
import { AccorCaex } from '../../components/Generals/Accordion/AccorCaex';

export default function Programas() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        px: 3,
        py: 5,
        backgroundImage: 'url(./imgCursos/frontal/12.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 0,
      }}
    >
      {/* Capa blanca semitransparente */}
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

      {/* Contenido */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {/* Barra destacada */}
        <Typography
          sx={{
            backgroundColor: 'var(--verde-inacex)',
            color: '#fff',
            textAlign: 'center',
            py: 1,
            fontWeight: 'bold',
            mb: 3,
            borderRadius: 1,
          }}
        >
          ¡Inscripciones abiertas este mes! Cupos limitados.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Programas de Formación - <span style={{ color: 'var(--verde-inacex)' }}>{formatoMes()}</span>
        </Typography>

        {/* CURSOS DE MAQUINARIA PESADA */}
        <Accordion sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            p: 2,
        }} expanded={expanded === 'maquinaria'} onChange={handleChange('maquinaria')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
              CURSOS DE <span style={{ color: 'var(--verde-inacex)' }}>MAQUINARIA PESADA /</span> <span style={{ color: 'var(--negro-ticket)' }}>Módulos - Modalidad - Horarios </span>
            </Typography>
          </AccordionSummary>
          {/*CURSOS CAEX*/}
          <AccorCaex />
        </Accordion>

        {/* CURSOS ADMINISTRATIVOS */}
        <Accordion expanded={expanded === 'admin'} onChange={handleChange('admin')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#2e7d32' }}>
              Cursos Administrativos
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Gestión de Recursos Humanos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Programa Intensivo de RRHH
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Modalidad</TableCell>
                            <TableCell>Online por Zoom</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Duración</TableCell>
                            <TableCell>+80 horas de formación</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Clases</TableCell>
                            <TableCell>2 veces por semana</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Certificación</TableCell>
                            <TableCell>Doble: Chile y Perú</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Soporte</TableCell>
                            <TableCell>Técnico y académico constante</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>Acceso</TableCell>
                            <TableCell>Campus Virtual + Material descargable</TableCell>
                          </TableRow>
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
