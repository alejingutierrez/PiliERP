import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchBar from '../molecules/SearchBar';
import Carousel from '../molecules/Carousel';

const TiendasPage = () => {
  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Tiendas
        </Typography>
        <PrimaryButton sx={{ height: 32 }}>
          Agregar tienda
        </PrimaryButton>
      </Box>

      <SearchBar placeholder="Buscar tiendas" sx={{ mb: 3, width: 320 }} />

      <Box sx={{ textAlign: 'center', py: 6 }}>
        <InboxIcon sx={{ fontSize: 40, color: 'text.disabled', mb: 1 }} />
        <Typography variant="body1" color="text.secondary">
          No hay tiendas disponibles
        </Typography>
        <Link href="#" underline="hover" sx={{ mt: 1, display: 'inline-block' }}>
          Importar tiendas
        </Link>
      </Box>

      <Carousel
        items={[
          <Box sx={{ p: 2, textAlign: 'center' }}>Bienvenido al ERP</Box>,
          <Box sx={{ p: 2, textAlign: 'center' }}>Gestione sus tiendas</Box>,
          <Box sx={{ p: 2, textAlign: 'center' }}>Administre clientes y usuarios</Box>,
        ]}
      />
    </Box>
  );
};

export default TiendasPage;
