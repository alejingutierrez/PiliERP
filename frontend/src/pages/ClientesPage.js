import React from 'react';
import { Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchBar from '../molecules/SearchBar';
import DropdownMenu from '../molecules/DropdownMenu';
import Page from '../templates/Page';

const ClientesPage = () => (
  <Page
    title="Clientes"
    actions={(
      <>
        <PrimaryButton sx={{ mr: 1 }}>Agregar Nuevo Cliente</PrimaryButton>
        <DropdownMenu options={[{ label: 'Importar Clientes' }]} />
      </>
    )}
  >
    <SearchBar placeholder="Buscar Clientes" fullWidth sx={{ mb: 3 }} />

    <Typography variant="body1">
      Aquí se mostrará la lista de clientes o el contenido principal de esta sección.
    </Typography>
  </Page>
);

export default ClientesPage;
