import * as React from "react"
import { CssBaseline, Box, Paper } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from './theme'
import Body from './body'

const SplashImage = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundImage: 'url("/images/better-world.jpg")',
  backgroundSize: 'cover',
  paddingTop: '50px'
}))

export default function Splash ({ children } : { children : any}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={8}>
        <SplashImage>
          <Body>
            {children}
          </Body>
        </SplashImage>
      </Paper>
    </ThemeProvider>
  )
}