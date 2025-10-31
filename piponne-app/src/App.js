import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import Shop from './pages/Shop';
import Viandas from './pages/Viandas';
import Company from './pages/Company';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viandas" element={<Viandas />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/producto/:id/:name" element={<ProductDetail />} />
        </Routes>
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  );
}

export default App;
