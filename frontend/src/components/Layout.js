import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, ListItemButton, IconButton } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { text: 'Tiendas', icon: <StorefrontIcon />, path: '/tiendas' },
    { text: 'Usuarios', icon: <PeopleIcon />, path: '/usuarios' },
    { text: 'Clientes', icon: <PersonIcon />, path: '/clientes' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none', // Removing default AppBar shadow for a flatter look if desired
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
            ERP de Moda
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
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
            backgroundColor: theme.palette.background.paper, // Drawer background
            borderRight: `1px solid ${theme.palette.divider}`, // Optional: adds a subtle separation
          },
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding component={Link} to={item.path}>
                <ListItemButton
                  selected={isActive(item.path)}
                  sx={{
                    // Normal state
                    '.MuiListItemIcon-root': { color: theme.palette.text.secondary },
                    '.MuiListItemText-primary': { color: theme.palette.text.secondary, fontSize: '0.95rem' }, // Adjusted font size slightly
                    // Hover state
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    // Selected state
                    '&.Mui-selected': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.12),
                      },
                      '.MuiListItemIcon-root, .MuiListItemText-primary': {
                        color: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{minWidth: '40px'}}> {/* Adjust minWidth if needed */}
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default, // Main content background
          p: theme.spacing(3), // Padding using theme spacing
          marginLeft: `${drawerWidth}px`, // Keep main content to the right of the drawer
          width: `calc(100% - ${drawerWidth}px)`, // Ensure it takes remaining width
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
