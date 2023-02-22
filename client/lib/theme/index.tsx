import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { colors } from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: any;
  }

  interface ThemeOptions {
    colors: any;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export default createTheme({
  breakpoints,
  colors,

  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colors.brandPrimary,
    },
    secondary: {
      main: colors.brandSecondary,
    },
  },
});
