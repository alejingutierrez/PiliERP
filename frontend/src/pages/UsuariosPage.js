import React from 'react';
import { Container, Typography, Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Avatar, Chip, Button } from '@mui/material'; // Added Button
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // For Admin role
import PersonIcon from '@mui/icons-material/Person'; // For User role
import PageHeader from '../../molecules/PageHeader'; // Import PageHeader

// Sample Data
const sampleUsers = [
  { id: 1, username: 'johndoe', email: 'john.doe@example.com', role: 'Admin', avatarUrl: '/static/images/avatar/1.jpg' }, // MUI docs use static paths like this
  { id: 2, username: 'janesmith', email: 'jane.smith@example.com', role: 'User', avatarUrl: '/static/images/avatar/2.jpg' },
  { id: 3, username: 'bob_brown', email: 'bob.brown@example.com', role: 'User', avatarUrl: null }, // No avatar
];

function UsuariosPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageHeader 
        title="Usuarios"
        actionButtonText="Añadir Usuario"
        onActionButtonClick={() => { console.log('Añadir Usuario clicked'); }}
        actionButtonIcon={<PersonAddIcon />}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900] }}>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt={user.username} src={user.avatarUrl || undefined} sx={{ width: 40, height: 40 }}>
                    {!user.avatarUrl && user.username ? user.username.charAt(0).toUpperCase() : null}
                  </Avatar>
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip 
                    icon={user.role === 'Admin' ? <AdminPanelSettingsIcon /> : <PersonIcon />}
                    label={user.role}
                    color={user.role === 'Admin' ? 'info' : 'default'} // Using 'info' for Admin for better distinction from primary buttons
                    size="small"
                    variant="outlined" 
                  />
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

export default UsuariosPage;
