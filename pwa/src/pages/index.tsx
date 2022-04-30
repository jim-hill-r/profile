import * as React from "react"
import { Link } from "gatsby"

import Landing from "../components/layout/landing"
import Splash from "../components/layout/splash"
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material"
import { styled } from "@mui/material/styles"

const SplashSpacer = styled(Box)(({ theme }) => ({
  height: '75vh'
}))

const Header = styled(Typography)(({ theme }) => ({
  paddingBottom: '10px'
}))

const Section = styled(Box)(({ theme }) => ({
  margin: '20px'
}))

const SectionSpacer = styled(Box)(({ theme }) => ({
  height: '5vh'
}))

const FullHeightCard = styled(Card)(({ theme }) => ({
  height: '100%'
}))

export default function IndexPage() {
  return (
    <>
      <Splash>
        <Typography component="h1" variant="h1" align="right" noWrap >
          Jim Hill
        </Typography>
        <SplashSpacer />
        <Typography component="h2" variant="h2" align="right" noWrap >
          Engineering a better world.
        </Typography>
      </Splash>
      <Landing>
        <SectionSpacer />
        <Section>
          <Header component="h4" variant="h4" align="center" noWrap >
            My Passion
          </Header>
          <Grid container spacing={5} columns={25}>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Responsible Computing
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    We are in the midst of a data revolution and much like the industrial revolution, software engineers have a responsibility for how it affects our society.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/health-and-wellness.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Health and Wellness
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Health is a fundamental human right and health data should help individuals not increase the profits of large corporations.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/environmental-impact.jpg"
                  alt="forest of trees from above"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Environmental Impact
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Climate change is the existential crisis of our generation.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/educational-reform.jpg"
                  alt="book shelves"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Education Reform
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Education is not personalized and technology can increase the availability and accessibility of learning to everyone.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/financial-freedom.jpg"
                  alt="money"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Financial Freedom
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Not everyone is an entrepreneur. Creators and builders should be unencumbered by money to enhance their impact on the world!
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
          </Grid>
        </Section>
        <SectionSpacer />
        <Section>
          <Header component="h4" variant="h4" align="center" noWrap >
            My Projects
          </Header>
          <Grid container spacing={5} columns={25}>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/luggage.jpg"
                  alt="luggage"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Luggage
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Data does not belong to corporations. It belongs to us. This project hopes to provide an open-source interface for making your data safe, secure and portable.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/gumby.svg"
                  alt="gumby"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Gumby
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Data-driven health and fitness for everyone.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/graphql.png"
                  alt="graphql logo"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    GraphQL.jl
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Julia is low energy consuming language. Let's start building our apis with energy consumption in mind!
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/blue-eel.jpg"
                  alt="two eels"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Blue Eel
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Literacy is the single most important outcome in a child's life. Let's not forget about those who struggle.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/fire.jpg"
                  alt="burning money"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    FIRE
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Financial planning tools for everyone so they can better understand the consequences of their decisions.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
          </Grid>
        </Section>
        <SectionSpacer />
        <Section>
          <Header component="h4" variant="h4" align="center" noWrap >
            My Technology
          </Header>
          <Grid container spacing={5} columns={25}>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Julia
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Energy efficient high-level language with type safety. The fundamental design will improve our ability to do science and improve our world. No language can survive without a strong ecosystem, so I hope to build that.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Rust
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Memory-safe, energy-efficient systems language. I need to spend more time learning Rust, but our dependence on C is really limiting our ability to be responsbile stewards of technology for security and safety.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    AWS
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Amazon is too big and that is a problem, but AWS is the most environmentally responsible choice.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    TypeScript
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    JavaScript is a disaster for our environment as well as the safety and the privacy of individuals. Unfortunetly, we have to work in the world of the internet, so TypeScript solves as many of those problems as possible.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Linux
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Transparent development of the foundations our society is important.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
          </Grid>
        </Section>
        <SectionSpacer />
        <Section>
          <Header component="h4" variant="h4" align="center" noWrap >
            My Hobbies
          </Header>
          <Grid container spacing={5} columns={25}>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    FIRST Robotics
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Targetted education for our youth that helps that become gracious professionals while also building their awareness of technology.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    NavAbility
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    I love reducing the burden of monotony for people. I want everyone to be unencumbered to pursue their passions. I work with NavAbility toward making the world more automated so everyone can pursue their passions.            </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Space Exploration
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    I have always been interested in space and I believe that becoming multi-planetary is important for humanity. I just don't know yet how I can help or if it is our most pressing concern.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Physics and Math
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    Physics and math have always intrigued me. I would love to just spend all day working on fundamental unsolved problems in this space, but I am neither smart enough or focused enough. Instead, I am working on empowered those who are with financial freedom!
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
            <Grid item xs={5}>
              <FullHeightCard>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/responsible-computing.jpg"
                  alt="computer chip"
                />
                <CardContent>
                  <Typography component="h5" variant="h5" align="center" >
                    Fitness
                  </Typography>
                  <Typography component="p" variant="body1" align="center" >
                    A sound body is key to a sound mind. Through running, swimming, and climbing I find my peace in a healthy life.
                  </Typography>
                </CardContent>
              </FullHeightCard>
            </Grid>
          </Grid>
        </Section>
        <SectionSpacer />
        <Section>
          <Typography component="h3" variant="h3" align="center" noWrap >
            Build a better world with me!
          </Typography>
          <Typography component="h5" variant="h5" align="center" noWrap >
            <Link to="/resume/web"> Resume </Link>
          </Typography>
          <Typography component="h5" variant="h5" align="center" noWrap >
            <Link to="/blog"> Blog </Link>
          </Typography>
          <Typography component="h5" variant="h5" align="center" noWrap >
            <Link to="/blog"> GitHub </Link>
          </Typography>
          <Typography component="h5" variant="h5" align="center" noWrap >
            jim.hill.r@gmail.com
          </Typography>
        </Section>
        <SectionSpacer />
        <Section>
          <Typography component="h3" variant="h3" align="center" noWrap >
            Let me know where I can improve!
          </Typography>
          <Typography component="p" variant="body1" align="center" >
            I am a humble engineer doing my best to make the world a better place. I strive for equity. I strive for accessibility. I strive for justice. I am not perfect nor an expert in every field including software. I am highly aware that as a upper middle-class white male living in the United States that I have blind spots, so please let me know when I have missed something! Thank you so much in helping me with my personal growth and ensuring my projects serve all of humanity and not just my bubble of awareness. For the technies out there, if you think there are better technologies that align with my passions, then please let me know!
          </Typography>
        </Section>
        <SectionSpacer />
      </Landing>
    </>
  )
}