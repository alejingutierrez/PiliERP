import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008060',
    },
    secondary: {
      main: '#2C6ECB',
    },
    background: {
      default: '#F6F6F7',
      paper: '#FFFFFF',
      header: '#1C1C1C',
      sidebar: '#FFFFFF',
    },
    text: {
      primary: '#202223',
      secondary: '#4C4D4F',
      disabled: '#8C8D8F',
      placeholder: '#6D7175',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '-0.2px',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: {
      snappy: 'cubic-bezier(0.25,0.8,0.4,1)',
    },
    duration: {
      snappy: 150,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600,
          height: 28,
          padding: '0 12px',
          transition: 'background-color 150ms cubic-bezier(0.25,0.8,0.4,1)',
          '&:hover': {
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          },
        },
        outlined: {
          borderColor: '#8C9196',
          color: '#202223',
          '&:hover': {
            backgroundColor: '#F1F2F3',
          },
        },
        contained: {
          '&:disabled': {
            backgroundColor: '#C4C4C4',
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
          border: '1px solid #E0E0E0',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          height: 32,
          paddingLeft: 2,
          paddingRight: 2,
          '&.Mui-selected': {
            backgroundColor: '#F1F2F3',
            borderLeft: '2px solid #2C6ECB',
          },
          '&:hover': {
            backgroundColor: '#F1F2F3',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
          },
          '& input::placeholder': {
            color: '#6D7175',
            opacity: 1,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
        switchBase: {
          padding: 1,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: '2px solid #005F4B',
            outlineOffset: 0,
          },
        },
      },
    },
  },
  // Using default shadows for a clean, modern aesthetic
});

export default theme;
