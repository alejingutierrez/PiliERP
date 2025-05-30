import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Box, Typography, Grid } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DashboardCard from './components/DashboardCard';
import TiendasPage from './pages/TiendasPage';
import UsuariosPage from './pages/UsuariosPage';
import ClientesPage from './pages/ClientesPage';
import MaterialCardTestPage from './pages/MaterialCardTestPage';
import DashboardPage from './pages/DashboardPage';

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
            <Route path="/test-material-card" element={<MaterialCardTestPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/" element={
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
                  Bienvenido al Dashboard ERP
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                      title="Resumen de Tiendas"
                      description="Acceda y gestione la información de las tiendas."
                      icon={StorefrontIcon}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                      title="Gestión de Usuarios"
                      description="Administre los usuarios y sus permisos en el sistema."
                      icon={PeopleIcon}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                      title="Directorio de Clientes"
                      description="Consulte y administre la base de datos de clientes."
                      icon={PersonIcon}
                    />
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
