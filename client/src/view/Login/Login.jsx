import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Box } from '@mui/material';
import LoginForms from '../../components/Generals/Login/LoginForms';
import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';

export const Login = () => {
    const { cabinaRef } = useContext(UserContext);
      const image = "./imgCursos/moto/moto2.png";
      const viewIzq = '400% 110%'
      const viewDer = '400% 100%'
      const viewCentXS = '100% 100%'
      const viewCentMD = '100% 100%'
 
  return (
    <Box>
        <ParabrisasCabina 
            image={image} 
            viewIzq={viewIzq} 
            viewDer={viewDer} 
            viewCentXS={viewCentXS} 
            viewCentMD={viewCentMD} 
            refProp={cabinaRef}
        />
        <LoginForms />
    </Box>
  );
};

export default Login;
