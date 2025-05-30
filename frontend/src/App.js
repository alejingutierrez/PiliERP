import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TiendasPage from './pages/TiendasPage';
import UsuariosPage from './pages/UsuariosPage';
import ClientesPage from './pages/ClientesPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/tiendas" element={<TiendasPage />} />
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/" element={
              <div className="App">
                <header className="App-header">
                  <p>
                    Main Content Area - Welcome!
                  </p>
                </header>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
