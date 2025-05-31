import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// MWC imports - consider using individual component imports for production
import '@material/web/all.js';
// If specific components are preferred:
// import '@material/web/topappbar/top-app-bar.js';
// import '@material/web/iconbutton/icon-button.js';
// import '@material/web/icon/icon.js';
// import '@material/web/navigationdrawer/navigation-drawer.js';
// import '@material/web/list/list.js';
// import '@material/web/list/list-item.js';

// Custom components (ensure they don't rely on MUI)
import HeaderSearchBar from '../molecules/HeaderSearchBar';
// AppTooltip has been removed.

const drawerWidth = 240;
const collapsedDrawerWidth = 72;

const Layout = ({ children }) => {
  const location = useLocation();
  const [isOverlay, setIsOverlay] = useState(window.matchMedia('(max-width:768px)').matches);
  const [isCollapsed, setIsCollapsed] = useState(window.matchMedia('(max-width:1024px)').matches);
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsOverlay(window.matchMedia('(max-width:768px)').matches);
      setIsCollapsed(window.matchMedia('(max-width:1024px)').matches);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerToggle = () => {
    if (isOverlay && drawerRef.current) {
      drawerRef.current.opened = !drawerRef.current.opened;
      setMobileOpen(drawerRef.current.opened);
    }
  };

  const currentDrawerWidth = isCollapsed ? collapsedDrawerWidth : drawerWidth;

  // Styles (replace sx prop with inline styles or CSS classes)
  const layoutStyle = {
    display: 'flex',
    minHeight: '100vh', // Ensure layout takes full height
  };

  const topAppBarStyle = {
    '--md-sys-color-surface': 'var(--mwc-theme-surface)', // Use MWC theme variables
    '--md-sys-color-on-surface': 'var(--mwc-theme-on-surface)',
    borderBottom: '1px solid var(--mwc-theme-outline-variant)',
    minHeight: '56px',
    position: 'fixed', // Replicates position="fixed"
    width: '100%', // Ensure it spans the full width
    zIndex: 1100, // Typically higher than drawer
  };

  const mainContentStyle = {
    flexGrow: 1,
    backgroundColor: 'var(--mwc-theme-background)', // Use MWC theme variables
    paddingTop: '56px', // Account for fixed top-app-bar height
    paddingLeft: isOverlay ? '0px' : `${currentDrawerWidth}px`, // Adjust based on drawer
    paddingBottom: '32px',
    paddingRight: '16px',
    maxWidth: '1440px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    transition: 'padding-left 0.3s ease-in-out', // Smooth transition for drawer
  };

  const drawerStyle = {
    width: `${currentDrawerWidth}px`,
    flexShrink: 0,
    '--md-navigation-drawer-container-color': 'var(--mwc-theme-surface-container-low)',
    borderRight: '1px solid var(--mwc-theme-outline-variant)',
    // position: isOverlay ? 'fixed' : 'relative', // MWC drawer handles this
    // zIndex: isOverlay ? 1200 : 1000,
  };

  const navItems = [
    { text: 'Tiendas', icon: 'storefront', path: '/tiendas' },
    { text: 'Usuarios', icon: 'people', path: '/usuarios' },
    { text: 'Clientes', icon: 'person', path: '/clientes' },
  ];

  return (
    <div style={layoutStyle}>
      <md-top-app-bar style={topAppBarStyle}>
        <div slot="headline" style={{fontSize: '14px', fontWeight: '600'}}>ERP Dashboard</div>
        {isOverlay && (
          <md-icon-button slot="navigationIcon" onClick={handleDrawerToggle}>
            <md-icon>menu</md-icon>
          </md-icon-button>
        )}
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!isCollapsed && <HeaderSearchBar />} {/* Ensure HeaderSearchBar is MWC compatible */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} slot="actionItems">
          {isCollapsed && !isOverlay && (
            <md-icon-button>
              <md-icon>search</md-icon>
            </md-icon-button>
          )}
          <md-icon-button>
            <md-icon>mail_outline</md-icon>
          </md-icon-button>
          <md-icon-button>
            <md-icon>notifications_none</md-icon>
          </md-icon-button>
          {/* Basic Avatar replacement */}
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            backgroundColor: 'var(--mwc-theme-primary)', color: 'var(--mwc-theme-on-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginLeft: '8px'
          }}>A</div>
        </div>
      </md-top-app-bar>

      <md-navigation-drawer
        ref={drawerRef}
        type={isOverlay ? 'modal' : ''} // 'modal' for temporary, default (empty) for persistent like behavior
        opened={isOverlay ? mobileOpen : true}
        style={drawerStyle}
        onOpened={() => setMobileOpen(true)}
        onClosed={() => setMobileOpen(false)}
      >
        <div style={{height: '56px'}}></div> {/* Spacer for top-app-bar */}
        <md-list>
          {/* TODO: Consider adding MWC tooltips for navigation items if needed. */}
          {navItems.map((item) => (
            // AppTooltip removed for now. MWC tooltips can be added later if needed.
            // e.g. <md-list-item title={item.text}>
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }} onClick={isOverlay ? handleDrawerToggle : undefined}>
              <md-list-item
                type="button"
                headline={item.text}
                activated={location.pathname === item.path}
                style={isCollapsed && !isOverlay ? { '--md-list-item-label-text-font-size': '0px' } : {}}
              >
                <md-icon slot="start">{item.icon}</md-icon>
                {!isCollapsed && item.text}
              </md-list-item>
            </Link>
          ))}
        </md-list>
      </md-navigation-drawer>

      <main style={mainContentStyle}>
         {/* Toolbar spacer is handled by paddingTop in mainContentStyle */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
