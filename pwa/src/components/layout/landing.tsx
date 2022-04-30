import * as React from "react"
import { CssBaseline, Divider } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import Header from './header'
import Body from './body'
import Footer from './footer'
import theme from './theme'

const MarginedDivider = styled(Divider)(({theme}) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3)
}));

export default function Layout ({ children } : { children : any}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Body>
        {children}
      </Body>
      <Footer />
    </ThemeProvider>
  )
}