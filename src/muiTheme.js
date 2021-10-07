import { createMuiTheme } from '@material-ui/core/styles';
import './BlueTecUIKit/css/fonts.css'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2f2f60',
      main: '#1f1f3d',
      dark: '#16162f',
    },
    secondary: {
      light: '#ffdd9e',
      main: '#fcba03',
      dark: '#ed9a00',
    },
  },
  typography: {
    // fontFamily: "Poller One",
    fontFamily: [
      'SilkaLight'
    ]
  },
  overrides: {
    MuiTypography: {
      body1: {
        lineHeight: '2',
      },
      h1: {
        fontSize: '36pt',
        lineHeight: '1.5',
      },
      h2: {
        fontSize: '28pt',
        lineHeight: '1.5',
        // lineHeight: "calc(28 * 1.5)",
        // lineHeight: "calc(28 * 1.5)",
      },
    },
    MuiButton: {
      root: {
        boxShadow: 'none',
        textTransform: 'none',
        // color: "white",
      },
      contained: {
        // color: "white",
        boxShadow: 'none',
      },
      sizeLarge: {
        fontSize: '20pt',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '10px 14px',
      },
    },
  },
});
