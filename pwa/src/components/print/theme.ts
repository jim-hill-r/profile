import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "52px",
      color: '#0064fa',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: "36px",
      color: '#0064fa',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: "20px",
      color: '#0064fa',
    },
    h5: {
      fontSize: "18px",
      color: '#353E41',
    },
    h6: {
      fontSize: "14px",
      color: '#353E41',
    },
    subtitle1: {
      fontSize: "14px",
      color: '#353E41'
    },
    body1: {
      fontSize: "11px",
      color: '#353E41'
    },
    body2: {
      fontSize: "11px",
      color: '#ffffff'
    },
    fontFamily: [
      'Bitter','roboto','ariel'
    ].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "11px",
          backgroundColor: "#ffffff",
        }
      }
    }
  }
})
export default theme

// Colors: #0064fa,	#4fedff, #408000, #80ff00, #deff47