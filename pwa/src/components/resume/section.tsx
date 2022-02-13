import * as React from "react"
import { Box, Divider, Typography } from "@mui/material"

export function RightSection({ children, title } : { children : any, title:String}) {
  return (
    <Box sx={{ my: 1 }}>
      <Typography fontWeight='bold' component="h5" variant="h5" align="left" noWrap >
        {title}
      </Typography>
      <Divider />
      <Typography component="p" variant="body1">
        {children}
      </Typography>
    </Box>
  )
}

export function LeftSection({ children, title } : { children : any, title:String}) {
  return (
    <Box sx={{ my: 1 }}>
      <Typography fontWeight='bold' component="h5" variant="h5" color="#ffffff" align="left" noWrap >
        {title}
      </Typography>
      <Divider sx={{background:"#ffffff"}} />
      <Typography component="p" variant="body2">
        {children}
      </Typography>
    </Box>
  )
}