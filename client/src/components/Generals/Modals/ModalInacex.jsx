import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'white',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ModalInacex = ({ open, handleClose }) => {
  const whatsappNumber = '56976512953'; 
  const text = ''

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: '#666' }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: 'var(--verde-inacex)', mb: 2 }}
        >
          ¿Tienes experiencia como operador?
        </Typography>

        <Typography variant="h6" sx={{ mb: 3, color: '#333' }}>
          Si ya cuentas con conocimientos y habilidades como operador, y tienes tu certificación vencida, <span style={{ color: 'var(--verde-inacex)' }}>¡TE CERTIFICAMOS EN INACEX!</span>
          <br />
          Comunícate con nosotros vía WhatsApp y recibe asesoría inmediata.
        </Typography>

        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'var(--naranja-oscuro)',
            color: '#fff',
            borderRadius: '20px',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#cc4c12',
            },
          }}
        >
          Escribirme por WhatsApp
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalInacex;
