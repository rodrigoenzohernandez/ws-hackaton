import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card
      sx={{
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '50%',
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 40 }} />
          </Box>
        </Box>
        <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
