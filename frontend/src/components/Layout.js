import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, ListItemButton } from '@mui/material';
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
          backgroundColor: '#ffffff',
          color: 'text.primary',
          boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
          minHeight: 56,
        }}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            ERP Dashboard
          </Typography>
          <Box>
            {/* Global actions placeholder */}
          </Box>
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
            backgroundColor: '#F6F6F7',
            borderRight: '1px solid #E1E3E5',
          },
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding component={Link} to="/tiendas" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <ListItemButton
                selected={location.pathname === '/tiendas'}
                sx={{
                  '&:hover': { backgroundColor: 'action.hover' },
                  '&.Mui-selected': { backgroundColor: '#F6F6F7', borderLeft: '2px solid #008060' }
                }}
              >
                <ListItemIcon sx={{ color: location.pathname === '/tiendas' ? 'primary.main' : 'text.secondary' }}>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Tiendas" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/usuarios" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <ListItemButton
                selected={location.pathname === '/usuarios'}
                sx={{
                  '&:hover': { backgroundColor: 'action.hover' },
                  '&.Mui-selected': { backgroundColor: '#F6F6F7', borderLeft: '2px solid #008060' }
                }}
              >
                <ListItemIcon sx={{ color: location.pathname === '/usuarios' ? 'primary.main' : 'text.secondary' }}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/clientes" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <ListItemButton
                selected={location.pathname === '/clientes'}
                sx={{
                  '&:hover': { backgroundColor: 'action.hover' },
                  '&.Mui-selected': { backgroundColor: '#F6F6F7', borderLeft: '2px solid #008060' }
                }}
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
