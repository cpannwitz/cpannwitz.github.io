import { graphql } from 'gatsby'

// ! Used on `src/components/AboutMe`

export const GetAboutMeFragment = graphql`
  fragment GetAboutMe on Query {
    avatar: file(name: { eq: "avatar" }) {
      publicURL
      name
    }
    ...SiteMetadata
  }
`
