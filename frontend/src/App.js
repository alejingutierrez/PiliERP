import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import theme from './theme'; // Assuming theme.js is MUI specific for now
// import { Box, Typography, Grid } from '@mui/material'; // To be replaced or removed
// import StorefrontIcon from '@mui/icons-material/Storefront'; // To be replaced
// import PeopleIcon from '@mui/icons-material/People'; // To be replaced
// import PersonIcon from '@mui/icons-material/Person'; // To be replaced
// import DashboardCard from './components/DashboardCard'; // This will need refactoring if it uses MUI
// MWC imports will be added as needed, or components will use standard HTML elements
import DashboardCard from './components/DashboardCard'; // Keep for now, will refactor later if needed
import TiendasPage from './pages/TiendasPage';
import UsuariosPage from './pages/UsuariosPage';
import ClientesPage from './pages/ClientesPage';
import MaterialCardTestPage from './pages/MaterialCardTestPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  // ThemeProvider and CssBaseline are removed.
  // The MWC theme is applied globally via mwc_theme.css imported in index.js.
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/tiendas" element={<TiendasPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/test-material-card" element={<MaterialCardTestPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={
            // Replace Box, Typography, Grid with standard HTML or MWC equivalents later.
            // For now, let's use divs and basic styling.
            // The sx prop is MUI specific and will be removed or replaced.
            <div style={{ padding: '24px' }}>
              <h1 style={{ marginBottom: '24px' }}>
                Bienvenido al Dashboard ERP
              </h1>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}> {/* Basic Grid replacement */}
                {/* DashboardCard will need to be refactored to not use MUI internally */}
                {/* Icons will need to be replaced with MWC icons or SVGs */}
                <DashboardCard
                  title="Resumen de Tiendas"
                  description="Acceda y gestione la información de las tiendas."
                  // icon={StorefrontIcon} // Icon needs replacement
                />
                <DashboardCard
                  title="Gestión de Usuarios"
                  description="Administre los usuarios y sus permisos en el sistema."
                  // icon={PeopleIcon} // Icon needs replacement
                />
                <DashboardCard
                  title="Directorio de Clientes"
                  description="Consulte y administre la base de datos de clientes."
                  // icon={PersonIcon} // Icon needs replacement
                />
              </div>
              <p style={{ marginTop: '32px' }}>
                Seleccione una opción del menú de navegación para comenzar a gestionar los datos.
              </p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
