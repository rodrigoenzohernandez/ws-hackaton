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
        component="div"
        sx={{
          pt: '56.25%', // 16:9 aspect ratio
          bgcolor: 'grey.200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        image={image}
        title={name}
      >
        {!image && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <LocalDiningIcon sx={{ fontSize: 80, color: 'grey.400' }} />
          </Box>
        )}
      </CardMedia>
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
