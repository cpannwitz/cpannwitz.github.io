import { graphql } from 'gatsby'

// ! Used on `src/pages/index.ts`

export const GetLatestProjectFragment = graphql`
  fragment GetLatestProject on Query {
    latestProject: allMarkdownRemark(filter: $filterProjects, sort: $sort, limit: 1) {
      nodes {
        ...ProjectData
      }
    }
  }
`
