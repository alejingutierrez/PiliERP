import React from 'react';
import { Container, Typography, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Chip, Button } from '@mui/material'; // Added Button
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1Icon'; // Icon for adding client
import BusinessIcon from '@mui/icons-material/Business'; // Icon for company
import EmailIcon from '@mui/icons-material/Email'; // Icon for email
import PageHeader from '../../molecules/PageHeader'; // Import PageHeader

// Sample Data
const sampleClients = [
  { id: 1, name: 'Empresa Alfa S.A.', contactPerson: 'Carlos Rodriguez', email: 'carlos.r@alfa.com', phone: '555-1234', industry: 'Textil' },
  { id: 2, name: 'Modas Beta Ltd.', contactPerson: 'Ana Lopez', email: 'ana.l@modasbeta.com', phone: '555-5678', industry: 'Retail' },
  { id: 3, name: 'Diseños Gamma Co.', contactPerson: 'Luis Gomez', email: 'luis.g@disenosgamma.com', phone: '555-9012', industry: 'Alta Costura' },
];

function ClientesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageHeader 
        title="Clientes"
        actionButtonText="Añadir Cliente"
        onActionButtonClick={() => { console.log('Añadir Cliente clicked'); }}
        actionButtonIcon={<PersonAddAlt1Icon />}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900] }}>
            <TableRow>
              <TableCell>Nombre Cliente / Empresa</TableCell>
              <TableCell>Persona de Contacto</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Industria</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleClients.map((client) => (
              <TableRow
                key={client.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BusinessIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '1.25rem' }} />
                    {client.name}
                  </Box>
                </TableCell>
                <TableCell>{client.contactPerson}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 1, fontSize: '1.25rem', color: 'text.secondary' }} />
                    {client.email}
                  </Box>
                </TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>
                  <Chip label={client.industry} size="small" variant="outlined" />
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>Ver Detalles</Button>
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

export default ClientesPage;
