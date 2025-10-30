import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Shop = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 6,
          textAlign: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 100, color: 'primary.main' }} />
        </Box>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Tienda en Línea
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Próximamente
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Estamos trabajando para ofrecerte la mejor experiencia de compra en línea.
          Por el momento, puedes contactarnos directamente para realizar tus pedidos.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to="/productos"
            variant="contained"
            color="primary"
            size="large"
          >
            Ver Productos
          </Button>
          <Button
            component={RouterLink}
            to="/contacto"
            variant="outlined"
            color="primary"
            size="large"
          >
            Contactar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Shop;
