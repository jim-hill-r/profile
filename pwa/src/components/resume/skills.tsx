import * as React from "react"
import { Grid, Typography } from "@mui/material"

export type Keyword = {
  keyword:String,
  emphasis:Boolean
}

export default function Skills({keywords}:{keywords:Keyword[]}) {
  const words = keywords.map((kw) => {
    if(kw.emphasis) {
      return <Grid item><b>{kw.keyword}</b></Grid>
    } else {
      return <Grid item>{kw.keyword}</Grid>
    }
  })
  return (
    <Grid sx={{ my: 1 }} container columnSpacing={2} spacing={0} columns={24}>
      {words}
    </Grid>
  )
}