import * as React from "react"
import { Grid, Typography } from "@mui/material"

export default function Tagline({text}) {
  return (
    <Typography fontWeight='bold' component="p" variant="body2" color="#ffffff" align="center" >
      {text}
    </Typography>
  )
}