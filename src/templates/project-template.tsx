import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { ProjectDataHTML } from '../typings'
import Project from '../components/Project/Project'
import SEO from '../components/SEO/SEO'
import Box from '../components/Box/Box'

interface ProjectPageData {
  markdownRemark: ProjectDataHTML
}

const ProjectTemplate = ({ data }: PageProps<ProjectPageData>) => {
  const { markdownRemark } = data
  return (
    <>
      <SEO pageData={markdownRemark.frontmatter} isBlogPost={true} />
      <Box m='2rem 0'>
        <Project data={markdownRemark} />
      </Box>
    </>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($id: String!, $imgMaxWidth: Int!, $imgQuality: Int!, $dateFormat: String!) {
    markdownRemark(id: { eq: $id }) {
      ...GetProject
    }
  }
`
