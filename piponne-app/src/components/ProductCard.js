import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const ProductCard = ({ product }) => {
  const { id, name, description, image, category } = product;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop'}
        alt={name}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={category}
            size="small"
            color="secondary"
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {description}
        </Typography>
        <Button
          component={RouterLink}
          to={`/producto/${id}/${name.replace(/\s+/g, '-')}`}
          variant="contained"
          color="primary"
          fullWidth
        >
          + INFO
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
