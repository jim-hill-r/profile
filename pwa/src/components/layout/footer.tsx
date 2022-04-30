import * as React from "react"
import { Container,Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Background = styled(Paper)(({ theme }) => ({
  backgroundColor: '#408000',
  height: '20vw'
}))

export default function Footer () {
  return (
      <Background elevation={8}>
        <Container maxWidth="xl">
        </Container>
      </Background>
  )
}