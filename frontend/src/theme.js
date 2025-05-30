import { createTheme } from '@mui/material/styles';

// Defined color palette
const PRIMARY_COLOR = '#2E74D9'; // Shopify-esque Blue
const SECONDARY_COLOR = '#5FA8E6'; // Lighter Blue
const BACKGROUND_DEFAULT = '#F4F6F8'; // Light Gray
const BACKGROUND_PAPER = '#FFFFFF'; // White
const TEXT_PRIMARY = '#212B36'; // Near Black
const TEXT_SECONDARY = '#637381'; // Medium Gray
// const BORDER_COLOR = '#DFE3E8'; // Light Gray - will be used in component overrides if needed

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    background: {
      default: BACKGROUND_DEFAULT,
      paper: BACKGROUND_PAPER,
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Ensure fallback fonts
    h1: {
      fontSize: '2.5rem', // Example size
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    // Add other typography variants as needed
  },
  components: {
     // Example of global component overrides (can be expanded later)
     MuiButton: {
       styleOverrides: {
         root: {
           borderRadius: 8, // Slightly more rounded buttons, common in modern UIs
           textTransform: 'none', // Buttons with normal casing
         },
         containedPrimary: {
           // Example: if you want primary buttons to have white text
           // color: '#fff', 
         }
       }
     },
     MuiPaper: {
         styleOverrides: {
             root: {
                 borderRadius: 8, // Rounded corners for paper elements
             }
         }
     },
     MuiCard: {
         styleOverrides: {
             root: {
                 borderRadius: 8, // Rounded corners for cards
                 // elevation: 1, // Subtle shadow by default
             }
         }
     }
  }
});

export default theme;
