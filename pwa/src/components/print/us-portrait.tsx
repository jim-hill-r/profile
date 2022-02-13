import * as React from "react"
import { CssBaseline, Box } from "@mui/material"
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from './theme'

const UsBox = styled(Box)(({theme}) => ({

}));

export default function UsPortrait({children}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}