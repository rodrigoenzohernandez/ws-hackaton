import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=541154524341&text=Hola%21%20Quisiera%20contactarlos';

  return (
    <Tooltip title="Contactar por WhatsApp" placement="left">
      <Fab
        color="success"
        aria-label="whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#128C7E',
          },
          zIndex: 1000,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
