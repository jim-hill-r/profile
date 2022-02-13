import * as React from "react"
import Layout from "../../../components/layout/layout"
import MainResume from "../../../components/resume/curated/main"
import { Paper } from "@mui/material"
import { keywords } from "../../../components/resume/content"
import { graphql } from "gatsby"

export default function ResumeAopsWebPage ({data}) {
  return (
    <Layout>
      <Paper elevation={18}>
        <MainResume
          content={{
            summary: data.summary,
            experience: data.experience.nodes,
            keywords: keywords
          }} />
      </Paper>
    </Layout>
  )
}

export const pageQuery = graphql`
query {
  experience: allMarkdownRemark(
    filter: {frontmatter: {section: {eq: "Experience"}, edition: {regex: "/aops/"}}}
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    nodes {
      html
      frontmatter {
        type
        company
        title
        timeframe
      }
    }
  }
  summary: markdownRemark(frontmatter: {section: {eq: "Summary"}, edition: {regex: "/aops/"}}) {
    html
    rawMarkdownBody
  }
}
`