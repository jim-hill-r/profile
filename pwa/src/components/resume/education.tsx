import * as React from "react"
import { Grid, Typography } from "@mui/material"

export default function Experience({degree,major,school,gpa,year}) {
  return (
    <Grid sx={{ my: 1 }} container spacing={0} columns={24}>
      <Grid item xs={16}>
        <Typography component="p" variant="body2" align="left" noWrap >
          {degree}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography component="p" variant="body2" align="right" noWrap >
          {gpa} GPA
        </Typography>
      </Grid>
      <Grid item xs={18}>
        <Typography component="p" variant="body2" align="left" noWrap >
          {major}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2" align="right" noWrap >
          {year}
        </Typography>
      </Grid>
      <Grid item xs={24}>
        <Typography component="p" variant="body2" align="left" noWrap >
          {school}
        </Typography>
      </Grid>
    </Grid>
  )
}