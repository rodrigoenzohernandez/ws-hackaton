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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
              <IconButton 
                color="inherit" 
                aria-label="Facebook"
                href="https://www.facebook.com/donpiponnecatering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="Instagram"
                href="https://www.instagram.com/donpiponne/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/donpiponne/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Horarios de atención:
            </Typography>
            <Typography variant="body2">
              Lun - Vie: 08:00 - 17:00
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Don Piponne. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, gap: 1 }}>
            <Typography variant="caption" align="center">
              Desarrollado por{' '}
              <Link 
                href="https://www.linkedin.com/in/rodrigoenzohernandez/" 
                color="secondary.light" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ fontWeight: 600 }}
              >
                Rodrigo Enzo Hernandez
              </Link>
            </Typography>
            <IconButton 
              size="small" 
              href="https://www.linkedin.com/in/rodrigoenzohernandez/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'secondary.light', p: 0.5 }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              href="https://github.com/rodrigoenzohernandez"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'secondary.light', p: 0.5 }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
