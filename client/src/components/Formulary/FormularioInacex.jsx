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

const sedes = [
  'Antofagasta', 'Arica', 'Calama', 'Concepción', 'Copiapó',
  'Iquique', 'Ovalle', 'Rancagua', 'Serena', 'Viña del mar'
].sort();

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const validateRUT = (rut) => {
  rut = rut.replace(/\./g, '').replace('-', '');
  if (rut.length < 8) return false;
  let body = rut.slice(0, -1);
  let dv = rut.slice(-1).toUpperCase();
  let sum = 0, mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += +body[i] * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  let expectedDV = 11 - (sum % 11);
  expectedDV = expectedDV === 11 ? '0' : expectedDV === 10 ? 'K' : expectedDV.toString();
  return dv === expectedDV;
};

const FormularioInacex = ({ image }) => {
  const [form, setForm] = useState({
    rut: '', telefono: '', correo: '', sede: '', direccion: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateRUT(form.rut)) newErrors.rut = 'RUT no válido';
    if (!form.telefono.match(/^\d{9,}$/)) newErrors.telefono = 'Número no válido';
    if (!validateEmail(form.correo)) newErrors.correo = 'Correo no válido';
    if (!form.sede) newErrors.sede = 'Seleccione una sede';
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
      sx={{
        // position: 'relative',
         position: 'sticky',
        py: 8,
        px: 2,
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
          backgroundColor: 'var(--bg-forms)',
        //   backgroundColor: 'var(--bg-transp)',
          color: 'white',
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
          <span style={{color: 'white'}}>MATRICULARME EN</span> INACEX
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="RUT Chileno"
              name="rut"
              value={form.rut}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={!!errors.rut}
              helperText={errors.rut}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
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
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
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
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
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
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={textFieldStyles}
            >
              {sedes.map((sede, i) => (
                <MenuItem key={i} value={sede}>
                  {sede}
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
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={textFieldStyles}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 2,
                background: 'linear-gradient(135deg, var(--verde-inacex), #84BD2F)',
                color: '#000',
                fontWeight: 'bold',
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(135deg, #84BD2F, var(--verde-inacex))',
                },
              }}
              fullWidth
            >
              Enviar
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
