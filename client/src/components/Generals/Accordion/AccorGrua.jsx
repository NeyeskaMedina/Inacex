import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { obtenerProgramasActivos } from '../../../utils/accordion';

export const AccorGrua = () => {
  const accorProgramas = obtenerProgramasActivos('grua');

  return (
    <>
      {Object.entries(accorProgramas).map(([categoria, programas]) => (
        <Accordion
          key={categoria}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(14px)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            p: 1,
            mb: 2,
            mt: 2,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              {categoria.toUpperCase().replace(/_/g, ' ')}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            {programas.map((programa, idx) => (
              <Accordion
                key={idx}
                sx={{
                  background: 'rgba(255, 255, 255, 0.33)',
                  borderRadius: 2,
                  p: 1,
                  mb: 2,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'black',
                      fontWeight: 600,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    {programa.title}
                    {programa.nexo && (
                      <span style={{ color: 'white' }}> {programa.nexo}</span>
                    )}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <TableContainer
                    component={Paper}
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      overflowX: 'auto',
                    }}
                  >
                    <Table size="small">
                      <TableBody>
                        {programa.detalles.map(([label, value], i) => (
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
                            <TableCell
                              sx={{
                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                              }}
                            >
                              {value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccorGrua;
