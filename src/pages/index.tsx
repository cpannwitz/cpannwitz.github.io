import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { ArrowRightCircle } from 'react-feather'

import { AllPosts, AllProjects } from '../typings'
import BlogList from '../components/BlogList/BlogList'
import BlogListItem from '../components/BlogList/BlogListItem'
import ProjectList from '../components/ProjectList/ProjectList'
import ProjectListItem from '../components/ProjectList/ProjectListItem'
import SEO from '../components/SEO/SEO'
import Box from '../components/Box/Box'

type IndexPageProps = PageProps<{
  latestPost: AllPosts
  latestProject: AllProjects
}>

const title = `Home`
const IndexPage = ({ data, uri }: IndexPageProps) => {
  // this blog list contains only one item, the latest post
  const blogListContent = data.latestPost.nodes.map(props => <BlogListItem key={props.id} {...props} />)
  const projectListContent = data.latestProject.nodes.map(props => <ProjectListItem key={props.id} {...props} />)
  return (
    <>
      <SEO pageData={{ slug: uri, title: title }} />
      <h1>{title}</h1>
      <Box p='1rem 0'>
        <h2>Latest Blogpost</h2>
        <BlogList>{blogListContent}</BlogList>
        <Link to='/blog'>
          All Blogposts <ArrowRightCircle size={18} />
        </Link>
      </Box>
      <Box p='1rem 0'>
        <h2>Latest Project</h2>
        <ProjectList>{projectListContent}</ProjectList>
        <Link to='/projects'>
          All Projects <ArrowRightCircle size={18} />
        </Link>
      </Box>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GetLatestQuery(
    $filterProjects: MarkdownRemarkFilterInput!
    $filterBlog: MarkdownRemarkFilterInput!
    $sort: MarkdownRemarkSortInput!
    $imgMaxWidth: Int!
    $imgQuality: Int!
    $dateFormat: String!
  ) {
    ...GetLatestPost
    ...GetLatestProject
  }
`
