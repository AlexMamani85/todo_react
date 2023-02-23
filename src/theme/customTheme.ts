import { ThemeOptions, createTheme } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode:'dark',
        primary: {
            light: 'rgba(168,85,247,.8)',
            main: 'rgba(168,85,247,.65)',
            dark: 'rgba(168,85,247,.28)',
        },
        background: {
          paper: '#151515',
          default: 'rgba(10,0,0,0.96)',
        },
    },

});