import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Box, Typography, Paper, Grid } from '@mui/material'; // Added Grid, Box, Paper, Typography
import TiendasPage from './pages/TiendasPage';
import UsuariosPage from './pages/UsuariosPage';
import ClientesPage from './pages/ClientesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/tiendas" element={<TiendasPage />} />
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/" element={
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
                  Bienvenido al Dashboard ERP
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180, borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1] }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        Resumen de Tiendas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Acceda y gestione la información de las tiendas.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180, borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1] }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        Gestión de Usuarios
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Administre los usuarios y sus permisos en el sistema.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ p:2, display: 'flex', flexDirection: 'column', height: 180, borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1] }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        Directorio de Clientes
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Consulte y administre la base de datos de clientes.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Seleccione una opción del menú de navegación para comenzar a gestionar los datos.
                </Typography>
              </Box>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
