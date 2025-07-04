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
import { accorProgramas } from '../../../utils/accordion'
import Contratar from '../Buttons/Contratar/Contratar';

export const AccorCaex = () => {
  const programasCaex = accorProgramas['caex'];

  return (
    <AccordionDetails>
      <Accordion
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          alignItems: 'center',
          justifyContent: {xs: 'space-between', md: 'space-evenly'},
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
          <img src="./imgCursos/caex/caex-bg.png" width={{xs: '50px', md: '150'}} height={150} alt="" />
          <Typography
            variant="subtitle1"
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            CAMIÓN EXTRACCIÓN DE  <span style={{ color: 'var(--verde-inacex)' }}> ALTO TONELAJE</span>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {programasCaex.map((programa, idx) => (
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
                  {programa.titulo} <span style={{ color: 'white' }}>{programa.nexo}</span>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <TableContainer
                  component={Paper}
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    overflowX: 'auto',
                    display: 'flex',
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
                  <Table size="small">
                    <TableBody>
                      {programa.modulos.map(([label, value], i) => (
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
              <Contratar />
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </AccordionDetails>
  );
};

export default AccorCaex;
