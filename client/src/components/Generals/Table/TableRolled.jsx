import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getRegisters } from '../../../apiRest/apiInacex/get/getRegisters.js';
import { toast, Bounce } from 'react-toastify';
import { putRegister } from '../../../apiRest/apiInacex/put/putRegister.js';

const EJECUTIVAS = ['Francys', 'Jhoana', 'Carina', 'Angelica', 'Neye'];

export default function TableRolled() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedRows, setEditedRows] = useState({});
  const [updatingIds, setUpdatingIds] = useState([]);

  const notify = () =>
    toast.success('Ejecutiva asignada con éxito!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });

  const notifyError = () =>
    toast.error('Error al asignar Ejecutiva!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });

  useEffect(() => {
    const axiosProspect = async () => {
      const { response, error } = await getRegisters();

      if (error) {
        console.error('Error al obtener registros:', error);
        setRows([]);
      } else if (Array.isArray(response?.prospects)) {
        const formattedRows = response.prospects.map((item, index) => ({
          id: item.id || index + 1,
          ...item,
          ejecutiva: item.ejecutiva || '',
        }));
        setRows(formattedRows);
      } else {
        setRows([]);
      }

      setLoading(false);
    };

    axiosProspect();
  }, []);

  const handleEjecutivaChange = (id, value) => {
    setEditedRows((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async (id) => {
    const selectedEjecutiva = editedRows[id];
    setUpdatingIds((prev) => [...prev, id]);

    try {
      const { error, loading } = await putRegister(id, selectedEjecutiva);
      if (error === null && loading === true) {

        setRows((prev) =>
          prev.map((row) =>
            row.id === id ? { ...row, ejecutiva: selectedEjecutiva } : row
          )
        );
        notify();
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      notifyError();
    } finally {
      setUpdatingIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 50, flex: 0.3 },
    {
      field: 'confirmacion_correo',
      headerName: 'Correo',
      minWidth: 90,
      flex: 0.6,
      renderCell: (params) => (params.value ? '✅' : '❌'),
    },
    {
      field: 'create_date',
      headerName: 'Fecha',
      minWidth: 120,
      flex: 0.6,
      renderCell: (params) => {
        const dateStr = params.value;
        if (!dateStr) return 'Sin fecha';
        const [year, month, day] = dateStr.split('T')[0].split('-');
        return `${day}/${month}/${year}`;
      },
    },
    { field: 'rut', headerName: 'RUT', minWidth: 120, flex: 0.6 },
    { field: 'nombre', headerName: 'Nombre', minWidth: 150, flex: 1 },
    { field: 'telefono', headerName: 'Teléfono', minWidth: 120, flex: 0.6 },
    { field: 'correo', headerName: 'Correo', minWidth: 180, flex: 1 },
    { field: 'sede', headerName: 'Sede', minWidth: 100, flex: 0.5 },
    { field: 'curso', headerName: 'Curso', minWidth: 180, flex: 1 },
    { field: 'direccion', headerName: 'Dirección', minWidth: 200, flex: 1.1 },
    {
      field: 'ejecutiva',
      headerName: 'Ejecutiva',
      minWidth: 150,
      flex: 0.8,
      renderCell: (params) => {
        const ejecutivaAsignada =
          params.row.ejecutiva &&
          params.row.ejecutiva.trim() !== '' &&
          params.row.ejecutiva !== 'NULL';

        if (ejecutivaAsignada) {
          return (
            <Typography variant="body2" color="green">
              {params.row.ejecutiva}
            </Typography>
          );
        } else {
          return (
            <Select
              size="small"
              value={editedRows[params.row.id] || ''}
              onChange={(e) =>
                handleEjecutivaChange(params.row.id, e.target.value)
              }
              displayEmpty
              fullWidth
            >
              <MenuItem value="">
                <em>Seleccione</em>
              </MenuItem>
              {EJECUTIVAS.map((op) => (
                <MenuItem key={op} value={op}>
                  {op}
                </MenuItem>
              ))}
            </Select>
          );
        }
      },
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      minWidth: 120,
      renderCell: (params) => {
        const ejecutivaAsignada =
          params.row.ejecutiva &&
          params.row.ejecutiva.trim() !== '' &&
          params.row.ejecutiva !== 'NULL';

        return (
          <Button
            variant="contained"
            size="small"
            color={ejecutivaAsignada ? 'info' : 'success'}
            disabled={
              ejecutivaAsignada ||
              updatingIds.includes(params.row.id) ||
              !editedRows[params.row.id]
            }
            onClick={() => handleUpdate(params.row.id)}
          >
            {ejecutivaAsignada
              ? 'Asignado'
              : updatingIds.includes(params.row.id)
              ? 'Guardando...'
              : 'Asignar'}
          </Button>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'auto',
        px: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
          minWidth: '900px',
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
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            checkboxSelection
            sx={{
              fontSize: '0.78rem',
              '.MuiDataGrid-columnHeaders': {
                fontSize: '0.8rem',
                backgroundColor: '#f5f5f5',
              },
              '.MuiDataGrid-cell': {
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
}
