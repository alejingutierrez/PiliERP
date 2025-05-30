import React from 'react';
import { Typography, Button, Box, TextField, Link } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';

const TiendasPage = () => {
  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Tiendas
        </Typography>
        <Button variant="contained" color="secondary" sx={{ height: 32 }}>
          Agregar tienda
        </Button>
      </Box>

      <TextField
        variant="outlined"
        placeholder="Buscar tiendas"
        sx={(theme) => ({
          mb: 3,
          width: 320,
          '& .MuiOutlinedInput-root': {
            borderRadius: theme.shape.borderRadius,
            height: 32,
            px: 1,
          },
          '& fieldset': { borderColor: theme.palette.divider },
        })}
        InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
      />

      <Box sx={{ textAlign: 'center', py: 6 }}>
        <InboxIcon sx={{ fontSize: 40, color: 'text.disabled', mb: 1 }} />
        <Typography variant="body1" color="text.secondary">
          No hay tiendas disponibles
        </Typography>
        <Link href="#" underline="hover" sx={{ mt: 1, display: 'inline-block' }}>
          Importar tiendas
        </Link>
      </Box>
    </Box>
  );
};

export default TiendasPage;
