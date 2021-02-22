import { graphql } from 'gatsby'
export const GetPostFragment = graphql`
  fragment GetPost on MarkdownRemark {
    html
    ...PostData
  }
`
