import React from 'react';
import { Typography, Paper, Button, Box, TextField } from '@mui/material';

const UsuariosPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Usuarios
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
          <Button variant="contained" color="secondary">
            Agregar Nuevo Usuario
          </Button>
        </Box>
        
        <TextField 
          variant="outlined" 
          margin="normal" 
          label="Buscar Usuarios" 
          fullWidth 
          sx={{ mb: 3 }} 
        />
        
        <Typography variant="body1">
          Aquí se mostrará la lista de usuarios o el contenido principal de esta sección.
        </Typography>
      </Paper>
    </Box>
  );
};

export default UsuariosPage;
