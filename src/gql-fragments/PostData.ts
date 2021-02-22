import { graphql } from 'gatsby'

export const PostDataFragment = graphql`
  fragment PostData on MarkdownRemark {
    id
    frontmatter {
      title
      slug
      date(formatString: $dateFormat)
      description
      keywords
      category
      thumbnail {
        extension
        publicURL
        name
        childImageSharp {
          # see config.js for maxWidth
          # sadly import and using the variable doesn't seem possible
          fluid(maxWidth: $imgMaxWidth, quality: $imgQuality) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
