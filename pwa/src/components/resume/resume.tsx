import * as React from "react"
import { Grid, Paper, Box } from "@mui/material"
import { styled } from '@mui/material/styles';
import Headshot from "./headshot"
import Title from "./title"
import Experience from "./experience"
import Skills from "./skills"
import Education from "./education"
import Contact from "./contact"
import Tagline from "./tagline"
import { RightSection, LeftSection } from "./section";

const LeftColumn = styled(Grid)(({theme}) => ({
  backgroundColor: '#0064fa',
  padding: '10px'
}))

const RightColumn = styled(Grid)(({theme}) => ({
  padding: '10px',
  marginTop: '10px'
}))

const SimpleListBox = styled(Box)(({theme}) => ({
  padding: '0px',
  margin: '0px',
  ul: {
    padding: '0px 0px 0px 15px',
    margin: '0px',
    listStyleType: 'none'
  }
}))

function ExperienceList ({experiences}) {
  return (
    experiences.map((exp, idx) => {
      return (
        <Experience key={idx} title={exp.frontmatter.title} company={exp.frontmatter.company} timeframe={exp.frontmatter.timeframe} >
          <SimpleListBox
            dangerouslySetInnerHTML={{ __html: exp.html }}
          />
        </Experience>
      )}
    )
  )
}

export default function Resume ({tagline, summary, experience, keywords}) {
  return (
      <Grid container rowSpacing={2} spacing={0} columns={24}>
        <LeftColumn item xs={6}>
          <Headshot />
          <Contact />
          <Tagline text={tagline}/>
          <LeftSection title="Education">
            <Education
              degree="Masters of Science"
              major="Computer Science"
              school="Georgia Institute of Technology"
              gpa="3.9/4.0"
              year="2016" />
            <Education
              degree="Masters of Science"
              major="Mechanical Engineering"
              school="Northern Illinois University"
              gpa="3.9/4.0"
              year="2014" />
            <Education
              degree="Bachelors of Science"
              major="Mechanical Engineering"
              school="Northern Illinois University"
              gpa="3.9/4.0"
              year="2006" />
          </LeftSection>
          <LeftSection title="Skills">
            {keywords.map(set => <Skills keywords={set}/>)}
          </LeftSection>
        </LeftColumn>
        <RightColumn item xs={18}>
          <Title />
          <RightSection title="Summary"> 
            <div
              dangerouslySetInnerHTML={{ __html: summary.rawMarkdownBody }}
            />
          </RightSection>
          <RightSection title="Experience as an Engineer">
            <ExperienceList experiences={experience.filter(exp => exp.frontmatter.type == "Engineer")} />
          </RightSection>
          <RightSection title="Experience as an Educator"> 
            <ExperienceList experiences={experience.filter(exp => exp.frontmatter.type == "Educator")} />
          </RightSection>
          <RightSection title="Experience as an Entrepreneur">
            <ExperienceList experiences={experience.filter(exp => exp.frontmatter.type == "Entrepreneur")} />
          </RightSection>
        </RightColumn>
      </Grid>
  )
}