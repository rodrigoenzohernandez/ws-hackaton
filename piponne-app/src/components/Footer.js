import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Don Piponne
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              CALIDAD, PROFESIONALISMO Y COMPROMISO
            </Typography>
            <Typography variant="body2">
              Una experiencia sabrosa y saludable para compartir.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                <Link href="tel:01142483095" color="inherit" underline="hover">
                  4248-3095
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                <Link href="tel:1154524341" color="inherit" underline="hover">
                  115-452-4341
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 2 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                Lugano 80, B1832 Lomas de Zamora, Provincia de Buenos Aires
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Síguenos
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Horarios de atención:
            </Typography>
            <Typography variant="body2">
              Lun - Sáb: 10:00 - 22:00
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Don Piponne. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" align="center" display="block" sx={{ mt: 1 }}>
            Desarrollado por{' '}
            <Link href="http://lminnova.com.ar/" color="secondary.light" target="_blank" rel="noopener">
              LMInnova
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
