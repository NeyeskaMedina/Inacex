import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';
import { getRegisters } from '../../../apiRest/apiInacex/get/getRegisters.js';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 70, flex: 0.3 },
  {
  field: 'create_date',
  headerName: 'Fecha',
  minWidth: 140,
  flex: 0.7,
  renderCell: (params) => {
    const dateStr = params.value;
    if (!dateStr) return 'Sin fecha';
    const [year, month, day] = dateStr.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  },
},
  { field: 'rut', headerName: 'RUT', minWidth: 150, flex: 0.7 },
  { field: 'nombre', headerName: 'Nombre', minWidth: 180, flex: 1 },
  { field: 'telefono', headerName: 'Teléfono', minWidth: 130, flex: 0.7 },
  { field: 'correo', headerName: 'Correo', minWidth: 200, flex: 1 },
  { field: 'sede', headerName: 'Sede', minWidth: 120, flex: 0.6 },
  { field: 'curso', headerName: 'Curso', minWidth: 200, flex: 1 },
  { field: 'direccion', headerName: 'Dirección', minWidth: 220, flex: 1.2 },
];

export default function TableRolled() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const axiosProspect = async () => {
      const { response, error } = await getRegisters();

      if (error) {
        console.error("Error al obtener registros:", error);
        setRows([]);
      } else if (Array.isArray(response?.prospects)) {
        const formattedRows = response.prospects.map((item, index) => ({
          id: index + 1,
          ...item,
        }));
        console.log("Registros recibidos:", formattedRows); 
        setRows(formattedRows);
      } else {
        console.warn("No se recibieron prospectos en la respuesta.");
        setRows([]);
      }

      setLoading(false);
    };

    axiosProspect();
  }, []);

  return (
  <Box
    sx={{
      width: '100vw',
      overflowX: 'scroll',
    }}
  >
    <Box
      sx={{
        width: '100%', // esto hace que se ajuste al contenedor padre
        maxWidth: '100vw',
        height: 600,
      }}
    >
      {loading ? (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box sx={{ height: 600, width: '100%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              width: '100%',
            }}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
          />
        </Box>
      )}
    </Box>
  </Box>
);

}
