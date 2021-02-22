import { graphql } from 'gatsby'

// ! Used on: src/pages/blog.tsx

export const GetAllPostsFragment = graphql`
  fragment GetAllPosts on Query {
    allMarkdownRemark(filter: $filterBlog, sort: $sort) {
      nodes {
        ...PostData
      }
    }
  }
`
