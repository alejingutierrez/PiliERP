import React, { useState } from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, ListItemButton, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppTooltip from '../atoms/AppTooltip';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentDrawerWidth = isMobile ? 200 : drawerWidth;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* CssBaseline is now in App.js, applied globally */}
      <AppBar
        position="fixed"
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
          minHeight: 56,
        })}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            ERP Dashboard
          </Typography>
          <Box>
            {/* Global actions placeholder */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={(theme) => ({
          width: currentDrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        })}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding component={Link} to="/tiendas" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <AppTooltip title="Tiendas" placement="right">
              <ListItemButton
                onClick={isMobile ? handleDrawerToggle : undefined}
                selected={location.pathname === '/tiendas'}
                sx={(theme) => ({
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.background.default,
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                  },
                })}
              >
                <ListItemIcon sx={{ color: location.pathname === '/tiendas' ? 'primary.main' : 'text.secondary' }}>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Tiendas" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
              </AppTooltip>
            </ListItem>
            <ListItem disablePadding component={Link} to="/usuarios" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <AppTooltip title="Usuarios" placement="right">
              <ListItemButton
                onClick={isMobile ? handleDrawerToggle : undefined}
                selected={location.pathname === '/usuarios'}
                sx={(theme) => ({
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.background.default,
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                  },
                })}
              >
                <ListItemIcon sx={{ color: location.pathname === '/usuarios' ? 'primary.main' : 'text.secondary' }}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
              </AppTooltip>
            </ListItem>
            <ListItem disablePadding component={Link} to="/clientes" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <AppTooltip title="Clientes" placement="right">
              <ListItemButton
                onClick={isMobile ? handleDrawerToggle : undefined}
                selected={location.pathname === '/clientes'}
                sx={(theme) => ({
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.background.default,
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                  },
                })}
              >
                <ListItemIcon sx={{ color: location.pathname === '/clientes' ? 'primary.main' : 'text.secondary' }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
              </AppTooltip>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          pt: 3,
          pb: 3,
          px: { xs: 2, sm: 3, md: '10%' },
          animation: 'fadeIn 0.5s ease-in-out',
        })}
      >
        <Toolbar /> {/* Necessary for content to be below app bar */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
