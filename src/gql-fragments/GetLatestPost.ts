import { graphql } from 'gatsby'

// ! Used on `src/pages/index.ts`

export const GetLatestPostFragment = graphql`
  fragment GetLatestPost on Query {
    latestPost: allMarkdownRemark(filter: $filterBlog, sort: $sort, limit: 1) {
      nodes {
        ...PostData
      }
    }
  }
`
