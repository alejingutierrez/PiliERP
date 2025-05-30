import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#5C6AC4',
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
      default: '#F4F6F8',
      paper: '#FFFFFF',
      header: '#FFFFFF',
      sidebar: '#FFFFFF',
    },
    text: {
      primary: '#1A1B1C',
      secondary: '#6D7175',
      disabled: '#B4B7BA',
      placeholder: '#979797',
    },
    action: {
      hover: '#4755A9',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.25rem',
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
    borderRadius: 10,
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
          borderRadius: 10,
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600,
          height: 36,
          padding: '0 16px',
          transition: 'background-color 150ms ease-out',
          '&:hover': {
            boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
            backgroundColor: '#4755A9',
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
          borderRadius: 10,
        },
        elevation1: {
          boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.07), 0px 1px 2px 0px rgba(0,0,0,0.03)', // Using new shadows[1]
          border: '1px solid #E0E0E0', // Keeping border for now
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
            backgroundColor: '#F4F6F8',
            borderLeft: '2px solid #5C6AC4',
          },
          '&:hover': {
            backgroundColor: '#F4F6F8',
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
            borderRadius: 10,
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
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0,0,0,0.07), 0px 1px 2px 0px rgba(0,0,0,0.03)',
    '0px 2px 5px 0px rgba(0,0,0,0.07), 0px 1px 4px 0px rgba(0,0,0,0.04)',
    '0px 3px 7px 0px rgba(0,0,0,0.07), 0px 2px 6px 0px rgba(0,0,0,0.05)',
    '0px 4px 9px 0px rgba(0,0,0,0.07), 0px 3px 8px 0px rgba(0,0,0,0.06)',
    '0px 5px 11px 0px rgba(0,0,0,0.07), 0px 4px 10px 0px rgba(0,0,0,0.07)',
    '0px 5px 12px 0px rgba(0,0,0,0.08), 0px 4px 11px 0px rgba(0,0,0,0.08)',
    '0px 6px 13px 0px rgba(0,0,0,0.08), 0px 5px 12px 0px rgba(0,0,0,0.09)',
    '0px 6px 14px 0px rgba(0,0,0,0.09), 0px 5px 13px 0px rgba(0,0,0,0.10)',
    '0px 7px 15px 0px rgba(0,0,0,0.09), 0px 6px 14px 0px rgba(0,0,0,0.11)',
    '0px 7px 16px 0px rgba(0,0,0,0.10), 0px 6px 15px 0px rgba(0,0,0,0.12)',
    '0px 8px 17px 0px rgba(0,0,0,0.10), 0px 7px 16px 0px rgba(0,0,0,0.13)',
    '0px 8px 18px 0px rgba(0,0,0,0.11), 0px 7px 17px 0px rgba(0,0,0,0.14)',
    '0px 9px 19px 0px rgba(0,0,0,0.11), 0px 8px 18px 0px rgba(0,0,0,0.15)',
    '0px 9px 20px 0px rgba(0,0,0,0.12), 0px 8px 19px 0px rgba(0,0,0,0.16)',
    '0px 10px 21px 0px rgba(0,0,0,0.12), 0px 9px 20px 0px rgba(0,0,0,0.17)',
    '0px 10px 22px 0px rgba(0,0,0,0.13), 0px 9px 21px 0px rgba(0,0,0,0.18)',
    '0px 11px 23px 0px rgba(0,0,0,0.13), 0px 10px 22px 0px rgba(0,0,0,0.19)',
    '0px 11px 24px 0px rgba(0,0,0,0.14), 0px 10px 23px 0px rgba(0,0,0,0.20)',
    '0px 12px 25px 0px rgba(0,0,0,0.14), 0px 11px 24px 0px rgba(0,0,0,0.21)',
    '0px 12px 26px 0px rgba(0,0,0,0.15), 0px 11px 25px 0px rgba(0,0,0,0.22)',
    '0px 13px 27px 0px rgba(0,0,0,0.15), 0px 12px 26px 0px rgba(0,0,0,0.23)',
    '0px 13px 28px 0px rgba(0,0,0,0.16), 0px 12px 27px 0px rgba(0,0,0,0.24)',
    '0px 14px 29px 0px rgba(0,0,0,0.16), 0px 13px 28px 0px rgba(0,0,0,0.25)',
    '0px 15px 30px 0px rgba(0,0,0,0.17), 0px 14px 29px 0px rgba(0,0,0,0.26)',
  ],
});

export default theme;
