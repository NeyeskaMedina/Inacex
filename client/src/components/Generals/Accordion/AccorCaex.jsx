import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const AccorCaex = () => {
    return (
        <AccordionDetails>
          {/* Subtítulo */}
          <Accordion 
            sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            p: 2,
        }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                CAMIÓN EXTRACCIÓN <span style={{color: 'var(--verde-inacex'}}>DE ALTO TONELAJE</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Subprograma */}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    CAMIÓN DE EXTRACCIÓN ALTO TONELAJE + <span style={{color: 'var(--verde-inacex'}}>GRÚA HORQUILLA</span>
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
    );
};
export default AccorCaex;