import { graphql } from 'gatsby'

// ! Used on `src/pages/404.tsx`

export const Get404LogoFragment = graphql`
  fragment Get404Logo on Query {
    logo404: file(extension: { eq: "svg" }, name: { eq: "logo-404" }) {
      publicURL
      name
    }
  }
`
