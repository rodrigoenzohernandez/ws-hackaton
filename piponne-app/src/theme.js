import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565C0', // Blue from Don Piponne logo
      light: '#5E92F3',
      dark: '#003C8F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E65100', // Orange/Red from "Dal 2004"
      light: '#FF6D00',
      dark: '#BF360C',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
