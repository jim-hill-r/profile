import * as React from "react"
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import Body from './body'
import Footer from './footer'
import theme from './theme'

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