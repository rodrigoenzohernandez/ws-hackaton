import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BusinessIcon from '@mui/icons-material/Business';

const Viandas = () => {
  const benefits = [
    'Menús variados y balanceados',
    'Ingredientes frescos y de calidad',
    'Entrega puntual en tu empresa',
    'Precios especiales por volumen',
    'Menús personalizados según necesidades',
    'Opciones vegetarianas y veganas',
  ];

  const menuExample = [
    'Entrada o ensalada',
    'Plato principal con guarnición',
    'Postre',
    'Pan',
    'Cubiertos descartables',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Viandas para Empresas
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Soluciones alimentarias para tu equipo de trabajo
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <RestaurantMenuIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
              <Typography variant="h5" fontWeight="bold">
                Nuestro Servicio
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Ofrecemos un servicio integral de viandas para empresas, diseñado para
              brindar comidas de calidad a tu equipo de trabajo. Nos adaptamos a tus
              necesidades y presupuesto.
            </Typography>
            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4, height: '100%', bgcolor: 'primary.main', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <BusinessIcon sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h5" fontWeight="bold">
                ¿Qué Incluye?
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Cada vianda incluye un menú completo y balanceado:
            </Typography>
            <List>
              {menuExample.map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" paragraph>
                Los menús rotan semanalmente para ofrecer variedad a tu equipo.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* CTA Section */}
      <Paper elevation={3} sx={{ p: 6, textAlign: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          ¿Interesado en nuestro servicio?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contáctanos para recibir un presupuesto personalizado para tu empresa
        </Typography>
        <Button
          component={RouterLink}
          to="/contacto"
          variant="contained"
          color="primary"
          size="large"
        >
          Solicitar Presupuesto
        </Button>
      </Paper>
    </Container>
  );
};

export default Viandas;
