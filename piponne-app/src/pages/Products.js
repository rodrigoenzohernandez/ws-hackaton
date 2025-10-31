import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Call the real API
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        
        // Transform MongoDB _id to id for frontend compatibility
        const transformedData = data.map(product => ({
          ...product,
          id: product._id,
        }));
        
        setProducts(transformedData);
      } catch (error) {
        console.error('Error fetching products:', error);
        
        // Fallback to mock data if API fails
        const mockProducts = [
          {
            id: 1,
            name: 'Pizza Party',
            description: 'Pizzas artesanales elaboradas con ingredientes de primera calidad.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop',
          },
          {
            id: 2,
            name: 'Pernil',
            description: 'Pernil al horno tierno y jugoso, perfecto para grandes eventos.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop',
          },
          {
            id: 3,
            name: 'Empanadas',
            description: 'Empanadas caseras con rellenos variados.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=250&fit=crop',
          },
          {
            id: 4,
            name: 'Catering',
            description: 'Servicio completo de catering para eventos.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=250&fit=crop',
          },
          {
            id: 5,
            name: 'Pastas',
            description: 'Pastas frescas elaboradas artesanalmente.',
            category: 'Menú',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=250&fit=crop',
          },
          {
            id: 6,
            name: 'Viandas para Empresas',
            description: 'Menús ejecutivos y viandas para comedores empresariales.',
            category: 'Empresas',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop',
          },
          {
            id: 7,
            name: 'Sándwiches Premium',
            description: 'Sándwiches gourmet con ingredientes selectos.',
            category: 'Menú',
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=250&fit=crop',
          },
          {
            id: 8,
            name: 'Postres',
            description: 'Deliciosos postres caseros.',
            category: 'Menú',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop',
          },
          {
            id: 65,
            name: 'Barra de Tragos',
            description: 'Servicio profesional de barra de tragos.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=250&fit=crop',
          },
        ];
        setProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
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
        Descubre nuestra amplia variedad de productos y servicios
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
