import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getCursosFromProgramas } from '../../../utils/utils';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  Paper,
  Stack,
  Select
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { 
  sedes,
  validateEmail,
  validateRUT,
  validateDNI,
  validatePasaporte,
} from '../../../utils/utils'
import { postRegisters } from '../../../apiRest/apiInacex/post/postRegisters.js';


const FormularioInacex = ({ image, bgColor, font, cursoSeleccionado }) => {
  const [form, setForm] = useState({
    rut: '',
    nombre: '',
    telefono: '',
    correo: '',
    sede: '',
    direccion: '',
    curso: '',
  });

  useEffect(() => {
  if (cursoSeleccionado) {
    setForm((prevForm) => ({
      ...prevForm,
      curso: cursoSeleccionado,
    }));
  }
  }, [cursoSeleccionado]);
  const [errors, setErrors] = useState({});
  const [documentType, setDocumentType] = useState('DNI');
  const [documentValue, setDocumentValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Detectar si es campo select (no se transforma)
    const isSelectField = ['sede', 'curso'].includes(name);
    
    const newValue = isSelectField ? value : value.toUpperCase();
    
    setForm({ ...form, [name]: newValue });
    setErrors({ ...errors, [name]: '' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (documentType === 'rut' && !validateRUT(documentValue)) {
      newErrors.documentValue = 'Rut inválido';
    };
    if (documentType === 'DNI' && !validateDNI(documentValue)) {
      newErrors.documentValue = 'DNI inválido';
    };

    if (documentType === 'pasaporte' && !validatePasaporte(documentValue)) {
      newErrors.documentValue = 'Pasaporte inválido';
    };
    if (!form.nombre.trim()) newErrors.nombre = 'Campo requerido';
    if (!form.telefono.match(/^9\d{8}$/)) newErrors.telefono = 'Debe comenzar con 9 y tener 9 dígitos';
    if (!validateEmail(form.correo)) newErrors.correo = 'Correo no válido';
    if (!form.sede) newErrors.sede = 'Seleccione una sede';
    if (!form.curso) newErrors.curso = 'Seleccione un curso';
    if (!form.direccion.trim()) newErrors.direccion = 'Campo requerido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      try {
        // Envío de formulario al bk
        console.log('Datos enviados:', form);
        setForm({
          rut: '',
          nombre: '',
          telefono: '',
          correo: '',
          sede: '',
          direccion: '',
          curso: '',
        });
        const response = await postRegisters(form);
        const { error, loading } = response;
        if (error === null && loading === true) {
          Swal.fire({
            title: '¡Éxito!',
            text: '¡Registro exitoso!, se acaba de enviar un correo de confirmación para continuar con el proceso.',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: 'var(--verde-inacex)',
          });
        }
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
      }
    }
  };
  return (
    <Box
      id={'matriculate'}
      sx={{
        position: 'sticky',
        minHeight: '100vh',
        maxHeigth: '600px',
        backgroundImage: `url(${image})`,
        backgroundPosition: { xs: 'top center', sm: 'center' },
        backgroundSize: { xs: 'cover' },
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
>

        <Paper
          elevation={8}
          sx={{
            width: { xs: 320, md: 380, lg: 450, xl: 520 },
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            backgroundColor: bgColor,
            color: font,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 'auto',
          }}
        >
        <Typography
          className='roboto-condensed'
          variant="h5"
          gutterBottom
          sx={{
            color: 'var(--verde-inacex)',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
          }}
        >
          <span style={{ color: font }}>MATRICULARME EN</span> INACEX
        </Typography>

        <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
            <Stack spacing={1} sx={{ height: '100%' }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              alignItems="center"
            >
              <TextField
                select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                variant="outlined"
                label="Tipo"
                sx={{
                  width: { xs: '100%', sm: '30%' },
                  ...textFieldStyles,
                }}
                InputLabelProps={{ style: { color: font } }}
                InputProps={{ style: { color: font } }}
              >
                <MenuItem value="rut">RUT</MenuItem>
                <MenuItem value="DNI">DNI / CI</MenuItem>
                <MenuItem value="pasaporte">Pasaporte</MenuItem>
              </TextField>
              
              <TextField
                fullWidth
                label={`Ingrese su ${documentType.toUpperCase()}`}
                variant="outlined"
                value={documentValue}
                onChange={(e) => setDocumentValue(e.target.value)}
                error={!!errors.documentValue}
                helperText={errors.documentValue}
                InputLabelProps={{ style: { color: font } }}
                InputProps={{ style: { color: font } }}
                sx={textFieldStyles}
              />
            </Stack>            
            <TextField
              label="Nombre Completo"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={!!errors.nombre}
              helperText={errors.nombre}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            />

            <TextField
              label="Número de Teléfono"
              name="telefono"
              placeholder="912345678"
              value={form.telefono}
              onChange={handleChange}
              type="tel"
              variant="outlined"
              fullWidth
              error={!!errors.telefono}
              helperText={errors.telefono}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            />

            <TextField
              label="Correo Electrónico"
              placeholder="ejemplo@gmail.com"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              type="email"
              variant="outlined"
              fullWidth
              error={!!errors.correo}
              helperText={errors.correo}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            />

            <TextField
              select
              label="Sede"
              name="sede"
              value={form.sede}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={!!errors.sede}
              helperText={errors.sede}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            >
              {sedes.map((sede, i) => (
                <MenuItem key={i} value={sede}>
                  {sede}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Curso de Interés"
              name="curso"
              // value={cursoSeleccionado === '' ? form.curso : cursoSeleccionado}
              value={form.curso}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={!!errors.curso}
              helperText={errors.curso}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            >
              {getCursosFromProgramas().map((curso, i) => (
                <MenuItem
                  key={i}
                  value={curso}
                  sx={{
                    backgroundColor: form.curso === curso ? 'rgba(0,0,0,0.1)' : 'transparent',
                  }}
                >
                  {curso}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Dirección de Domicilio"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              error={!!errors.direccion}
              helperText={errors.direccion}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 2,
                background: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
                color: font,
                fontWeight: 'bold',
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(135deg, #84BD2F, var(--verde-inacex))',
                },
              }}
              fullWidth
            >
              Matricularme
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'var(--verde-inacex)' },
    '&:hover fieldset': { borderColor: '#84BD2F' },
    '&.Mui-focused fieldset': { borderColor: '#84BD2F' },
  },
};

export default FormularioInacex;
