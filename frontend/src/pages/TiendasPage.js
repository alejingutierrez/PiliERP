import React from 'react';
import { Container, Typography, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Grid, Button } from '@mui/material'; // Removed Button from here initially, but PageHeader uses it directly
import AddIcon from '@mui/icons-material/Add'; // Example Icon
import PageHeader from '../../molecules/PageHeader'; // Import PageHeader

// Sample Data
const sampleStores = [
  { id: 1, name: 'Tienda Principal Centro', location: 'Calle Falsa 123, Ciudad Capital', status: 'Activa' },
  { id: 2, name: 'Sucursal Norte', location: 'Av. Siempre Viva 456, Zona Norte', status: 'Activa' },
  { id: 3, name: 'Outlet Sur', location: 'Boulevard de los Sueños Rotos 789, Sector Sur', status: 'Inactiva' },
];

function TiendasPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageHeader 
        title="Tiendas"
        actionButtonText="Añadir Tienda"
        onActionButtonClick={() => { /* Placeholder for actual click handler */ console.log('Añadir Tienda clicked'); }}
        actionButtonIcon={<AddIcon />}
      />

      {/* Optional: Grid for summary cards - can be added later if needed */}
      {/* <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6" color="primary" gutterBottom>Total Tiendas</Typography>
            <Typography component="p" variant="h4">{sampleStores.length}</Typography>
          </Paper>
        </Grid>
        // Add more summary cards if desired
      </Grid> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900] }}> {/* Subtle header background */}
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleStores.map((store) => (
              <TableRow
                key={store.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {store.name}
                </TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>
                  <Box 
                    component="span"
                    sx={(theme) => ({ 
                      color: store.status === 'Activa' ? theme.palette.success.dark : theme.palette.error.dark,
                      backgroundColor: store.status === 'Activa' ? theme.palette.success.light : theme.palette.error.light,
                      padding: '4px 8px', // Adjusted padding slightly
                      borderRadius: theme.shape.borderRadius, // Use theme border radius
                      fontSize: '0.875rem',
                      fontWeight: 500 // Added font weight
                    })}
                  >
                    {store.status}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>Editar</Button>
                  <Button variant="outlined" size="small" color="error">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TiendasPage;
