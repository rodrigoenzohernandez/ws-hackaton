import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Company = () => {
  const values = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 50 }} />,
      title: 'Calidad',
      description: 'Utilizamos ingredientes de primera calidad en todos nuestros productos.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 50 }} />,
      title: 'Profesionalismo',
      description: 'Equipo capacitado y comprometido con la excelencia en el servicio.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 50 }} />,
      title: 'Compromiso',
      description: 'Nos comprometemos con la satisfacción de nuestros clientes.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Nuestra Empresa
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Más de una década brindando experiencias gastronómicas únicas
        </Typography>
      </Box>

      {/* About Section */}
      <Paper elevation={2} sx={{ p: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Sobre Don Piponne
        </Typography>
        <Typography variant="body1" paragraph>
          Don Piponne es una empresa familiar dedicada a brindar servicios gastronómicos
          de calidad para todo tipo de eventos y necesidades. Desde nuestros inicios,
          hemos trabajado con pasión y dedicación para ofrecer productos elaborados
          artesanalmente que deleiten el paladar de nuestros clientes.
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestro equipo está conformado por profesionales gastronómicos altamente
          capacitados que ponen especial énfasis en la calidad de la materia prima,
          el sabor y la presentación de cada uno de nuestros platos.
        </Typography>
        <Typography variant="body1">
          Nos especializamos en pizza parties, catering para eventos, viandas
          empresariales y servicios de barra de tragos, adaptándonos siempre a las
          necesidades específicas de cada cliente.
        </Typography>
      </Paper>

      {/* Values Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Nuestros Valores
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 80,
                    height: 80,
                    margin: '0 auto 16px',
                  }}
                >
                  {value.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Section */}
      <Paper
        elevation={3}
        sx={{
          p: 6,
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Nuestra Misión
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          Brindar experiencias gastronómicas memorables a través de productos de
          excelente calidad, un servicio profesional y el compromiso constante con
          la satisfacción de nuestros clientes. Queremos ser parte de tus momentos
          más importantes y hacer de cada evento una celebración inolvidable.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Company;
