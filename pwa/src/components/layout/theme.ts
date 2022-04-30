import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      color: '#0064fa',
      fontWeight: 'bold',
    },
    h2: {
      color: '#0064fa',
      fontWeight: 'bold'
    },
    h3: {
      color: '#0064fa',
      fontWeight: 'bold'
    },
    h4: {
      color: '#0064fa',
    },
    h5: {
      color: '#0064fa',
    },
    h6: {
      color: '#353E41',
    },
    subtitle1: {
      color: '#353E41'
    },
    body1: {
      color: '#353E41'
    },
    body2: {
      color: '#ffffff'
    },
    fontFamily: [
      'Bitter','roboto','ariel'
    ].join(',')
  }
})
export default theme

// Colors: #0064fa,	#4fedff, #408000, #80ff00, #deff47