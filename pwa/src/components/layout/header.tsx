import * as React from "react"
import { Toolbar, Container, Grid, Typography } from '@mui/material';

export default function Header() {
  return (
    <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography component="h2" variant="h2" align="left" noWrap >
          Humble Crag
        </Typography>
        <Typography component="h5" variant="h5" align="right" noWrap >
          by Jim Hill
        </Typography>
      </Toolbar>
    </Container>
  )
}