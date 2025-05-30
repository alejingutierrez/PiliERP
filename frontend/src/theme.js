import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008060',
    },
    background: {
      default: '#F6F6F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#202223',
      secondary: '#4C4D4F',
      disabled: '#8C8D8F',
    },
    divider: '#E1E3E5',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600,
          height: 32,
          padding: '0 16px',
          transition: 'background-color 150ms ease-out',
          '&:hover': {
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          },
        },
        outlined: {
          borderColor: '#8C8D8F',
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
          boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#F0F1F2',
            borderLeft: '2px solid #008060',
          },
          '&:hover': {
            backgroundColor: '#F0F1F2',
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
