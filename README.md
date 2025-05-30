# ERP de Moda Project

This project is a basic ERP for fashion businesses, built with React for the frontend and Node.js/Express for the backend. It features a Material Design interface and an Atomic Design structure.

## Project Structure

- `/frontend`: Contains the React application (Material UI, Atomic Design).
- `/backend`: Contains the Node.js Express API.

## Prerequisites

- Node.js (v16 or later recommended)
- npm (usually comes with Node.js)

## Getting Started

### 1. Clone the repository (if you haven't already)
```bash
git clone <repository_url>
cd <repository_directory>
```

### 2. Setup Backend
```bash
cd backend
npm install
npm start
```
The backend server will start on `http://localhost:3001` by default.

### 3. Setup Frontend
In a new terminal window:
```bash
cd frontend
npm install
npm start
```
The frontend development server will start on `http://localhost:3000` by default and will open automatically in your browser.

## Available Scripts

### Backend (`/backend`)
- `npm start`: Runs the backend server using `node server.js`. (You might need to add this script to `backend/package.json` if it's not there: `"start": "node server.js"`)

### Frontend (`/frontend`)
- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single dependency configuration (use with caution).

## API Endpoints (Backend)

The backend provides the following initial API endpoints:

- `GET /api/tiendas`: Returns a list of stores.
- `GET /api/usuarios`: Returns a list of users.
- `GET /api/clientes`: Returns a list of clients.

These currently return placeholder data.

## Frontend Structure

The frontend follows Atomic Design principles:
- `src/atoms`: Basic UI elements.
- `src/molecules`: Combinations of atoms.
- `src/organisms`: Complex UI components.
- `src/templates`: Page layouts.
- `src/pages`: Concrete pages made from templates and organisms.
- `src/components`: Shared/layout components.