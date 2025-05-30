import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import PrimaryButton from '../atoms/PrimaryButton';
import DropdownMenu from '../molecules/DropdownMenu';
import Page from '../templates/Page';
import EmptyState from '../components/EmptyState';

const TiendasPage = () => (
  <Page
    title="Tiendas"
    actions={(
      <>
        <PrimaryButton sx={{ mr: 1 }}>Agregar tienda</PrimaryButton>
        <DropdownMenu options={[{ label: 'Sincronizar tiendas' }]} />
      </>
    )}
  >
    <EmptyState
      icon={InboxIcon}
      title="No hay tiendas disponibles"
      description="Importa o crea tu primera tienda para comenzar."
      actionLabel="Importar tiendas"
    />
  </Page>
);

export default TiendasPage;
