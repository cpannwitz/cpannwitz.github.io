import { graphql } from 'gatsby'
export const GetProject = graphql`
  fragment GetProject on MarkdownRemark {
    html
    ...ProjectData
  }
`
