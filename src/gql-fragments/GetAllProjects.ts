import { graphql } from 'gatsby'

// ! Used on: src/pages/projects.tsx

export const GetAllProjectsFragment = graphql`
  fragment GetAllProjects on Query {
    allMarkdownRemark(filter: $filterProjects, sort: $sort) {
      nodes {
        ...ProjectData
      }
    }
  }
`
