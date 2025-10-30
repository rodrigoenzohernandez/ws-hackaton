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
            image: null,
          },
          {
            id: 4,
            name: 'Catering',
            description: 'Servicio completo de catering para eventos.',
            category: 'Eventos',
            image: null,
          },
          {
            id: 6,
            name: 'Viandas para Empresas',
            description: 'Menús ejecutivos y viandas para comedores empresariales.',
            category: 'Empresas',
            image: null,
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
