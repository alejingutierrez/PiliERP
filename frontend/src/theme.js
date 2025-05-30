import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#008060',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C6ECB',
    },
    success: {
      main: '#36A269',
    },
    warning: {
      main: '#EEC200',
    },
    error: {
      main: '#D82C0D',
    },
    background: {
      default: '#F6F6F7',
      paper: '#FFFFFF',
      header: '#111213',
      sidebar: '#FFFFFF',
    },
    text: {
      primary: '#202223',
      secondary: '#6D7175',
      disabled: '#B4B7BA',
      placeholder: '#979797',
    },
    action: {
      hover: '#006D57',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 6,
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
          borderRadius: 6,
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600,
          height: 36,
          padding: '0 16px',
          transition: 'background-color 150ms ease-out',
          '&:hover': {
            boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
            backgroundColor: '#006D57',
          },
        },
        outlined: {
          borderColor: '#E0E0E0',
          color: '#202223',
          '&:hover': {
            backgroundColor: '#F6F6F7',
          },
        },
        contained: {
          '&:disabled': {
            backgroundColor: '#B4B7BA',
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
            backgroundColor: '#F6F6F7',
            borderLeft: '2px solid #008060',
          },
          '&:hover': {
            backgroundColor: '#F6F6F7',
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
            height: 36,
            borderRadius: 6,
            backgroundColor: '#FFFFFF',
            '& fieldset': {
              borderColor: '#C4C4C4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#5C6AC4',
              borderWidth: 2,
            },
          },
          '& input::placeholder': {
            color: '#979797',
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
            outline: '2px solid #5C6AC4',
            outlineOffset: 0,
          },
        },
      },
    },
  },
  // Using default shadows for a clean, modern aesthetic
});

export default theme;
