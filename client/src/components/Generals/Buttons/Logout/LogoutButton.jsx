import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth'); 
    navigate('/ingreso'); 
  };

  const isLoggedIn = localStorage.getItem('auth') === 'true';

  if (!isLoggedIn) return null;

  return (
    <Button 
      onClick={handleLogout} 
      sx={{ color: 'white', backgroundColor: 'var(--naranja-oscuro)', borderRadius: '10px', ml: 2 }}
    >
      <LogoutIcon>
        Cerrar sesión
      </LogoutIcon>
    </Button>
  );
};

export default LogoutButton;
