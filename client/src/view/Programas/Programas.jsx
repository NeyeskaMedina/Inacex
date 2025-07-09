import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
  Box, Stack, Button, Select, MenuItem, Paper,
  Table, TableBody, TableCell, TableRow, useMediaQuery, useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../../utils/programas';
import { formatoMes } from '../../helpers/formatoMes';
import {
  imagenesCategorias,
  obtenerNombreCategoria
} from '../../utils/accordion';
import Contratar from '../../components/Generals/Buttons/Contratar/Contratar';

export const Programas = () => {
  const theme = useTheme();
  const esXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [expandedSeccion, setExpandedSeccion] = useState(null);
  const [expandedCategoria, setExpandedCategoria] = useState(null);
  const [seleccionado, setSeleccionado] = useState({});

  const handleSeleccion = (categoria, idx) => {
    setSeleccionado((prev) => ({
      ...prev,
      [categoria]: idx,
    }));
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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1  }}>
        <h1 className='roboto-condensed' style={{ textAlign: 'center', color: 'white', zIndex: 10}}>PROGRAMA DE FORMACIÓN</h1>
        <h5  className='roboto-condensed' style={{ textAlign: 'center', color: 'var(--verde-inacex)'}}>{formatoMes()}</h5>
      </Box>
      {['maquinaria', 'admin'].map((seccion) => (
        <Accordion
          key={seccion}
          expanded={expandedSeccion === seccion}
          onChange={() => setExpandedSeccion(expandedSeccion === seccion ? null : seccion)}
          sx={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            mb: 2,
            color: 'white',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className='roboto-condensed' variant="h6" fontWeight="bold" sx={{ color: 'white' }}>
              CURSOS DE{' '}
                <span style={{ color: 'var(--verde-inacex)' }}>
                  {seccion === 'maquinaria' ? 'MAQUINARIA PESADA' : 'ADMINISTRACIÓN'}
                </span>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            {data.programas[seccion]?.map((bloque, i) =>
              Object.entries(bloque).map(([categoria, grupos]) => {
                const cursos = [];
                Object.entries(grupos).forEach(([grupoKey, cursosGrupo]) => {
                  cursosGrupo.forEach((curso) => {
                    cursos.push({ ...curso, grupo: grupoKey });
                  });
                });

                if (cursos.length === 0) return null;
                const seleccionadoCurso = seleccionado[categoria] ?? 0;
                const curso = cursos[seleccionadoCurso];

                return (
                  <Accordion
                    key={`${seccion}-${categoria}-${i}`}
                    expanded={expandedCategoria === `${seccion}-${categoria}`}
                    onChange={() =>
                      setExpandedCategoria(
                        expandedCategoria === `${seccion}-${categoria}` ? null : `${seccion}-${categoria}`
                      )
                    }
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 2,
                      mb: 2,
                      color: 'white',
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          component="img"
                          src={imagenesCategorias(categoria)}
                          alt={categoria}
                          sx={{ width: 80, height: 80, objectFit: 'contain' }}
                        />
                        <Typography fontWeight="bold" sx={{ color: 'white' }}>
                          {obtenerNombreCategoria(categoria)}
                        </Typography>
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        {esXs ? (
                          <Box sx={{ width: '100%' }}>
                            <Select
                              fullWidth
                              value={seleccionadoCurso}
                              onChange={(e) => handleSeleccion(categoria, e.target.value)}
                              sx={{
                                mb: 2,
                                backgroundColor: 'var(--verde-inacex)',
                                borderRadius: 2,
                              }}
                            >
                              {cursos.map((c, idx) => (
                                <MenuItem key={idx} value={idx}>
                                  {c.title} {c.nexo}
                                </MenuItem>
                              ))}
                            </Select>
                          </Box>
                        ) : (
                          <Stack spacing={1} sx={{ width: '30%' }}>
                            {cursos.map((c, idx) => (
                              <Button
                                key={idx}
                                onClick={() => handleSeleccion(categoria, idx)}
                                sx={{
                                  justifyContent: 'flex-start',
                                  color:
                                    seleccionadoCurso === idx ? 'white' : 'rgba(255,255,255,0.7)',
                                  backgroundColor:
                                    seleccionadoCurso === idx ? 'var(--verde-inacex)' : 'transparent',
                                  border: '1px solid rgba(255,255,255,0.2)',
                                  borderRadius: 2,
                                  textTransform: 'none',
                                  fontWeight: 600,
                                }}
                              >
                                {c.title} {c.nexo}
                              </Button>
                            ))}
                          </Stack>
                        )}

                        <Box sx={{ flex: 1 }}>
                          <Paper
                            elevation={3}
                            sx={{
                              borderRadius: 2,
                              p: 2,
                              overflowX: 'auto',
                              backgroundColor: 'rgba(255,255,255,0.9)',
                            }}
                          >
                            <Stack direction="row" spacing={2}>
                              <Table size="small">
                                <TableBody>
                                  {curso.detalles?.map(([label, value], i) => (
                                    <TableRow key={i}>
                                      <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                                        {label}
                                      </TableCell>
                                      <TableCell>{value}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>

                              <Table size="small">
                                <TableBody>
                                  {curso.modulos?.map(([label, value], i) => (
                                    <TableRow key={i}>
                                      <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                                        {label}
                                      </TableCell>
                                      <TableCell>{value}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Stack>
                          </Paper>
                          <Box mt={2}>
                            <Contratar plan={curso} image={'./imgCursos/moto/moto12.png'} />
                          </Box>
                        </Box>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Programas;
