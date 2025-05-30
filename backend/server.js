const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
// This will allow the frontend (running on a different port) to make requests to this backend.
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

// Placeholder data
const tiendas = [{ id: 1, name: 'Tienda Principal', location: 'Ciudad Capital' }];
const usuarios = [{ id: 1, username: 'admin', role: 'administrator' }];
const clientes = [{ id: 1, name: 'Cliente Ejemplo', email: 'cliente@example.com' }];

// API Endpoints
app.get('/api/tiendas', (req, res) => {
  res.json(tiendas);
});

app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
