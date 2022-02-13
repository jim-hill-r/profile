import * as React from "react"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const UsBox = styled(Box)(({theme}) => ({

}));

export default function EuPortrait({children}) {
  return (
    <Box>
      {children}
    </Box>
  )
}