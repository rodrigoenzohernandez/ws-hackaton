import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarIcon from '@mui/icons-material/Star';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const features = [
    {
      icon: RestaurantIcon,
      title: 'Desafía tus gustos',
      description: 'Una experiencia sabrosa y saludable para compartir.',
    },
    {
      icon: LocalShippingIcon,
      title: 'Envíos a Domicilio',
      description: 'Consulta la tarifa a tu zona',
    },
    {
      icon: CreditCardIcon,
      title: 'Tarjetas de Crédito',
      description: 'Aceptamos todas las tarjetas',
    },
    {
      icon: StarIcon,
      title: 'Servicios de Calidad',
      description: 'Profesionalismo y compromiso',
    },
  ];

  const mainProducts = [
    {
      id: 1,
      name: 'Pizza Party',
      description: 'Pizzas artesanales elaboradas con ingredientes de primera calidad. Ideal para eventos y celebraciones.',
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      name: 'Catering',
      description: 'Servicios de catering para todo tipo de eventos. Menús personalizados según tus necesidades.',
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      name: 'Viandas para Empresas',
      description: 'Menús ejecutivos y viandas para comedores empresariales. Calidad y variedad todos los días.',
      category: 'Empresas',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop',
    },
    {
      id: 65,
      name: 'Barra de Tragos',
      description: 'Servicio de barra de tragos profesional para tus eventos. Barman especializado incluido.',
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=250&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 10,
          backgroundImage: 'linear-gradient(135deg, #1565C0 0%, #003C8F 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                Don Piponne
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Pizza Party • Catering • Eventos
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Productos elaborados artesanalmente por profesionales gastronómicos
                con la mejor calidad de materia prima, poniendo énfasis en el sabor
                y presentación de nuestros platos.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={RouterLink}
                  to="/productos"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Ver Productos
                </Button>
                <Button
                  component={RouterLink}
                  to="/contacto"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contactar
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={8}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: 'text.primary',
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Consulta sin compromiso
                </Typography>
                <Typography variant="body1" paragraph>
                  Llamanos o visitanos para conocer nuestros servicios
                </Typography>
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                  📞 4248-3095
                </Typography>
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                  📱 115-452-4341
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Products Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Nuestros Productos
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Nuestros productos son elaborados artesanalmente por profesionales
            gastronómicos con la mejor calidad de materia prima
          </Typography>
          <Grid container spacing={4}>
            {mainProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold">
            ¿Listo para tu próximo evento?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Contactanos y te ayudaremos a organizar el evento perfecto
          </Typography>
          <Button
            component={RouterLink}
            to="/contacto"
            variant="contained"
            color="secondary"
            size="large"
          >
            Solicitar Presupuesto
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
