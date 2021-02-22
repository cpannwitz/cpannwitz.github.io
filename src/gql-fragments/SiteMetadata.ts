import { graphql } from 'gatsby'

// ! Used on `src/pages/index.ts`

export const SiteMetadataFragment = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        email
        job
        keywords
        socialURLs {
          github
          twitter
          linkedin
          devrant
        }
        twitterHandle
        language
      }
    }
  }
`
