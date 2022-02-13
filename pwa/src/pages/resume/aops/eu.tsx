import * as React from "react"
import EuPortrait from "../../../components/print/eu-portrait"
import MainResume from "../../../components/resume/curated/main"
import { keywords } from "../../../components/resume/content"
import { graphql } from "gatsby"

export default function ResumeAopsEuPage ({data}) {
  return (
    <EuPortrait>
      <MainResume
          content={{
            summary: data.summary,
            experience: data.experience.nodes,
            keywords: keywords
          }} />
    </EuPortrait>
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