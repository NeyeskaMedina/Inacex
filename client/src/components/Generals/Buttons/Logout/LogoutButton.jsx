import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    
    Swal.fire({
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión correctamente.',
      icon: 'info',
      confirmButtonColor: 'var(--naranja-oscuro)',
    }).then(() => {
      navigate('/ingreso'); 
    });
  };

  const isLoggedIn = !!localStorage.getItem('token');

  if (!isLoggedIn) return null;

  return (
    <Button 
      onClick={handleLogout}
      variant="contained"
      startIcon={<LogoutIcon />}
      sx={{ 
        color: 'white', 
        backgroundColor: 'var(--verde-inacex)', 
        borderRadius: '10px', 
        ml: 2,
        '&:hover': {
          backgroundColor: '#a04800',
        }
      }}
    >
    </Button>
  );
};

export default LogoutButton;
