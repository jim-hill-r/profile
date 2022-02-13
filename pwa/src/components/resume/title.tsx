import * as React from "react"
import { Grid, Typography } from "@mui/material"

export default function Title() {
  return (
    <Grid container alignItems="center" spacing={0} columns={24}>
      <Grid item xs={6}>
        <Typography component="h2" variant="h2" align="left" noWrap >
          Jim Hill
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="h4" variant="h4" align="center" noWrap >
          Engineer
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="h4" variant="h4" align="center" noWrap >
          Educator
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="h4" variant="h4" align="center" noWrap >
          Entrepreneur
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}