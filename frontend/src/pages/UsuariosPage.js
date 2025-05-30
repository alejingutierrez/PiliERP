import React from 'react';
import { Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchBar from '../molecules/SearchBar';
import DropdownMenu from '../molecules/DropdownMenu';
import Page from '../templates/Page';

const UsuariosPage = () => (
  <Page
    title="Usuarios"
    actions={(
      <>
        <PrimaryButton sx={{ mr: 1 }}>Agregar Nuevo Usuario</PrimaryButton>
        <DropdownMenu options={[{ label: 'Importar Usuarios' }]} />
      </>
    )}
  >
    <SearchBar placeholder="Buscar Usuarios" fullWidth sx={{ mb: 3 }} />

    <Typography variant="body1">
      Aquí se mostrará la lista de usuarios o el contenido principal de esta sección.
    </Typography>
  </Page>
);

export default UsuariosPage;
