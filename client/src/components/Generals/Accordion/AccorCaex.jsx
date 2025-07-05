import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Stack,
  Box,
  Button,
  Select,
  MenuItem
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { obtenerProgramasActivos, imagenesCategorias, obtenerNombreCategoria } from '../../../utils/accordion';
import Contratar from '../Buttons/Contratar/Contratar';
import { useMediaQuery, useTheme } from '@mui/material';



export const AccorCaex = () => {
  const accorProgramas = obtenerProgramasActivos('caex');
  const categorias = Object.keys(accorProgramas);
  const [expandida, setExpandida] = useState(categorias[0]);
  const [seleccionadoPorCategoria, setSeleccionadoPorCategoria] = useState(
    categorias.reduce((acc, cat) => {
      acc[cat] = 0;
      return acc;
    }, {})
  );

  const theme = useTheme();
  const esXs = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box sx={{ width: '100%', py: 2 }}>
      {categorias.map((categoria) => {
        const cursos = accorProgramas[categoria];
        const seleccionado = seleccionadoPorCategoria[categoria];

        return (
          <Accordion
            key={categoria}
            expanded={expandida === categoria}
            onChange={() =>
              setExpandida(expandida === categoria ? false : categoria)
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
              <Stack direction="row" spacing={1} alignItems="center">
              <Box
                component="img"
                src={imagenesCategorias(categoria)}
                alt={categoria}
                sx={{ width: 150, height: 150, objectFit: 'contain' }}
              />
              <Typography fontWeight="bold">
                {obtenerNombreCategoria(categoria)}
              </Typography>
            </Stack>

            </AccordionSummary>

            <AccordionDetails>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems="flex-start"
              >
                {/* Selector lateral de cursos */}
                {esXs ? (
                  // En pantallas pequeñas, usar Select
                  <Box sx={{ width: '100%' }}>
                    <Select
                      className='roboto-condensed'
                      fullWidth
                      value={seleccionado}
                      onChange={(e) =>
                        setSeleccionadoPorCategoria((prev) => ({
                          ...prev,
                          [categoria]: e.target.value,
                        }))
                      }
                      sx={{
                        mb: 2,
                        backgroundColor: 'var(--verde-inacex)',
                        borderRadius: 2,
                      }}
                    >
                      {cursos.map((curso, idx) => (
                        <MenuItem className='roboto-condensed' key={idx} value={idx}>
                          {curso.titulo}
                          {curso.nexo && <>&nbsp;{curso.nexo}</>}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                ) : (
                  // Pantallas grandes, usar lista lateral
                  <Stack spacing={1} sx={{ width: '35%' }}>
                    {cursos.map((curso, idx) => (
                      <Button
                        key={idx}
                        onClick={() =>
                          setSeleccionadoPorCategoria((prev) => ({
                            ...prev,
                            [categoria]: idx,
                          }))
                        }
                        sx={{
                          justifyContent: 'flex-start',
                          color:
                            seleccionado === idx
                              ? 'white'
                              : 'rgba(255,255,255,0.7)',
                          backgroundColor:
                            seleccionado === idx
                              ? 'var(--verde-inacex)'
                              : 'transparent',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                        }}
                      >
                        {curso.titulo}
                        {curso.nexo && <span>&nbsp;{curso.nexo}</span>}
                      </Button>
                    ))}
                  </Stack>
                )}
            
                {/* Detalle del curso */}
                <Box sx={{ flex: 1, width: '100%' }}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 2,
                      p: 2,
                      overflowX: 'auto',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    <Stack direction={{ xs: 'row', md: 'row' }} spacing={2}>
                      {/* Tabla detalles */}
                      <Table size="small">
                        <TableBody>
                          {cursos[seleccionado].detalles.map(([label, value], i) => (
                            <TableRow key={i}>
                              <TableCell sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                                {label}
                              </TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                        
                      {/* Tabla módulos */}
                      <Table size="small">
                        <TableBody>
                          {cursos[seleccionado].modulos.map(([label, value], i) => (
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
                    <Contratar />
                  </Box>
                </Box>
              </Stack>
            </AccordionDetails>

          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccorCaex;
