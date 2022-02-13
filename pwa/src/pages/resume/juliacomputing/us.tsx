import * as React from "react"
import UsPortrait from "../../../components/print/us-portrait"
import MainResume from "../../../components/resume/curated/main"
import { keywords } from "../../../components/resume/content"
import { graphql } from "gatsby"

export default function ResumeJuliaComputingUsPage ({data}) {
  return (
    <UsPortrait>
      <MainResume
          content={{
            summary: data.summary,
            experience: data.experience.nodes,
            keywords: keywords
          }} />
    </UsPortrait>
  )
}

export const pageQuery = graphql`
query {
  experience: allMarkdownRemark(
    filter: {frontmatter: {section: {eq: "Experience"}, edition: {regex: "/juliacomputing/"}}}
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
  summary: markdownRemark(frontmatter: {section: {eq: "Summary"}, edition: {regex: "/juliacomputing/"}}) {
    html
    rawMarkdownBody
  }
}
`