import { Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: '#C22B2B', // Color de fondo por defecto
            '&:hover': {
              backgroundColor: '#a12222', // Color de fondo al pasar el mouse
            },
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#C22B2B',
      },
    },
  });