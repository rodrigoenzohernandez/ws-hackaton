import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Breadcrumbs,
  Link,
  CircularProgress,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';

const ProductDetail = () => {
  const { id, name } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - will be replaced with API call
    const mockProducts = {
      '1': {
        id: 1,
        name: 'Pizza Party',
        description:
          'Nuestro servicio de Pizza Party incluye pizzas artesanales elaboradas con ingredientes de primera calidad. Ofrecemos variedades clásicas como muzarella, napolitana, y calabresa, así como opciones gourmet como rúcula y jamón crudo, roquefort, y especiales del chef.',
        category: 'Eventos',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop',
        features: [
          'Pizzas elaboradas en el momento',
          'Variedad de gustos a elección',
          'Ingredientes de primera calidad',
          'Pizzero incluido en el servicio',
          'Equipamiento completo',
          'Atención para eventos de 20 a 200 personas',
        ],
      },
      '4': {
        id: 4,
        name: 'Catering',
        description:
          'Servicio completo de catering para todo tipo de eventos: bodas, cumpleaños de 15, eventos corporativos, y más. Diseñamos menús personalizados según tus preferencias y presupuesto.',
        category: 'Eventos',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=400&fit=crop',
        features: [
          'Menús personalizados',
          'Servicio de mozos',
          'Vajilla y mantelería',
          'Montaje y desmontaje',
          'Opciones vegetarianas y veganas',
          'Coordinación del evento',
        ],
      },
      '6': {
        id: 6,
        name: 'Viandas para Empresas',
        description:
          'Solución integral de alimentación para tu empresa. Menús ejecutivos completos y balanceados, con entrega puntual todos los días. Adaptamos los menús según las necesidades nutricionales y preferencias de tu equipo.',
        category: 'Empresas',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop',
        features: [
          'Menús balanceados y variados',
          'Entrega puntual',
          'Opciones vegetarianas',
          'Precios especiales por volumen',
          'Packaging descartable incluido',
          'Facturación mensual',
        ],
      },
      '65': {
        id: 65,
        name: 'Barra de Tragos',
        description:
          'Servicio profesional de barra de tragos con barman especializado. Ofrecemos una amplia variedad de cócteles clásicos y de autor para hacer de tu evento una experiencia única.',
        category: 'Eventos',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop',
        features: [
          'Barman profesional',
          'Amplia variedad de tragos',
          'Cócteles clásicos y de autor',
          'Bebidas premium',
          'Decoración de barra',
          'Cristalería incluida',
        ],
      },
    };

    setTimeout(() => {
      setProduct(mockProducts[id] || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
        <Button component={RouterLink} to="/productos" sx={{ mt: 2 }}>
          Volver a Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mb: 4 }}
      >
        <Link component={RouterLink} to="/" underline="hover" color="inherit">
          Inicio
        </Link>
        <Link
          component={RouterLink}
          to="/productos"
          underline="hover"
          color="inherit"
        >
          Productos
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              height: 400,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={product.image || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop'}
              alt={product.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Paper>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Chip label={product.category} color="secondary" sx={{ mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            {product.description}
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Características:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {product.features.map((feature, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body1"
                  sx={{ mb: 1 }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
          </Box>

          <Button
            component={RouterLink}
            to="/contacto"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Solicitar Presupuesto
          </Button>
        </Grid>
      </Grid>

      {/* Additional Info */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              Envíos a Domicilio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Consulta la tarifa a tu zona
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <CreditCardIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              Tarjetas de Crédito
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aceptamos todas las tarjetas
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              Pago Seguro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transacciones protegidas
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <LocalDiningIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              Calidad Garantizada
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ingredientes premium
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
