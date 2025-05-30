import React from 'react';
import { Typography, Paper, Button, Box, TextField } from '@mui/material';

const TiendasPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Tiendas
      </Typography>
      
      <Paper 
        sx={{ 
          p: 3, // theme.spacing(3)
          borderRadius: (theme) => theme.shape.borderRadius, // theme.shape.borderRadius
          boxShadow: (theme) => theme.shadows[1], // theme.shadows[1]
          // Alternatively, for a border:
          // border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" color="secondary">
            Agregar Nueva Tienda
          </Button>
        </Box>
        
        <TextField 
          variant="outlined" 
          margin="normal" 
          label="Buscar Tiendas" 
          fullWidth 
          sx={{ mb: 3 }} 
        />
        
        <Typography variant="body1">
          Aquí se mostrará la lista de tiendas o el contenido principal de esta sección.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TiendasPage;
