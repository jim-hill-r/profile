import * as React from "react"
import { Link } from 'gatsby'
import { Toolbar, Container, Grid, Typography } from '@mui/material';

export default function Header() {
  return (
    <Container maxWidth="xl">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <Typography component="h2" variant="h2" align="left" noWrap >
            Humble Crag
          </Typography>
        </Link>
        <Typography component="h5" variant="h5" align="right" noWrap >
          by Jim Hill
        </Typography>
      </Toolbar>
    </Container>
  )
}