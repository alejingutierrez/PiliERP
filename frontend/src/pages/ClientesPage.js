import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchBar from '../molecules/SearchBar';

const ClientesPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Clientes
      </Typography>
      
      <Paper
        sx={(theme) => ({
          p: 3,
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <PrimaryButton>
            Agregar Nuevo Cliente
          </PrimaryButton>
        </Box>

        <SearchBar placeholder="Buscar Clientes" fullWidth sx={{ mb: 3 }} />
        
        <Typography variant="body1">
          Aquí se mostrará la lista de clientes o el contenido principal de esta sección.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ClientesPage;
