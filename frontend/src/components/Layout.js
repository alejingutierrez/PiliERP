import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, ListItemButton } from '@mui/material'; // CssBaseline removed as it's in App.js
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <Box sx={{ display: 'flex' }}>
      {/* CssBaseline is now in App.js, applied globally */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'primary.main', // Explicitly set, or rely on theme
          elevation: 4, // Added elevation
        }}
        elevation={4} // Ensure elevation is applied
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'primary.contrastText' }}> {/* Ensuring contrast text */}
            ERP Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper', // Drawer background
          },
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding component={Link} to="/tiendas" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton
                selected={location.pathname === '/tiendas'}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemIcon sx={{ color: location.pathname === '/tiendas' ? 'primary.main' : 'text.secondary' }}>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Tiendas" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/usuarios" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton
                selected={location.pathname === '/usuarios'}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemIcon sx={{ color: location.pathname === '/usuarios' ? 'primary.main' : 'text.secondary' }}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/clientes" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton
                selected={location.pathname === '/clientes'}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemIcon sx={{ color: location.pathname === '/clientes' ? 'primary.main' : 'text.secondary' }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.default', // Ensure this uses theme
          p: 3, // Uses theme.spacing(3) by default
          marginLeft: `${drawerWidth}px`,
          animation: 'fadeIn 0.5s ease-in-out' // Added fade-in animation
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
