import * as React from "react"
import { Grid, Divider, Typography } from "@mui/material"

export default function Experience({title,company,timeframe,children}) {
  return (
    <Grid container spacing={0} columns={24}>
      <Grid item xs={20}>
        <Typography component="h6" variant="h6" align="left" noWrap >
          {company} | {title}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography component="h6" variant="h6" align="right" noWrap >
          {timeframe}
        </Typography>
      </Grid>
      <Grid item xs={24}>
        <Typography component="p" variant="body1">
          {children}
        </Typography>
      </Grid>
    </Grid>
  )
}