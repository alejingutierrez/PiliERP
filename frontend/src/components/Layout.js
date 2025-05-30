import React from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, ListItemButton } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
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
          },
        }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding component={Link} to="/tiendas">
              <ListItemButton>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Tiendas" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/usuarios">
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/clientes">
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
