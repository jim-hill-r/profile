import * as React from "react"
import { Container } from '@mui/material';

export default function Body ({ children } : { children : any}) {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <main>
        {children}
      </main>
    </Container>
  )
}