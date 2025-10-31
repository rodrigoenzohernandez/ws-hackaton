import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      // Call the real API
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('Message sent successfully:', result);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Teléfono',
      details: ['4248-3095', '115-452-4341'],
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      details: ['info@donpiponne.com.ar'],
    },
    {
      icon: <LocationOnIcon />,
      title: 'Dirección',
      details: ['Lugano 80', 'B1832 Lomas de Zamora', 'Provincia de Buenos Aires'],
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Horario',
      details: ['Lunes a Sábado', '10:00 - 22:00'],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Contacto
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Estamos aquí para ayudarte con tu próximo evento
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Envíanos un mensaje
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </Typography>

            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </Alert>
            )}
            
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Información de Contacto
            </Typography>
            <Box sx={{ mt: 3 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    mb: 3,
                    pb: index < contactInfo.length - 1 ? 3 : 0,
                    borderBottom:
                      index < contactInfo.length - 1
                        ? '1px solid'
                        : 'none',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        color="text.secondary"
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Paper elevation={2} sx={{ mt: 4, overflow: 'hidden' }}>
        <Box sx={{ p: 2, bgcolor: 'grey.100' }}>
          <Typography variant="h6" fontWeight="bold">
            Nuestra Ubicación
          </Typography>
        </Box>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8886!2d-58.4267!3d-34.7599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf0b0b0b0b0b%3A0x0!2sLugano%2080%2C%20Lomas%20de%20Zamora!5e0!3m2!1ses!2sar!4v1234567890"
          sx={{
            width: '100%',
            height: 400,
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Don Piponne"
        />
      </Paper>
    </Container>
  );
};

export default Contact;
