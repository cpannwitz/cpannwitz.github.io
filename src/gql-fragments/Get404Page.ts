import { graphql } from 'gatsby'

// ! Used on `src/pages/404`

export const Get404PageFragment = graphql`
  fragment Get404Page on Query {
    page404: markdownRemark(fileAbsolutePath: { regex: "/pages/404/" }) {
      html
    }
  }
`
