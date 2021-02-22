import { graphql } from 'gatsby'

// ! Used on `src/pages/about`

export const GetAboutPageFragment = graphql`
  fragment GetAboutPage on Query {
    aboutpage: markdownRemark(fileAbsolutePath: { regex: "/pages/about/" }) {
      html
    }
  }
`
