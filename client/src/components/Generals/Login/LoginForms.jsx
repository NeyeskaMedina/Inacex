import React, { useState, useContext } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
  InputAdornment
} from '@mui/material';
import Swal from 'sweetalert2';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../apiRest/apiInacex/post/postLogin';
import { UserContext } from '../../../context/UserContext';

export const LoginForms = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setUserLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { response, error } = await postLogin({ username: user, password });
  
  console.log(response);
  
  if (response?.token) {

    setUserLogin({
      username: response.name
    });
    Swal.fire({
      title: '¡Éxito!',
      text: response.message,
      icon: 'success',
      confirmButtonColor: 'var(--verde-inacex)',
    });

    // Guarda solo el token
     localStorage.setItem('token', response.token);
    if(response.role === 'admin'){
     navigate('/prospectos'); 
    } else {
      navigate('/prospectos-ejecutivas'); 
    }
    

    
  } else {
    Swal.fire({
      title: '¡Error!',
      text: error,
      icon: 'error',
      confirmButtonColor: 'red',
    });
  }
  };
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center'
      }}  
    >
        <Box
          sx={{
            height: '100vh',
            // background: 'linear-gradient(135deg, var(--verde-inacex), var(--naranja-oscuro))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            width: '100vw',
          }}
        >
          <Paper 
            elevation={6} 
            sx={{ 
                p: 4, 
                borderRadius: 3, 
                maxWidth: 400, 
                background: 'linear-gradient(135deg, rgba(62, 225, 130, 0.8), rgba(90, 79, 73, 0))',
            }}>
            <Typography className='roboto-condensed' variant="h5" align="center" mb={3} sx={{ color: 'rgba(6, 6, 6, 0.8)', fontWeight: 'bold' }}>
              INGRESO A CABINA
            </Typography>

            <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                  label="Usuario"
                  variant="outlined"
                  required
                  fullWidth
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  InputProps={{
                    style: {
                      color: '#0a0a0a', // texto oscuro
                      fontFamily: 'Roboto Condensed',
                      fontWeight: 'bold',
                    }
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#222', // color del label
                      fontFamily: 'Roboto Condensed',
                      fontWeight: 'bold',
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#666', // color por defecto del borde
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--verde-inacex)', // al pasar el mouse
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--verde-inacex)', // al enfocar (focus)
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'var(--verde-inacex)', // color del label en focus
                    }
                  }}
                />

                <TextField
                  label="Contraseña"
                  variant="outlined"
                  required
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    style: {
                      color: '#0a0a0a',
                      fontFamily: 'Roboto Condensed',
                      fontWeight: 'bold',
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#222',
                      fontFamily: 'Roboto Condensed',
                      fontWeight: 'bold',
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#666', // color por defecto del borde
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--verde-inacex)', // al pasar el mouse
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--verde-inacex)', // al enfocar (focus)
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'var(--verde-inacex)', // color del label en focus
                    }
                  }}
                />


                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'var(--verde-inacex)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#1e5e36',
                      
                    },
                  }}
                >
                  Ingresar
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
    </Box>
  );
};

export default LoginForms;
