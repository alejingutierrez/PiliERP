import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  ListItemButton,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import AppTooltip from '../atoms/AppTooltip';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeaderSearchBar from '../molecules/HeaderSearchBar';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation();
  const isOverlay = useMediaQuery('(max-width:768px)');
  const isCollapsed = useMediaQuery('(max-width:1024px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentDrawerWidth = isCollapsed ? 72 : drawerWidth;

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
          backgroundColor: theme.palette.background.header,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          minHeight: 44,
        })}
        elevation={1}
      >
        <Toolbar sx={{ minHeight: 44, px: 2 }}>
          {isOverlay && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, fontSize: 14 }}>
            ERP Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {!isCollapsed && <HeaderSearchBar />}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isCollapsed && (
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <SearchIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <MailOutlineIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <NotificationsNoneIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Avatar sx={{ ml: 1, width: 28, height: 28 }}>A</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isOverlay ? 'temporary' : 'persistent'}
        anchor="left"
        open={isOverlay ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={(theme) => ({
          width: currentDrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.sidebar,
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
                onClick={isOverlay ? handleDrawerToggle : undefined}
                selected={location.pathname === '/tiendas'}
              >
              <ListItemIcon sx={{ color: location.pathname === '/tiendas' ? 'primary.main' : 'text.secondary' }}>
                  <StorefrontOutlinedIcon />
              </ListItemIcon>
                <ListItemText primary="Tiendas" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
              </AppTooltip>
            </ListItem>
            <ListItem disablePadding component={Link} to="/usuarios" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <AppTooltip title="Usuarios" placement="right">
              <ListItemButton
                onClick={isOverlay ? handleDrawerToggle : undefined}
                selected={location.pathname === '/usuarios'}
              >
                <ListItemIcon sx={{ color: location.pathname === '/usuarios' ? 'primary.main' : 'text.secondary' }}>
                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" primaryTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
              </ListItemButton>
              </AppTooltip>
            </ListItem>
            <ListItem disablePadding component={Link} to="/clientes" sx={{ textDecoration: 'none', color: 'inherit', mb: 1 }}>
              <AppTooltip title="Clientes" placement="right">
              <ListItemButton
                onClick={isOverlay ? handleDrawerToggle : undefined}
                selected={location.pathname === '/clientes'}
              >
                <ListItemIcon sx={{ color: location.pathname === '/clientes' ? 'primary.main' : 'text.secondary' }}>
                  <PersonOutlineIcon />
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
          pb: 8,
          px: 4,
          maxWidth: 1440,
          mx: 'auto',
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
