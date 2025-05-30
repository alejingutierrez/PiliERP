import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import PrimaryButton from '../atoms/PrimaryButton';
import DropdownMenu from '../molecules/DropdownMenu';
import Page from '../templates/Page';

const TiendasPage = () => (
  <Page
    title="Tiendas"
    actions={(
      <>
        <PrimaryButton sx={{ height: 32, mr: 1 }}>Agregar tienda</PrimaryButton>
        <DropdownMenu options={[{ label: 'Sincronizar tiendas' }]} />
      </>
    )}
  >
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <InboxIcon sx={{ fontSize: 40, color: 'text.disabled', mb: 1 }} />
      <Typography variant="body1" color="text.secondary">
        No hay tiendas disponibles
      </Typography>
      <Link href="#" underline="hover" sx={{ mt: 1, display: 'inline-block' }}>
        Importar tiendas
      </Link>
    </Box>
  </Page>
);

export default TiendasPage;
