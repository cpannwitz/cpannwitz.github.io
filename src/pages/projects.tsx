import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { AllProjects } from '../typings'
import ProjectListItem from '../components/ProjectList/ProjectListItem'
import ProjectList from '../components/ProjectList/ProjectList'
import SEO from '../components/SEO/SEO'

type ProjectsPageProps = PageProps<{
  allMarkdownRemark: AllProjects
}>
const title = `Projects`
const ProjectsPage = ({ data, uri }: ProjectsPageProps) => {
  const projectListContent = data.allMarkdownRemark.nodes.map(props => <ProjectListItem key={props.id} {...props} />)
  return (
    <>
      <SEO pageData={{ slug: uri, title: title }} />
      <h1>{title}</h1>
      <ProjectList>{projectListContent}</ProjectList>
    </>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query GetAllProjectsQuery(
    $filterProjects: MarkdownRemarkFilterInput!
    $sort: MarkdownRemarkSortInput!
    $imgMaxWidth: Int!
    $imgQuality: Int!
    $dateFormat: String!
  ) {
    ...GetAllProjects
  }
`
