import { createTheme } from '@mui/material/styles';

const customThemeFragment = {
  palette: {
    primary: {
      contrastText: '#FFFFFF',
      dark: '#c95382',
      light: '#ffb6e3',
      main: '#ff84b1',
    },
    secondary: {
      contrastText: '#FFFFFF',
      dark: '#ab003c',
      light: '#f73378',
      main: '#f50057',
    },
    text: {
      disabled: '#a8adaf',
      primary: '#263238',
      secondary: '#1c2429',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
  },
};

export default createTheme(customThemeFragment);
