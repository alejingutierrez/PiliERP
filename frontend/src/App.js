import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Added Link for DashboardCard
// Removed MUI specific theme, Box, Typography, Grid, and MUI Icons
import DashboardCard from './components/DashboardCard';
import TiendasPage from './pages/TiendasPage';
import UsuariosPage from './pages/UsuariosPage';
import ClientesPage from './pages/ClientesPage';
import MaterialCardTestPage from './pages/MaterialCardTestPage';
import DashboardPage from './pages/DashboardPage'; // Assuming this is the new main dashboard page

function App() {
  // MWC theme is applied globally via mwc_theme.css imported in index.js.
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/tiendas" element={<TiendasPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/test-material-card" element={<MaterialCardTestPage />} />
          {/* Updated default path to point to DashboardPage as per project structure */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={
            <div style={{ padding: '24px' }}>
              {/* This h1 and p are fine, styling will come from MWC theme or browser defaults */}
              <h1 style={{
                fontSize: 'var(--md-sys-typescale-headline-medium-font-size, 28px)',
                fontWeight: 'var(--md-sys-typescale-headline-medium-font-weight, 600)',
                marginBottom: '24px'
              }}>
                Bienvenido al Dashboard ERP
              </h1>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <DashboardCard
                  title="Resumen de Tiendas"
                  description="Acceda y gestione la información de las tiendas."
                  icon="storefront" // MWC icon name
                  onClick={() => { /* Navigate to /tiendas, requires Link or useNavigate */ }}
                />
                <DashboardCard
                  title="Gestión de Usuarios"
                  description="Administre los usuarios y sus permisos en el sistema."
                  icon="people" // MWC icon name
                  onClick={() => { /* Navigate to /usuarios */ }}
                />
                <DashboardCard
                  title="Directorio de Clientes"
                  description="Consulte y administre la base de datos de clientes."
                  icon="person" // MWC icon name
                  onClick={() => { /* Navigate to /clientes */ }}
                />
              </div>
              <p style={{
                marginTop: '32px',
                fontSize: 'var(--md-sys-typescale-body-large-font-size, 1rem)',
                color: 'var(--md-sys-color-on-surface-variant, #49454F)'
              }}>
                Seleccione una opción del menú de navegación para comenzar a gestionar los datos o explore las tarjetas de arriba.
              </p>
              <p style={{ marginTop: '16px' }}>
                Ir a la página de <Link to="/dashboard" style={{color: 'var(--md-sys-color-primary)'}}>Dashboard Principal</Link>.
              </p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
