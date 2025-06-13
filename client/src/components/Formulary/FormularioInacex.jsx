import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { 
  sedes,
  cursos,
  validateEmail,
  validateRUT
} from '../../utils/utils'


const FormularioInacex = ({ image, bgColor, font }) => {
  const [form, setForm] = useState({
    rut: '',
    telefono: '',
    correo: '',
    sede: '',
    direccion: '',
    curso: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateRUT(form.rut)) newErrors.rut = 'RUT no valido';
    if (!form.telefono.match(/^9\d{8}$/)) newErrors.telefono = 'Debe comenzar con 9 y tener 9 dígitos';
    if (!validateEmail(form.correo)) newErrors.correo = 'Correo no válido';
    if (!form.sede) newErrors.sede = 'Seleccione una sede';
    if (!form.curso) newErrors.curso = 'Seleccione un curso';
    if (!form.direccion.trim()) newErrors.direccion = 'Campo requerido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Formulario enviado con éxito 🚀');
      // Aquí podrías enviar los datos a backend, Google Sheets, etc.
    }
  };

  return (
    <Box
  id={'matriculate'}
  sx={{
    position: 'sticky',
    py: 8,
    px: 2,
    minHeight: '100vh',
    backgroundImage: `url(${image})`,
    backgroundPosition: { xs: 'top center', sm: 'center' },
    backgroundSize: { xs: 'contain', sm: 'cover' },
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
    display: 'flex',
    justifyContent: 'center',
  }}
>

      <Paper
        elevation={8}
        sx={{
          maxWidth: 600,
          width: '100%',
          borderRadius: 3,
          p: 4,
          backgroundColor: bgColor,
          color: font,
        }}
      >
        <Typography
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

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="RUT Chileno"
              name="rut"
              value={form.rut}
              onChange={handleChange}
              placeholder="20123456-2"
              variant="outlined"
              fullWidth
              error={!!errors.rut}
              helperText={errors.rut}
              InputLabelProps={{ style: { color: font } }}
              InputProps={{ style: { color: font } }}
              sx={textFieldStyles}
            />

            <TextField
              label="Número de Teléfono"
              name="telefono"
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
              {cursos.map((curso, i) => (
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
