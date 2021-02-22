import { graphql } from 'gatsby'

// ! Used on `src/components/Logo`

export const GetLogosMainFragment = graphql`
  fragment GetLogosMain on Query {
    light: file(extension: { eq: "svg" }, name: { eq: "logo-pnwtz-light" }) {
      publicURL
      name
    }
    dark: file(extension: { eq: "svg" }, name: { eq: "logo-pnwtz-dark" }) {
      publicURL
      name
    }
  }
`
